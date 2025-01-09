import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FoodMenuComponent } from './pages/food-menu/food-menu.component';
import { AboutComponent } from './pages/about/about.component';
import { FoodDetailsComponent } from './pages/food-details/food-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: FoodMenuComponent, children: [] },
  { path: 'food-details/:name', component: FoodDetailsComponent, title: 'Food details and ingredients' },
  { path: 'about-us', component: AboutComponent },
];
