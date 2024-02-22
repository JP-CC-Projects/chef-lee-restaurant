import './StoreHoursComponent.css'; 
import steakImage from '../../../../assets/steak.webp'

const StoreHoursComponent = () => {
  return (
    <div className="flex-container-store-hours">
      <div className="store-hours">
        <h2>Store Hours</h2>
        <p>March - October</p>
        <p>Sunday - Thursday : 11:30am - 9:00pm</p>
        <p>Friday - Saturday: 11:30am - 9:30pm</p>
        <p>November - February</p>
        <p>11:30am - 9:00pm</p>
      </div>
      <div className="food-image">
        <img src={steakImage} alt="Steak" />
      </div>
    </div>
  );
};

export default StoreHoursComponent;
