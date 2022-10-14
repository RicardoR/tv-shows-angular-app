import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { TvShowDetailsComponent } from './components/tv-show-details/tv-show-details.component';
import { HomeRoutes } from './home.routes';


const routes: Routes = [
  {
    path: HomeRoutes.showList.path,
    component: TvShowListComponent,
    title: HomeRoutes.showList.title
  },
  {
    path: `${HomeRoutes.showDetails.path}/:id`,
    component: TvShowDetailsComponent,
    title: HomeRoutes.showDetails.title
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
