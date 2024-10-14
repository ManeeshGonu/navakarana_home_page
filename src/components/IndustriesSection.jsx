import React, { useEffect, useState } from "react";

const tabsList = [
  { tabId: "RETAIL", displayText: "Retail" },
  { tabId: "HEALTH_CARE", displayText: "Health Care" },
  { tabId: "TELECOM", displayText: "Telecom" },
  { tabId: "AUTOMOTIVE", displayText: "Automotive" },
  { tabId: "EDUCATION", displayText: "Education" },
  { tabId: "MANUGACTURING", displayText: "Manufacturing" },
];

const industriesList = [
  {
    title: "Retail",
    titleDesc:
      "We help retail clients enhance their customer experience through tailored digital solutions, from E-COMMERCE platforms to data-driven insights. Our services improve operational efficiency, drive sales, and build brand loyalty. With a focus on innovation.",
    img: "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/retail.png",
    mainDesc:
      "In the fast-paced world of software, we provide solutions that adapt and evolve. Elevate your software capabilities and stay ahead of the competition with our specialized services tailored for the software industry. Revolutionize your software landscape with our innovative and scalable solutions.",
    category: "RETAIL",
  },
  {
    title: "Health Care",
    titleDesc:
      "We assist healthcare clients in delivering better patient care through innovative digital solutions, such as telemedicine platforms and secure data management systems. Our services enhance operational efficiency, compliance, and patient engagement",
    img: "https://navakaranatechdemo.netlify.app/assests/medicalinage.jpg",
    mainDesc:
      "Precision meets technology in our healthcare solutions. Enhance patient care, streamline operations, and ensure compliance with our comprehensive IT services designed specifically for the healthcare sector. Enhance patient care and optimize healthcare processes with our tailored IT solutions.",
    category: "HEALTH_CARE",
  },
  {
    title: "Telecom",
    titleDesc:
      "We help telecom clients optimize network performance and enhance customer experiences through cutting-edge digital solutions and data analytics. Our services support efficient operations, reduce downtime",
    img: "https://navakaranatechdemo.netlify.app/assests/telecom.jpg",
    mainDesc:
      "Connectivity redefined in the telecom sector. Our services empower telecom companies to innovate, optimize networks, and provide seamless communication experiences to their customers. Empower your telecom operations with our advanced technology and consulting services.",
    category: "TELECOM",
  },
  {
    title: "Automotive",
    titleDesc:
      "We support automotive clients by integrating advanced technologies for smart manufacturing and connected vehicle solutions. Our expertise enhances operational efficiency, streamlines supply chains, and innovation in vehicle design and functionality",
    img: "https://navakaranatechdemo.netlify.app/assests/automotive.jpg",
    mainDesc:
      "Drive innovation in the automotive industry with our tailored IT solutions. From smart manufacturing to connected vehicles, we enable automotive businesses to navigate the digital transformation journey. Drive innovation in the automotive industry with our cutting-edge IT solutions",
    category: "AUTOMOTIVE",
  },
  {
    title: "Education",
    titleDesc:
      "We assist education clients by implementing technology solutions that enhance learning experiences and administrative. Our services include developing e-learning platforms, managing educational data, and integrating tools to support educators and students",
    img: "https://navakaranatechdemo.netlify.app/assests/Education%20(1).jpg",
    mainDesc:
      "Transform education with technology. Our services for the education sector enhance learning experiences, optimize administrative processes, and facilitate the digital evolution of educational institutions. Transform education delivery and management with our technology-driven solutions",
    category: "EDUCATION",
  },
  {
    title: "Manufacturing",
    titleDesc:
      "We assist manufacturing clients by integrating smart technologies and automation to optimize production processes and improve efficiency. Our solutions enhance supply chain management, reduce operational costs, and drive innovation in product development",
    img: "https://navakaranatechdemo.netlify.app/assests/manufacturing1.png",
    category: "MANUGACTURING",
    mainDesc:
      "Global industrial markets continue to evolve towards automated system implementation. As sales of industrial automation equipment remain dependent on the industries they serve, OEM’s must continually develop new product lines to meet customer demands for performance and functionality. Small production volumes and a wide array of required customer applications require manufacturers to drive innovation within existing technologies and leverage technological advances to meet customer demands",
  },
];

const IndustriesSection = () => {
  const [activeTabId, setActiveTabId] = useState(tabsList[0].tabId);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const filtered = industriesList.filter(
      (eachIndustryDetails) => eachIndustryDetails.category === activeTabId
    );

    setFilteredProjects(filtered);
  }, [activeTabId]);

  const onSetActiveTabId = (tabValue) => {
    setActiveTabId(tabValue);
  };

  return (
    <div className="my-16 hidden md:block">
      <div className="grid grid-cols-2 border border-gray-300 rounded-3xl p-5 slanted-gradient mb-8">
        <div className="p-5">
          <h2 className="border-b border-b-gray-400 mb-8">Industries</h2>
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {tabsList.map((tabDetails) => {
              const selected = activeTabId === tabDetails.tabId;
              const selectedColor = selected ? "bg-[#3159c6] text-white" : "";
              return (
                <li key={tabDetails.tabId} className="">
                  <button
                    className={`${selectedColor} border border-gray-400 hover:bg-[#3159c6] hover:text-white duration-300 font-medium rounded-full px-4 py-2 w-full`}
                    onClick={() => onSetActiveTabId(tabDetails.tabId)}
                  >
                    {tabDetails.displayText}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="p-5 text-white">
          <h2 className="border-b border-b-gray-400 mb-8 text-end">
            {filteredProjects[0]?.title}
          </h2>
          <p>{filteredProjects[0]?.titleDesc}</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          {filteredProjects[0]?.img && (
            <img
              src={filteredProjects[0].img}
              className="rounded-lg w-full"
              alt={filteredProjects[0].title}
            />
          )}
        </div>
        <div className="flex md:flex-col bg-[#3159c6] rounded-lg ">
          <p className=" text-white p-5 rounded-lg text-xl font-medium my-auto ">
            {filteredProjects[0]?.mainDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
