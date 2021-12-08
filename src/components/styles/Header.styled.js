import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: #f2f2f2;
  padding: 40px 0;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (max-width: 480px ) {
    flex-direction: column;
  }
`

export const Logo = styled.img`
width:100px;
height:70px;
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`

export const Image = styled.img`
  width: 475px;
  height:375px;
  margin-left: 40px;
  @media (max-width: 780px) {
    display:none;
  }
`

export const MenuLinks = styled.div`
  display:flex;
 
  @media (max-width: 780px) {
    display:none;
  }
`
export const Link = styled.div`
  color:#333;
  @media (max-width: 780px) {
    display:none;
  }
`