import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-rating',
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements AfterViewInit {
  private numberOfStars = 10;

  @ViewChild('ratingStars') ratingStars: ElementRef;
  @Input() rating: number;

  ngAfterViewInit(): void {
    if(typeof this.rating !== 'undefined') {
      this.updateRatingWith();
    }
  }

  private updateRatingWith(): void {
    const originalWidth = this.ratingStars.nativeElement.clientWidth;
    const calculatedWidth = Math.round(originalWidth * (this.rating / this.numberOfStars));
    this.ratingStars.nativeElement.style.width = `${calculatedWidth}px`;
  }
}
