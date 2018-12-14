import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URI } from '../apiconfig';
import { Project } from '../model/project.model';

@Injectable({
  providedIn: 'root'
})
export class MygodService {

  constructor(private http: HttpClient) { }

  getmygodId=(id:string) =>{
   return this.http.get<Project>(API_URI+ "/"+ id);
  }
}
