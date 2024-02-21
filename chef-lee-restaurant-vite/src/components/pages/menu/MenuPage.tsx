import { useState, useEffect } from 'react';
import axiosClient from '../../../utils/axiosClient';
import MainLayout from '../../layout/MainLayout';
import './MenuPage.css';
import vegIcon from '../../../assets/vegetarian_icon.png'
import spicyIcon from '../../../assets/spicyIcon.svg'
import { Dish } from '../../../types/dishTypes';
const API_BASE_URL = `${import.meta.env.VITE_APP_BASE_URL}/api`;

const MenuPage = () => {
  // Specify the type of dishes as Dish[]
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [error, setError] = useState('');

  const fetchDishes = async () => {
    try {
      const response = await axiosClient.get<Dish[]>(`${API_BASE_URL}/getDishes`);
      setDishes(response.data);
    } catch (error: any) {
      const errorMessage = error.response && error.response.data.message ? error.response.data.message : (error.message ? error.message : 'An unknown error occurred');
      console.error('Error fetching dishes:', errorMessage);
      setError(errorMessage);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const lunchSpecials = dishes.filter(dish => dish.category === 'LUNCH_SPECIAL');
  const appetizers = dishes.filter(dish => dish.category === 'APPETIZER');
  const soups = dishes.filter(dish => dish.category === 'SOUP');
  const chefsSuggestions = dishes.filter(dish => dish.category === 'CHEF_SUGGESTION');
  const noodlesAndRice = dishes.filter(dish => dish.category === 'NOODLES_AND_RICE');
  const chicken = dishes.filter(dish => dish.category === 'CHICKEN');
  const pork = dishes.filter(dish => dish.category === 'PORK');
  const beef = dishes.filter(dish => dish.category === 'BEEF');
  const seafood = dishes.filter(dish => dish.category === 'SEAFOOD');
  const vegetables = dishes.filter(dish => dish.category === 'VEGETABLE');
  const desserts = dishes.filter(dish => dish.category === 'DESSERT');


  const renderDishList = (dishList: Dish[]) => (
    <ul className="menu-grid">
      {dishList.map((dish) => (
        <div className="menu-item" key={dish.id}>
          <li>
            <strong>{dish.name}</strong>
            <br />
            {dish.description}
            <br />
            Price: ${dish.price !== null && dish.price !== undefined ? dish.price.toFixed(2) : 'N/A'}
            <br />
            {getSpecialNotes(dish)}
          </li>
        </div>
      ))}
    </ul>
  );
  // <g fill="none"><circle fill="#c4270e" cx="12" cy="12" r="12"></circle>

  const getSpecialNotes = (dish: Dish) => {
    let notes = [];

    if (dish.isVegetarian) {
      // Using the VegIcon as a React component
      notes.push(<img key="vegIcon" src={vegIcon} alt="Vegetarian" />);
    }

    if (dish.isSpicy) {
      notes.push(<img key="spicyIcon" src={spicyIcon} alt="Spicy" />);
    }
    return notes;
  };
  return (
    <MainLayout>
      <div className="menu-container">
        <h1 className="menu-title">Menu</h1>
        {error && <p className="menu-error">Error: {error}</p>}
        <section className="menu-section">
          <h2 className="menu-section-title">Lunch Specials</h2>
          <hr />
          <p className="menu-section-text">Served daily from 11:30am to 2:30pm.
          Each meal comes with fried rice and a choice of egg roll or soup.
          Soup options are wonton soup, hot & sour soup, or egg drop soup.</p>

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