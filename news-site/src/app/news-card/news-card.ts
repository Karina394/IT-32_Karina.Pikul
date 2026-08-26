import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news-card',
  imports: [],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css'
})
export class NewsCard {
  @Input() title!: string;
  @Input() author!: string;

  @Output() readNews = new EventEmitter<void>();

  onRead(): void {
    this.readNews.emit();
  }
}