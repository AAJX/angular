import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor( 
    private activatedRoute:ActivatedRoute, 
    private router:Router
    ) { }

  ngOnInit() {
    let id =this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
  }

}
