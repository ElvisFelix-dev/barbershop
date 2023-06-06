import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #3c3a39;
  color: #ffffff;
  padding: 20px;
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
`

export const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }
`

export const FooterText = styled.p`
  font-size: 14px;
`

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`

export const IconLink = styled.a`
  color: #ffffff;
  margin-right: 10px;
  font-size: 20px;

  &:hover {
    opacity: 0.8;
  }
`
