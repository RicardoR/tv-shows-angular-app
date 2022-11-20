import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, Subscription, throwIfEmpty, takeUntil } from 'rxjs';

import { TvShowService } from '../../services/tv-show.service';
import { SearchShowResponse, Show } from '../../interfaces/show.interface';
import { HomeRoutes } from '../../home.routes';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.scss'],
})
export class TvShowListComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();

  showList$: Observable<Show[]>;
  searchData = this.tvShowService.lastSearchParam;
  searchModelChanged: Subject<string> = new Subject<string>();

  constructor(
    private tvShowService: TvShowService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listenChanges();
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  goToShow(show: Show): void {
    this.router.navigate([HomeRoutes.showDetails.path, show.id], {
      relativeTo: this.activatedRoute,
    });
  }

  private listenChanges(): void {
    this.searchModelChanged
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.onDestroy$)
      )
      .subscribe(() => this.setList());
  }

  private setList(): void {
    this.showList$ = this.tvShowService.searchShows(this.searchData).pipe(
      map((data: SearchShowResponse[]) => data.slice(0, 6)),
      map((data: SearchShowResponse[]) =>
        data.flatMap((showResponse) => showResponse.show)
      )
    );
  }
}
