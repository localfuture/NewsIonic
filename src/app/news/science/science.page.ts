import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-science',
  templateUrl: './science.page.html',
  styleUrls: ['./science.page.scss'],
})
export class SciencePage implements OnInit {

  science: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.science().subscribe(sciNews => {
      console.log(sciNews);
      this.science = sciNews;
    }, error => {
      console.log(error);
    });
  }

}
