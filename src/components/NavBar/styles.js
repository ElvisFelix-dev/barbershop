import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: transparent;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Logo = styled.img`
  height: 40px;
  width: auto;
`

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    display: ${({ ismenuopen }) => (ismenuopen ? 'flex' : 'none')};
  }
`

export const NavItem = styled.li`
  margin-right: 20px;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }

  a {
    color: #c38b58;
  }

  a:hover {
    color: ${shade(0.3, '#c38b58')};
  }
`

export const PhoneNumber = styled.a`
  margin-right: 15px;
  color: #fffbf6;
  align-items: center;
  font-family: 'Numans';

  svg {
    margin-right: 10px;
  }

  transition: ease-in-out 0.3s;

  &:hover {
    color: ${shade(0.2, '#fffbf6')};
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 999;
  }
`

export const HamburgerIcon = styled.div`
  width: 25px;
  height: 3px;
  background-color: #ffffff;
  margin-bottom: 5px;
  transition: transform 0.3s, opacity 0.3s;

  &:last-child {
    margin-bottom: 0;
  }

  ${({ isopen }) =>
    isopen &&
    `
    &:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  `}
`
