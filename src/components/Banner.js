import React from 'react';
import { BannerContainer,  } from './styles/Banner.styled'
import { Button } from './styles/Button.styled';

const Banner = () => {
  return (
    <BannerContainer>
      <h1>Car of the Day</h1>
      <p>the best deal for this model only today for 20% off!!</p>
      
      <Button>Order Now</Button>
    </BannerContainer>
  );
};

export default Banner;