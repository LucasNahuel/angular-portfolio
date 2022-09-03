import { Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-portfolio';

 
  @ViewChild('layoutRef') layoutRef : ElementRef | undefined;

  aboutmeStyle: any;

  actualLayout = environment.layout;
  
  checkLayout(){

    return environment.layout;
  }




  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  constructor(private localStorage: LocalStorageService){

  }

  ngOnInit(): void{
    let theme : any = 'dark';

    if (this.localStorage.get("theme")){
      theme = this.localStorage.get("theme");
    }

    environment.theme = theme;

  }




  

}


