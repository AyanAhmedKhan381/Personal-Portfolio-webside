
import "./style.css/Contact.css"
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";


const Contact = () => {
  return (
    <div className="pt-16 pb-16 bg-dark">
      <div className="container grid-container">
        {/* Contact Form */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
