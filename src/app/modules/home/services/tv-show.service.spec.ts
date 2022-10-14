import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { TvShowService } from './tv-show.service';

describe('TvShowService', () => {
  let service: TvShowService;
  const httpSpy = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpSpy }
      ]
    });
    service = TestBed.inject(TvShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should perform a get call when user search shows', () => {
    const expectedPath = 'https://api.tvmaze.com/search/shows?q=Show';
    service.searchShows();
    expect(httpSpy.get).toHaveBeenCalledWith(expectedPath as any);
  });
});
