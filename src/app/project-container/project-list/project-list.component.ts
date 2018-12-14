import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URI } from '../apiconfig';
import {Project} from '../model/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects : Project[]=[];

  constructor(private http : HttpClient,) { }

  ngOnInit() {
    this.http.get<Project[]>(API_URI).subscribe((result)=>{
      this.projects=result;
    });

    
  }

}
