import { useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import './MenuPage.css';
import vegIcon from '../../../assets/vegetarian_icon2.png';
import spicyIcon from '../../../assets/spicy_icon.png';
import { Dish, DishCategory, DishCategoryDisplayName } from '../../../types/dishTypes';

// Static array of hardcoded dishes
const hardCodedDishes: Dish[] = [
  {
    id: 1,
    currentlyOnMenu: true,
    name: 'Chicken Satay',
    description: 'Grilled marinated chicken served with a delicious peanut sauce.',
    price: 12.99,
    category: DishCategory.CHICKEN,
    isSpicy: true,
    isPescatarian: false,
    isVegetarian: false,
    hasTreeNuts: false,
    hasPeanuts: true,
    hasEggs: false,
    hasMilk: false,
    hasShellfish: false,
    hasSoy: false,
    hasWheat: false,
  },
  {
    id: 2,
    currentlyOnMenu: true,
    name: 'Vegetarian Spring Rolls',
    description: 'Crispy rolls filled with fresh vegetables.',
    price: 6.5,
    category: DishCategory.APPETIZER,
    isSpicy: false,
    isPescatarian: true,
    isVegetarian: true,
    hasTreeNuts: false,
    hasPeanuts: false,
    hasEggs: false,
    hasMilk: false,
    hasShellfish: false,
    hasSoy: false,
    hasWheat: false,
  },
];

const MenuPage = () => {
  const [dishes] = useState<Dish[]>(hardCodedDishes);

  const lunchSpecials = dishes.filter(dish => dish.category === DishCategory.LUNCH_SPECIAL);
  const appetizers = dishes.filter(dish => dish.category === DishCategory.APPETIZER);
  const soups = dishes.filter(dish => dish.category === DishCategory.SOUP);
  const chefsSuggestions = dishes.filter(dish => dish.category === DishCategory.CHEF_SUGGESTION);
  const noodlesAndRice = dishes.filter(dish => dish.category === DishCategory.NOODLES_AND_RICE);
  const chicken = dishes.filter(dish => dish.category === DishCategory.CHICKEN);
  const pork = dishes.filter(dish => dish.category === DishCategory.PORK);
  const beef = dishes.filter(dish => dish.category === DishCategory.BEEF);
  const seafood = dishes.filter(dish => dish.category === DishCategory.SEAFOOD);
  const vegetables = dishes.filter(dish => dish.category === DishCategory.VEGETABLE);
  const desserts = dishes.filter(dish => dish.category === DishCategory.DESSERT);

  const renderDishList = (dishList: Dish[]) => (
    <ul className="menu-grid">
      {dishList.map((dish) => (
        <li className="menu-item" key={dish.id}>
          <div className="dish-header">
            <span className="dish-name"><strong>{dish.name}</strong></span>
            <span className="dish-price">
              ${dish.price !== null && dish.price !== undefined
                ? Number.isInteger(dish.price)
                  ? dish.price
                  : dish.price.toFixed(2)
                : 'N/A'}
            </span>
          </div>
          <p className="dish-description">{dish.description}</p>
          <p>{getSpecialNotes(dish)}</p>
        </li>
      ))}
    </ul>
  );

  const getSpecialNotes = (dish: Dish) => {
    let notes = [];
    if (dish.isSpicy) {
      notes.push(<img key="spicyIcon" src={spicyIcon} alt="Spicy" />);
    }
    if (dish.isVegetarian) {
      notes.push(<img key="vegIcon" src={vegIcon} alt="Vegetarian" />);
    }
    return notes;
  };

  return (
    <MainLayout>
      <div className="menu-container">
        <h1 className="menu-title">Menu</h1>

        <section className="menu-section">
          <h2 className="menu-section-title">Lunch Specials</h2>
          <hr />
          <p className="menu-section-text">
            Served daily from 11:30am to 2:30pm. Each meal comes with fried rice and a choice of egg roll or soup.
            Soup options are wonton soup, hot & sour soup, or egg drop soup.
          </p>
          {renderDishList(lunchSpecials)}
        </section>

        <section className="menu-section">
          <h2 className="menu-section-title">Appetizers</h2>
          <hr />
          {renderDishList(appetizers)}
        </section>

        <section className="menu-section">
          <h2 className="menu-section-title">Soups</h2>
          <hr />
          {renderDishList(soups)}
        </section>

        <section className="menu-section">
          <h2 className="menu-section-title">Chef's Suggestions</h2>
          <hr />
          {renderDishList(chefsSuggestions)}
        </section>

        <section className="menu-section">
          <h2 className="menu-section-title">Noodles and Rice</h2>
          <hr />
          {renderDishList(noodlesAndRice)}
        </section>

        <section className="menu-section">
          <h2 className="menu-section-title">Chicken</h2>
          <hr />
          {renderDishList(chicken)}
        </section>

        <section className="menu-section">
          <h2 className="menu-section-title">Pork</h2>
          <hr />
          {renderDishList(pork)}
        </section>

        <section className="menu-section">
          <h2 className="menu-section-title">Beef</h2>
          <hr />
          {renderDishList(beef)}
        </section>

        <section className="menu-section">
          <h2 className="menu-section-title">Seafood</h2>
          <hr />
          {renderDishList(seafood)}
        </section>

        <section className="menu-section">
          <h2 className="menu-section-title">Vegetable</h2>
          <hr />
          {renderDishList(vegetables)}
        </section>

        <section className="menu-section">
          <h2 className="menu-section-title">Desserts</h2>
          <hr />
          {renderDishList(desserts)}
        </section>
      </div>
    </MainLayout>
  );
};

export default MenuPage;
