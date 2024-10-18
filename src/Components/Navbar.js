import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>

        <div className='navLogo'>
        <img src="/images/logo.png" alt="logo" />
        <h1>usePopcorn</h1>
        </div>

        <div className='inputSection'>
            <input type="text" placeholder='Search' />
        </div>

        <div className='results'>
            <p>Found 0 top results</p>
        </div>
    </div>
  )
}

export default Navbar