// Signup.js
import React, { useState } from 'react';
import db from '../DB/Dexie'; // Import your Dexie database setup
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faCalendarAlt, faLock, faListAlt, faMars, faVenus, faTransgender } from '@fortawesome/free-solid-svg-icons';
import LanguageSelector from '../Context/LanguageSelector';
import { useTranslation } from 'react-i18next';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    //const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [areasOfInterest, setAreasOfInterest] = useState('');
    const [gender, setGender] = useState('male');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const { t } = useTranslation();

    const closeModal = () => {
        setShowModal(false);
        navigate("/signin");
    };
  

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return `${year}/${month}/${day}`; // Convert to dd/mm/yyyy
    };

    const generateAlphanumericOtp = (length = 6) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let otp = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          otp += characters[randomIndex];
        }
      
        return otp;
      };

    const handleSignup = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
        var phNumber = `+91${phoneNumber}`;
        const formattedDob = formatDate(dob);

        // First, store data offline
        try {
            const otp = await signupOffline({
                phNumber,
                name,
                email,
                areasOfInterest,
                gender,
              //  password,
                dob: formattedDob
            });

            // Now call the API
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phNumber, name, email, areasOfInterest, gender, dob: formattedDob }),
            });

            const data = await response.json();

            if (data.success) {
                setSuccessMessage('User created successfully.');
                setShowModal(true);
            } else {
                setErrorMessage(data.msg);
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const signupOffline = async ({ phNumber, name, email, areasOfInterest, gender, formattedDob }) => {
        const otp = generateAlphanumericOtp(6);
        await db.users.add({
            phoneNumber: phNumber,
            name,
            email,
            areasOfInterest,
            gender,
          //  password,
            dob: formattedDob,
            otp,
            otpExpires: Date.now() + 300000, // 5 minutes validity
        });
        return otp;
    };

    return (
        <div className="max-w-lg w-full mx-auto my-10 p-6 bg-white rounded-lg shadow-md ">
              <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1000 }}>
            <LanguageSelector />
          </div>
            <h2 className="text-2xl font-bold mb-6">{t('signup')}</h2>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            <form onSubmit={handleSignup}>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="name">
                        <FontAwesomeIcon icon={faUser} className="mr-2" /> {t('name')}
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="email">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> {t('email')}
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="phoneNumber">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" /> {t('phoneNumber')}
                    </label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="dob">
                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> {t('dob')}
                    </label>
                    <input
                        type="date"
                        id="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                {/* <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="password">
                        <FontAwesomeIcon icon={faLock} className="mr-2" /> Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div> */}
                 <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="gender">
                    {t('gender')}
                    </label>
                    <select
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                    >
                        <option value="male"><FontAwesomeIcon icon={faMars} className="mr-2" /> Male</option>
                        <option value="female"><FontAwesomeIcon icon={faVenus} className="mr-2" /> Female</option>
                        <option value="other"><FontAwesomeIcon icon={faTransgender} className="mr-2" /> Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="areasOfInterest">
                        <FontAwesomeIcon icon={faListAlt} className="mr-2" /> {t('Aoi')}
                    </label>
                    <input
                        type="text"
                        id="areasOfInterest"
                        value={areasOfInterest}
                        onChange={(e) => setAreasOfInterest(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md">{t('signUpBtn')}</button>
                
                {/* Link to Sign In Page */}
                <p className="mt-4 text-center">
                    {t('alreadyUser')}
                    <a href="/signin" className="text-blue-500 hover:underline"> {t('signInBtn')}</a>
                </p>

                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
                            <span className="text-xl font-bold cursor-pointer float-right" onClick={closeModal}>&times;</span>
                            <h2 className="text-2xl font-bold mt-4">{t('thankyou')}</h2>
                            <p className="mt-2">{t('signUpSuccess')}</p>
                            <button 
                                onClick={closeModal} 
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default SignupPage;