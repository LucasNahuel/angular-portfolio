import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatChipInputEvent, MatChipList } from '@angular/material/chips';
import { environment } from 'src/environments/environment';
import {COMMA, ENTER, M} from '@angular/cdk/keycodes';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PageContentService } from '../page-content.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = new Array<any>();

  addOnBlur = true;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  searchTags = new Array<any>();


  searchResult = new Array<any>();

  dropDownTags = new Array<any>();



  form : FormGroup = new FormGroup({
    inputValue: new FormControl(),
  });

  @ViewChild('tag') tag : ElementRef | undefined;

  @ViewChild('formfield') formField : any | undefined;

  content : any;

  constructor( private renderer: Renderer2, private contentService: PageContentService ) {
    contentService.contentChange.subscribe(res => {
      this.content = res;
    });

    contentService.projectsChangeLang.subscribe(res => {
      this.projects = res;
    });
    contentService.getContent();

   }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    var el = this.formField._elementRef.nativeElement.getElementsByClassName('mat-form-field-flex');


    this.renderer.setStyle(el[0], 'border-radius', '4px');
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
    this.contentService.getContent();

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

    let projects = new Array();

    this.contentService.projectsChangeLang.subscribe(res => {
      projects = res;
    });

    this.contentService.getContent();


    if(this.form.controls['inputValue'].value.length > 0 && projects){
      
      projects.forEach(item  =>{
        item.technologies.forEach((item: string) => {
          item.toLocaleLowerCase().startsWith(this.form.controls['inputValue'].value.toLocaleLowerCase()) ? this.addTagDropdown(item) : null;
        });

        item.tags.forEach((item: string) =>{
          item.toLocaleLowerCase().startsWith(this.form.controls['inputValue'].value.toLocaleLowerCase()) ? this.addTagDropdown(item) : null;
        });
      });
    } 

  }

  addTagDropdown(tag: any){
    if(!this.dropDownTags.includes(tag)){
      this.dropDownTags.push(tag);
    }
  }

  formFieldFocus(){
    var el = this.formField._elementRef.nativeElement.getElementsByClassName('mat-form-field-flex');

    this.renderer.setStyle(el[0], 'border-width', '1px');
    this.renderer.setStyle(el[0], 'border-color', '#d6924c');

    
  }

  formFieldLeave(){
    
    var el = this.formField._elementRef.nativeElement.getElementsByClassName('mat-form-field-flex');

    if(this.getTheme() == 'dark'){

      this.renderer.setStyle(el[0], 'border-color', '#333');

    }else{
      this.renderer.setStyle(el[0], 'border-width', '0');
    }
  }

  addTag(event: any){
    const value = (event || '').trim();

    if (value) {
      this.searchTags.push({name: value});
    }
    
  }



}
