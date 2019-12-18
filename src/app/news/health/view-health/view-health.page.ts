import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-view-health',
  templateUrl: './view-health.page.html',
  styleUrls: ['./view-health.page.scss'],
})
export class ViewHealthPage implements OnInit {

  id: any;
  allNews: any;
  news: any;

  constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      if (!param.has('viewHealth')) {
        return this.router.navigate(['/health']);
      }

      this.id = param.get('viewHealth');
    });

    this.newsService.health().subscribe(health => {
      console.log(health);
      this.allNews = health;
      this.news = this.allNews.articles[this.id];
      console.log(this.news);
    });
  }

}
