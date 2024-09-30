import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ProfilePage() {
  const location = useLocation();
  const { username, phone } = location.state || { username: '', phone: '' };

  const [name, setName] = useState(username || '');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [locationField, setLocationField] = useState('');
  const [email, setEmail] = useState('');
  const [areaOfInterest, setAreaOfInterest] = useState('');

  useEffect(() => {
    setName(username);
  }, [username]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-400 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Your Profile</h1>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            className="p-3 w-full rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Gender</label>
          <select
            className="p-3 w-full rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Date of Birth</label>
          <input
            className="p-3 w-full rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Location</label>
          <input
            className="p-3 w-full rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={locationField}
            onChange={(e) => setLocationField(e.target.value)}
            placeholder="Enter your location"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Phone</label>
          <input
            className="p-3 w-full rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100"
            type="tel"
            value={phone}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            className="p-3 w-full rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Area of Interest</label>
          <input
            className="p-3 w-full rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={areaOfInterest}
            onChange={(e) => setAreaOfInterest(e.target.value)}
            placeholder="What mental health topics are you interested in?"
          />
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full shadow-lg hover:bg-blue-700">
          Save Profile
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
