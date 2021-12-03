import styled from 'styled-components';


export const FeatureContainer = styled.div`
  
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333;
  text-align: center;
  padding: 0 1rem;
  h1 {
    font-size:2rem;
  }
  p {
    margin-bottom: 1rem;
    font-size: 1.5rem
  }
`;


export const Image = styled.img`
  width: 375px;
  height:375px;
  margin-left: 40px;
  @media (max-width: 480px) {
    margin: 40px 0 30px;
  }
`