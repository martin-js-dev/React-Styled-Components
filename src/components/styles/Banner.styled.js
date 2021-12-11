import styled from 'styled-components';


export const BannerContainer = styled.div`
margin-top:5rem;
  background:#101522;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #f2f2f2;
  text-align: left;
  padding: 0 1rem;
  display:flex;
  h1 {
    font-size:2rem;
  }
  p {
    margin-bottom: 1rem;
    font-size: 1.5rem
  }
  @media (max-width: 780px) {
    display:block;
    padding-top:2rem;
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