import { ReactNode } from 'react';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow mx-auto mt-0">
        <main className="container pt-0">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
