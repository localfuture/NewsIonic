import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.page.html',
  styleUrls: ['./technology.page.scss'],
})
export class TechnologyPage implements OnInit {

  technologies: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.technology().subscribe(techNews => {
      console.log(techNews);
      this.technologies = techNews;
    }, error => {
      console.log(error);
    });
  }

}
