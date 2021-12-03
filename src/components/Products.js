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


const Products = () => {
  return (
    <ProductsContainer>
      <ProductsHeading>Catalog of the best cars</ProductsHeading>
      <ProductWrapper>
        
         
          <ProductCard >
            <ProductImg  />
              <ProductTitle>Mercedes Benz</ProductTitle> 
          </ProductCard>

          <ProductCard>
          <ProductImg  />
          <ProductTitle>Audi Q7</ProductTitle>
          </ProductCard>

          <ProductCard>
          <ProductImg  />
          <ProductTitle>Opel Astra</ProductTitle>
          </ProductCard>

          <ProductCard>
          <ProductImg  />
          <ProductTitle>WV Passat B6</ProductTitle>
          </ProductCard>

          <ProductCard>
          <ProductImg  />
          <ProductTitle>BMW Alpine</ProductTitle>
          <Button>See all</Button>
          </ProductCard>
      
          <ProductCard>
          <ProductImg  />
          <ProductTitle>Range Rover</ProductTitle>
          </ProductCard>
          
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;