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
            <IconLink href="https://www.facebook.com">
              <FaWhatsapp />
            </IconLink>
            <IconLink href="https://www.twitter.com">
              <FaGithub />
            </IconLink>
            <IconLink href="https://www.twitter.com">
              <FaLinkedin />
            </IconLink>
            <IconLink href="https://www.instagram.com">
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
