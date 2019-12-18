import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-national',
  templateUrl: './national.page.html',
  styleUrls: ['./national.page.scss'],
})
export class NationalPage implements OnInit {

  nationals: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {

    this.newsService.national().subscribe(nationalNews => {
     console.log(nationalNews);
     this.nationals = nationalNews;
    }, error => {
      console.log(error);
    });
  }
}
