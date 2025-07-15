import React from 'react';
import ClaimForm from './components/ClaimForm';
import CaseReviewCard from './components/CaseReviewCard';
import InfoAlertCard from './components/InfoAlertCard';
import bgImage from "./assets/bg.png";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* LEFT SECTION */}
        <div className="lg:w-2/5 flex flex-col justify-between gap-5 h-full">
          {/* Set responsive order here */}
          <div className="order-1 lg:order-2">
            <InfoAlertCard />
          </div>
          <div className="order-2 lg:order-1 !h-[480px] lg:!h-[420px]">
            <CaseReviewCard />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:w-3/5 order-3">
          <ClaimForm />
        </div>
      </div>
    </div>
  );
}

export default App;
