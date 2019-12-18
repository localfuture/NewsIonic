import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-view-science',
  templateUrl: './view-science.page.html',
  styleUrls: ['./view-science.page.scss'],
})
export class ViewSciencePage implements OnInit {
  id: any;
  allNews: any;
  news: any;

  constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      if (!param.has('viewScience')) {
        return this.router.navigate(['/science']);
      }

      this.id = param.get('viewScience');
    });

    this.newsService.science().subscribe(sci => {
      console.log(sci);
      this.allNews = sci;
      this.news = this.allNews.articles[this.id];
      console.log(this.news);
    });
  }

}
