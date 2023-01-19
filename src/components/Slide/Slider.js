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
                <h2>New lookbook</h2>
                <button>discover more</button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={slide2} alt="First slide"/>
            <Carousel.Caption>
                <h3>don't miss</h3>
                <h2>Mysrety Deals</h2>
                <button>discover more</button>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default Slider;