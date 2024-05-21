import React from 'react';
import BootstrapCard from './BootstrapCard';
import of from "../assets/official1.jpg";
import of1 from "../assets/official2.jpg";
import of2 from "../assets/official3.jpg";

function CardsComponent() {
    const data = [
        { img: of, alt: "image 1",designation:"Manager",name:"Andrew Garfield",text:"It's not difficult,just becoz it is unfamiliar"},
        { img: of1, alt: "image 2",designation:"CEO",name:"Peter Parker",text:"Time, Tide ,JS waits for none" },
        { img: of2, alt: "image 3",designation:"HR",name:"Benzamin",text:"Believe Yourself" }
    ];

    return (
        <div style={{display:"flex",flexWrap:"wrap",width:"80%",margin:"0 auto",justifyContent:"space-around"}}>
            {
                data.map((item, index) => (
                    <BootstrapCard key={index} img={item.img} alt={item.alt} des={item.designation} name={item.name} text={item.text}/>
                ))
            }
        </div>
    );
}

export default CardsComponent;
