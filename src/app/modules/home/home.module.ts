import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { TvShowDetailsComponent } from './components/tv-show-details/tv-show-details.component';
import { HomeRoutingModule } from './home-routing.module';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { RatingComponent } from '../shared/components/rating/rating.component';
import { TvShowSearchComponent } from './components/tv-show-search/tv-show-search.component';

@NgModule({
  declarations: [
    TvShowListComponent,
    TvShowDetailsComponent,
    TvShowSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HomeRoutingModule,

    // Standalone Components
    RatingComponent
  ]
})
export class HomeModule { }
