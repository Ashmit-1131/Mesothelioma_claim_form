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
        <div className="lg:w-2/5 flex flex-col gap-6">
          <CaseReviewCard />
          <InfoAlertCard />
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
