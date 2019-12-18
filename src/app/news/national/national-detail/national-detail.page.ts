import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../news.service';
import { all } from 'q';

@Component({
  selector: 'app-national-detail',
  templateUrl: './national-detail.page.html',
  styleUrls: ['./national-detail.page.scss'],
})
export class NationalDetailPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private newsService: NewsService) { }

  allNews: any;
  news: any;
  id: any;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      if (!param.has('viewId')) {
        return this.router.navigate(['/national']);
      }

      this.id = param.get('viewId');
      console.log(this.id);

      this.newsService.national().subscribe(news => {
        this.allNews = news;
        this.news = this.allNews.articles[this.id];
        console.log(this.news);
      }, error => {
        console.log(error);
      });
    });
  }

}
