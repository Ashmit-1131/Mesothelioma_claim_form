import React, { useState } from 'react';

const ClaimForm = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    dob: '', jobTitle: '', diagnosisDate: '', diagnosisType: '', story: ''
  });
  const [checkedPrivacy, setCheckedPrivacy] = useState(false);
  const [checkedHuman, setCheckedHuman] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    if (e.target.name === 'privacy') setCheckedPrivacy(e.target.checked);
    if (e.target.name === 'human') setCheckedHuman(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkedPrivacy || !checkedHuman) {
      setStatus('error');
      return;
    }
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', dob: '', jobTitle: '', diagnosisDate: '', diagnosisType: '', story: '' });
        setCheckedPrivacy(false);
        setCheckedHuman(false);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-blue-700/30 backdrop-blur-lg rounded-xl p-8 shadow-lg">
      <h2 className="text-2xl text-white font-semibold mb-6">Claim Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* //All Input fields */}
          <div>
            <label className="block text-sm text-white">First Name</label>
            <input
              type="text" name="firstName" value={formData.firstName}
              onChange={handleChange} placeholder="First Name" required
              className="mt-1 w-full border-b border-white bg-transparent text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-white">Last Name</label>
            <input
              type="text" name="lastName" value={formData.lastName}
              onChange={handleChange} placeholder="Last Name" required
              className="mt-1 w-full border-b border-white bg-transparent text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-white">Phone Number</label>
            <input
              type="tel" name="phone" value={formData.phone}
              onChange={handleChange} placeholder="Phone" required
              className="mt-1 w-full border-b border-white bg-transparent text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-white">Email Address</label>
            <input
              type="email" name="email" value={formData.email}
              onChange={handleChange} placeholder="Email" required
              className="mt-1 w-full border-b border-white bg-transparent text-white focus:outline-none"
            />
          </div>
          <div className="relative">
            <label className="block text-sm text-white">Date of Birth</label>
            <input
              type="date" name="dob" value={formData.dob}
              onChange={handleChange} required
              className="mt-1 w-full border-b border-white bg-transparent text-white focus:outline-none"
            />
            <span className="absolute right-3 top-8 text-white">📅</span>
          </div>
          <div>
            <label className="block text-sm text-white">Job Title</label>
            <input
              type="text" name="jobTitle" value={formData.jobTitle}
              onChange={handleChange} placeholder="Job Title" required
              className="mt-1 w-full border-b border-white bg-transparent text-white focus:outline-none"
            />
          </div>
          <div className="relative">
            <label className="block text-sm text-white">Date of Diagnosis</label>
            <input
              type="date" name="diagnosisDate" value={formData.diagnosisDate}
              onChange={handleChange} required
              className="mt-1 w-full border-b border-white bg-transparent text-white focus:outline-none"
            />
            <span className="absolute right-3 top-8 text-white">📅</span>
          </div>
          <div>
            <label className="block text-sm text-white">Type of Diagnosis</label>
            <select
              name="diagnosisType" value={formData.diagnosisType}
              onChange={handleChange} required
              className="mt-1 w-full border-b border-white bg-transparent text-white focus:outline-none"
            >
              <option value="" disabled>Select...</option>
              <option value="pleural">Pleural Mesothelioma</option>
              <option value="peritoneal">Peritoneal Mesothelioma</option>
              <option value="pericardial">Pericardial Mesothelioma</option>
              <option value="testicular">Testicular Mesothelioma</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-white">Your Story (optional)</label>
            <textarea
              name="story" value={formData.story}
              onChange={handleChange} rows="4"
              placeholder="Tell us your story..."
              className="mt-1 w-full border border-white bg-transparent text-white focus:outline-none resize-none"
            ></textarea>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-start space-x-2">
            <input type="checkbox" name="privacy" checked={checkedPrivacy} onChange={handleCheckboxChange} required />
            <label className="text-xs text-white">I agree to the <a href="#" className="underline">privacy policy</a>.</label>
          </div>
          <div className="flex items-start space-x-2 mt-2">
            <input type="checkbox" name="human" checked={checkedHuman} onChange={handleCheckboxChange} required />
            <label className="text-xs text-white">I'm not a robot</label>
          </div>
        </div>

        {status === 'success' && <p className="mt-4 text-green-300">Submitted successfully!</p>}
        {status === 'error' && <p className="mt-4 text-red-300">Submission failed. Please check required fields.</p>}

        <button type="submit" className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ClaimForm;
