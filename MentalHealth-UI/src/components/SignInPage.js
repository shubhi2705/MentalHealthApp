/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignInPage() {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (username && phone) {
      navigate('/profile', { state: { username } });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Sign In</h1>
        <p className="text-gray-600 mb-8">
          Please provide your name and phone number to access your personalized mental health journey. Your privacy is our priority.
        </p>

        <input
          className="mb-4 p-3 w-full rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="mb-6 p-3 w-full rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white px-8 py-3 rounded-lg w-full shadow-lg hover:bg-blue-700"
          onClick={handleSignIn}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default SignInPage;
*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignInPage() {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/profile', { state: { username, phone } });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              className="p-3 w-full rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <input
              className="p-3 w-full rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full shadow-lg hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
