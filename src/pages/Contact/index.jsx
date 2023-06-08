import { FiClock } from 'react-icons/fi'
import { IoLocationOutline } from 'react-icons/io5'
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa'

import { Map } from '../../components/Map'
import { Footer } from '../../components/Footer'

import {
  Container,
  MapContainer,
  ContactContainer,
  Subtitle,
  ScheduleContainer,
  ScheduleContent,
  AddressContainer,
  AddressContent,
  ContactContent,
  SocialLinks,
  ScheduleHead,
  Button,
  FooterContainer,
} from './styles'

export function Contact() {
  return (
    <>
      <Container>
        <MapContainer>
          <Map />
        </MapContainer>
        <ContactContainer>
          <Subtitle>Nosso Contato</Subtitle>
          <ScheduleContainer>
            <ScheduleHead>
              Agenda
              <FiClock size={20} />
            </ScheduleHead>

            <ScheduleContent>
              <p>Segunda a Sexta</p> <span>10hrs - 17hrs</span>
            </ScheduleContent>
            <ScheduleContent>
              <p>Sábados</p> <span>10hrs - 16hrs</span>
            </ScheduleContent>
          </ScheduleContainer>
          <AddressContainer>
            <ScheduleHead>
              Endereço
              <IoLocationOutline size={20} />
            </ScheduleHead>
            <AddressContent>
              <p>Rua Antonio Lima, 1000 - Bela Vista, São Paulo</p>
            </AddressContent>
          </AddressContainer>

          <ContactContent>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={20} color="#c38b58" />
              (11) 99999-9999
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaTelegram size={20} color="#c38b58" />
              (11) 99999-9999
            </a>

            <a href="mailto:contato@barber.com">
              <FaEnvelope size={20} color="#c38b58" />
              contato@barber.com
            </a>
          </ContactContent>
          <SocialLinks>
            <p>Nossas redes sociais</p>
            <a href="">
              <FaInstagram size={20} color="#c38b58" />
            </a>
            <a href="">
              <FaPinterest size={20} color="#c38b58" />
            </a>

            <a href="">
              <FaFacebook size={20} color="#c38b58" />
            </a>
          </SocialLinks>
          <Button type="submit">Marcar horário</Button>
        </ContactContainer>
      </Container>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  )
}
