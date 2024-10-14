import React from "react";
import Marquee from "react-fast-marquee";
import Logo from "../assets/logo.webp";
const clientLogos = [
  { imgUrl: "src/Images/ClientsLogo/Cyient.webp" },
  { imgUrl: "src/Images/ClientsLogo/enh_isecure.png" },
  { imgUrl: "src/Images/ClientsLogo/evoke-technologies.png" },
  { imgUrl: "src/Images/ClientsLogo/global-steel-company.jpg" },
  { imgUrl: "src/Images/ClientsLogo/greenbyte-technologies-pvt-ltd.jpg" },
  { imgUrl: "src/Images/ClientsLogo/gvpr-engineers-limited.png" },
  { imgUrl: "src/Images/ClientsLogo/ktree-computer-solutionsl.png" },
  { imgUrl: "src/Images/ClientsLogo/lohran.png" },
  { imgUrl: "src/Images/ClientsLogo/moldtechlogo.png" },
  { imgUrl: "src/Images/ClientsLogo/mouritech.png" },
  { imgUrl: "src/Images/ClientsLogo/powermech.png" },
  { imgUrl: "src/Images/ClientsLogo/solugenix.webp" },
  { imgUrl: "src/Images/ClientsLogo/Web-Synergies-Logo.png" },
  { imgUrl: "src/Images/ClientsLogo/web-synergies.png" },
];

const ClientsMarquee = () => (
  <div className="my-16">
    <h2 className="text-center">Clients and Partners</h2>

    <Marquee speed={140} pauseOnHover={true} className="my-8">
      {clientLogos.map((each, i) => (
        <img key={i} src={each.imgUrl} className="max-w-[140px] md:max-w-[180px]  mx-4" />
      ))}
    </Marquee>
  </div>
);

export default ClientsMarquee;
