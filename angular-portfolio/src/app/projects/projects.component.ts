import { Component, OnInit } from '@angular/core';
import projects from '../../assets/data/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = projects;

  constructor() { }

  ngOnInit(): void {
    console.log(projects[0].title);
  }

}
