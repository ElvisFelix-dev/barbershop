import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { toast } from 'react-toastify'

import { Footer } from '../../components/Footer'

import { Container, Content, Background, Button } from './styles'

export function Booking() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [phone, setPhone] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    if (
      name === '' ||
      email === '' ||
      date === '' ||
      hour === '' ||
      phone === ''
    ) {
      toast.warning('Preencha os campos.')
      return
    }

    emailjs
      .sendForm(
        'service_e7d7usw',
        'template_m9002hb',
        e.target,

        'avv6uQ0puupw5tSE4',
      )
      .then(
        (response) => {
          console.log('Agendamento Enviado', response.status, response.text)
          setEmail('')
          setDate('')
          setHour('')
          setName('')
          setPhone('')
          toast.success('Agendamento enviado')
        },
        (err) => {
          console.log('Erro: ', err)
          toast.error('Agendamento não enviado.')
        },
      )
  }

  return (
    <>
      <Container>
        <Content>
          <form onSubmit={sendEmail}>
            <h1>Marque seu horário</h1>

            <input
              type="text"
              id="name"
              placeholder="Nome completo"
              value={name}
              name="from_name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="tel"
              id="phone"
              placeholder="Seu Whatsaap"
              value={phone}
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              type="email"
              id="email"
              placeholder="Melhor email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="date"
              placeholder="Escolha uma data"
              value={date}
              name="date"
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              placeholder="Escolha o horário"
              value={hour}
              name="hour"
              onChange={(e) => setHour(e.target.value)}
            />
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
