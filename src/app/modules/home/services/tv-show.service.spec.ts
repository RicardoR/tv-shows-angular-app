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

  describe('searchShows', () => {
    it('should perform a get call with a default param when its called without params', () => {
      const expectedPath = `https://api.tvmaze.com/search/shows?q=${service.defaultSearchParam}`;
      service.searchShows();
      expect(httpSpy.get).toHaveBeenCalledWith(expectedPath);
    });

    it('should perform a get call sending the params retrieved', () => {
      const param = 'Friends';
      const expectedPath = `https://api.tvmaze.com/search/shows?q=${param}`;
      service.searchShows(param);
      expect(httpSpy.get).toHaveBeenCalledWith(expectedPath);
    });
  });

  it('getShowById should perform the expected call', () => {
    const showId = 18;
    const expectedPath = `https://api.tvmaze.com/shows/${showId}`;
    service.getShowById(showId);
    expect(httpSpy.get).toHaveBeenCalledWith(expectedPath);
  })

});
