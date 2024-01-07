import React from 'react'
import nike from "../assets/nike.png";
import adidas from "../assets/adidas.png";
import calvin from '../assets/calvin-klein.png';
import levis from '../assets/levis.png'
export default function Brand() {
  return (
    <div className="bg-white shadow-xl mx-auto w-3/4 my-6 rounded-2xl">
          <div className="max-w-7xl px-4 py-2">
            <div className="flex justify-between font-bold border mx-6 mt-3 px-4 py-1">
              <div>
                <img
                  src={adidas}
                  alt="Colorful Background"
                />
              </div>
              <div>
              <img
                  src={levis}
                  alt="Colorful Background"
                />
              </div>
              <div>
              <img
                  src={nike}
                  alt="Colorful Background"
                />
                </div>
              <div>
              <img
                  src={calvin}
                  alt="Colorful Background"
                />
              </div>
            </div>
          </div>
          
        </div>
  )
}
