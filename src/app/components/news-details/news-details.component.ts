import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {NewsService} from '../../services/news.service';
import {Subscription} from 'rxjs/Subscription';
import {Constants} from '../../constants';
import {INews} from '../../interfaces/INews';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit, OnDestroy {

  public news: INews;
  public newsId;
  public BASE_URL = Constants.BASE_URL;
  private sub: Subscription;

  constructor(private _newsService: NewsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      this.newsId = params['id'];
      this.getNews(this.newsId);
    });
  }

  getNews(id: number) {
    this._newsService.getNewsById(id)
      .subscribe(
        data => {
          this.news = data.Result;
        },
        err => console.error(err),
      );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
