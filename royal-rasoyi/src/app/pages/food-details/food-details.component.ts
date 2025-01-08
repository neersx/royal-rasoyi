import { Component, inject, Input } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-food-details',
  imports: [   CommonModule],
  standalone: true,
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.scss'
})
export class FoodDetailsComponent {

  foodName: string | null = '';

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.foodName = this.route.snapshot.paramMap.get('name');
  }

}
