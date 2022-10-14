import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { TvShowListComponent } from './tv-show-list.component';
import { jsonSearchShow } from '../../fakes/search-show.fake';
import { Show } from '../../interfaces/show.interface';
import { TvShowService } from '../../services/tv-show.service';

describe('TvShowListComponent', () => {
  let component: TvShowListComponent;
  let fixture: ComponentFixture<TvShowListComponent>;
  const tvShowServiceSpy = jasmine.createSpyObj('TvShowService', ['searchShows']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowListComponent ],
      providers: [
        { provide: TvShowService, useValue: tvShowServiceSpy }
      ]
    })
      .overrideTemplate(TvShowListComponent, '');

    fixture = TestBed.createComponent(TvShowListComponent);
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
    })
  });

});
