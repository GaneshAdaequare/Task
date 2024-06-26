import React from "react";
const Carousel = () => {
  return (
    <>
       <section className="carousel-section">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://shoplane-by-lassie.netlify.app/img/img1.png" className="d-block w-100" alt="hello"/>
        
              </div>
              <div className="carousel-item">
                <img src="https://shoplane-by-lassie.netlify.app/img/img2.png" className="d-block w-100" alt="world"/>
                
              </div>
              <div className="carousel-item">
                <img src="https://shoplane-by-lassie.netlify.app/img/img1.png" className="d-block w-100" alt="shop"/>
                
              </div>
              <div className="carousel-item">
                <img src="https://shoplane-by-lassie.netlify.app/img/img4.png" className="d-block w-100" alt="flip"/>
                
              </div>
              <div className="carousel-item">
                <img src="https://shoplane-by-lassie.netlify.app/img/img3.png" className="d-block w-100" alt="amaz"/>
                
              </div>
              <div className="carousel-item">
                <img src="https://shoplane-by-lassie.netlify.app/img/img4.png" className="d-block w-100" alt="mee"/>
                
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </section>
    </>
  );
};
export default Carousel;
