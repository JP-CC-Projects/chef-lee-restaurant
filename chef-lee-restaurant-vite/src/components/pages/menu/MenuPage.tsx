import { useState, useEffect } from 'react';
import axiosClient from '../../../utils/axiosClient';
import MainLayout from '../../layout/MainLayout';
import './MenuPage.css';
import vegIcon from '../../../assets/vegetarian_icon.png'
import spicyIcon from '../../../assets/spicyIcon.svg'
import { Dish } from '../../../types/dishTypes'; // Assuming these are correctly imported
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

  const renderDishList = (dishList) => (
    <ul className="menu-grid">
      {dishList.map((dish) => (
        <div className="menu-item" key={dish.id}>
          <li>
            <strong>{dish.name}</strong> - {dish.description}
            <br />
            Price: ${dish.price !== null && dish.price !== undefined ? dish.price.toFixed(2) : 'N/A'}
            <br />
            Special Notes: {getSpecialNotes(dish)}
          </li>
        </div>
      ))}
    </ul>
  );
  // <g fill="none"><circle fill="#c4270e" cx="12" cy="12" r="12"></circle>

  const getSpecialNotes = (dish) => {
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
      <div>
        <h1>Menu</h1>
        {error && <p>Error: {error}</p>}
        <section>
          <h2>Lunch Specials</h2>
          <p>Served daily from 11:30am to 2:30pm.
            Each meal comes with fried rice and a choice of egg roll or soup.
            Soup options are wonton soup, hot & sour soup, or egg drop soup.
          </p>
          {renderDishList(lunchSpecials)}
        </section>
        <section>
          <h2>Appetizers</h2>
          {renderDishList(appetizers)}
        </section>


      </div>
    </MainLayout>
  );
};

export default MenuPage;