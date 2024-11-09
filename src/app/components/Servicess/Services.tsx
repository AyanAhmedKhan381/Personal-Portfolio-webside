import { servicesData } from "@/app/Data/data";
import SectionHeading from "../Helper/SectionHeading";
import ServiceCart from "./ServiceCart";

const Services = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>Services</SectionHeading>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%]
       mx-auto items-center mt-20"
      >
        {servicesData.map((service, i) => {
          return (
            <div
              key={service.id}
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${ i * 150}`}>

              {/* Services Cart */}
              <ServiceCart service={service} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
