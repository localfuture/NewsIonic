import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.page.html',
  styleUrls: ['./entertainment.page.scss'],
})
export class EntertainmentPage implements OnInit {

  entertainment: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.entertainment().subscribe(enterNews => {
      console.log(enterNews);
      this.entertainment = enterNews;
    }, error => {
      console.log(error);
    });
  }

}
