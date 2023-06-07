import { Footer } from '../../components/Footer'

import { Container, Content, Background, Button } from './styles'

export function Booking() {
  return (
    <>
      <Container>
        <Content>
          <form>
            <h1>Marque seu horário</h1>

            <input type="text" id="name" placeholder="Nome completo" />
            <input type="tel" id="phone" placeholder="Seu Whatsaap" />
            <input type="email" id="email" placeholder="E-mail" />
            <input type="date" placeholder="Escolha uma data" />
            <input type="time" placeholder="Escolha o horário" />
            <br />
            <span>*Iremos confirmar pelo Whatsaap/Email*</span>

            <Button type="submit">Marcar horário</Button>
          </form>
        </Content>

        <Background />
      </Container>
      <Footer />
    </>
  )
}
