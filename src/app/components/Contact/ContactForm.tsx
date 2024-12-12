import React from "react";
import "./style.css/Contact.css"



const ContactForm = () => {
  return (
    <div className="bg-form rounded-lg p-4 sm:p-10">
      <h1 className="text-heading text-special">Let’s work together!</h1>
      <p className="text-paragraph">
        Get in touch via email, phone, or social media. Available for queries,
        collaborations, or assistance.
      </p>

      <form className="mt-8 w-full">
        {/* Name Inputs */}
        <div className="flex-container">
          <input
            type="text"
            placeholder="First Name"
            className="form-input"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="form-input"
            required
          />
        </div>

        {/* Contact Details */}
        <div className="flex-container">
          <input
            type="email"
            placeholder="Email Address"
            className="form-input"
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="form-input"
          />
        </div>

        {/* Dropdown */}
        <select className="form-input mt-5" required>
          <option value="" disabled selected>
            Select an option
          </option>
          <option value="Frontend">Frontend Development</option>
          <option value="Backend">Backend Development</option>
          <option value="FullStack">Full Stack Development</option>
        </select>

        {/* Message */}
        <textarea
          rows={7}
          placeholder="Message"
          className="form-input mt-5"
          required
        ></textarea>

        {/* Submit Button */}
        <button type="submit" className="form-button mt-4">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
