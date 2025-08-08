"use client";
import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import ServicesDropdown from "./Dropdown/ServicesDropdown";
import SolutionDropdown from "./Dropdown/SolutionDropdown";
import MobileServices from "./MobileDrop/MobileServices";
import MobileSolution from "./MobileDrop/MobileSolution";
import Link from "next/link";
import { LanguageContext } from "@/context/LanguageContext";
import { availableLanguages } from "@/components/Homecomponents/Translation/languageData";
import { translateText } from "@/utils/serverTranslate";

const Navbar = ({ home_headerinner, home_headerlogo, home_curve }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const [translatedLabels, setTranslatedLabels] = useState({
    whoWeAre: "Who We Are",
    services: "Services",
    solutions: "Solutions",
    resources: "Resources",
    contact: "Contact",
    partners: "Partners",
    language: "Language",
  });

  const navImages = [
    "/Navbar/NavbarLogos/Partner_Logos-01.svg",
    "/Navbar/NavbarLogos/Partner_Logos-02.svg",
    "/Navbar/NavbarLogos/Partner_Logos-03.svg",
    "/Navbar/NavbarLogos/Partner_Logos-04.svg",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % navImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [navImages.length]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // 🔁 Translate labels when language changes
  useEffect(() => {
    const translateLabels = async () => {
      const keys = [
        "Who We Are",
        "Services",
        "Solutions",
        "Resources",
        "Contact",
        "Partners",
        "Language",
      ];
      const [
        whoWeAre,
        services,
        solutions,
        resources,
        contact,
        partners,
        languageLabel,
      ] = await translateText(keys, language);

      setTranslatedLabels({
        whoWeAre,
        services,
        solutions,
        resources,
        contact,
        partners,
        language: languageLabel,
      });
    };

    translateLabels();
  }, [language]);

  return (
    <header className="bg-[#FFFFFF] home-sec1-bg relative">
      <div className={`${home_headerinner} header-inner`}>
        <div className="flex items-center space-x-4">
          <a href={"/"}>
            <Image
              src={"/Navbar/NewAcumenVelocityLogo.webp"}
              width={500}
              height={500}
              className={`${home_headerlogo} headerlogo cursor-pointer`}
              priority
              alt="Company Logo"
            />
          </a>

          <div className="flex flex-col items-center gap-2">
            <p className="text-[#757575] whitespace-nowrap">{translatedLabels.language}</p>
            <select
              className="ml-1 p-1 border border-gray-300 rounded text-sm"
              value={language}
              onChange={handleLanguageChange}
            >
              {availableLanguages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={`${home_curve} header-curve`}>
          <ul className="header-menu uppercase">
            <li>
              <Link className="text-gray-800 transition-colors duration-300 hover:text-orange-600" href="/about-us">
                {translatedLabels.whoWeAre}
              </Link>
            </li>
            <li>
              <Link href="#" className="navpa text-gray-800 transition-colors duration-300 hover:text-orange-600">
                {translatedLabels.services}
              </Link>
              <div className="sub_menu">
                <div className="sub_menu_inner_div">
                  <ul className="dropdown">
                    <ServicesDropdown language={language}/>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link href="#" className="text-gray-800 transition-colors duration-300 hover:text-orange-600">
                {translatedLabels.solutions}
              </Link>
              <div className="sub_menu">
                <div className="sub_menu_inner_div">
                  <ul className="dropdown">
                    <SolutionDropdown language={language} />
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link className="text-gray-800 transition-colors duration-300 hover:text-orange-600" href="/blog">
                {translatedLabels.resources}
              </Link>
            </li>
            <li>
              <Link className="text-gray-800 transition-colors duration-300 hover:text-orange-600" href="/contact">
                {translatedLabels.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div className="header-serach-div">
          <p className="text-[#757575]">{translatedLabels.partners}</p>
          <div className="slider-container hidden md:block">
            {navImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`logo-${index}`}
                height={100}
                width={150}
                className={`slider-img ${index === activeIndex ? "active" : ""}`}
              />
            ))}
          </div>
          <Image
            width={100}
            height={100}
            className="mobile-menu"
            src="/Navbar/MENU-MOB-NEW.svg"
            onClick={toggleMenu}
            alt="Mobile Menu Icon"
          />
        </div>

        {/* Mobile Menu */}
        <div className={`Mobile-menu-div transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-[100vh]" : "max-h-0"}`}>
          <div className="mobile-menu-inner-div">
            <div className="mobile_logo_div">
              <a href={"/"}>
                <Image
                  src={"/Navbar/NEWLOGO.svg"}
                  width={500}
                  height={500}
                  className={`${home_headerlogo} headerlogo cursor-pointer`}
                  priority
                  alt="Mobile Logo"
                />
              </a>
              <Image
                width={100}
                height={100}
                className="mobile-close-icon"
                src="/Navbar/MENU-MOB-NEW-C.svg"
                onClick={toggleMenu}
                alt="Close Menu"
              />
            </div>
            <ul className="mobile_menu_list">
              <li>
                <Link className="text-gray-800 transition-colors duration-300 hover:text-orange-600" href="/about-us">
                  {translatedLabels.whoWeAre}
                </Link>
              </li>
              <li>
                <div onClick={() => toggleSection("services")} className="cursor-pointer">
                  <Link href="#" className={`submenu_arrow ${openSection === "services" ? "mobile_open_color" : ""}`}>
                    <span>{translatedLabels.services}</span>
                  </Link>
                </div>
                <div className={`service-down transition-max-height duration-300 ease-in-out overflow-hidden ${openSection === "services" ? "max-h-screen" : "max-h-0"}`}>
                  <MobileServices />
                </div>
              </li>
              <li>
                <div onClick={() => toggleSection("solution")} className="cursor-pointer">
                  <Link href="#" className={`submenu_arrow ${openSection === "solution" ? "mobile_open_color" : ""}`}>
                    <span>{translatedLabels.solutions}</span>
                  </Link>
                </div>
                <div className={`service-down transition-max-height duration-300 ease-in-out overflow-hidden ${openSection === "solution" ? "max-h-screen" : "max-h-0"}`}>
                  <MobileSolution />
                </div>
              </li>
              <li>
                <Link className="text-gray-800 transition-colors duration-300 hover:text-orange-600" href="/blog">
                  {translatedLabels.resources}
                </Link>
              </li>
              <li>
                <Link className="text-gray-800 transition-colors duration-300 hover:text-orange-600" href="/contact">
                  {translatedLabels.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
