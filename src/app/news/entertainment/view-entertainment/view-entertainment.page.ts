import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../news.service';


@Component({
  selector: 'app-view-entertainment',
  templateUrl: './view-entertainment.page.html',
  styleUrls: ['./view-entertainment.page.scss'],
})
export class ViewEntertainmentPage implements OnInit {

  id: any;
  allNews: any;
  news: any;

  constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      if (!param.has('viewEnter')) {
        return this.router.navigate(['/entertainment']);
      }

      this.id = param.get('viewEnter');
    });

    this.newsService.entertainment().subscribe(enter => {
      console.log(enter);
      this.allNews = enter;
      this.news = this.allNews.articles[this.id];
      console.log(this.news);
    });
  }

}
