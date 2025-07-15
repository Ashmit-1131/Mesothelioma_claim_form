import React from 'react';

export default function CaseReviewCard() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
      {/* Background image or color */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md"></div>

      <div className="relative flex h-full">
        {/* Left content panel */}
        <div className="w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold leading-snug">
              Free<br/>Case<br/>Review
            </h3>
            <p className="text-sm text-gray-600 mt-2">We are here to help!</p>
          </div>

          <ul className="space-y-2 mt-6 text-sm">
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✔</span>
              100% Confidential
            </li>
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✔</span>
              No Win, No Fee
            </li>
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✔</span>
              Free Case Evaluation
            </li>
          </ul>

          <div className="mt-8">
            <button className="px-6 py-2 bg-[#C5873F] text-white rounded-full hover:opacity-90">
              Contact us
            </button>
          </div>
        </div>

        {/* Right half: blur orb + curved text */}
        <div className="w-1/2 relative flex items-center justify-center">
          {/* big blurred orb */}
          <div className="absolute w-48 h-48 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full filter blur-2xl"></div>

          {/* circular text */}
          <svg className="relative w-32 h-32" viewBox="0 0 100 100">
            <defs>
              <path
                id="circlePath2"
                d="M50,50 m0,-45 a45,45 0 1,1 0,90 a45,45 0 1,1 0,-90"
              />
            </defs>
            <text fill="white" fontSize="8" fontWeight="bold">
              <textPath xlinkHref="#circlePath2" startOffset="25%">
                ONLY 6 SLOTS LEFT
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
