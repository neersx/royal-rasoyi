import { Component, Inject, inject, Input, PLATFORM_ID } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodMenuService } from '../../services/food-menu.service';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

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
  isBrowser = true;

  constructor(
    private readonly metaService: Meta,
    private readonly titleService: Title,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly service: FoodMenuService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Check if the platform is browser
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.foodName = this.route.snapshot.paramMap.get('name'); 
    this.foodMenuList = this.service.getFoodMenu();
    this.foodDetails = this.foodMenuList.filter((f: any) => f.name === this.foodName)[0];
    if(!this.foodDetails) return;
    this.foodDetails.relatedItems = this.getRelatedFoods(this.foodDetails?.id);
    this.updateMetaTags(this.foodDetails);
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
        title: food.title,
        name: food.name,
        image: food.images[0],
        description: food.description,
      }));

    return relatedFoods;
  }

  updateMetaTags(product: any) {
    this.titleService.setTitle(product.title);

    let productPageUrl = '';

    // Generate the product page URL only in the browser
    if (this.isBrowser) {
      productPageUrl = `${window.location.origin}${this.router.url}`;
      this.metaService.updateTag({ property: 'og:url', content: productPageUrl });
      this.metaService.updateTag({ property: 'twitter:url', content: productPageUrl });
    }

    this.metaService.updateTag({ property: 'twitter:title', content: product.title });
    this.metaService.updateTag({ property: 'twitter:description', content: product.description });
    this.metaService.updateTag({ property: 'twitter:image', content: product.images[0].url });

    this.metaService.updateTag({ property: 'og:title', content: product.title });
    this.metaService.updateTag({ property: 'og:description', content: product.description });
    this.metaService.updateTag({ property: 'og:image', content: product.images[0].url });
    
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
