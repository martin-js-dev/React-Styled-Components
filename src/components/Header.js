import { StyledHeader, Nav, Logo, Image, MenuLinks, Link } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'
import logo from './images/logo.png';
import hero from './images/hero.png';


export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
        <Logo src={logo}  ></Logo>
        <MenuLinks></MenuLinks>
            <Link to='/'>Home</Link>
            <Link to='/'>About us</Link>
            <Link to='/'>Locations</Link>
            <Link to='/'>Catalog</Link>
          
          <Button>Contact us</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Premium driving experiences on every surface</h1>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. 
            </p>

            <Button bg='#ff0099' color='#fff'>
              Browse cars
            </Button>
          </div>

          <Image src={hero} />
        </Flex>
      </Container>
    </StyledHeader>
  )
}