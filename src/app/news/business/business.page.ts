import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {

  business: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.business().subscribe(busiNews => {
      console.log(busiNews);
      this.business = busiNews;
    }, error => {
      console.log(error);
    });
  }

}
