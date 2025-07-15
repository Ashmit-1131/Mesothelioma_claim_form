import React from 'react';
import { Link } from 'react-router-dom';
import PhoneIcon from '@heroicons/react/24/solid/PhoneIcon';
import CheckIcon from '@heroicons/react/24/solid/CheckIcon';


function Home() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="bg-indigo-600 text-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold flex items-center">
          <PhoneIcon className="w-6 h-6 mr-2" /> Free Case Review
        </h2>
        <p className="mt-2">Only 6 slots left</p>
        <Link
          to="/claim"
          className="mt-4 inline-block bg-white text-indigo-600 font-medium px-4 py-2 rounded hover:bg-gray-100"
        >
          Contact Us
        </Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-xl font-bold">Have you or a loved one been affected by Mesothelioma?</h1>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start">
            <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mr-2" />
            <span>Worked around asbestos products?</span>
          </li>
          <li className="flex items-start">
            <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mr-2" />
            <span>Found lumps or tissue changes?</span>
          </li>
          <li className="flex items-start">
            <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mr-2" />
            <span>Diagnosed with Mesothelioma?</span>
          </li>
        </ul>
        <p className="mt-4">We can help. Contact us for a free case review and consultation.</p>
        <Link
          to="/claim"
          className="mt-4 inline-block bg-indigo-600 text-white font-medium px-4 py-2 rounded hover:bg-indigo-700"
        >
          Start Your Claim Now
        </Link>
      </div>
    </div>
  );
}

export default Home;
