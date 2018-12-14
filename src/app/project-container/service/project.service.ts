import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URI } from '../apiconfig';
import { Project } from '../model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http :HttpClient) { }

  getProjectbyId =(id : string)=>{
   return this.http.get(API_URI + "/" + id);
  }
}
