import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-view-business',
  templateUrl: './view-business.page.html',
  styleUrls: ['./view-business.page.scss'],
})
export class ViewBusinessPage implements OnInit {

  id: any;
  allNews: any;
  news: any;

  constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      if (!param.has('viewBusi')) {
        return this.router.navigate(['/business']);
      }

      this.id = param.get('viewBusi');
    });

    this.newsService.business().subscribe(busi => {
      console.log(busi);
      this.allNews = busi;
      this.news = this.allNews.articles[this.id];
      console.log(this.news);
    });
  }

}
