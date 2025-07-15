
import React from 'react';

export default function FreeCaseReviewCard() {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-visible flex items-stretch">
      {/* helper text */}
      <div className="absolute top-4 right-6 text-xs text-gray-500">
        We are here to help!
      </div>

      {/* left cream panel */}
      <div className="relative w-1/2 z-10">
        <div className="
          relative bg-[#FEF8F1]
          rounded-l-2xl rounded-tr-[5rem] rounded-br-[5rem]
          p-8 flex flex-col h-full overflow-hidden
        ">
          {/* blurred orb, clipped to half */}
          <div className="
            absolute left-1/2 top-1/2
            transform -translate-x-1/2 -translate-y-1/2
            w-44 h-44
            bg-gradient-to-br from-purple-600 to-purple-900
            rounded-full blur-2xl opacity-70
          "/>

          {/* title + subtitle */}
          <div>
            <h3 className="text-3xl font-bold leading-snug text-black">
              Free<br/>Case<br/>Review
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              We are here to help!
            </p>
          </div>

          {/* list items */}
          <ul className="mt-6 space-y-3 text-sm text-gray-800">
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-gray-300 mr-3 inline-block"/>
              100% Confidential
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-purple-600 mr-3 inline-block"/>
              No Win, No Fee
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-500 mr-3 inline-block"/>
              Free Case Evaluation
            </li>
          </ul>

          {/* contact button bottom‑right */}
           <div className="mt-auto flex justify-end">
            <button className="
              inline-flex items-center gap-2
              bg-[#C5873F] text-white
              px-6 py-2 rounded-full hover:opacity-90
            ">
              Contact us
              <span className="text-lg leading-none">→</span>
            </button>
          </div>
       
        </div>
      </div>

      {/* right solid orb + circular text */}
      <div className="w-1/2 relative flex items-center justify-center">
        <div className="absolute w-44 h-44 bg-gradient-to-br from-purple-600 to-blue-700 rounded-full"/>
        <svg className="relative w-36 h-36" viewBox="0 0 100 100">
          <defs>
            <path id="circlePath" d="M50,50 m0,-40 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80"/>
          </defs>
          <text
            fill="white"
            fontSize="6"
            fontWeight="bold"
            textAnchor="middle"
            transform="rotate(-90,50,50)"
          >
            <textPath xlinkHref="#circlePath" startOffset="50%">
              ONLY 6 SLOTS LEFT
            </textPath>
          </text>
        </svg>
     
      </div>
          
       
    </div>
  );
}
