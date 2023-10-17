
'use client'



import React, { useState } from 'react';

const CustomerQuoteForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',

    company: '',
    bookingNature: '',
    arrivalDate: '',
    departureDate: '',


  });

  const [flexibleDatesChecked, setFlexibleDatesChecked] = useState(false);
  const [eventchecked, setEventchecked] = useState(false);

  const handleCheckboxChange = () => {
    setFlexibleDatesChecked(!flexibleDatesChecked);
  };
  const handleEventChecked = () => {
    setEventchecked(!eventchecked);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto my-8">
      <h1 className="text-3xl font-bold py-4 tracking-widest text-center">
        REQUEST A CUSTOM QUOTE
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=''>
            <label htmlFor="firstName"className='font-normal'>First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className=''>
            <label htmlFor="lastName" className='font-normal'>Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div>
          <label htmlFor="company"className='font-normal'>Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

          <div>
            <label htmlFor="phoneNumber">Phone Number *</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>




      

        <div className="flex gap-4 ">
          {" "}
          <div className="md:w-1/2">
            <label htmlFor="arrivalDate"className='font-normal'>Expected Check-In Date</label>
            <input
              type="date"
              id="arrivalDate"
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="md:w-1/2">
            <label htmlFor="departureDate"className='font-normal'>Expected Check-Out Date</label>
            <input
              type="date"
              id="departureDate"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div>
          <h2 className="my-2 font-normal">Message *</h2>
          <label htmlFor="additionalInformation" className="text-sm">
            Please provide any additional details that you'd like for us to
            know, like reason for stay, amenities needed, etc.
          </label>
          <textarea
            id="additionalInformation"
            name="additionalInformation"
            value={formData.additionalInformation}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center my-2 ">
          <button type="submit" className=" text-[#e09136be] hover:bg-[#be8441af] hover:text-white px-4 py-2 rounded border-2 border-[#e09136be] w-32">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerQuoteForm;
