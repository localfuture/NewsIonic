import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {

  sports: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.sports().subscribe(sportNew => {
      console.log(sportNew);
      this.sports = sportNew;
    }, error => {
      console.log(error);
    });
  }

}
