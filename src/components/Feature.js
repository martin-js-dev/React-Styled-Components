import React from 'react';
import { FeatureContainer,  } from './styles/Feature.styled'
import { Button } from './styles/Button.styled';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Car of the Day</h1>
      <p>the best deal for this model only today for 20% off!!</p>
      
      <Button>Order Now</Button>
    </FeatureContainer>
  );
};

export default Feature;