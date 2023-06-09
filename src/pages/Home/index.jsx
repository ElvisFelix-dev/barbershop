import { Link } from 'react-router-dom'

import {
  Container,
  Button,
  Description,
  Image,
  ImageContainer,
  Subtitle,
  TextContainer,
  Title,
  Overlay,
} from './styles'

import { Footer } from '../../components/Footer'

import imgBarber from '../../assets/imgBarber.png'

export function Home() {
  return (
    <>
      <Container>
        <TextContainer>
          <Title>
            <span>Barber</span>shop
          </Title>
          <Subtitle>Estilo clássico para homens modernos.</Subtitle>
          <Description>
            Confie em nós para transformar você em uma lenda.
          </Description>
          <Description>
            Com uma combinação única de tradição e inovação, nossa barbearia
            oferece uma experiência excepcional, onde a arte de aparar, modelar
            e transformar é realizada com maestria.
          </Description>
          <Button title="Clica para agendar um horario">
            <Link to="/booking">Marcar Horário</Link>
          </Button>
        </TextContainer>
        <ImageContainer>
          <Overlay /> <Image src={imgBarber} alt="Image" />
        </ImageContainer>
      </Container>
      <Footer />
    </>
  )
}
