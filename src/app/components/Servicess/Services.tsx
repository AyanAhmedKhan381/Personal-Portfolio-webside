import { servicesData } from "@/app/Data/data";
import SectionHeading from "../Helper/SectionHeading";
import ServiceCart from "./ServiceCart";
import "./style.css/Services.css"; // Import the CSS file

const Services = () => {
  return (
    <div className="services-section">
      <SectionHeading>Services</SectionHeading>

      <div className="services-grid">
        {servicesData.map((service, i) => {
          return (
            <div
              key={service.id}
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}>
              <ServiceCart service={service} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
