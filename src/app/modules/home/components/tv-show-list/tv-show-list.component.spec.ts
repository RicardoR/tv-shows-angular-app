import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';

import { TvShowListComponent } from './tv-show-list.component';
import { jsonSearchShow } from '../../fakes/search-show.fake';
import { Show } from '../../interfaces/show.interface';
import { TvShowService } from '../../services/tv-show.service';

describe('TvShowListComponent', () => {
  let component: TvShowListComponent;
  let fixture: ComponentFixture<TvShowListComponent>;
  let activatedRoute: ActivatedRoute;
  const tvShowServiceSpy = jasmine.createSpyObj('TvShowService', ['searchShows']);
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const paramsValue = { params: of(null) };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowListComponent ],
      providers: [
        { provide: TvShowService, useValue: tvShowServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: paramsValue }
      ]
    })
      .overrideTemplate(TvShowListComponent, '');

    fixture = TestBed.createComponent(TvShowListComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    tvShowServiceSpy.searchShows.and.returnValue(new BehaviorSubject(jsonSearchShow));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the shows at on init', () => {
    expect(tvShowServiceSpy.searchShows).toHaveBeenCalled();
  });

  it('showList$ should contain a list with 6 shows', () => {
    component.showList$.subscribe((shows: Show[]) => {
      expect(shows.length).toBe(6);
    });
  });

  it('goToShow should redirect to the selected show', () => {
    const show = { id: 23 } as Show;
    component.goToShow(show);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['show', show.id], { relativeTo: activatedRoute })
  });
});
