package com.jpcc.chefleerestaurantjavaapi.domain;

public enum DishCategory {
    LUNCH_SPECIAL("Lunch Special"),
    APPETIZER("Appetizer"),
    SOUP("Soup"),
    CHEF_SUGGESTION("Chef's Suggestion"),
    NOODLES_AND_RICE("Noodles and Rice"),
    CHICKEN("Chicken"),
    PORK("Pork"),
    BEEF("Beef"),
    SEAFOOD("Seafood"),
    VEGETABLE("Vegetable"),
    DESSERT("Dessert");

    private final String displayName;

    DishCategory(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}
