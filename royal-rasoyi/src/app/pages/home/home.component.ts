import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MetaService } from '../../core/services/meta-tags.service';
import { CommonModule, NgFor } from '@angular/common';
import { FoodMenuService } from '../../services/food-menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [MetaService],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit  {
  foodMenu: any[] = [];
  categories: string[] = [];


  constructor( private readonly metaService: MetaService, private readonly router : Router, private readonly service: FoodMenuService, private readonly cdr: ChangeDetectorRef) {
    const metaDetails = {
      title: ' Royal रसोई  | The Taste you deserve',
      description: 'At Royal रसोई, every dish is crafted with the love and care of a home kitchen. Whether it’s a casual lunch or a family gathering, enjoy the flavors of homemade goodness without stepping into the kitchen.',
      image: 'https://royalrasoyi.com/assets/images/thumbnail.jpg',
      url: 'https://royalrasoyi.com/',
      type: 'website'
    };
  
     this.metaService.updateMetaTags('Home', metaDetails);
  }

ngOnInit(): void {
  // Your code here
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
