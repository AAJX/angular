import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project.model';
import { projectFake } from '../model/projectfake.model';
import { SelectedProjectService } from 'src/app/selected-project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  projectfake:Project = new projectFake(1, "ciao", "pluto", "https://www.powned.it/wp-content/uploads/2018/11/neeko-650x325.jpg"); 

  constructor(private projectChanged : SelectedProjectService){}

  ngOnInit() {
    this.projectChanged.selectedProject.subscribe((item)=>{
      this.projectfake = item;
    });
  }

}
