import { Component, inject, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodMenuService } from '../../services/food-menu.service';

@Component({
  selector: 'app-food-details',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.scss',
})
export class FoodDetailsComponent {
  foodName: string | null = '';
  foodMenuList = [];
  foodDetails : any;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: FoodMenuService
  ) {}

  ngOnInit(): void {
    this.foodName = this.route.snapshot.paramMap.get('name'); 
    this.foodMenuList = this.service.getFoodMenu();
    this.foodDetails = this.foodMenuList.filter((f: any) => f.name === this.foodName)[0];
    this.foodDetails.relatedItems = this.getRelatedFoods(this.foodDetails.id)
  }

   /**
   * Get related foods based on the same category.
   * @param foodId - The ID of the current food item.
   * @returns An array of related food items.
   */
   getRelatedFoods(foodId: number): Array<{ id: number; name: string; image: string; description: string }> {
    // Find the category of the selected food item
    const currentFood: any = this.foodMenuList.find((food: any) => food.id === foodId);

    if (!currentFood) {
      return []; // Return an empty array if the food item is not found
    }

    // Filter the food items by the same category but exclude the current food item
    const relatedFoods = this.foodMenuList
      .filter((food: any) => food.category === currentFood.category && food.id !== foodId)
      .map((food: any) => ({
        id: food.id,
        name: food.name,
        image: food.images[0],
        description: food.description,
      }));

    return relatedFoods;
  }

  increaseQuantity(): any {
    console.log('increased');
  }

  decreaseQuantity(): any {
    console.log('increased');
  }

  addToCart(food: any): any {
    console.log('add to cart', food);
  }
}
