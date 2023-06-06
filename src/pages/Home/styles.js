import styled from 'styled-components'
import { shade } from 'polished'

import imgBarber from '../../assets/imgBarber.png'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    height: 100vh;
  }
`

export const TextContainer = styled.div`
  flex: 1;
  margin: 5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Title = styled.h1`
  font-size: 52px;
  color: #fffbf6;
  margin-bottom: 10px;

  span {
    color: #c38b58;
  }
`

export const Subtitle = styled.h1`
  font-size: 52px;
  color: #fffbf6;
  margin-bottom: 20px;
`

export const Description = styled.p`
  font-size: 20px;
  color: #dfdcda;
  margin-bottom: 20px;

  max-width: 450px;
`

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fffbf6;
  background-color: #c38b58;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  transition: ease-in-out 0.3s;

  width: 450px;
  height: 38px;

  &:hover {
    background-color: ${shade(0.3, '#c38b58')};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  filter: brightness(20%) blur(1px);

  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Image = styled.img`
  max-width: 100vw;
  height: 80vh;

  -webkit-mask-image: linear-gradient(
    to top left,
    transparent 0%,
    transparent 10%,
    white 90%,
    white 100%
  ); /* Efeito de bordas borradas */

  mask-image: linear-gradient(
    to top left,
    transparent 0%,
    transparent 10%,
    white 90%,
    white 100%
  ); /* Efeito de bordas borradas */
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0); /* Cor de sobreposição */
`
