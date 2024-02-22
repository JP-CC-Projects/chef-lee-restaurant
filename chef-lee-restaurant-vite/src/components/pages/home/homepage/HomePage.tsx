import './HomePage.css'; // Make sure to create this CSS file
import MainLayout from '../../../layout/MainLayout';
import StoreHoursComponent from '../storehours/StoreHoursComponent';
import MapComponent from '../map/MapComponent';
import TransparentLogo from '../../../../../assets/cheflee_transparent.png'
import VisitUsComponent from '../visitus/VisitUsComponent';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="parallax-container">
        <div className="parallax" id="top-parallax-image">
          <img src={TransparentLogo} alt="Logo" className="transparent-logo" />
        </div>
        <StoreHoursComponent />
        <VisitUsComponent/>
        <MapComponent />
        <div className="parallax" id="bottom-parallax-image"></div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
