import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HomeConstants } from '../home.constants';
import { environment } from '../../../../environments/environment';
import { SearchShowResponse, Show } from '../interfaces/show.interface';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  readonly initSearchValue = 'Show';
  readonly basePath = environment.tvmazeApiUrl;

  private _lastSearchParam: string;

  constructor(private http: HttpClient) { }

  searchShows(param: string = this.initSearchValue): Observable<SearchShowResponse[]> {
    this._lastSearchParam = param;
    const searchPath =
      `${this.basePath}/${HomeConstants.searchRoute}/${HomeConstants.showsRoute}${HomeConstants.queryParam}${HomeConstants.showSearchQueryParam}${param}`;
    return this.http.get<SearchShowResponse[]>(searchPath);
  }

  getShowById(showId: number): Observable<Show> {
    const getShowPath = `${this.basePath}/${HomeConstants.showsRoute}/${showId}`;
    return this.http.get<Show>(getShowPath);
  }


  get lastSearchParam(): string {
    return this._lastSearchParam;
  }
}
