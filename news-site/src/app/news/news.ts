import { Component } from '@angular/core';
import { NewsCard } from '../news-card/news-card';

@Component({
  selector: 'app-news',
  imports: [NewsCard],
  templateUrl: './news.html',
  styleUrl: './news.css'
})
export class News {
  message = '';

  showNews(): void {
    this.message = 'Відкрито новину';
  }
}