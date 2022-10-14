import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { RatingComponent } from './rating.component';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

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
  }

  describe('AfterViewInit', function () {
    beforeEach(() => {
      createComponent();
    });

    it('should calculate the ratingStarts width for 1 star', () => {
      createComponent();
      component.rating = 1;
      component.ngAfterViewInit();
      expect(component.ratingStars.nativeElement.style.width).toBe('18px')
    });

    it('should calculate the ratingStarts width for 5 stars', () => {
      createComponent();
      component.rating = 5;
      component.ngAfterViewInit();
      expect(component.ratingStars.nativeElement.style.width).toBe('90px')
    });

    it('should calculate the ratingStarts width for 5.5 stars', () => {
      createComponent();
      component.rating = 5.5;
      component.ngAfterViewInit();
      expect(component.ratingStars.nativeElement.style.width).toBe('98px')
    });

    it('should calculate the ratingStarts width for 10 stars', () => {
      createComponent();
      component.rating = 10;
      component.ngAfterViewInit();
      expect(component.ratingStars.nativeElement.style.width).toBe('179px')
    });

    it('ratingStarts width should be empty for an empty value', () => {
      createComponent();
      component.ngAfterViewInit();
      expect(component.ratingStars.nativeElement.style.width).toBe('')
    });
  });

});
