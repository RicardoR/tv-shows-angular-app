import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { TvShowDetailsComponent } from './components/tv-show-details/tv-show-details.component';
import { HomeRoutingModule } from './home-routing.module';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { RatingComponent } from '../shared/components/rating/rating.component';

@NgModule({
  declarations: [
    TvShowListComponent,
    TvShowDetailsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HomeRoutingModule,

    // Standalone Components
    RatingComponent
  ]
})
export class HomeModule { }
