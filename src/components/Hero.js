import React from 'react'
import hero from '../assets/hero.png'
export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-yellow-500 to-pink-500 text-white">
          {/* Colorful background */}
          <div className="absolute top-4 bottom-0 left-0">
            <img
              src={hero}
              alt="Colorful Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto flex items-center justify-center h-72">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                Your Text Here
              </h1>
              <p className="text-lg md:text-xl mt-4 mb-8">Your Subtitle Here</p>
              <button className="bg-white text-black px-6 py-3 rounded-full uppercase font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        </div>
  )
}
