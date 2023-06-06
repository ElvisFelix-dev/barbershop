import { FaHeart, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'

import './styles.css'

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__social">
          <a
            href="https://www.instagram.com/2system_dev/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={20} color="#2c5282" />
          </a>

          <a
            href="https://wa.me/5516996318063"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp size={20} color="#2c5282" />
          </a>
        </div>
        <p className="footer__copyright">
          Desenvolvido por 2System <FaHeart size={10} color="#2c5282" />
        </p>
      </footer>
    </>
  )
}
