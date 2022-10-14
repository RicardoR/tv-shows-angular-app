import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, map, Observable, Subject, takeUntil, tap } from 'rxjs';

import { TvShowService } from '../../services/tv-show.service';
import { SearchShowResponse, Show } from '../../interfaces/show.interface';
import { HomeRoutes } from '../../home.routes';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.scss']
})
export class TvShowListComponent implements OnInit, OnDestroy {

  showList$: Observable<Show[]>;
  searchForm = new FormControl();
  lastSearchData: string;
  private onDestroy$ = new Subject<void>();

  constructor(
    private tvShowService: TvShowService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setList();
    this.listenToSearchControl();
    this.lastSearchData = this.tvShowService.lastSearchParam;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  goToShow(show: Show): void {
    this.router.navigate([HomeRoutes.showDetails.path, show.id], {relativeTo: this.activatedRoute});
  }

  private listenToSearchControl(): void {
    this.searchForm.valueChanges
      .pipe(
        takeUntil<any>(this.onDestroy$),
        tap(data => this.setList(data)),
        debounceTime(500),
      ).subscribe()
  }

  private setList(searchQuery?: string): void {
    const search = searchQuery ?? this.tvShowService.lastSearchParam;
    this.showList$ = this.tvShowService.searchShows(search)
      .pipe(
        map((data: SearchShowResponse[]) => data.slice(0, 6)),
        map((data: SearchShowResponse[]) => data.flatMap(showResponse => showResponse.show))
      )
  }
}
