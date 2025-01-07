import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FoodMenuComponent } from './pages/food-menu/food-menu.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [{ path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: FoodMenuComponent },
    { path: 'about-us', component: AboutComponent }
];

