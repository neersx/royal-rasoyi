import { inject } from '@angular/core';
import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';
import { FoodMenuService } from './services/food-menu.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'food-details/:name', // This page requires user-specific data, so we use SSR
    renderMode: RenderMode.Server,
    // fallback: PrerenderFallback.Client,
    
    // async getPrerenderParams() {
    //   const dataService = inject(FoodMenuService);
    //   const ids = await dataService.getFoodMenu().map((x: any) => x.name);
    //   return ids.map((name: string) => ({ name }));
    // },
  },
  {
    path: '**',
    renderMode: RenderMode.Client
  },
];
