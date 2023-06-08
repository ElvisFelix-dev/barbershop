import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const MapContainer = styled.div`
  flex: 1;
  display: flex;

  height: 600px;
  width: 100vw;

  @media (max-width: 768px) {
    height: 100vh; /* Ocupa toda a altura da tela */
    align-items: center;
    justify-content: center;
  }
`

export const ContactContainer = styled.div`
  flex: 1;

  height: 600px;

  @media (max-width: 768px) {
    flex: none;
    margin: 2rem;
    text-align: center;
  }
`

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScheduleHead = styled.h3`
  display: flex;
  align-items: center;

  font-size: 20px;
  color: #fffbf6;

  margin-bottom: 15px;

  svg {
    padding-left: 5px;
  }
`

export const ScheduleContent = styled.div`
  display: flex;
  justify-content: space-between;

  width: 350px;

  p {
    color: #8d8b8a;
    margin-bottom: 15px;
  }

  span {
    color: #c38b58;
  }
`

export const AddressContainer = styled.div`
  p {
    color: #8d8b8a;
    margin-bottom: 15px;
  }
`

export const AddressContent = styled.div``

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 20px;
    color: #8d8b8a;
    align-items: center;

    transition: ease-in-out 0.3s;

    &:hover {
      /* Estilos quando o elemento está em hover */
      /* Por exemplo, alterar a cor do texto */
      color: ${shade(0.3, '#8d8b8a')};
    }
  }

  svg {
    margin-right: 5px;
  }
`

export const SocialLinks = styled.div`
  p {
    font-size: 20px;
    color: #fffbf6;
    margin-bottom: 10px;
  }

  a {
    padding: 15px;

    transition: ease-in-out 0.3s;
  }

  svg {
    color: #c38b58;

    transition: ease-in-out 0.3s;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Subtitle = styled.h1`
  font-size: 52px;
  color: #fffbf6;
  margin-bottom: 20px;
`

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #c38b58;
  color: #fffbf6;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  width: 50%;

  margin-top: 30px;

  &:hover {
    background-color: #a77144;
  }
`

export const FooterContainer = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
`
