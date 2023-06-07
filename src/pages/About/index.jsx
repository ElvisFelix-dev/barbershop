import CountUp from 'react-countup'

import {
  Container,
  Description,
  Image,
  ImageContainer,
  Subtitle,
  TextContainer,
  Overlay,
  BoxDados,
  BoxInfo,
  BoxSubTitle,
  BoxTitle,
} from './styles'

import { Footer } from '../../components/Footer'

import imgProfile from '../../assets/imgProfile.jpg'

export function About() {
  return (
    <>
      <Container>
        <ImageContainer>
          <Overlay /> <Image src={imgProfile} alt="Image" />
        </ImageContainer>
        <TextContainer>
          <Subtitle>Sobre-nós</Subtitle>
          <Description>
            Na Barbershop, estamos comprometidos em oferecer uma experiência
            única em cuidados masculinos. Fundada pelo talentoso e renomado
            barbeiro Wes Borland, nossa barbearia se destaca pela paixão e
            habilidade incomparáveis. Com anos de experiência e expertise no
            setor, Wes Borland se tornou uma referência no mundo dos cortes de
            cabelo e barbas estilizadas.
          </Description>
          <Description>
            Além de oferecer cortes e estilos impecáveis, também nos preocupamos
            com o bem-estar dos nossos clientes. Utilizamos produtos de alta
            qualidade, garantindo resultados excepcionais e cuidando da saúde e
            vitalidade dos cabelos e da pele.
          </Description>
          <Description>
            Na Barbershop, acreditamos que o estilo é uma expressão individual.
            Valorizamos a singularidade de cada cliente, trabalhando em estreita
            colaboração para criar looks personalizados que reflitam sua
            personalidade e realcem sua beleza única.
          </Description>
          <BoxInfo>
            <BoxDados>
              <BoxTitle>
                <CountUp end={10} start={0} delay={2} />
              </BoxTitle>
              <BoxSubTitle>Anos de experiencia</BoxSubTitle>
            </BoxDados>
            <BoxDados>
              <BoxTitle>
                <CountUp end={8} start={0} delay={2} />
              </BoxTitle>
              <BoxSubTitle>Barbeiros</BoxSubTitle>
            </BoxDados>
            <BoxDados>
              <BoxTitle>
                + <CountUp end={300} start={0} delay={2} />
              </BoxTitle>
              <BoxSubTitle>Clients</BoxSubTitle>
            </BoxDados>
          </BoxInfo>
        </TextContainer>
      </Container>
      <Footer />
    </>
  )
}
