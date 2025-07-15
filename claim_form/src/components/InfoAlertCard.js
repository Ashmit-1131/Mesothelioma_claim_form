import React from 'react';

export default function InfoAlertCard() {
  return (
    <div className="bg-[#fef3f2] rounded-2xl shadow-lg p-6  ">
      <h3 className="text-lg font-semibold text-[#611a15]">
        Have you or a loved one been affected by Mesothelioma?
      </h3>
      <p className="mt-2 text-sm text-gray-700">
        As a woman, you’ve carried the weight of care, love, and resilience. Now it’s time someone stands with you.
      </p>
      <ul className="list-disc list-inside mt-3 text-sm text-gray-800 space-y-1">
        <li>Secondary Asbestos exposure is common</li>
        <li>Misdiagnosis delays are more frequent in women</li>
        <li>Women have won significant legal settlements</li>
      </ul>
    </div>
  );
}
