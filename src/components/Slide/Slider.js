import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../../assets/products/slide-1.jpg";
import slide2 from "../../assets/products/slide-2.jpg";
import { Button } from 'react-bootstrap';
import './slider.css';


const Slider = ()=>{
  return (
    <Carousel fade>
        <Carousel.Item>
            <img src={slide1} alt="First slide"/>
            <Carousel.Caption>
                <h3>You're Looking Good</h3>
                <div className='txt' > <h2>New look</h2></div>
                <button >discover more</button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={slide2} alt="First slide"/>
            <Carousel.Caption>
                <h3>don't miss</h3>
                <div className='txt' ><h2>Best  Deals</h2></div>
                <button>discover more</button>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default Slider;