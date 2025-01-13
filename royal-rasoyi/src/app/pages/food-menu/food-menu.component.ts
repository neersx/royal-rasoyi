import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FoodMenuService } from '../../services/food-menu.service';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-food-menu',
  imports: [CommonModule, NgFor],
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodMenuComponent implements OnInit {
  foodMenu: any[] = [];
  categories: string[] = [];

    private readonly route = inject(ActivatedRoute);
     private readonly router = inject(Router);
  
  constructor(private readonly service: FoodMenuService, private readonly titleService: Title, private readonly cdr: ChangeDetectorRef) {
    this.titleService.setTitle(' Our Menu of Royal dishes with royal taste | Royal रसोई ');
  }

  ngOnInit(): void {
    this.foodMenu = this.service.getFoodMenu();
    this.categories = [...new Set(this.foodMenu.map((food) => food.category))];
    this.cdr.detectChanges();
  }

  getFoodByCategory(category: string): any[] {
    return this.foodMenu.filter((food) => food.category === category);
  }

  goToFoodDetails(name: any) {
    this.router.navigate(['food-details', name]);
    this.cdr.detectChanges();
  }
}
