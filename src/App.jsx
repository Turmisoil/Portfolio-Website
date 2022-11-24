import { useRef, useState } from 'react'
import { About } from './components/about/about'
import { Footer } from './components/footer/footer'
import { Main } from './components/Main/main'
import Navbar from './components/navbar/navbar'
import { SideContact } from './components/side/sideContact'
import './index.css'


function App() {

  return (
    <>
      <Navbar />
      <SideContact />
      <Main />
      <Footer />
    </>
  )
}

export default App
