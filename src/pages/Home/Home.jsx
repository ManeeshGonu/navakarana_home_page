import { option, title } from "framer-motion/client";
import React from "react";
import CountUp from "react-countup";
import IndustriesSection from "../../components/industriesSection";
import IndustriesMobileSection from "../../components/industriesMobileSection";
import ClientsMarquee from "../../components/ClientsMarquee";
import HomeBannerCarousel from "../../components/HomeBannerCarousel";
import EmblaCarousel from "../../components/EmblaCarousel";
import Testimonials from "../../components/Testimonials";
import ContactUs from "../../components/ContactUs";

const Home = () => {
  const Counter = ({ target, duration }) => (
    <CountUp start={0} end={target} duration={duration} separator="," />
  );

  const leftCardData = [
    {
      title: "Experience",
      desc: "Experienced IT professional with expertise in software development,web design,and digital marketing.",
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/icon-1%20(2).png",
    },
    {
      title: "Planning",
      desc: "Planning in the IT industry involves strategic decision-making to align technology goals with business objectives.",
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/icon-2%20(1).png",
    },
    {
      title: "Approach",
      desc: "The approach in the IT industry focuses on innovative solutions and agile methodologies to drive efficiency and growth.",
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/icon-3%20(1).png",
    },
  ];
  const rightCardData = [
    {
      title: "Robust Pricing",
      desc: "Experienced IT professional with expertise in software development,web design,and digital marketing.",
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/icon-4%20(1).png",
    },
    {
      title: "Delivery",
      desc: "Experienced IT professional with expertise in software development,web design,and digital marketing.",
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/icon-5%20(1).png",
    },
    {
      title: "Support",
      desc: "Experienced IT professional with expertise in software development,web design,and digital marketing.",
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/icon-6%20(1).png",
    },
  ];

  const countDetails = [
    {
      title: "Global Location",
      count: 5,
      duration: 0.5,

      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/building.png",
    },
    {
      title: "Happy souls",
      count: 250,
      duration: 3,
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/Happy%20Souls-01.png",
    },
    {
      title: "Clients",
      count: 130,
      duration: 1,
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/handshakeclients.png",
    },
    {
      title: "Coding hours",
      count: 5840,
      duration: 7,
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/dataclient.png",
    },
    {
      title: "New Jobs",
      count: 60,
      duration: 2.5,
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/new-employeeclient.png",
    },
  ];

  const servicesDetails = [
    {
      title: "Website Design",
      desc: "Transform your online presence with our professional website design services. We craft visually stunning and user-friendly websites tailored to your brand's unique identity. Our designs are optimized for all devices, ensuring a seamless experience for your visitors. Whether you need a modern, responsive design or a complete website overhaul, we bring creativity and functionality together to help your business stand out in the digital world.",
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/Website%20design%20.png",
    },
    {
      title: "Web Develepment",
      desc: "Our web development services are designed to bring your ideas to life with cutting-edge technology and seamless functionality. From dynamic websites to complex web applications, we build scalable, secure, and high-performing digital solutions that meet your specific business needs. With a focus on speed, reliability, and user experience, our team ensures that your website not only looks great but also flawless and unique.",
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/Web%20development%201.png",
    },
    {
      title: "Mobile Application  ",
      desc: "Stay ahead in the mobile-first world with our comprehensive mobile application services. We specialize in designing and developing custom apps that offer seamless performance, engaging user experiences, and robust security features. Our team works closely with you to create mobile solutions that reflect your brand and meet your business goals, whether it's launching a new app or enhancing an existing one for greater market impact.",
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/Mobile%20application01.png",
    },
    {
      title: "Digital Marketing",
      desc: "Boost your online presence and drive measurable results with our tailored digital marketing services. From search engine optimization (SEO) and content marketing to social media management and paid advertising, we craft strategies that connect your brand with the right audience. Our data-driven approach ensures every campaign delivers maximum impact, helping your business grow and thrive in the digital landscape.",
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/Digital%20marketing01.png",
    },
    {
      title: "Hosting & Server",
      desc: "Ensure your website runs smoothly and securely with our reliable hosting and server solutions. We provide fast, scalable, and secure hosting services tailored to your business needs, with round-the-clock monitoring and technical support. Whether you need cloud hosting, dedicated servers, or managed services, our team ensures optimal performance and uptime, so your digital presence is always available to your customers.",
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/Hosting%20&%20serve01.png",
    },
    {
      title: "Payroll Services",
      desc: "Simplify your payroll management with our comprehensive payroll services. Designed for businesses of all sizes, our solution ensures accurate, on-time payroll processing, tax compliance, and easy integration with your existing systems. Our team provides secure, cloud-based tools that automate payroll tasks, reduce administrative burdens, and enhance employee satisfaction. Let's handle your payroll which fits for modern world.",
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/Payroll%20services01.png",
    },
    {
      title: "SAP",
      desc: "Transform your business operations with our expert SAP services. We offer end-to-end SAP solutions, from implementation and customization to support and maintenance, tailored to your unique business needs. Our certified SAP consultants help you optimize workflows, improve data management, and drive innovation across your organization. Unlock the full potential of SAP to streamline processes, enhance decision-making, and achieve sustainable growth.",
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/sap01.png",
    },
    {
      title: "Cloud Server",
      desc: "Empower your business with our cutting-edge cloud server solutions. We provide scalable, secure, and high-performance cloud infrastructure that adapts to your growing needs. Whether you're migrating to the cloud or optimizing your existing environment, our experts ensure seamless deployment, data security, and reliable access. Enhance your business agility and reduce costs with a cloud server solution designed to deliver maximum efficiency and uptime.",
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/Cloud%20service01.png",
    },
    {
      title: "Data Security",
      desc: "Protect your business with our comprehensive data security services. We offer robust solutions to safeguard your sensitive information against cyber threats, data breaches, and unauthorized access. Our security experts implement advanced encryption, threat detection, and compliance measures to ensure your data is secure at all times. Trust us to protect your digital assets, so you can focus on growing your business with confidence and better enhancement way.",
      imgUrl:
        "https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/Data%20securit01.png",
    },
  ];

  const slides = [
    "https://navakaranatechdemo.netlify.app/assests/Slide-1.jpg",
    "https://navakaranatechdemo.netlify.app/assests/Slide-2.jpg",
    "https://navakaranatechdemo.netlify.app/assests/Slide-3.jpg",
  ];

  const options = { loop: true };

  return (
    <div>
      {/* <HomeBannerCarousel /> */}
      <EmblaCarousel slides={slides} options={options} />
      {/* About us */}
      <main className="py-16 max-w-7xl mx-auto px-3">
        <div className="lg:flex py-16">
          <div className="sm:w-full lg:w-[60%] text-justify">
            <h2 className="mb-4">About Us</h2>
            <p className="leading-loose">
              Navakarana is a leading software service and a solution provider
              for various industrial clients across the globe. We offer
              innovative, robust and scalable solutions using cutting-edge
              Technologies which will help organization to increase their profit
              margins, enhance productivity and business operations. From 2018
              till now, we have come a long way. Today, we are proud to have
              achieved global leadership in our domain as one of the largest
              Digital Sloution providers in the world. We are global technology,
              consulting and digital Solutions company that enables enterprises
              to re-imagine business models, accelerate innovation and maximize
              business growth by harnessing digital technologies. We bring
              extensive domain and technology expertise to help drive superior
              compitative diffentiation, customer experiences and business
              outcomes in a converging world.
            </p>
          </div>
          <div className="w-full lg:w-[40%] lg:flex lg:justify-end mt-4 lg:mt-0">
            <img
              src="https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/aabout.png"
              alt=""
              className="w-full max-w-[400px] mx-auto lg:mx-0"
            />
          </div>
        </div>
        {/* Why Choose Us */}
        <div className="">
          <h2 className="text-center mb-8">Why Choose Us</h2>
          <div className="lg:flex items-center gap-x-4">
            <ul>
              {leftCardData.map((card, i) => (
                <li
                  key={i}
                  className="flex justify-center items-center gap-x-2 mb-4"
                >
                  <div>
                    <h3 className="text-2xl font-medium mb-2">{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                  <img src={card.imgUrl} alt="" className="size-16" />
                </li>
              ))}
            </ul>
            <img
              src="https://66f3cad8c64d5df8dfcced62--frolicking-cactus-9922f5.netlify.app/assests/why-choose-navakarana.png"
              alt=""
              className="mx-auto"
            />
            <ul>
              {rightCardData.map((card, i) => (
                <li
                  key={i}
                  className="flex flex-row-reverse justify-center items-center gap-x-2 mb-4"
                >
                  <div>
                    <h3 className="text-2xl font-medium mb-2">{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                  <img src={card.imgUrl} alt="" className="size-16" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Count details */}
        {/* <ul className="flex justify-evenly flex-wrap"> */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {countDetails.map((obj, i) => (
            <li
              key={i}
              className="flex justify-center items-center gap-x-4 "
              // w-full md:w-[50%] lg:w-[20%]
            >
              <img src={obj.imgUrl} alt="" className="size-32" />
              <div className="w-[40%]">
                <span className="text-xl font-medium">
                  <Counter target={obj.count} duration={obj.duration} />+
                </span>
                <h3 className="text-sm font-medium">{obj.title}</h3>
              </div>
            </li>
          ))}
        </ul>
        {/* Services */}
        <div className="mt-8">
          <h2 className="text-center mb-8">Services</h2>
          <ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
         gap-4"
          >
            {servicesDetails.map((item, i) => (
              <li
                key={i}
                className="text-center shadow-lg rounded-md p-4 bg-gray-100 border border-gray-300"
              >
                <img src={item.imgUrl} alt="" className="mx-auto size-28" />
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-justify">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
        <IndustriesSection />
        <IndustriesMobileSection />
        <ClientsMarquee />
        <Testimonials />
        {/* Contact Us */}
        <div className="bg-blue-300 p-2">
          <h2 className="text-2xl md:text-4xl font-semibold text-center ">
            Create a{" "}
            <span>
              <img
                src="https://navakaranatechdemo.netlify.app/assests/digital.png"
                className="inline-block w-20 md:w-48"
                alt=""
              />
            </span>
            platform for your{" "}
            <span>
              <img
                src="https://navakaranatechdemo.netlify.app/assests/innovative2.png"
                alt=""
                className="inline-block w-24 md:w-48"
              />
            </span>
            Ideas
            <span>
              <img
                src="https://navakaranatechdemo.netlify.app/assests/idea.png"
                alt=""
                className="inline-block w-12 md:w-32"
              />
            </span>
          </h2>
        </div>
        <ContactUs />
      </main>
    </div>
  );
};

export default Home;
