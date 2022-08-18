import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatChipInputEvent, MatChipList } from '@angular/material/chips';
import { environment } from 'src/environments/environment';
import projects from '../../assets/data/projects.json';
import {COMMA, ENTER, M} from '@angular/cdk/keycodes';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects : Array<any> = projects;

  addOnBlur = true;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  searchTags = new Array<any>();


  searchResult = new Array<any>();

  dropDownTags = new Array<any>();



  form : FormGroup = new FormGroup({
    inputValue: new FormControl(),
  });

  @ViewChild('tag') tag : ElementRef | undefined;

  constructor( private renderer: Renderer2 ) { }

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

    this.search();
  }

  add(tag: string): void {
    const value = (tag || '').trim();

    // Add our fruit
    if (value) {
      this.searchTags.push({name: value});
    }

    // Clear the input value
    this.form.controls['inputValue'].patchValue('');

    this.search();

    this.dropDownTags = [];




    this.renderer.setStyle(this.tag?.nativeElement.parentElement ? this.tag.nativeElement.parentElement : null , 'justify-content', 'flex-start');
  }


  search(){


    this.searchResult = [];
    this.projects = projects;

    var filteredArray = new Array<any>();

    for(var i = 0; i < this.searchTags.length; i++){

      this.projects = this.projects.filter(item => item.technologies.includes(this.searchTags[i].name) || item.tags.includes(this.searchTags[i].name)  )
      
    }

    

    
  }

  getInput(){
    return this.form.controls['inputValue'].value ? true : false;
  }

  loadDropDown(){

    this.dropDownTags = [];


    if(this.form.controls['inputValue'].value.length > 0){
      projects.forEach(item =>{
        item.technologies.forEach(item => {
          item.toLocaleLowerCase().startsWith(this.form.controls['inputValue'].value.toLocaleLowerCase()) ? this.dropDownTags.push(item) : null;
        });

        item.tags.forEach(item =>{
          item.toLocaleLowerCase().startsWith(this.form.controls['inputValue'].value.toLocaleLowerCase()) ? this.dropDownTags.push(item) : null;
        });
      });
    } 
    console.log(this.dropDownTags);

  }



}
