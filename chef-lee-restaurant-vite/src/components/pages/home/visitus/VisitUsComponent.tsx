import './VisitUsComponent.css';
import storeFront from '../../../../assets/cheflee_streetview.webp'

const VisitUsComponent = () => {
  return (
    <div className="flex-container-visit-us">
      <div className="visit-us">
        <h2>Visit Us</h2>
        <p>Located to the right of Food Lion in the New Bridge Landing Shopping Center.
          Call now to order take-out.</p>
        <p>11000 Kentucky Springs Rd, Mineral, VA 23117, USA</p>
        <p>(540) 894-8181</p>
      </div>
      <div className="storefront-image">
        <img src={storeFront} alt="Chef Lee Storefront" />
      </div>
    </div>
  );
};

export default VisitUsComponent;
