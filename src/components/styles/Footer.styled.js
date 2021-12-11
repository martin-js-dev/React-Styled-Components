
import styled from 'styled-components';


export const FooterContainer = styled.div`
  background-color: #ffff;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:#333;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;

`;

export const FooterSubHeading = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 15px 25px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  background-color:#f2f2f2;
  &::placeholder {
    color: #333;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 260px;
  box-sizing: border-box;
  @media screen and (max-width: 520px) {
    padding: 10px;
    width: 150px;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled.div`
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  width: 90%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 40px ;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled.div`
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled.div`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  font-size: 24px;
`;
export const Logo = styled.img`
width:100px;
height:70px;
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`