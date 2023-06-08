import {
  FaHeart,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

import {
  FooterContainer,
  FooterContent,
  FooterLinks,
  FooterText,
  IconLink,
  SocialIcons,
} from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <SocialIcons>
            <IconLink
              href="https://wa.me/5516996318063"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </IconLink>
            <IconLink
              href="https://github.com/ElvisFelix-dev"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </IconLink>
            <IconLink
              href="https://www.linkedin.com/in/elvis-felix/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </IconLink>
            <IconLink
              href="https://www.instagram.com/2system_dev/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </IconLink>
          </SocialIcons>
        </FooterLinks>
        <FooterText>
          Desenvolvido por 2System &copy; {new Date().getFullYear()}
        </FooterText>
      </FooterContent>
    </FooterContainer>
  )
}
