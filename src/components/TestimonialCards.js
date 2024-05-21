
import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaStar } from "react-icons/fa";
import {StarFilled} from '@ant-design/icons'

 
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}
 
 
const Testimonial = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
        <div className='pic-cont  slider-container'>
        <div className="">
            <Slider {...settings}>
           
                    <div className="card1 test">
                        <h4>John doe</h4>
                        <h6><StarFilled className='ico' /><StarFilled className='ico' />
                        <StarFilled className='ico' />
                        <StarFilled className='ico' />
                        <StarFilled className='ico' /></h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat vel quos autem nulla nobis</p>
                       <p className='trade'>Linda-Designer</p>
                       
                    </div>
                    <div className="card1 test">
                    <h4>John wick</h4>
                    <h6><StarFilled className='ico'/><StarFilled className='ico' />
                        <StarFilled className='ico' />
                        <StarFilled className='ico' />
                        <StarFilled className='ico' /></h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat vel quos autem nulla nobis</p>
                        <p className='trade'>Linda-Designer</p>
 
                    </div>
                    <div className="card1 test">
                    <h4>Luke wright</h4>
                    <h6><StarFilled className='ico' /><StarFilled className='ico' />
                        <StarFilled className='ico' />
                        <StarFilled className='ico' />
                        <StarFilled className='ico' /></h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat vel quos autem nulla nobis</p>
                        <p className='trade'>Linda-Designer</p>
                    </div>
                   
            </Slider>
            </div>
 
        </div>
        </>
    )
}
 
export default Testimonial