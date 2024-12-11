import React from 'react'
import Footer from '../footer/Footer'
import Logo from './a2.png'

export default function MainPage() {
  return (
    <main className="flex justify-between items-center px-10">
        {/* Left Section */}
        <div className="max-w-screen-md">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            Be Spirited, Fearless, an <br />
            Everyday Athlete
          </h1>
          <p className="text-gray-600 mb-6 text-sm">
            A Certified Running Coach And Personal Trainer For Over A Decade. I’ve Helped
            Thousands of Runners Through a Personalized Coaching and Fitness Club.
          </p>
           {/* Button */}
           <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600">
            View Plans
          </button>

          <Footer/>
        </div>

        {/* Right Section */}
        <div className="relative">
          {/* Red Accent */}
          <div className="absolute top-0 left-0 w-80 h-full bg-redMain -z-10"></div>
          {/* Image */}
          <img
            src={Logo}
            alt="Athlete jumping"
            className="relative z-10"
          />
          
        </div>
      </main>
  )
}
