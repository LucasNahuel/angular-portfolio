import { ɵNoopAnimationStyleNormalizer } from '@angular/animations/browser';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import englishLayoutData from '../assets/data/englishLayoutData.json';
import spanishLayoutData from '../assets/data/spanishLayoutData.json';

import projectsEnglish from '../assets/data/projectsEnglish.json';
import projectsSpanish from '../assets/data/projectsSpanish.json';

@Injectable({
  providedIn: 'root'
})
export class PageContentService {

  contentChange = new EventEmitter<any>();

  projectsChangeLang = new EventEmitter<any>();

  constructor() { }

  getContent(){

    let content;
    let projects;

    if(environment.localization == "english"){
      content = englishLayoutData;
      projects = projectsEnglish;
    }else{
      content = spanishLayoutData;
      projects = projectsSpanish;
    }

    this.contentChange.emit(content);
    this.projectsChangeLang.emit(projects);
  }


}
