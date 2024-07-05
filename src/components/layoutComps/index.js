import React from 'react'
import Header from '../header'
import Footer from '../footer'

function LayoutComps({children}) {
  return (
    <div>
      <header className='sticky top-0 z-20'>
        <Header/>
      </header>
      <main className='z-0'>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default LayoutComps
