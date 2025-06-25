import React from 'react';
import {
  AboutNavbar,
  AboutLogo,
  AboutNavLinks,
  AboutNavLink,
  AboutLoginButton,
  AboutBannerSection,
  AboutBannerTitle,
  AboutMainSection,
  AboutImage,
  AboutContent,
  AboutHeading,
  AboutServicesGrid,
  AboutServiceItem,
  AboutBottomSection
} from '../css/AboutPageStyles';

const services = [
  "Soil Testing",
  "Irrigation Management",
  "Crop Planning",
  "Pest Control",
  "Seed Selection",
  "Harvesting",
  "Fertilizer Application",
  "Storage and Processing"
];

const AboutPage = () => (
  <>
    <AboutNavbar>
      <AboutLogo to="/">
        <img src="/images/farmer.png" alt="HelloFarmer" />
        HelloFarmer
      </AboutLogo>
      <AboutNavLinks>
        <AboutNavLink to="/">Home</AboutNavLink>
        <AboutNavLink to="/product">Product</AboutNavLink>
        <AboutNavLink to="/news">News</AboutNavLink>
        <AboutNavLink to="/about" $active>About</AboutNavLink>
        <AboutNavLink to="/contact">Contact</AboutNavLink>
      </AboutNavLinks>
      <AboutLoginButton>
        Log In <span className="dropdown">&#9662;</span>
      </AboutLoginButton>
    </AboutNavbar>
    <AboutBannerSection>
      <AboutBannerTitle>ABOUT</AboutBannerTitle>
    </AboutBannerSection>
    <AboutMainSection>
      <AboutImage src="/images/farmer-cattle.jpg" alt="Farmer with Cattle" />
      <AboutContent>
        <AboutHeading>Growth and prosperity start here</AboutHeading>
        <AboutServicesGrid>
          {services.map((service, idx) => (
            <AboutServiceItem key={idx}>{service}</AboutServiceItem>
          ))}
        </AboutServicesGrid>
      </AboutContent>
    </AboutMainSection>
    <AboutBottomSection>
      Farming and agriculture form the backbone of food production, providing sustenance and livelihoods worldwide. They involve cultivating crops, raising livestock, and managing natural resources sustainably to ensure economic growth and environmental balance.
    </AboutBottomSection>
  </>
);

export default AboutPage;