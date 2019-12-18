import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-view-tech',
  templateUrl: './view-tech.page.html',
  styleUrls: ['./view-tech.page.scss'],
})
export class ViewTechPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService, private router: Router) { }

  id: any;
  allNews: any;
  news: any;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      if (!param.has('viewTech')) {
        return this.router.navigate(['/technology']);
      }

      this.id = param.get('viewTech');
    });

    this.newsService.technology().subscribe(tech => {
      console.log(tech);
      this.allNews = tech;
      this.news = this.allNews.articles[this.id];
      console.log(this.news);
    });
  }

}
