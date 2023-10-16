// pages/contact.js

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    extension: '',
    company: '',
    bookingNature: '',
    arrivalDate: '',
    departureDate: '',
    flexibleDates: false,
    additionalInformation: '',
    guestRoomsNeeded: 0,
    eventsNeeded: '',
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
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-3xl font-bold py-4">YOUR CONTACT INFORMATION</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName">First Name *</label>
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
          <div>
            <label htmlFor="lastName">Last Name *</label>
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
<div className="grid grid-cols-2 gap-4">
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
        
        <div>
          <label htmlFor="extension">Ext.</label>
          <input
            type="text"
            id="extension"
            name="extension"
            value={formData.extension}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
</div>
 


        <div>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Booking Details */}

        <div>
          <h1 className="text-3xl py-2 font-bold">YOUR BOOKING DETAILS</h1>
          <label htmlFor="bookingNature">
            Nature of this Booking * (e.g., Conference, Wedding)
          </label>
          <input
            type="text"
            id="bookingNature"
            name="bookingNature"
            value={formData.bookingNature}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex gap-4 ">
          {" "}
          <div className="md:w-1/2">
            <label htmlFor="arrivalDate">Arriving On *</label>
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
            <label htmlFor="departureDate">Departing On *</label>
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
          <label>
            <input
              type="checkbox"
              id="flexibleDates"
              name="flexibleDates"
              checked={formData.flexibleDates}
              onChange={handleChange}
            />
            Dates are flexible
          </label>
        </div>

        <div>
          <label htmlFor="additionalInformation">
            Is there any additional information you would like to add?
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

        {/* Guest Room Details */}
        <div>
          <h1 className="text-3xl py-2 font-bold">YOUR GUEST ROOM DETAILS</h1>
          <input
            type="checkbox"
            id="flexibleDates"
            name="flexibleDates"
            checked={flexibleDatesChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="guestRoomsNeeded">Overnight Guest Rooms Needed</label>
          {flexibleDatesChecked && (
            <div className="mt-2">
              <label htmlFor="guestRoomsNeeded">Room per night</label>
              <input
                type="number"
                id="guestRoomsNeeded"
                name="guestRoomsNeeded"
                className="ml-2"
              />
            </div>
          )}
        </div>
        {/* Guest Room Details */}

        {/* Event Details */}
        <div>
          <h1 className="text-3xl py-2 ">YOUR EVENT DETAILS</h1>
          <input
            type="checkbox"
            id="eventchecked"
            name="eventchecked"
            checked={eventchecked}
            onChange={handleEventChecked}
          />
          <label htmlFor="eventsNeeded">Events Needed</label>

          {eventchecked && (
            <div className="mt-2">
              <h1 className="font-bold">Event</h1>
              <div className="py-2">
                <label htmlFor="guestRoomsNeeded">
                  Nature of this Event * (e.g., Birthday Party or Business
                  Dinner)
                </label>
                <input
                  type="number"
                  id="guestRoomsNeeded"
                  name="guestRoomsNeeded"
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="py-2">
                <label className="py-2" htmlFor="eventdate">
                  Event Date *
                </label>
                <input
                  type="date"
                  id="eventdate"
                  name="eventdate"
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 py-2">
                <div className="py-2">
                  <label htmlFor="firstName">Start Time</label>
                  <input
                    type="time"
                    id="starttime"
                    name="starttime"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div  className="py-2">
                  <label htmlFor="endtime">End Time</label>
                  <input
                    type="time"
                    id="endtime"
                    name="endtime"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
              <div className="py-2">
                <label htmlFor="guestRoomsNeeded">Number of People *</label>
                <input
                  type="number"
                  id="guestRoomsNeeded"
                  name="guestRoomsNeeded"
                  className="w-full p-2 border rounded"
                />
              </div>

              <button className="px-2 py-2 bg-gray-400 mt-2 hover:bg-gray-600 ">
                Add Event
              </button>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex items-center">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
          {/* Tripleseat Software */}
          <p className="px-8">Private Event Software powered by Tripleseat</p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
