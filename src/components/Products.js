import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,

 
} from './styles/Products.styled';

import { Button } from './styles/Button.styled';
import car1 from './images/car1.png';
import car2 from './images/car2.jpg';
import car3 from './images/car3.jpg';
import hero from './images/hero.png';


const Products = () => {
  return (
    <ProductsContainer>
      <ProductsHeading>Catalog of the best cars</ProductsHeading>
      <ProductWrapper>
        
         
          <ProductCard >
            <ProductImg src={car1} />
              <ProductTitle>Mercedes Benz</ProductTitle> 
          </ProductCard>

          <ProductCard>
          <ProductImg src={car2} />
          <ProductTitle>Audi Q7</ProductTitle>
          </ProductCard>

          <ProductCard>
          <ProductImg  src={car3}/>
          <ProductTitle>Opel Astra</ProductTitle>
          </ProductCard>

          <ProductCard>
          <ProductImg src={hero} />
          <ProductTitle>Jeep Toyota</ProductTitle>
          </ProductCard>

          <ProductCard>
          <ProductImg  src={car1} />
          <ProductTitle>BMW Alpine</ProductTitle>
          <Button>See all</Button>
          </ProductCard>
      
          <ProductCard>
          <ProductImg  src={car2}/>
          <ProductTitle>Range Rover</ProductTitle>
          </ProductCard>
          
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;