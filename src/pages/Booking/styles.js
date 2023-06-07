import styled from 'styled-components'
import { shade } from 'polished'

import imgBgBooking from '../../assets/imgBgBooking.jpg'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  span {
    margin-top: 10px;
    color: #fffbf6;
  }

  h1 {
    color: #fffbf6;
  }

  img {
    width: 150px;
    heigth: 150px;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #fff;

      display: flex;
      align-items: center;

      &:focus {
        outline: none;
        border-color: #ff9000;
        box-shadow: 0 0 0 2px rgba(255, 144, 0, 0.2);
      }

      & + input {
        margin-top: 8px;
      }
    }
  }
`

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #c38b58;
  color: #fffbf6;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  width: 100%;

  margin-top: 10px;

  &:hover {
    background-color: #a77144;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${imgBgBooking}) no-repeat center;
  background-size: cover;
`
