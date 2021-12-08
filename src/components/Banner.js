import React from 'react';
import { BannerContainer, Image } from './styles/Banner.styled'
import { Button } from './styles/Button.styled';
import banner from './images/banner.png';
const Banner = () => {
  return (
    <BannerContainer>
      <div>
      <h1>Car of the Day</h1>
      <p>the best deal for this model only today for 20% off!!</p>
      <Button>Order Now</Button>
      </div>
      <Image src={banner}></Image>
      
    </BannerContainer>
  );
};

export default Banner;