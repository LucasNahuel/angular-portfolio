import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-dialog-content',
  templateUrl: './project-dialog-content.component.html',
  styleUrls: ['./project-dialog-content.component.css']
})
export class ProjectDialogContentComponent implements OnInit {

  showImageIndex : number = 0;

  transition : any = null;


  zoomed: boolean = false;

  zoom : any = null;

  scroll : any = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  async showImage(displacement: number){

    this.transition = {'transform': 'scale(0.5)', 'opacity': 0 };

    await this.delay(200);

    this.showImageIndex = this.showImageIndex + displacement;

    this.transition = {'transform': 'scale(1)', 'opacity': 1 };
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  toggleZoom(){
    if(this.zoomed == false){
      this.zoomed = true;
      this.zoom = {'max-width': 'none', 'max-height':'none'};
      this.scroll = { 'overflow': 'scroll'};
    }else{
      this.zoomed = false;
      this.zoom = {'max-width': '100%', 'max-height': '500px', 'overflow': 'none'};
      this.scroll = { 'overflow': 'auto'};
    }
  }

  getTheme(){
    return environment.theme;
  }

  


}
