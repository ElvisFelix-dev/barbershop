import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const TextContainer = styled.div`
  flex: 1;
  margin: 5rem;

  @media (max-width: 768px) {
    flex: none;
    margin: 2rem;
    text-align: center;
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
  font-size: 16px;
  color: #dfdcda;
  margin-bottom: 20px;

  max-width: 80%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    max-width: 100%;
    justify-content: center;
    align-items: center;
  }
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 80vh;

  border-radius: 15px;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0); /* Cor de sobreposição */
`

export const BoxInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const BoxDados = styled.div`
  text-align: center;
  color: #dfdcda;

  padding: 10px;
  border: 2px solid #c38b58;
  border-radius: 9px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin: 0.5rem;
  }
`

export const BoxTitle = styled.h3``
export const BoxSubTitle = styled.p``
