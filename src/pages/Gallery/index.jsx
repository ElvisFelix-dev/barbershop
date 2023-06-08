import { useState } from 'react'

import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

import { galleryData } from '../../data/galleryData'

import { Container, Title } from './styles'

import { Footer } from '../../components/Footer'

export function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const openModal = (index) => {
    setIsModalOpen(true)
    setSelectedImageIndex(index)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImageIndex(0)
  }

  return (
    <>
      <Container title="Galeria de fotos da barbershop">
        <Title>Galeria</Title>
        <ImageGallery
          items={galleryData}
          showPlayButton={false}
          showThumbnails={false}
          onClick={openModal}
        />
      </Container>
      <Footer />
    </>
  )
}
