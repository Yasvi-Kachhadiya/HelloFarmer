import React from 'react';
import {
  FooterContainer,
  FooterGrid,
  FooterCol,
  FooterTitle,
  FooterContactItem,
  FooterIcon,
  FooterLinks,
  FooterLink,
  FooterAbout,
  FooterSocials,
  FooterSocialIcon
} from '../css/FooterStyles';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => (
  <FooterContainer>
    <FooterGrid>
      {/* Contact Us */}
      <FooterCol>
        <FooterTitle>Contact Us</FooterTitle>
        <FooterContactItem>
          <FooterIcon><FaPhoneAlt /></FooterIcon>
          +7896541236
        </FooterContactItem>
        <FooterContactItem>
          <FooterIcon><FaEnvelope /></FooterIcon>
          info@gmail.com
        </FooterContactItem>
        <FooterContactItem>
          <FooterIcon><FaMapMarkerAlt /></FooterIcon>
          890, Sector 62, Gyan Sarovar, GAIL Noida (Delhi/NCR)
        </FooterContactItem>
      </FooterCol>
      {/* Useful Links */}
      <FooterCol>
        <FooterTitle>Useful Links</FooterTitle>
        <FooterLinks>
          <FooterLink as={Link} to="/">Home</FooterLink>
          <FooterLink as={Link} to="/product">Product</FooterLink>
          <FooterLink as={Link} to="/news">News</FooterLink>
          <FooterLink as={Link} to="/contact">Contact Us</FooterLink>
        </FooterLinks>
      </FooterCol>
      {/* About Us */}
      <FooterCol>
        <FooterTitle>About Us</FooterTitle>
        <FooterAbout>
          A farmer cultivates land, grows crops, and raises livestock, playing a key role in food production, raw materials, and economic stability. Agriculture, an ancient practice, includes crop production, livestock farming, and horticulture, contributing to food security and economic growth. Despite challenges like climate change and soil degradation.
        </FooterAbout>
        <FooterSocials>
          <FooterSocialIcon href="https://instagram.com" target="_blank" aria-label="Instagram"><FaInstagram /></FooterSocialIcon>
          <FooterSocialIcon href="https://facebook.com" target="_blank" aria-label="Facebook"><FaFacebookF /></FooterSocialIcon>
          <FooterSocialIcon href="https://twitter.com" target="_blank" aria-label="Twitter"><FaTwitter /></FooterSocialIcon>
          <FooterSocialIcon href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><FaLinkedinIn /></FooterSocialIcon>
        </FooterSocials>
      </FooterCol>
    </FooterGrid>
  </FooterContainer>
);
export default Footer;