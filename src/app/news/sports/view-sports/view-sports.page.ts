import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../news.service';


@Component({
  selector: 'app-view-sports',
  templateUrl: './view-sports.page.html',
  styleUrls: ['./view-sports.page.scss'],
})
export class ViewSportsPage implements OnInit {
  id: any;
  allNews: any;
  news: any;

  constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      if (!param.has('viewSports')) {
        return this.router.navigate(['/sports']);
      }

      this.id = param.get('viewSports');
    });

    this.newsService.sports().subscribe(sci => {
      console.log(sci);
      this.allNews = sci;
      this.news = this.allNews.articles[this.id];
      console.log(this.news);
    });
  }

}
