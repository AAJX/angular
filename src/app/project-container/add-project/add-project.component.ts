import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { projectFake } from '../model/projectfake.model';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
form:FormGroup;
  constructor( 
    private activatedRoute:ActivatedRoute, 
    private router:Router,
    private fb:FormBuilder,
    private projectService:ProjectService
    ) { }

  ngOnInit() {
    let id =this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);

    this.form= this.fb.group({
      title:["",Validators.required],
      description:["",Validators.required],
      image:["",Validators.required]
    })
  }

  submitclick =() =>{
    
      const {title, description, image}=this.form.value;
      const new_id= Math.floor((Math.random() *1000000 ) +1 );

      const current = new projectFake(new_id, title, description, image);
   

    this.projectService.addProject(current).subscribe((result) =>{
      console.log(result)
    })
  }

}
