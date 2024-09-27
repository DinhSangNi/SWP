


import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageSwiper from './ImageSwiper' ;
import ProductList from './ProductList';
import Commercial from './Commercial'
import Uudai from './Uudai';
 function HomePage() {
  return (
    <div className="App">
    <Header />
    <div className="container">
       <ImageSwiper/>
      <MainContent />
    <ProductList/>
    <Commercial/>
    <Uudai/>
    </div>
   <Footer/>
  </div>
  );
}

export default HomePage;
