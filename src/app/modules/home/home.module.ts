import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowDetailsComponent } from './components/tv-show-details/tv-show-details.component';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';

@NgModule({
  declarations: [
    TvShowDetailsComponent,
    TvShowListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
