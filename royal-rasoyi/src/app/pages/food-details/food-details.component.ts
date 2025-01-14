import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, inject, PLATFORM_ID, REQUEST } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodMenuService } from '../../services/food-menu.service';
import { MetaService } from '../../core/services/meta-tags.service';

@Component({
  selector: 'app-food-details',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodDetailsComponent {
  foodName: string | null = '';
  foodMenuList = [];
  foodDetails : any;
  isBrowser = true;

  constructor(
    private readonly metaService: MetaService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly service: FoodMenuService,
    private readonly cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {
    // Check if the platform is browser
    this.isBrowser = isPlatformBrowser(platformId);

    const request = inject(REQUEST);
    console.log(request?.url);
  }

  ngOnInit(): void {
    this.foodName = this.route.snapshot.paramMap.get('name'); 
    this.foodMenuList = this.service.getFoodMenu();
    this.foodDetails = this.foodMenuList.filter((f: any) => f.name === this.foodName)[0];
    if(!this.foodDetails) return;
    this.foodDetails.relatedItems = this.getRelatedFoods(this.foodDetails?.id);
    this.updateMetaTags(this.foodDetails);
    this.cdr.detectChanges();
  }


   getRelatedFoods(foodId: number): Array<{ id: number; name: string; image: string; description: string }> {
    const currentFood: any = this.foodMenuList.find((food: any) => food.id === foodId);

    if (!currentFood) {
      return []; // Return an empty array if the food item is not found
    }

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

    let productPageUrl = '';

    // Generate the product page URL only in the browser
    if (this.isBrowser) {
      productPageUrl = `${window.location.origin}${this.router.url}`;
    }
    const metaDetails = {
      title: product.title,
      description: product.description,
      image: product.images[0].url,
      url: productPageUrl,
      type: 'website'
    };
    console.log(metaDetails);

    this.metaService.updateMetaTags(product.title, metaDetails);
    this.cdr.detectChanges();
  }

  goToFoodDetails(name: any) {
    this.router.navigate(['food-details', name]);
    this.cdr.detectChanges();
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
