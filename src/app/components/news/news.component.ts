import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/news.service';
import {IPaginateResponse} from '../../interfaces/IPaginateResponse';
import {INews} from '../../interfaces/INews';
import {Constants} from '../../constants';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public newsResponse: IPaginateResponse<INews[]>;
  public BASE_URL = Constants.BASE_URL;

  ngOnInit(): void {
    this.getNews();
  }

  constructor(private _newsService: NewsService) {
  }

  getNews() {
    this._newsService.getNews()
      .subscribe(
        data => {
          this.newsResponse = data.Result;
        },
        err => console.error(err),
      );
  }

  getNewsByPageNumber(url: string, currentPage: number) {
    this._newsService.getNewsAtUrl(`${url}?page=${currentPage}`)
      .subscribe(
        data => {
          this.newsResponse = data.Result;
        },
        err => console.error(err),
      );
  }
}
