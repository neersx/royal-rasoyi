/**
 * FoodMenuService in Angular 19
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodMenuService {
  constructor() {}

  getFoodMenu(): any {
    return [
      {
        id: 1,
        name: 'maharaja-laddoo',
        title: 'Maharaja Laddoo',
        bestSeason: 'Winter',
        isNonVeg: false,
        ingredients: [
          {
            id: 1,
            name: 'Gram Flour',
            healthBenefits: 'Rich in protein and fiber',
          },
          {
            id: 2,
            name: 'Ghee',
            healthBenefits: 'Boosts energy and aids digestion',
          },
          { id: 3, name: 'Sugar', healthBenefits: 'Provides quick energy' },
        ],
        region: 'North India',
        images: [
          {
            id: 1,
            name: 'Maharaja Laddoo Image',
            url: 'https://royalrasoyi.com/assets/images/home-beef/about/item1.jpg',
          },
        ],
        description: 'A rich and traditional Indian sweet.',
        category: 'sweets',
        lifeInDays: 15,
        flavourType: 'non spicy',
        createdOn: new Date('2025-01-01'),
        isDeleted: false,
        lastUpdatedOn: new Date('2025-01-05'),
        size: 'SMALL',
        price: '800',
        quantity: 10,
        measurement: 'per Kg',
        addons: ['Extra Ghee', 'Dry Fruits'],
        discount: '10%',
        days: 'Monday',
        type: 'Dish',
        availableToday: 'true',
        ratings: 4.8,
        foodItems: [
          {
            id: 1,
            name: 'Laddoo Piece',
            quantity: null,
            isRequired : true,
            availableToday: 'true',
            weight: '1 Kg',
            description: 'Soft and rich laddoo pieces.',
          },
        ],
        comments: [
          {
            id: 1,
            comment: 'Absolutely delicious!',
            userId: 101,
            userName: 'John Doe',
            userImage: 'https://example.com/john.jpg',
          },
          {
            id: 2,
            comment: 'Perfect for festivals.',
            userId: 102,
            userName: 'Jane Smith',
            userImage: 'https://example.com/jane.jpg',
          },
        ],
      },
      {
        id: 2,
        name: 'chole-poori',
        title: 'Spicy Chole Poori',
        bestSeason: 'All',
        isNonVeg: false,
        ingredients: [
          {
            id: 1,
            name: 'Chickpeas',
            healthBenefits: 'High in protein and fiber',
          },
          { id: 2, name: 'Spices', healthBenefits: 'Boosts metabolism' },
          {
            id: 3,
            name: 'Wheat Flour',
            healthBenefits: 'Good source of carbs',
          },
        ],
        region: 'North India',
        images: [
          {
            id: 1,
            name: 'Chole Poori Image',
            url: 'https://royalrasoyi.com/assets/images/home-beef/about/item2.jpeg',
          },
        ],
        description: 'A popular North Indian breakfast.',
        category: 'breakfast',
        lifeInDays: 1,
        flavourType: 'spicy',
        createdOn: new Date('2025-01-02'),
        isDeleted: false,
        lastUpdatedOn: new Date('2025-01-05'),
        size: 'Large',
        price: '120',
        quantity: 1,
        measurement: 'Plate',
        addons: ['Pickle', 'Curd'],
        discount: '5%',
        days: 'Tuesday',
        type: 'Dish',
        availableToday: true,
        ratings: 4.5,
        foodItems: [
          {
            id: 1,
            name: 'Chole',
            quantity: null,
            isRequired : true,
            availableToday: 'true',
            weight: '300g',
            description: 'Spicy and flavorful chickpeas.',
          },
          {
            id: 2,
            name: 'Poori',
            quantity: 5,
            isRequired : true,
            availableToday: 'true',
            weight: null,
            description: 'Crispy and golden Oats Poori.',
          },
        ],
        comments: [
          {
            id: 1,
            comment: 'Great taste and fresh!',
            userId: 103,
            userName: 'Alice Brown',
            userImage: 'https://example.com/alice.jpg',
          },
          {
            id: 2,
            comment: 'Loved the spiciness.',
            userId: 104,
            userName: 'Bob Green',
            userImage: 'https://example.com/bob.jpg',
          },
        ],
      },
      {
        id: 3,
        name: 'royal-thali',
        title: 'Deluxe Royal Thali',
        bestSeason: 'All',
        isNonVeg: false,
        ingredients: [
          { id: 1, name: 'Multiple Dishes', healthBenefits: 'Balanced meal' },
          { id: 2, name: 'Roti', healthBenefits: 'Good source of carbs' },
          { id: 3, name: 'Rice', healthBenefits: 'Provides energy' },
        ],
        region: 'Pan India',
        images: [
          {
            id: 1,
            name: 'Royal Thali Image',
            url: 'https://royalrasoyi.com/assets/images/menu/royal-thali.png',
          },
        ],
        description: 'A grand and wholesome meal.',
        category: 'thali',
        lifeInDays: 1,
        flavourType: 'non spicy',
        createdOn: new Date('2025-01-03'),
        isDeleted: false,
        lastUpdatedOn: new Date('2025-01-05'),
        type: 'Dish',
        availableToday: true,
        size: 'MEDIUM',
        price: '350',
        quantity: 1,
        measurement: 'Plate',
        addons: ['Extra Curry', 'Dessert'],
        discount: '15%',
        days: 'Wednesday',
        ratings: 4.9,
        foodItems: [
          {
            id: 1,
            name: 'Paneer Curry',
            quantity: null,
            weight: '200g',
            isRequired : true,
            availableToday: true,
            description: 'Rich and creamy paneer curry.',
          },
          {
            id: 2,
            name: 'Arahar Dal Tadka',
            quantity: null,
            isRequired : true,
            availableToday: true,
            weight: '150g',
            description: 'Light and flavorful arahar/channa daal',
          },
          {
            id: 3,
            name: 'Rice',
            quantity: null,
            isRequired : false,
            availableToday: true,
            weight: '200g',
            description: 'Steamed basmati rice.',
          },
          {
            id: 4,
            name: 'Desi Ghee Dipped Baati',
            quantity: 4,
            isRequired : true,
            availableToday: true,
            weight: null,
            description: 'Rounded crunchy baati, dipped in Ghee.',
          },
        ],
        comments: [
          {
            id: 1,
            comment: 'Perfect for a full meal!',
            userId: 105,
            userName: 'Charlie Black',
            userImage: 'https://example.com/charlie.jpg',
          },
          {
            id: 2,
            comment: 'So many delicious dishes.',
            userId: 106,
            userName: 'Diana White',
            userImage: 'https://example.com/diana.jpg',
          },
        ],
      },
      {
        id: 4,
        name: 'veg-appe',
        title: 'Crispy Veg Appe',
        bestSeason: 'All',
        isNonVeg: false,
        ingredients: [
          { id: 1, name: 'Rice Flour', healthBenefits: 'Easy to digest' },
          { id: 2, name: 'Vegetables', healthBenefits: 'Rich in vitamins' },
          {
            id: 3,
            name: 'Spices',
            healthBenefits: 'Enhances taste and digestion',
          },
        ],
        region: 'South India',
        images: [
          {
            id: 1,
            name: 'Veg Appe Image',
            url: 'https://royalrasoyi.com/assets/images/home-beef/about/item3.jpg',
          },
        ],
        description: 'A healthy and tasty snack.',
        category: 'breakfast',
        lifeInDays: 2,
        flavourType: 'spicy',
        createdOn: new Date('2025-01-04'),
        isDeleted: false,
        lastUpdatedOn: new Date('2025-01-05'),
        size: 'SMALL',
        price: '100',
        quantity: 12,
        measurement: 'Plate',
        addons: ['Coconut Chutney', 'Sambar'],
        discount: '5%',
        days: 'Thursday',
        type: 'Dish',
        availableToday: true,
        ratings: 4.6,
        foodItems: [
          {
            id: 1,
            name: 'Appe Pieces',
            quantity: 12,
            weight: null,
            description: 'Crispy and healthy snack.',
          },
        ],
        comments: [
          {
            id: 1,
            comment: 'Perfect snack!',
            userId: 107,
            userName: 'Eve Blue',
            userImage: 'https://example.com/eve.jpg',
          },
          {
            id: 2,
            comment: 'Loved the chutney.',
            userId: 108,
            userName: 'Frank Red',
            userImage: 'https://example.com/frank.jpg',
          },
        ],
      },
      {
        id: 5,
        name: 'shahi-laddoo',
        title: 'Royal Shahi Laddoo',
        bestSeason: 'Winter',
        isNonVeg: false,
        ingredients: [
          { id: 1, name: 'Almonds', healthBenefits: 'Rich in healthy fats' },
          { id: 2, name: 'Milk', healthBenefits: 'Good source of calcium' },
          { id: 3, name: 'Honey', healthBenefits: 'Natural sweetener' },
        ],
        region: 'North India',
        images: [
          {
            id: 1,
            name: 'Shahi Laddoo Image',
            url: 'https://royalrasoyi.com/assets/images/menu/shaahi-laddoo.png',
          },
        ],
        description: 'A luxurious and healthy sweet.',
        category: 'sweets',
        lifeInDays: 10,
        flavourType: 'non spicy',
        createdOn: new Date('2025-01-04'),
        isDeleted: false,
        lastUpdatedOn: new Date('2025-01-05'),
        size: 'LARGE',
        price: '1200',
        quantity: 1,
        measurement: 'per Kg',
        addons: ['Extra Honey', 'Dry Fruits'],
        type: 'Dish',
        availableToday: true,
        discount: '10%',
        days: 'Friday',
        ratings: 4.6,
        foodItems: [
          {
            id: 1,
            name: 'Shahi Laddoo',
            quantity: null,
            weight: '1 Kg',
            description: 'Crispy and healthy snack.',
          },
        ],
        comments: [
          {
            id: 1,
            comment: 'Perfect snack!',
            userId: 107,
            userName: 'Eve Blue',
            userImage: 'https://example.com/eve.jpg',
          },
          {
            id: 2,
            comment: 'Loved the chutney.',
            userId: 108,
            userName: 'Frank Red',
            userImage: 'https://example.com/frank.jpg',
          },
        ],
      },
      {
        id: 6,
        name: 'veg-sandwich',
        title: 'Crispy Sandwich',
        bestSeason: 'All',
        isNonVeg: false,
        ingredients: [
          { id: 1, name: 'Rice Flour', healthBenefits: 'Easy to digest' },
          { id: 2, name: 'Vegetables', healthBenefits: 'Rich in vitamins' },
          {
            id: 3,
            name: 'Spices',
            healthBenefits: 'Enhances taste and digestion',
          },
        ],
        region: 'Global',
        images: [
          {
            id: 1,
            name: 'Veg Appe Image',
            url: 'https://royalrasoyi.com/assets/images/menu/veg-sandwich.webp',
          },
        ],
        description: 'A healthy and tasty snack.',
        category: 'breakfast',
        lifeInDays: 2,
        flavourType: 'spicy',
        createdOn: new Date('2025-01-04'),
        isDeleted: false,
        lastUpdatedOn: new Date('2025-01-05'),
        size: 'MEDIUM',
        price: '95',
        quantity: 1,
        measurement: 'Plate',
        addons: ['Chutney'],
        discount: '5%',
        days: 'Thursday',
        type: 'Dish',
        availableToday: true,
        ratings: 4.6,
        foodItems: [
          {
            id: 1,
            name: 'Grilled Bread Pieces',
            quantity: 4,
            weight: null,
            description: 'Crispy and healthy snack.',
          },
          {
            id: 2,
            name: 'Tomato Ketchup Sachet',
            quantity: 2,
            weight: null,
            description: 'Crispy and healthy snack.',
          },
        ],
        comments: [
          {
            id: 1,
            comment: 'Perfect snack!',
            userId: 107,
            userName: 'Eve Blue',
            userImage: 'https://example.com/eve.jpg',
          },
          {
            id: 2,
            comment: 'Loved the chutney.',
            userId: 108,
            userName: 'Frank Red',
            userImage: 'https://example.com/frank.jpg',
          },
        ],
      },
      {
        id: 7,
        name: 'aloo-pyaz-paratha',
        title: 'Aloo Pyaz Paratha',
        bestSeason: 'All',
        isNonVeg: false,
        ingredients: [
          {
            id: 1,
            name: 'Aloo (Potato)',
            healthBenefits: 'Rich in carbohydrates for energy',
          },
          {
            id: 2,
            name: 'Pyaz (Onion)',
            healthBenefits: 'Good source of antioxidants and fiber',
          },
          {
            id: 3,
            name: 'Whole Wheat Flour',
            healthBenefits: 'Rich in fiber for digestion',
          },
        ],
        region: 'North India',
        images: [
            {
              id: 1,
              name: 'Allo Pyaaj Paratha',
              url: 'https://royalrasoyi.com/assets/images/menu/aloo-pyaz-paratha.jpg',
            },
          ],
        description:
          'Traditional North Indian delight made with love and fresh ingredients, perfect for breakfast or evening snacks.',
        category: 'breakfast',
        lifeInDays: 1,
        flavourType: 'mild spicy',
        createdOn: new Date(),
        isDeleted: false,
        lastUpdatedOn: new Date(),
        size: 'MEDIUM',
        price: '150',
        quantity: 1,
        measurement: 'Per Plate',
        addons: ['Red Sweet Chutney', 'Green Spicy Chutney'],
        discount: '0%',
        type: 'Dish',
        availableToday: true,
        days: 'All Days',
        ratings: 0,
        foodItems: [
          {
            id: 1,
            name: 'Paratha',
            quantity: 2,
            weight: '200g',
            description:
              'Soft, flaky parathas with a savory potato and onion filling.',
          },
        ],
        comments: [],
      },
    ];
  }
}
