import { Link } from 'react-router-dom'

import {
  Button,
  Card,
  Container,
  Description,
  Price,
  Title,
  TitleHair,
  ButtonContainer,
  Heading,
  Box,
} from './styles'
import { Footer } from '../../components/Footer'

export function Service() {
  const haircuts = [
    {
      name: 'Corte Clássico',
      description: 'Corte tradicional com tesoura',
      price: '$30',
    },
    {
      name: 'Corte Moderno',
      description: 'Corte com técnicas modernas',
      price: '$35',
    },
    {
      name: 'Corte Social',
      description: 'Corte elegante para ocasiões especiais',
      price: '$40',
    },
  ]

  const beardCuts = [
    {
      name: 'Barba Rústica',
      description: 'Barba despojada com aspecto natural',
      price: '$20',
    },
    {
      name: 'Barba Estilizada',
      description: 'Barba com desenhos e estilos',
      price: '$25',
    },
    {
      name: 'Barba Completa',
      description: 'Cuidado completo para barba',
      price: '$30',
    },
  ]

  const otherServices = [
    {
      name: 'Massagem Relaxante',
      description: 'Massagem para alívio do estresse',
      price: '$50',
    },
    {
      name: 'Tratamento Capilar',
      description: 'Tratamento intensivo para cabelos',
      price: '$45',
    },
    {
      name: 'Coloração de Cabelo',
      description: 'Coloração para mudar o visual',
      price: '$55',
    },
  ]
  return (
    <>
      <div style={{ height: '100vh' }}>
        <Heading>Nossos Serviços</Heading>
        <Container>
          <Card title="Nome dos cortes, descrição do corte e valor">
            <TitleHair>Cortes de Cabelo</TitleHair>
            {haircuts.map((haircut, index) => (
              <div key={index}>
                <Box>
                  <Title>{haircut.name}</Title>
                  <Price>{haircut.price}</Price>
                </Box>
                <Description>{haircut.description}</Description>
              </div>
            ))}
          </Card>

          <Card title="Nome dos cortes, descrição do corte e valor">
            <TitleHair>Cortes de Barba</TitleHair>
            {beardCuts.map((beardCut, index) => (
              <div key={index}>
                <Box>
                  <Title>{beardCut.name}</Title>
                  <Price>{beardCut.price}</Price>
                </Box>
                <Description>{beardCut.description}</Description>
              </div>
            ))}
          </Card>

          <Card title="Nome dos cortes, descrição do corte e valor">
            <TitleHair>Outros Serviços</TitleHair>
            {otherServices.map((service, index) => (
              <div key={index}>
                <Box>
                  <Title>{service.name}</Title>
                  <Price>{service.price}</Price>
                </Box>
                <Description>{service.description}</Description>
              </div>
            ))}
          </Card>
          <Card title="Nome dos cortes, descrição do corte e valor">
            <TitleHair>Cortes de Cabelo</TitleHair>
            {haircuts.map((haircut, index) => (
              <div key={index}>
                <Box>
                  <Title>{haircut.name}</Title>
                  <Price>{haircut.price}</Price>
                </Box>
                <Description>{haircut.description}</Description>
              </div>
            ))}
          </Card>

          <Card title="Nome dos cortes, descrição do corte e valor">
            <TitleHair>Cortes de Barba</TitleHair>
            {beardCuts.map((beardCut, index) => (
              <div key={index}>
                <Box>
                  <Title>{beardCut.name}</Title>
                  <Price>{beardCut.price}</Price>
                </Box>
                <Description>{beardCut.description}</Description>
              </div>
            ))}
          </Card>
          <Card title="Nome dos cortes, descrição do corte e valor">
            <TitleHair>Outros Serviços</TitleHair>
            {otherServices.map((service, index) => (
              <div key={index}>
                <Box>
                  <Title>{service.name}</Title>
                  <Price>{service.price}</Price>
                </Box>
                <Description>{service.description}</Description>
              </div>
            ))}
          </Card>
          <ButtonContainer>
            <Button title="Clica para agendar um horario">
              <Link to="/booking">Marcar Horário</Link>
            </Button>
          </ButtonContainer>
        </Container>
        <Footer />
      </div>
    </>
  )
}
