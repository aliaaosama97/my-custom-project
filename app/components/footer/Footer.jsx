import React from 'react'
import footer1 from '../../assets/footer1.png'
import footer2 from '../../assets/footer2.png'
import footer3 from '../../assets/footer3.png'


export default function Footer() {
  return (
    <footer className="font-bold text-black mt-36">
        <h3 className='mb-4 text-sm '>What Do You Get</h3>
        <div className="flex justify-between">
          <div className="flex items-center gap-4 ">
            {/* Image */}
          <img
            src={footer1.src}
            alt="logo"
            className="relative z-10"
          />
            <p>Customized <br/>Fitness Plan</p>
          </div>
          <div className="flex items-center gap-4">
             {/* Image */}
          <img
            src={footer2.src}
            alt="logo"
            className="relative z-10"
          />
            <p>Keep You Fit <br/>and Strong</p>
          </div>
          <div className="flex items-center gap-4">
             {/* Image */}
          <img
            src={footer3.src}
            alt="logo"
            className="relative z-10"
          />
            <p>High Intensity<br/>Training</p>
          </div>
        </div>
      </footer>
  )
}
