import { Injectable ,EventEmitter } from '@angular/core';

import { Project } from './project-container/model/project.model';



@Injectable({
  providedIn: 'root'
})
export class SelectedProjectService {
  selectedProject : EventEmitter<Project> = new EventEmitter<Project>();
  constructor() { }

  ProjectChanged =(Item:Project) => {
    this.selectedProject.emit(Item);
    console.log("c");
  }
}
