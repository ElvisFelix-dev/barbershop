import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsFillTelephoneFill } from 'react-icons/bs'

import imgLogo from '../../assets/imgLogo.png'
import {
  Container,
  Logo,
  NavItem,
  NavMenu,
  PhoneNumber,
  HamburgerIcon,
  HamburgerMenu,
} from './styles'

export function NavBar() {
  const [ismenuopen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!ismenuopen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }
  return (
    <Container>
      <Link to="/">
        <Logo src={imgLogo} alt="Logo" />
      </Link>
      <HamburgerMenu onClick={toggleMenu}>
        <HamburgerIcon isopen={ismenuopen.toString()} />
        <HamburgerIcon isopen={ismenuopen.toString()} />
        <HamburgerIcon isopen={ismenuopen.toString()} />
      </HamburgerMenu>
      <NavMenu ismenuopen={ismenuopen.toString()} onClick={closeMenu}>
        <NavItem>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/about" onClick={closeMenu}>
            Sobre
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contact" onClick={closeMenu}>
            Contato
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/services" onClick={closeMenu}>
            Serviços
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/gallery" onClick={closeMenu}>
            Galeria
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/booking" onClick={closeMenu}>
            Marcar Horário
          </Link>
        </NavItem>
      </NavMenu>
      <PhoneNumber href="tel:+55 11 1234-5678" onClick={closeMenu}>
        <BsFillTelephoneFill />
        (11) 1234-5678
      </PhoneNumber>
    </Container>
  )
}
