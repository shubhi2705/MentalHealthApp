// Profile.js
import React, { useState, useEffect } from "react";
import db from "../DB/Dexie"; // Import your Dexie database setup
import { useLocation, useNavigate } from "react-router-dom";

const ProfilePage = ({ phoneNumber }) => {
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
    navigate("/");
  };
  // Fetch user data when the component loads
  useEffect(() => {
    // Retrieve the phone number from session storage
    const phoneNumber = sessionStorage.getItem("phoneNumber");
    if (!phoneNumber) {
      setError("Phone number not found in session storage");
      setLoading(false);
      return;
    }
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/user/fetchuser/+91${phoneNumber}`
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Error fetching user data");
        }

        const data = await response.json();
        setUserData(data); // Set fetched user data in the state
      } catch (err) {
        setErrorMessage(err.message); // Handle any errors
      } finally {
        setLoading(false); // Stop the loading state
      }
    };
    fetchUserData();
  }, [phoneNumber]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    // First, store data offline
    try {
      await ProfileOffline({
        phNumber: "",
        name: "",
        email: "",
        areasOfInterest: "",
        gender: "",
        password: "",
        dob: "",
      });

      // Handle form submission for updating user data
      e.preventDefault();
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
          setSuccessMessage("User updated successfully.");
          setShowModal(true);
        } else {
          setErrorMessage(data.msg);
        }
      } catch (err) {
        setErrorMessage("Error updating profile");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const ProfileOffline = async ({
    phNumber,
    name,
    email,
    areasOfInterest,
    gender,
    password,
    dob,
  }) => {
    await db.users.update({
      phoneNumber: phNumber,
      name,
      email,
      areasOfInterest,
      gender,
      password,
      dob,
    });
  };
  if (loading)
    return (
      <div className="max-w-lg w-full mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="max-w-lg w-full mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
        <p style={{ color: "red" }}>{error}</p>{" "}
      </div>
    );
  return (
    <div className="max-w-lg w-full mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">User Profile</h2>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {userData && (
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="name">
              Name
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
              Email
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
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={userData.phoneNumber}
              readOnly
              onChange={(e) =>
                setUserData({ ...userData, phoneNumber: e.target.value })
              }
              style={{
                backgroundColor: "#f0f0f0", // Light gray background
                color: "#888", // Gray text color
                cursor: "not-allowed", // Cursor indicates non-editable field
              }}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Date of Birth
            </label>
            <input
              className="p-3 w-full rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData({ ...userData, dob: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              value={userData.gender}
              onChange={(e) =>
                setUserData({ ...userData, gender: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="areasOfInterest"
            >
              Areas of Interest
            </label>
            <input
              type="text"
              id="areasOfInterest"
              value={userData.areasOfInterest}
              // onChange={(e) => setAreasOfInterest(e.target.value)}
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
            Update Profile
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
                <h2 className="text-2xl font-bold mt-4">Thank You!</h2>
                <p className="mt-2">Profile updated successfully!</p>
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
      )}
    </div>
  );
};

export default ProfilePage;
