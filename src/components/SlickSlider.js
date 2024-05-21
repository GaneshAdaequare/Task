// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const SlickSlider = () => {
//   const styles={img:{height:"200px",width:"100%"},};
//   const settings = {
//     autoplaySpeed: 5000,
//     autoplay:true,
//     dots: false,
//     arrows: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Slider {...settings}>
//       <div>
//         <img style={styles.img} src="https://rukminim2.flixcart.com/image/612/612/kmds4nk0/key-holder/c/5/j/cak-25-brown-capio-art-original-imagfapvq2trbgaw.jpeg?q=70" alt="nature 1" />
//       </div>
//       <div>
//         <img  style={styles.img} src="https://rukminim2.flixcart.com/image/612/612/kjlrb0w0-0/rack-shelf/q/o/g/asw44422-xtenshion-crafts-original-imafz4xzstpgskcc.jpeg?q=70" alt="nature 2" />
//       </div>
//       <div>
//         <img  style={styles.img} src="https://rukminim2.flixcart.com/image/612/612/l0h1g280/rack-shelf/a/u/0/living-room-bedroom-hexx12-onlineshoppee-6-original-imagc92ge6c8uf2b.jpeg?q=70" alt="nature 3" />
//       </div>
//       <div>
//         <img style={styles.img} src="https://rukminim2.flixcart.com/image/612/612/kxnl6kw0/key-holder/o/x/b/6-key-holder-014-crafts-world-original-imaga2jj5xhbd5a5.jpeg?q=70" alt="nature 4" />
//       </div>
//       <div>
//         <img style={styles.img} src="https://rukminim2.flixcart.com/image/612/612/xif0q/wall-decoration/d/y/9/butterfly-wall-hanging-for-wall-decorative-item-1-butterfly-wall-original-imagu5848fhhezvg.jpeg?q=70" alt="nature 5" />
//       </div>
//     </Slider>
//   );
// };

// export default SlickSlider;


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = () => {
  const styles = {
    img: { height: "200px", width: "100%" }
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          style={styles.img}
          src="https://rukminim2.flixcart.com/image/612/612/kmds4nk0/key-holder/c/5/j/cak-25-brown-capio-art-original-imagfapvq2trbgaw.jpeg?q=70"
          alt="nature 1"
        />
      </div>
      <div>
        <img
          style={styles.img}
          src="https://rukminim2.flixcart.com/image/612/612/kjlrb0w0-0/rack-shelf/q/o/g/asw44422-xtenshion-crafts-original-imafz4xzstpgskcc.jpeg?q=70"
          alt="nature 2"
        />
      </div>
      <div>
        <img
          style={styles.img}
          src="https://rukminim2.flixcart.com/image/612/612/l0h1g280/rack-shelf/a/u/0/living-room-bedroom-hexx12-onlineshoppee-6-original-imagc92ge6c8uf2b.jpeg?q=70"
          alt="nature 3"
        />
      </div>
      <div>
        <img
          style={styles.img}
          src="https://rukminim2.flixcart.com/image/612/612/kxnl6kw0/key-holder/o/x/b/6-key-holder-014-crafts-world-original-imaga2jj5xhbd5a5.jpeg?q=70"
          alt="nature 4"
        />
      </div>
      <div>
        <img
          style={styles.img}
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/wall-decoration/d/y/9/butterfly-wall-hanging-for-wall-decorative-item-1-butterfly-wall-original-imagu5848fhhezvg.jpeg?q=70"
          alt="nature 5"
        />
      </div>
    </Slider>
  );
};

export default SlickSlider;
