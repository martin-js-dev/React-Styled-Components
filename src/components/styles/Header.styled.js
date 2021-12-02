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
width:50px;
height:50px;
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`

export const Image = styled.img`
  width: 375px;
  height:375px;
  margin-left: 40px;
  @media (max-width: 480px) {
    margin: 40px 0 30px;
  }
`