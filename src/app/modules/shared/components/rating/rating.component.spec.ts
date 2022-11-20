import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { RatingComponent } from './rating.component';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;
  let clientWidth: number;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingComponent, CommonModule],
    })
      .compileComponents();
  });

  function createComponent():void {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    clientWidth = component.ratingStars.nativeElement.clientWidth;
  }

  function getWidthFromRatingStars(): number {
    const width = component.ratingStars.nativeElement.style.width;
    const widthValue = width.split('px');
    return parseInt(widthValue[0]);
  }

  describe('AfterViewInit', function () {
    beforeEach(() => {
      createComponent();
    });

    it('should calculate the ratingStarts width for 1 star', () => {
      createComponent();
      component.rating = 1;
      component.ngAfterViewInit();
      const ratingsStartsWidth = getWidthFromRatingStars();
      expect(clientWidth).toBeGreaterThan(ratingsStartsWidth);
    });

    it('should calculate the ratingStarts width for 5 stars', () => {
      createComponent();
      component.rating = 5;
      component.ngAfterViewInit();
      const ratingsStartsWidth = getWidthFromRatingStars();
      expect(clientWidth).toBeGreaterThan(ratingsStartsWidth);
    });

    it('should calculate the ratingStarts width for 10 stars', () => {
      createComponent();
      component.rating = 10;
      component.ngAfterViewInit();
      const ratingsStartsWidth = getWidthFromRatingStars();
      expect(clientWidth).toBe(ratingsStartsWidth);
    });

    it('ratingStarts width should be empty for an empty value', () => {
      createComponent();
      component.ngAfterViewInit();
      expect(component.ratingStars.nativeElement.style.width).toBe('')
    });
  });

});
