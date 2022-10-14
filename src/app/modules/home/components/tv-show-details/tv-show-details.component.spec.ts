import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';

import { TvShowDetailsComponent } from './tv-show-details.component';
import { TvShowService } from '../../services/tv-show.service';
import { Show } from '../../interfaces/show.interface';
import { jsonSearchShow } from '../../fakes/search-show.fake';

describe('TvShowDetailsComponent', () => {
  let component: TvShowDetailsComponent;
  let fixture: ComponentFixture<TvShowDetailsComponent>;
  let activatedRoute: ActivatedRoute;
  const tvShowServiceSpy = jasmine.createSpyObj('TvShowService', ['getShowById']);
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const paramsValue = { params: of({ id: 23 }) };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowDetailsComponent ],
      providers: [
        { provide: TvShowService, useValue: tvShowServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: paramsValue }
      ]
    })
      .overrideTemplate(TvShowDetailsComponent, '');

    fixture = TestBed.createComponent(TvShowDetailsComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    tvShowServiceSpy.getShowById.and.returnValue(new BehaviorSubject(jsonSearchShow[0]));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call to back with the showId retrieved in params', () => {
    component.showDetails$.subscribe();
    expect(tvShowServiceSpy.getShowById).toHaveBeenCalledWith(23);
  });

  it('showDetails$ should contains an observable with the show data', () => {
    const expectedShow: Show = jsonSearchShow[0] as unknown as Show;
    component.showDetails$.subscribe((data) => expect(data).toEqual(expectedShow));
  });

  it('goToList should navigate to the list', () => {
    component.goToList();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/home']);
  });
});
