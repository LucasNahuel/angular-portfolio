import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { environment } from 'src/environments/environment';
import projects from '../../assets/data/projects.json';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = projects;

  addOnBlur = true;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  searchTags = new Array<any>();

  constructor() { }

  ngOnInit(): void {
  }

  getTheme(){
    return environment.theme;
  }

  remove(tag : any){
    const index = this.searchTags.indexOf(tag);

    if (index >= 0) {
      this.searchTags.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.searchTags.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }
}
