import './App.css'
import Taskbar from './components/taskbar/Taskbar';
import Header from './components/Header';
import InfoList from './components/InfoList';
import ProductCarouselList from './components/product-carousel/ProductCarouselList';
import { workOffer, firstInfo, fourthInfo, secondInfo, thirdInfo, fifthInfo, sixthInfo, productCarousel_1, productCarousel_2, productCarousel_3, productCarousel_4} from './components/Constants';
import Carousel from './components/Carousel';
import CubeMenu from './components/cube-menu/CubeMenu';
import ContactUs from './components/contact-us/ContactUs';
import InstagramCarousel from './components/instagram-carousel/InstagramCarousel';
import Footer from './components/footer/Footer';


function App() {

  return (
    <div>
      <Taskbar />
      <ContactUs />
      <Header />
      <div className='content'>
        <Carousel />
        <InfoList infos={workOffer} />
        <InfoList infos={firstInfo} />
        <ProductCarouselList ProductCarousels={productCarousel_1} />
        <InfoList infos={secondInfo} />
        <ProductCarouselList ProductCarousels={productCarousel_2} />
        <InfoList infos={thirdInfo} />
        <ProductCarouselList ProductCarousels={productCarousel_3} />
        <InfoList infos={fourthInfo} />
        <ProductCarouselList ProductCarousels={productCarousel_4} />
        <InfoList infos={fifthInfo} />
        <InfoList infos={sixthInfo} />
        <CubeMenu />
        <InstagramCarousel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
