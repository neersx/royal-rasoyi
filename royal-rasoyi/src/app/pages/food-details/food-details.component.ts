import { Component, inject, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FoodMenuService } from '../../services/food-menu.service';

@Component({
  selector: 'app-food-details',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.scss',
})
export class FoodDetailsComponent {
  foodName: string | null = '';
  foodDetails = {};

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: FoodMenuService
  ) {}

  ngOnInit(): void {
    this.foodName = this.route.snapshot.paramMap.get('name'); 
    this.foodDetails = this.service
      .getFoodMenu()
      .filter((f: any) => f.name === this.foodName);
  }
}
