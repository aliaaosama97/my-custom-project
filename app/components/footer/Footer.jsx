import React from 'react'
import footer1 from '../../assets/footer1.png'
import footer2 from '../../assets/footer2.png'
import footer3 from '../../assets/footer3.png'
import {Bebas_Neue, Oswald, Raleway} from 'next/font/google'

const bebas = Bebas_Neue({
  weight: '400', // Optional, choose weight
  subsets: ['latin'], // Optional, choose subset
});
const oswald = Oswald({
  weight: '600', // Optional, choose weight
  subsets: ['latin'], // Optional, choose subset
});
const raleway = Raleway({
  weight: '400', // Optional, choose weight
  subsets: ['latin'], // Optional, choose subset
});

export default function Footer() {
  return (
    <footer className="font-bold text-black mt-36">
        <h3 className={`${bebas.className} mb-4 font-extrabold`}>What Do You Get</h3>
        <div className="flex justify-between">
          <div className="flex items-center gap-4 ">
            {/* Image */}
          <img
            src={footer1.src}
            alt="logo"
            className="relative z-10"
          />
            <p className={`${oswald.className} uppercase`}>Customized <br/>Fitness Plan</p>
          </div>
          <div className="flex items-center gap-4">
             {/* Image */}
          <img
            src={footer2.src}
            alt="logo"
            className="relative z-10"
          />
            <p className={`${oswald.className} uppercase`}>Keep You Fit <br/>and Strong</p>
          </div>
          <div className="flex items-center gap-4">
             {/* Image */}
          <img
            src={footer3.src}
            alt="logo"
            className="relative z-10"
          />
            <p className={`${oswald.className} uppercase`}>High Intensity<br/>Training</p>
          </div>
        </div>
      </footer>
  )
}
