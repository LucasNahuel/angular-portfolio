import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { ProjectDialogContentComponent } from '../project-dialog-content/project-dialog-content.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project: any;

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }


  openProjectDialog(){

    
    this.dialog.open(ProjectDialogContentComponent,{
      data: this.project,
      width: '100%',
      maxWidth: '800px',
    });
  }

  getTheme(){
    return environment.theme;
  }

}
