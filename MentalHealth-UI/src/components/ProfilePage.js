import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser, faEnvelope, faPhone, faCalendar, faGenderless, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import LanguageSelector from "../Context/LanguageSelector";

const ProfilePage = ({ phoneNumber }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    areasOfInterest: "",
    gender: "",
    dob: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    setShowModal(false);
    navigate("/dashboard");
  };

  // Fetch user data when the component loads
  useEffect(() => {
    const storedPhoneNumber = sessionStorage.getItem("phoneNumber");
    if (!storedPhoneNumber) {
      setError(t('phoneNumberNotFound'));
      setLoading(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/user/fetchuser/+91${storedPhoneNumber}`
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || t('errorFetchingUserData'));
        }

        const data = await response.json();
        const formattedDob = new Date(data.dob).toISOString().split('T')[0];
        setUserData({
          ...data,
          dob: formattedDob, // Format dob as yyyy-mm-dd for input
        });
      } catch (err) {
        setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [t]);

  const handleDobChange = (e) => {
    const dateValue = e.target.value;
    setUserData({ ...userData, dob: dateValue }); // Keep the input in yyyy-mm-dd format
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // Format as yyyy-mm-dd
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/user/updateuser/",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      const data = await response.json();
      if (data.success) {
        setSuccessMessage(t('userUpdatedSuccessfully'));
        setShowModal(true);
      } else {
        setErrorMessage(data.msg);
      }
    } catch (error) {
      setErrorMessage(t('errorUpdatingProfile'));
    }
  };

  if (loading)
    return (
      <div className="max-w-lg w-full mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
        <p>{t('loading')}</p>
      </div>
    );

  if (error)
    return (
      <div className="max-w-lg w-full mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );

  return (
    <div className="max-w-lg w-full mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1000 }}>
        <LanguageSelector />
      </div>
      <button
        onClick={() => navigate(-1)} // Go back to the previous page
        className="flex items-center text-blue-600 mb-4"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        {t('back')}
      </button>
      <h2 className="text-2xl font-bold mb-6 text-center">{t('userProfile')}</h2>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium" htmlFor="name">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            {t('name')}
          </label>
          <input
            type="text"
            id="name"
            value={userData.name}
            onChange={(e) =>
              setUserData({ ...userData, name: e.target.value })
            }
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium" htmlFor="email">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            {t('email')}
          </label>
          <input
            type="email"
            id="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium" htmlFor="phoneNumber">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            {t('phoneNumber')}
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={userData.phoneNumber}
            readOnly
            className="w-full px-3 py-2 border rounded-md bg-gray-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            <FontAwesomeIcon icon={faCalendar} className="mr-2" />
            {t('dateOfBirth')}
          </label>
          <input
            className="p-3 w-full rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="date"
            value={userData.dob} // Use the yyyy-mm-dd format directly
            onChange={handleDobChange}
            max={getCurrentDate()} // Disable future dates
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium" htmlFor="gender">
            <FontAwesomeIcon icon={faGenderless} className="mr-2" />
            {t('gender')}
          </label>
          <select
            id="gender"
            value={userData.gender}
            onChange={(e) =>
              setUserData({ ...userData, gender: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="male">{t('male')}</option>
            <option value="female">{t('female')}</option>
            <option value="other">{t('other')}</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium" htmlFor="areasOfInterest">
            <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
            {t('areasOfInterest')}
          </label>
          <input
            type="text"
            id="areasOfInterest"
            value={userData.areasOfInterest}
            onChange={(e) =>
              setUserData({ ...userData, areasOfInterest: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md"
        >
          {t('updateProfile')}
        </button>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
              <span
                className="text-xl font-bold cursor-pointer float-right"
                onClick={closeModal}
              >
                &times;
              </span>
              <h2 className="text-2xl font-bold mt-4">{t('thankYou')}</h2>
              <p className="mt-2">{t('profileUpdatedSuccessfully')}</p>
              <button
                onClick={closeModal}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {t('close')}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfilePage;
