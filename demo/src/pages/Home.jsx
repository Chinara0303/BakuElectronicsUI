import React from 'react'
import Header from '../components/Layout/Header/Header'
import '../assets/home/Home.scss'
import Main from '../components/Main/Main'
import Footer from '../components/Layout/Footer/Footer'

function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home