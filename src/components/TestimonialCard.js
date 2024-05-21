
import React from 'react'
 
const TestimonialCard = ({testimonial}) => {
   let {text,author}=testimonial;
  return (
    <>
    <div class="card text-center custom-card-style testimonial-height">
  <div class="card-header custom-card-header-style">
  {author}
  </div>
  <div class="card-body ">
    <h5 class="card-title ">*****</h5>
    <p class="card-text mt-5 " >{text}</p>
  </div>
 
</div>
    </>
  )
}
 
export default TestimonialCard