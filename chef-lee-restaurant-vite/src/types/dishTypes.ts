export type Dish = {
    id: number;
    currentlyOnMenu: boolean;
    name: string;
    description: string;
    price: number;
    category: DishCategory;
    isSpicy: boolean;
    isPescatarian: boolean;
    isVegetarian: boolean;
    hasTreeNuts: boolean;
    hasPeanuts: boolean;
    hasEggs: boolean;
    hasMilk: boolean;
    hasShellfish: boolean;
    hasSoy: boolean;
    hasWheat: boolean;
}

export enum DishCategory {
    LUNCH_SPECIAL = "LUNCH_SPECIAL",
    APPETIZER = "APPETIZER",
    SOUP = "SOUP",
    CHEF_SUGGESTION = "CHEF_SUGGESTION",
    NOODLES_AND_RICE = "NOODLES_AND_RICE",
}

export const DishCategoryDisplayName: { [key in DishCategory]: string } = {
    [DishCategory.LUNCH_SPECIAL]: "Lunch Special",
    [DishCategory.APPETIZER]: "Appetizer",
    [DishCategory.SOUP]: "Soup",
    [DishCategory.CHEF_SUGGESTION]: "Chef's Suggestion",
    [DishCategory.NOODLES_AND_RICE]: "Noodles and Rice",
};

