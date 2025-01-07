import { Component, OnInit } from '@angular/core';
import { FoodMenuService } from '../../services/food-menu.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-food-menu',
  imports: [CommonModule, NgFor],
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.scss'
})
export class FoodMenuComponent implements OnInit {
  foodMenu: any[] = [];
  categories: string[] = [];

  constructor(private readonly service: FoodMenuService) {}

  ngOnInit(): void {
    this.foodMenu = this.service.getFoodMenu();
    this.categories = [...new Set(this.foodMenu.map((food) => food.category))];
  }

  getFoodByCategory(category: string): any[] {
    return this.foodMenu.filter((food) => food.category === category);
  }
}
