import React from 'react'
import Navigation from './Navigation';

function Header() {
  return (
    <div>
      <header>
        <div className='top'>
          <p>İndi al, 3 ay sonra ödə! Yalnız onlayn!</p>
        </div>
        <Navigation/>
      </header>
      
    </div>
  )
}

export default Header