import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-custom-toolbar',
  templateUrl: './custom-toolbar.component.html',
  styleUrls: ['./custom-toolbar.component.css']
})
export class CustomToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeLayout(layout: string){
    environment.layout = layout;

    console.log(environment.layout);
  }

}
