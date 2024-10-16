// src/components/SignIn.js

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import db from "../DB/Dexie"; // Import your Dexie database setup
import { useAuth } from "../Authcontext"; // Import the Auth context
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faKey } from '@fortawesome/free-solid-svg-icons';
import LanguageSelector from '../Context/LanguageSelector';
import { useTranslation } from 'react-i18next';

const SignInPage = () => {
  //const { login } = useAuth(); // Get the login function from Auth context
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const closeModal = () => {
    setShowModal(false);
    navigate("/dashboard"); // Redirect to dashboard on closing modal
  };

  const requestOTP = async () => {
    if (!phoneNumber) {
      setMessage("Please enter a phone number.");
      return;
    }
    try {
      var phoneNumber_new = `+91${phoneNumber}`;
      // Store the phone number in session storage
      sessionStorage.setItem("phoneNumber", `${phoneNumber}`);
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber: phoneNumber_new }),
      });

      if (!response.ok) {
        throw new Error("Failed to request OTP");
      }
      setIsOtpSent(true);
      setMessage("OTP sent! Please check your messages.");
    } catch (error) {
      setMessage(error.message);
      fetchOTPFromDB();
    }
  };

  const verifyOTP = async () => {
    if (!otp) {
      setMessage("Please enter the OTP.");
      return;
    }

    try {
      var phoneNumber_new = `+91${phoneNumber}`;
      const response = await fetch("http://localhost:5000/api/auth/verifyotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber: phoneNumber_new, otp }),
      });

      if (!response.ok) {
        throw new Error("Failed to verify OTP");
      }

      const result = await response.json();
      updatenewOTPinDB();
      //  login(); // Set isLoggedIn to true after successful OTP verification
      setMessage(result.message);
      setShowModal(true);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const fetchOTPFromDB = async () => {
    try {
      var phoneNumber_new = `+91${phoneNumber}`;
      const user = await db.users
        .where("phoneNumber")
        .equals(phoneNumber_new)
        .first();
      if (user) {
        setMessage(`OTP retrieved from local DB: ${user.otp}`);
      } else {
        setMessage("User not found in local database.");
      }
    } catch (error) {
      setMessage("Error fetching from local DB: " + error.message);
    }
  };
  const sending=t('sending');
  const requestOtp=t('requestOtp');
  const updatenewOTPinDB = async () => {
    try {
      var phoneNumber_new = `+91${phoneNumber}`;
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const localUser = await db.users
        .where("phoneNumber")
        .equals(phoneNumber_new)
        .first();
      if (localUser) {
        // Update the OTP and expiration time
        await db.users.update(localUser.id, {
          otp: otp,
        });
      }
    } catch {
      console.log("Some error occurred!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-10">
    <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1000 }}>
            <LanguageSelector />
          </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">{t('signIn')}</h2>
  
        <div className="flex items-center border border-gray-300 rounded mb-4">
          <span className="p-2">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <input
            type="text"
            className="flex-1 p-2 rounded w-full"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            aria-label="Phone Number"
          />
        </div>
        {message && <p className="text-red-500 mb-4">{message}</p>}
  
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            requestOTP();
          }}
          className={`text-blue-500 hover:underline mb-4 block text-center ${
            loading ? "pointer-events-none" : ""
          }`}
        >
          {loading ? sending : requestOtp}
        </a>
  
        {isOtpSent && (
          <>
            <div className="flex items-center border border-gray-300 rounded mb-4">
              <span className="p-2">
                <FontAwesomeIcon icon={faKey} />
              </span>
              <input
                type="text"
                className="flex-1 p-2 rounded w-full"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                aria-label="OTP"
              />
            </div>
            <button
              onClick={verifyOTP}
              className="bg-green-500 text-white py-2 rounded w-full hover:bg-green-600"
            >
              Verify OTP
            </button>
          </>
        )}
  
        {/* Link for New Users */}
        <p className="mt-4 text-center">
         {t('newUser')}
          <a href="/signup" className="text-blue-500 hover:underline">
            {" "}
            {t('pleaseSignUp')}
          </a>
        </p>
  
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
              <span
                className="text-xl font-bold cursor-pointer float-right"
                onClick={closeModal}
              >
                &times;
              </span>
              <h2 className="text-2xl font-bold mt-4">Thank You!</h2>
              <p className="mt-2">Your OTP has been successfully verified.</p>
              <button
                onClick={closeModal}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default SignInPage;
