import { NONE_TYPE } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-custom-toolbar',
  templateUrl: './custom-toolbar.component.html',
  styleUrls: ['./custom-toolbar.component.css']
})
export class CustomToolbarComponent implements OnInit {


    @Input() layoutRef : any | undefined;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
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
      this.renderer.setStyle(this.layoutRef.parentElement.parentElement ? this.layoutRef.parentElement.parentElement : null , 'background', '#ebebeb');
      this.renderer.setStyle(this.layoutRef.parentElement.parentElement ? this.layoutRef.parentElement.parentElement : null , 'color', 'black');
    }else{
      environment.theme = 'dark';
      this.renderer.setStyle(this.layoutRef.parentElement.parentElement ? this.layoutRef.parentElement.parentElement : null , 'background', '#03060b');
      this.renderer.setStyle(this.layoutRef.parentElement.parentElement ? this.layoutRef.parentElement.parentElement : null , 'color', 'white');
    }

    
  }

  getLanguaje(){
    return environment.localization;
  }
  
  changeLanguaje(){
    environment.localization == 'english' ? environment.localization = 'spanish' : environment.localization = 'english';
  }
}
