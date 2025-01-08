interface Ingredient {
    id: number;
    name: string;
    image: string;
    healthBenefits: string;
  }
  
  interface FoodItem {
    id: number;
    name: string;
    quantity?: number;
    weight?: string;
    type?: string,
    isRequired: boolean,
    availableToday: boolean,
    description: string;
  }

  interface FoodImage {
    id: number;
    name: string;
    title: string;
    url: string;
  }
  

  interface Food {
    id: number;
    name: string;
    title: string;
    bestSeason: string;
    isNonVeg?: boolean;
    ingredients: Ingredient[];
    region: string;
    images: FoodImage[];
    description: string;
    category: string;
    lifeInDays: number;
    flavourType: string;
    createdOn: Date;
    isDeleted: boolean;
    lastUpdatedOn: Date;
    size: string;
    price: string;
    quantity: number;
    type: string,
    availableToday: boolean,
    measurement: string;
    addons: string[];
    discount: string;
    days: string[];
    ratings: number;
    foodItems: FoodItem[];
    comments: string[];
  }
  