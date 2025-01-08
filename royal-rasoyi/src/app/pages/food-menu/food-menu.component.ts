import { Component, inject, OnInit } from '@angular/core';
import { FoodMenuService } from '../../services/food-menu.service';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-food-menu',
  imports: [CommonModule, NgFor],
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.scss',
  standalone: true,
})
export class FoodMenuComponent implements OnInit {
  foodMenu: any[] = [];
  categories: string[] = [];

    private readonly route = inject(ActivatedRoute);
     private readonly router = inject(Router);
  
  constructor(private readonly service: FoodMenuService) {}

  ngOnInit(): void {
    this.foodMenu = this.service.getFoodMenu();
    this.categories = [...new Set(this.foodMenu.map((food) => food.category))];
  }

  getFoodByCategory(category: string): any[] {
    return this.foodMenu.filter((food) => food.category === category);
  }

  goToFoodDetails(name: any) {
    this.router.navigate(['food-details', name]);
    
  }
}
