import React, { useEffect } from 'react'
import LowSec from './HomePage/LowSec'
import GalleryGrid from './HomePage/GalleryGrid'
import Hero from './HomePage/Hero'
import Layout from '../Layout'

function Home() {

  return (
    <Layout>
      <Hero />
      <GalleryGrid />
      <LowSec />
    </Layout>
  )
}

export default Home