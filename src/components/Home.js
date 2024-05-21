import React from 'react'
import Carousel from "./Carousel";
import Products from "./Products";
import SlickSlider from "./SlickSlider";
import Text from "./Text";
import Accordion from "./Accordion";
// import Testimonial from "./Testimonial";
import CardsComponent from './CardsComponent';
// import TestimonialCard from './TestimonialCard';
import TestimonialCards from "./TestimonialCards";
function Home() {
  return (
    <div>
     <Carousel/>
      <Text/>
      <Products/>
      <SlickSlider/>
      <h1 style={{margin:"20px",textAlign:"center"}}>For more Queries , Check Here</h1>
      <hr/>
      <Accordion/>
      <h1 style={{textAlign:"center",margin:"10px"}}>BootstrapCard</h1>
      <CardsComponent/>

      
      <h1 style={{margin:"20px",textAlign:"center"}}>Our Customer Ratings</h1>
      <TestimonialCards/>
     
    </div>
  )
}

export default Home
