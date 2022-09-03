import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PageContentService } from '../page-content.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  birthDate = new Date(1996, 10, 6);

  content : any;
  constructor(private contentService : PageContentService) {
    contentService.contentChange.subscribe(res => {
      this.content = res;
    });
    this.contentService.getContent();
  }

  ngOnInit(): void {
  }

  getTheme(){
    return environment.theme;
  }

  getAge(){
    return Math.floor(((Date.now() - this.birthDate.getTime())/(1000 * 3600 * 24))/365.25);
  }

}
