import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-render-project',
  templateUrl: './render-project.component.html',
  styleUrls: ['./render-project.component.css']
})
export class RenderProjectComponent implements OnInit {

  constructor(private getbyid:ProjectService,
     private router:Router,
     private activatedRoute:ActivatedRoute ) { }

  ngOnInit() {
    let id =this.activatedRoute.snapshot.paramMap.get('id');
    this.getbyid.getProjectbyId(id).subscribe((result)=>{
      console.log(result)
    })
  }

}
