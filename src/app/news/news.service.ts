import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  national() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc');
  }

  technology() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc');
  }

  business() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc');
  }

  entertainment() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc');
  }

  health() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc');
  }

  science() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc');
  }

  sports() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=74f96aa5d67e45a2aaf5b0363b0a1ffc');
  }
}
