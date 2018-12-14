import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProjectContainerComponent } from './project-container/project-container.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectListComponent } from './project-container/project-list/project-list.component';
import { ProjectItemComponent } from './project-container/project-list/project-item/project-item.component';
import { ProjectDetailComponent } from './project-container/project-detail/project-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProjectComponent } from './project-container/add-project/add-project.component';

import { RenderProjectComponent } from './project-container/render-project/render-project.component';
import { MygodComponent } from './project-container/mygod/mygod.component';
import { MatInputModule, MatButtonModule, MatCheckboxModule,MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProjectContainerComponent,
    FooterComponent,
    ProjectListComponent,
    ProjectItemComponent,
    ProjectDetailComponent,
    AddProjectComponent,
    RenderProjectComponent,
    MygodComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
