import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return <Slider {...settings}>
    <li className="slide-item">
    <p>hello cj cksj kj </p>
    </li>
  </Slider>
}
export default Carousel;