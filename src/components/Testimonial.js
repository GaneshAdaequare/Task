import React from 'react'
import TestimonialCard from './TestimonialCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
 
const Testimonial = () => {
    const settings = {
        dots: true,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
     
 
      return (
 
        <div class="slider mb-5">
        <div className="slider-container container-fluid">
              <Slider className='custom-slider' {...settings}>
                <div>
                <TestimonialCard  testimonial={ { text:"Last Friday I came for restaurant week.", author:"John Doe" } }/>
                </div>
                <div>
                <TestimonialCard  testimonial={ { text:"Great food and friendly service!", author:"charles babage" } }/>
                </div>
                <div>
                <TestimonialCard  testimonial={ { text:"Amazing experience every time. ", author:"Williamson" } }/>
           
                </div>
                <div>
               <TestimonialCard  testimonial={ { text:"Great food and friendly service!", author:"John Doe" } }/>
                </div>
                <div>
                <TestimonialCard  testimonial= { { text:"Please thank your team for their professional.", author:"Joarden Walke" } }/>
                </div>
              </Slider>
            </div>
            </div>
  )
}
 
export default Testimonial