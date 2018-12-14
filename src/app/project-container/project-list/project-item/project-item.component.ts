import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../model/project.model';
import { SelectedProjectService } from 'src/app/selected-project.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
@Input() project :Project;
  constructor(private selected:SelectedProjectService, private router:Router) { }

  ngOnInit() {

    
  }
   clicked=() =>{
     //this.selected.ProjectChanged(this.project);

     let id=this.project.id;

     
       this.router.navigate(['/mygod' ,id])
      
    ;

    
   }
}
