import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectContainerComponent } from './project-container/project-container.component';
import { AddProjectComponent } from './project-container/add-project/add-project.component';
import { RenderProjectComponent } from './project-container/render-project/render-project.component';
import { MygodComponent } from './project-container/mygod/mygod.component';

const routes: Routes = [
  {path: "", redirectTo: "/project", pathMatch: 'full'},
  {path: "project", component: ProjectContainerComponent},
  {path:"addproject/:id", component: AddProjectComponent},
  {path:"renderproject/:id", component: RenderProjectComponent},
  {path:"mygod/:id", component: MygodComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
