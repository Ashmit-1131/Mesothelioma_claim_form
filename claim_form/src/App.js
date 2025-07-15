import React from 'react';
import ClaimForm from './components/ClaimForm';

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: "url('https://via.placeholder.com/1600')" }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* LEFT SECTION */}
        <div className="lg:w-2/5 flex flex-col gap-6">
          {/* Free Case Review Card */}
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg flex p-8">
            {/* Left half: text + button */}
            <div className="w-1/2">
              <h3 className="text-3xl font-bold leading-snug">
                Free<br />Case<br />Review
              </h3>
              <p className="text-sm text-gray-600 mt-1">We are here to help!</p>
              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>100% Confidential
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 mr-2">✔</span>No Win, No Fee
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 mr-2">✔</span>Free Case Evaluation
                </li>
              </ul>
              <div className="mt-8 flex justify-end">
                <button className="bg-[#C5873F] text-white px-6 py-2 rounded-full hover:opacity-90">
                  Contact us
                </button>
              </div>
            </div>
            {/* Right half: blurred orb + curved badge */}
            <div className="w-1/2 relative flex items-center justify-center">
              <div className="absolute w-40 h-40 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full filter blur-3xl"></div>
              <svg className="relative w-32 h-32" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circlePath"
                    d="M50,50 m0,-45 a45,45 0 1,1 0,90 a45,45 0 1,1 0,-90"
                  />
                </defs>
                <text fill="white" fontSize="8" fontWeight="bold">
                  <textPath xlinkHref="#circlePath" startOffset="25%">
                    ONLY 6 SLOTS LEFT
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Info Alert Card */}
          <div className="bg-rose-50 rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-semibold">
              Have you or a loved one been affected by Mesothelioma?
            </h3>
            <p className="mt-2 text-gray-700 text-sm">
              As a woman, you’ve carried the weight of care, love, and resilience. Now
              it’s time someone stands with you.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Secondary Asbestos exposure is common</li>
              <li>Misdiagnosis delays are more frequent in women</li>
              <li>Women have won significant legal settlements</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION: Claim Form */}
        <div className="lg:w-3/5">
          <ClaimForm />
        </div>
      </div>
    </div>
  );
}

export default App;
