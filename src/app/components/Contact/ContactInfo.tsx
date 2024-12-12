import React from "react";
import { FaEnvelope, FaMap, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "./style.css/Contact.css"



const ContactInfo = () => {
  const contactData = {
    phone: "+123 456 7890",
    email: "info@example.com",
    address: "123 Example Street, City, Country",
  };

  return (
    <div>
      {/* Phone */}
      <div className="flex-container">
        <div className="icon-container">
          <FaPhone className="text-icon" />
        </div>
        <div>
          <h1 className="text-heading">Phone</h1>
          <p className="text-details">{contactData.phone}</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex-container mt-8">
        <div className="icon-container">
          <FaEnvelope className="text-icon" />
        </div>
        <div>
          <h1 className="text-heading">Email Address</h1>
          <p className="text-details">{contactData.email}</p>
        </div>
      </div>

      {/* Address */}
      <div className="flex-container mt-8">
        <div className="icon-container">
          <FaMapMarkerAlt className="text-icon" />
        </div>
        <div>
          <h1 className="text-heading">Address</h1>
          <p className="text-details">{contactData.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
