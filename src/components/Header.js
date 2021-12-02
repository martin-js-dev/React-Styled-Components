import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.png" alt="Logo" />
          
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

          <Image src='./images/hero.png' alt='hero image' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}