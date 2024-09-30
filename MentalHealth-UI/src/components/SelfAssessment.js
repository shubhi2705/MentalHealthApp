
import React from 'react'
import { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

 function SelfAssessment() {
    
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = location.state || { language: 'English' };
     const submitSelfAssessment=()=>{
        alert("Assessment submitted")
     }
     const [formData, setFormData] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
      });
     const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      const handleSubmit = async (event) => {
        try {
            // const response = await fetch('https://example.com/api/assessment', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify(formData),
            // });
            console.log("formdata:",formData)
            navigate('/thankyou')
            // if (response.ok) {
            //   setIsModalOpen(true);
            //   // Reset form after successful submission
            //   setFormData({
            //     question1: '',
            //     question2: '',
            //     question3: '',
            //     question4: '',
            //   });
            // } else {
            //   alert('Failed to submit assessment. Please try again.');
            // }
          } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
          }
        };
    return(

<div className="flex flex-col items-center justify-center h-screen bg-gray-50">
  <h2 className="text-2xl font-bold mb-4">Self-Assessment</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="question1" className="block text-sm font-medium text-gray-700">How often do you feel overwhelmed by stress?</label>
      <select id="question1"
            name="question1"
            value={formData.question1}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" required>
        <option value="">Select an option</option>
        <option value="excellent">Never</option>
        <option value="good">Rarely</option>
        <option value="average">Often</option>
        <option value="poor">Sometimes</option>
        <option value="Always">Always</option>
      </select>
    </div>

    <div class="mb-4">
      <label htmlFor="question2" className="block text-sm font-medium text-gray-700">How would you rate your current mood?</label>
      <select 
      name="question2"
      value={formData.question2}
      onChange={handleChange}
      id="question2" className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" required>
        <option value="">Select an option</option>
        <option value="excellent">Happy</option>
        <option value="good">Very happy</option>
        <option value="average">Neutral</option>
        <option value="sad">Sad</option>
        <option value="very sad">Very Sad</option>
      </select>
    </div>

    <div class="mb-4">
      <label htmlFor="question3" className="block text-sm font-medium text-gray-700">How would you describe your sleep quality?</label>
      <select
      name="question3"
      value={formData.question3}
      onChange={handleChange}
      id="question3" className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" required>
        <option value="">Select an option</option>
        <option value="excellent">Excellent</option>
        <option value="good">Good</option>
        <option value="average">Fair</option>
        <option value="poor">Poor</option>
      </select>
    </div>

    <div class="mb-4">
      <label htmlFor="question4" className="block text-sm font-medium text-gray-700">How frequently do you practice self-care or relaxation techniques?</label>
      <select 
      name="question4"
      value={formData.question4}
      onChange={handleChange}
      id="question4" className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" required>
        <option value="">Select an option</option>
        <option value="excellent">Daily</option>
        <option value="good">Several times a week</option>
        <option value="average">Occasionally</option>
        <option value="poor">Rarely</option>
        <option value="Never">Never</option>
      </select>
    </div>

    <div>
      <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200">Submit</button>
    </div>
  </form>
</div>

);
};
export default SelfAssessment