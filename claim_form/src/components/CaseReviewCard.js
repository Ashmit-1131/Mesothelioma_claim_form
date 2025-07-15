
import React from 'react';
import { ShieldCheck, CheckCircle2, BadgeDollarSign } from "lucide-react";

export default function FreeCaseReviewCard() {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-visible flex flex-col items-stretch items-center justify-center !h-full p-5">
      {/* helper text */}
      <div className="top-4 right-6 text-xs text-gray-500 flex justify-end">
        We are here to help!
      </div>

      {/* left cream panel */}



      {/* right solid orb + circular text */}
      <div className="w-full relative flex items-center justify-center !h-full">
        <div className="absolute w-44 h-44 bg-gradient-to-br from-purple-900 to-blue-700 rounded-full" />
        <svg className="relative w-36 h-36" viewBox="0 0 100 100">
          <defs>
            <path id="circlePath" d="M50,50 m0,-40 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80" />
          </defs>
          <text
            fill="white"
            fontSize="13"
            fontWeight="font-medium tracking-wide text-[12px] uppercase"
            textAnchor="middle"
            transform="rotate(-90,50,50)"
          >
            <textPath xlinkHref="#circlePath" startOffset="50%">
              ONLY 6 SLOTS LEFT
            </textPath>
          </text>
        </svg>

      </div>
      <div className="mt-auto flex justify-end">
        <button className="
              inline-flex items-center gap-2
              bg-[#C5873F] text-white
              px-2 lg:px-6 lg:py-2 pb-0.5 rounded-full hover:opacity-90
            ">
          Contact us
          <span className="text-lg leading-none">→</span>
        </button>
      </div>



      <div className="absolute w-[45%] z-10 opacity-70 ">
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
            bg-gradient-to-br from-purple-900 to-purple-900
            rounded-full blur-2xl opacity-70
          "/>

          {/* title + subtitle */}
          <div>
            <h3 className="text-2xl font-bold leading-snug text-black">
              Free<br/>Case<br/>Review
            </h3>
           <p className="text-sm text-white mt-2 invisible">
  We are here to help!
</p>
          </div>

          {/* list items */}
      

<ul className="mt-6 space-y-3 text-sm text-gray-800">
  <li className="flex items-center">
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#dce3ec] ">
      <ShieldCheck className="w-4 h-4 text-[#4c6179]" />
    </span>
    100% Confidential
  </li>
  <li className="flex items-center">
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#d8d2dd] ">
      <CheckCircle2 className="w-4 h-4 text-[#5d4f67]" />
    </span>
    No Win, No Fee
  </li>
  <li className="flex items-center">
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#f8e7cd] ">
      <BadgeDollarSign className="w-4 h-4 text-[#b8860b]" />
    </span>
    Free Case Evaluation
  </li>
</ul>

        </div>
      </div>


    </div>
  );
}
