import React, { useState } from 'react';
import {
  ContactNavbar,
  ContactLogo,
  ContactNavLinks,
  ContactNavLink,
  ContactLoginButton,
  ContactBannerSection,
  ContactBannerTitle,
  ContactMainSection,
  ContactInfoSection,
  ContactInfoItem,
  ContactFormSection,
  ContactForm,
  ContactInput,
  ContactTextarea,
  ContactButton,
  ContactFormMessage
} from '../css/ContactPageStyles';

const ContactPage = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Simple validation
    if (!form.firstName || !form.lastName || !form.phone || !form.email || !form.message) {
      setStatus('Please fill in all fields.');
      return;
    }
    setStatus('Thank you! Your message has been sent.');
    setForm({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <>
      <ContactNavbar>
        <ContactLogo to="/">
          <img src="/images/farmer.png" alt="HelloFarmer" />
          HelloFarmer
        </ContactLogo>
        <ContactNavLinks>
          <ContactNavLink to="/">Home</ContactNavLink>
          <ContactNavLink to="/product">Product</ContactNavLink>
          <ContactNavLink to="/news">News</ContactNavLink>
          <ContactNavLink to="/about">About</ContactNavLink>
          <ContactNavLink to="/contact" $active>Contact</ContactNavLink>
        </ContactNavLinks>
        <ContactLoginButton>
          Log In <span className="dropdown">&#9662;</span>
        </ContactLoginButton>
      </ContactNavbar>
      <ContactBannerSection>
        <ContactBannerTitle>CONTACT</ContactBannerTitle>
      </ContactBannerSection>
      <ContactMainSection>
        <ContactInfoSection>
          <ContactInfoItem>
            <b>Call Us:</b> +7986541236
          </ContactInfoItem>
          <ContactInfoItem>
            <b>Email Us:</b> info@gmail.com
          </ContactInfoItem>
          <ContactInfoItem>
            <b>Address:</b> 890, Sector 62, Cyan Sarovar, GAIL Noida (Delhi/NCR)
          </ContactInfoItem>
          <ContactInfoItem>
            <b>Time:</b> 10:30 am to 6:00 pm
          </ContactInfoItem>
        </ContactInfoSection>
        <ContactFormSection>
          <ContactForm onSubmit={handleSubmit}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <ContactInput
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <ContactInput
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <ContactInput
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <ContactInput
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <ContactTextarea
              name="message"
              placeholder="Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />
            <ContactButton type="submit">Send Message</ContactButton>
            {status && <ContactFormMessage>{status}</ContactFormMessage>}
          </ContactForm>
        </ContactFormSection>
      </ContactMainSection>
    </>
  );
};

export default ContactPage;