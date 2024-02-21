import './HomePage.css'; // Make sure to create this CSS file
import MainLayout from '../../layout/MainLayout';
import StoreHoursComponent from './StoreHoursComponent';
import MapComponent from './MapComponent';
import TransparentLogo from '../../../assets/cheflee_transparent.png'

const HomePage = () => {
  return (
    <MainLayout>
      <div className="parallax-container">
        <div className="parallax" id="top-parallax-image">
          <img src={TransparentLogo} alt="Logo" className="transparent-logo" />
        </div>
        <StoreHoursComponent />
        <MapComponent />
        <div className="parallax" id="bottom-parallax-image"></div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
