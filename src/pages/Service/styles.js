import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Card = styled.div`
  width: 30%;
  height: 350px;

  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #c38b58;
  border-radius: 5px;
  background-color: #181818;
  box-shadow: 0 2px 4px #c38b58;

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const TitleHair = styled.p`
  font-size: 25px;
  margin-bottom: 10px;

  color: #fffbf6;

  text-align: center;
`

export const Box = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
`

export const Title = styled.span`
  font-size: 18px;
  margin-bottom: 10px;

  margin-top: 10px;
  color: #dfdcda;
`

export const Description = styled.p`
  font-size: 14px;

  margin-bottom: 10px;
  color: #8d8b8a;
`

export const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #c38b58;

  font-family: 'Numans';
`

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #c38b58;
  color: #fffbf6;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  text-align: center;
  align-items: center;

  &:hover {
    background-color: #a77144;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  text-align: center;
  align-items: center;

  padding-bottom: 3rem;
`

export const Heading = styled.h1`
  font-size: 46px;
  text-align: center;

  color: #fffbf6;

  padding-bottom: 3rem;
`
