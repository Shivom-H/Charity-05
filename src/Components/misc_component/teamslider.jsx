import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Teamslider() {

const arr2 = [
    {link:"https://gravatar.com/avatar/e0ab9bf81acc1f1c6c74d658a17d275f?s=400&d=monsterid&r=x"},
    {link:"https://gravatar.com/avatar/697f6d412366e72db4efd2b666f74f0a?s=400&d=robohash&r=x"},
    {link:"https://gravatar.com/avatar/b4ba5c8358f42f8e461f8ca103999b3b?s=400&d=robohash&r=x"},
    {link:"https://gravatar.com/avatar/2cf94778638905cb81848e1cc902f23c?s=400&d=mp&r=x"},
    {link:"https://gravatar.com/avatar/2cf94778638905cb81848e1cc902f23c?s=400&d=wavatar&r=x"},
    {link:"https://gravatar.com/avatar/a6267969ff5bfe60972f308327f3934b?s=400&d=robohash&r=x"},
    {link:"https://gravatar.com/avatar/3d30fe51c6b16ca446fd4b8cba02ecf8?s=400&d=robohash&r=x"},
    {link:"https://gravatar.com/avatar/e0ab9bf81acc1f1c6c74d658a17d275f?s=400&d=retro&r=x"},
    {link:"https://gravatar.com/avatar/19ab1c6666999c15c5f9c7aa3d5c13b8?s=400&d=robohash&r=x"}



]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
      };

    return (
        <div>
            <Slider {...settings}>
          {
              arr2.map(data=>{
                  return( <div>
                    <img className="slider-img-team" src={data.link} alt="" />
                  </div>)
              })
          }
        </Slider>
        </div>
    )
}
