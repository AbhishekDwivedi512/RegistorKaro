import React from "react";
import "./Services.css";
import { FaArrowCircleRight} from "react-icons/fa";

// Import icons
const companyFormationIcon = "/assets/Company-formation.png";
const secretarialServicesIcon = "/assets/company-secretarial.png";
const virtualOfficeIcon = "/assets/virtual-office.png";
const complianceServicesIcon = "/assets/compliance-services.png";
const payrollServicesIcon = "/assets/payroll-services.png";
const bookkeepingIcon = "/assets/bookkeeping.png";
const ExploreServices = () => {
  const services = [
    {
      icon: companyFormationIcon,
      title: "Company Formation",
      description: "Build web-based solutions that enhance customer experience.",
      link: "/services/company-formation",
    },
    {
      icon: secretarialServicesIcon,
      title: "Company Secretarial Services",
      description:
        "Make data-driven decisions and utilize technology to reach business goals.",
      link: "/services/secretarial-services",
    },
    {
      icon: virtualOfficeIcon,
      title: "Virtual Office Address",
      description:
        "Foster customer relationships by effectively serving your market.",
      link: "/services/virtual-office",
    },
    {
      icon: complianceServicesIcon,
      title: "Annual Compliance Services",
      description: "Turn your ideas into modern products with our design experts.",
      link: "/services/compliance-services",
    },
    {
      icon: payrollServicesIcon,
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
      link: "/services/payroll-services",
    },
    {
      icon: bookkeepingIcon,
      title: "Bookkeeping Services",
      description:
        "Steering user behaviours with creative design, data insights & technology.",
      link: "/services/bookkeeping",
    },
  ];

  return (
    <div className="explore-services">
      <div className="services-header">
        <h5 className="heading">WELCOME TO REGISTERKARO.IN</h5>
        <h1>Explore Our Services</h1>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon-wrapper">
              <img src={service.icon} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.link} className="learn-more">
              <p>Learn more <FaArrowCircleRight className="arrowicon"/></p> 
            </a>
          </div>
        ))}
      </div>
      <button className="see-all-services">See All Services</button>
    </div>
  );
};

export default ExploreServices;
