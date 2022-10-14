import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Observable, switchMap } from 'rxjs';

import { Show } from '../../interfaces/show.interface';
import { TvShowService } from '../../services/tv-show.service';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.scss']
})
export class TvShowDetailsComponent implements OnInit {
  showDetails$: Observable<Show>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private showService: TvShowService
  ) { }

  ngOnInit(): void {
    this.getShowDetails();
  }

  private getShowDetails(): void {
    this.showDetails$ = this.route.params
      .pipe(
        filter(params => (typeof params['id'] !== 'undefined')),
        map(params => params['id']),
        switchMap((showId: number) => this.showService.getShowById(showId)),
      )
  }

  goToList(): void {
    this.router.navigate(['/home']);
  }
}
