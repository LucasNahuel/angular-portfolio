import { NONE_TYPE } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import englishLayoutData from '../../assets/data/englishLayoutData.json';
import spanishLayoutData from '../../assets/data/spanishLayoutData.json';
import { LocalStorageService } from '../local-storage.service';
import { PageContentService } from '../page-content.service';

@Component({
  selector: 'app-custom-toolbar',
  templateUrl: './custom-toolbar.component.html',
  styleUrls: ['./custom-toolbar.component.css']
})
export class CustomToolbarComponent implements OnInit {


    @Input() layoutRef : any | undefined;

    content : any;
  constructor(private renderer: Renderer2, private localStorage : LocalStorageService, private contentService : PageContentService) {
    this.contentService.contentChange.subscribe(res => {
      this.content = res;
    });

    this.contentService.getContent();
   }

  ngOnInit(): void {
    this.switchBackgroundColor();
  }

  changeLayout(layout: string){
    
    let el = this.layoutRef;

    console.log({el});

    this.renderer.setStyle(this.layoutRef ? this.layoutRef : null , 'transition', 'all 0.1s');
    this.renderer.setStyle(this.layoutRef ? this.layoutRef : null , 'transform', 'scale(50%)');
    this.renderer.setStyle(this.layoutRef ? this.layoutRef : null , 'opacity', '0');

    this.delay(300).then( res => {
      this.renderer.setStyle(this.layoutRef ? this.layoutRef : null , 'transition', 'all 0.1s');
      this.renderer.setStyle(this.layoutRef ? this.layoutRef : null , 'transform', 'scale(1)');
      this.renderer.setStyle(this.layoutRef ? this.layoutRef : null , 'opacity', '1');
  
    });

    this.delay(300).then(
      res =>{
        environment.layout = layout;
      }
    )
    


    console.log(environment.layout);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  getTheme(){
    return environment.theme;
  }

  switchTheme(){

    if(environment.theme == 'dark'){
      environment.theme = 'light'
      this.switchBackgroundColor();
      this.localStorage.set("theme", "light");
    }else{
      environment.theme = 'dark';
      this.switchBackgroundColor();
      this.localStorage.set("theme", "dark");
    }

    
  }

  switchBackgroundColor(){
    if(environment.theme == "light"){
      this.renderer.setStyle(this.layoutRef.parentElement.parentElement ? this.layoutRef.parentElement.parentElement : null , 'background', '#ebebeb');
      this.renderer.setStyle(this.layoutRef.parentElement.parentElement ? this.layoutRef.parentElement.parentElement : null , 'color', 'black');
    }else{
      this.renderer.setStyle(this.layoutRef.parentElement.parentElement ? this.layoutRef.parentElement.parentElement : null , 'background', '#03060b');
      this.renderer.setStyle(this.layoutRef.parentElement.parentElement ? this.layoutRef.parentElement.parentElement : null , 'color', 'white');
    }
  }

  getLanguaje(){
    return environment.localization;
  }
  
  changeLanguaje(){
    environment.localization == 'english' ? environment.localization = 'spanish' : environment.localization = 'english';
    this.contentService.getContent();

  }
}
