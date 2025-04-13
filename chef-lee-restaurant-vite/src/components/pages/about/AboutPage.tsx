import MainLayout from '../../layout/MainLayout';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="about-container">
        <h1 className="about-title">About Us</h1>

        <section className="about-section">
          <p className="about-text">
            Welcome to Chef Lee's Restaurant! We are passionate about creating an authentic dining experience that fuses traditional flavors with contemporary culinary techniques.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">Our Mission</h2>
          <p className="about-text">
            Our mission is to serve quality, innovative cuisine using only the freshest ingredients. We are dedicated to delivering an exceptional experience for every guest.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">Our Story</h2>
          <p className="about-text">
            Founded with a commitment to excellence, Chef Lee's Restaurant started as a small, family-run diner and has grown into a beloved local hotspot. Our journey is fueled by passion, tradition, and a spirit of innovation.
          </p>
        </section>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
