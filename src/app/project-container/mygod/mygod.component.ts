import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MygodService } from './mygod.service';
import { Project } from '../model/project.model';

@Component({
  selector: 'app-mygod',
  templateUrl: './mygod.component.html',
  styleUrls: ['./mygod.component.css']
})
export class MygodComponent implements OnInit {
  mygod:Project;
  constructor(private router:Router, private activatedRouter:ActivatedRoute , private getmygod:MygodService) { }

  ngOnInit() {
    let id=this.activatedRouter.snapshot.paramMap.get("id");

    this.getmygod.getmygodId(id).subscribe((result)=>{
  this.mygod=result;
    });
  }

}
