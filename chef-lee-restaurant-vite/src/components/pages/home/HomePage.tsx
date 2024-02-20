import './HomePage.css'; // Make sure to create this CSS file
import MainLayout from '../../layout/MainLayout';
import StoreHoursComponent from './StoreHoursComponent';
import MapComponent from './MapComponent';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="parallax-container">
        <div className="parallax" id="top-parallax-image"></div>
        <StoreHoursComponent/>
        <MapComponent/>
        <div className="parallax" id="bottom-parallax-image"></div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
