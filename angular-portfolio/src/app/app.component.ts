import { Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

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

    console.log

    

    return environment.layout;
  }




  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}


