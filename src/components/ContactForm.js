import React, { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    budget: "",
    goals: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    // Construct email subject
    const subject = "Contact Form Submission";

    // Encode form data as email body
    const body = `Name: ${formData.name}\nPhone Number: ${formData.number}\nEmail: ${formData.email}\nBudget: ${formData.budget}\nGoals: ${formData.goals}`;

    // Recipient's email address
    const recipientEmail = "bytegeist@gmail.com";

    // Construct the Gmail compose URL with the pre-filled subject, body, and recipient
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Redirect user to Gmail with the pre-filled email
    window.location.href = gmailLink;

    // Clear form data after submission (optional)
    setFormData({
      name: "",
      number: "",
      email: "",
      budget: "",
      goals: "",
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="mt-20">
      <div className="text-white p-10 flex flex-col space-y-3 items-center">
        <h3 className="font-bold text-3xl">
          Fuel Your Brand’s Goals with <span className="text-blue-500">Beyond</span>
        </h3>
        <div className="max-w-md">
          You will get a response within 24 hours. We will explain in details
          how we can help you fuel and grow your brand within the stated budget.
        </div>
      </div>
      <div className="contactformcontainer flex flex-col md:flex-row justify-center items-center mx-auto space-y-10 md:space-y-0 md:space-x-20">
        <form onSubmit={handleSubmit} className="flex flex-col min-w-lg text-2xl space-y-10 md:w-[50%]">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="bg-transparent border-b-[1px] border-white text-white p-2 md:p-3" />

          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
            placeholder="Phone Number"
            className="bg-transparent border-b-[1px] border-white text-white p-2 md:p-3" />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="bg-transparent border-b-[1px] border-white text-white p-2 md:p-3" />

          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            placeholder="Budget"
            className="bg-transparent border-b-[1px] border-white text-white p-2 md:p-3" />

          <input
            type="text"
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            required
            placeholder="Goals"
            className="bg-transparent border-b-[1px] border-white text-white p-2 md:p-3" />

          <button type="submit" onClick={handleSubmit} className="custom-button bg-transparent text-white rounded-sm text-xl flex flex-row justify-center items-center h-[3rem] space-y-3 md:w-[10rem]">
            Submit <span><img src="CTAButtonArrow.svg" className="w-[2.5rem]" alt="Arrow" /></span>
          </button>
        </form>
        <div className="w-[15rem]">
          <img src="contactghost.png" alt="Contact Ghost" />
        </div>
      </div>
    </div>
  );
}
