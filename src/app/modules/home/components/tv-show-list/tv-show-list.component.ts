import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { SearchShowResponse, Show } from '../../interfaces/show.interface';
import { TvShowService } from '../../services/tv-show.service';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.scss']
})
export class TvShowListComponent implements OnInit {

  showList$: Observable<Show[]>;

  constructor(private tvShowService: TvShowService) { }

  ngOnInit(): void {
    this.showList$ = this.tvShowService.searchShows()
      .pipe(
        map((data: SearchShowResponse[]) => data.slice(0,6)),
        map((data: SearchShowResponse[]) => data.flatMap(showResponse => showResponse.show))
      )
  }

}
