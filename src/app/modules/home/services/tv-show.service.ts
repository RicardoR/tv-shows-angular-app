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

  readonly basePath = environment.tvmazeApiUrl;

  constructor(private http: HttpClient) { }

  searchShows(): Observable<SearchShowResponse[]> {
    const searchPath =
      `${this.basePath}/${HomeConstants.searchRoute}/${HomeConstants.showsRoute}${HomeConstants.queryParam}${HomeConstants.showSearchQueryParam}`;
    return this.http.get<SearchShowResponse[]>(searchPath);
  }

  getShowById(showId: number): Observable<Show> {
    const getShowPath = `${this.basePath}/${HomeConstants.showsRoute}/${showId}`;
    return this.http.get<Show>(getShowPath);
  }
}
