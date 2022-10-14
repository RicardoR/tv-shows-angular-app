import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { TvShowDetailsComponent } from './components/tv-show-details/tv-show-details.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    TvShowListComponent,
    TvShowDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
