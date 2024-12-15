import React from 'react'
import Logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-6">
        {/* Logo */}
        <div className="mb-6 flex">
            {/* logo Image */}
          <img
            src={Logo.src}
            alt="logo"
            className="relative z-10 w-8 h-8 mr-2"
          />
            <h1 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
              FITNESS CLUB
            </h1>
          </div>
        <div className="flex gap-6 text-base font-bold text-gray-800 uppercase tracking-wide">
          <a href="/" className="hover:text-red-700">Join <br/>Team</a>
          <a href="/" className="hover:text-red-700">Free<br/> Pass</a>
          <a href="/">
             {/* logo Image */}
            <img
              src={cart.src}
              alt="logo"
              className="relative z-10 mt-4"
            />
          </a>

        </div>
      </header>
  )
}
