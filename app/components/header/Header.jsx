import React from 'react'
import Logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'
import {Bebas_Neue, Oswald, Raleway} from 'next/font/google'

const bebas = Bebas_Neue({
  weight: '400', // Optional, choose weight
  subsets: ['latin'], // Optional, choose subset
});
const oswald = Oswald({
  weight: '600', // Optional, choose weight
  subsets: ['latin'], // Optional, choose subset
});
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
            <h1 className={`${bebas.className} text-lg font-extrabold text-black uppercase tracking-wide`}>
              FITNESS CLUB
            </h1>
          </div>
        <div className={`flex gap-10 text-base text-black uppercase font-semibold`}>
          <a href="/" className={`${oswald.className} hover:text-red-700`}>Join<br/> Team</a>
          <a href="/" className={`${oswald.className} hover:text-red-700`}>Free<br/> Pass</a>
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
