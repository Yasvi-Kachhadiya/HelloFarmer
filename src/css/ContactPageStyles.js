import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContactNavbar = styled.nav`
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vw;
  height: 72px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const ContactLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  font-weight: bold;
  color: #222;
  text-decoration: none;
  img {
    height: 44px;
    margin-right: 12px;
  }
`;

export const ContactNavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex: 1;
  justify-content: center;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
`;

export const ContactNavLink = styled(Link)`
  color: ${({ $active }) => ($active ? '#f4b183' : '#333')};
  font-weight: 500;
  text-decoration: none;
  font-size: 1.08rem;
  padding: 2px 0;
  border-bottom: ${({ $active }) => ($active ? '2.5px solid #f4b183' : '2.5px solid transparent')};
  transition: color 0.2s, border 0.2s;
  &:hover {
    color: #e69b62;
  }
`;

export const ContactLoginButton = styled.button`
  background: linear-gradient(90deg, #f4b183 0%, #e69b62 100%);
  color: #fff;
  border: none;
  border-radius: 22px;
  padding: 0.7rem 2.1rem 0.7rem 1.5rem;
  font-size: 1.08rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 18px rgba(244,177,131,0.13);
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
  margin-left: 1.5rem;
  .dropdown {
    margin-left: 0.7rem;
    font-size: 1.1em;
    color: #fff;
    pointer-events: none;
  }
  &:hover {
    background: linear-gradient(90deg, #e69b62 0%, #f4b183 100%);
    box-shadow: 0 6px 24px rgba(244,177,131,0.18);
    transform: translateY(-2px) scale(1.03);
  }
`;

export const ContactBannerSection = styled.section`
  width: 100%;
  height: 260px;
  background: url('/images/contact.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 72px;
  position: relative;
  @media (max-width: 700px) {
    height: 140px;
    margin-top: 60px;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.45);
  }
`;

export const ContactBannerTitle = styled.h1`
  color: #fff;
  font-size: 3.2rem;
  font-weight: 800;
  letter-spacing: 4px;
  z-index: 2;
  position: relative;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0 4px 24px rgba(0,0,0,0.18);
  @media (max-width: 700px) {
    font-size: 1.7rem;
    letter-spacing: 2px;
  }
`;

export const ContactMainSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2vw 2rem 2vw;
  background: #f9f9f9;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem 1vw 1rem 1vw;
  }
`;

export const ContactInfoSection = styled.div`
  flex: 1;
  min-width: 260px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  padding: 2rem 2vw;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-size: 1.08rem;
  color: #333;
  font-weight: 500;
`;

export const ContactInfoItem = styled.div`
  margin-bottom: 0.5rem;
  b {
    color: #e69b62;
    font-weight: 700;
    margin-right: 0.5rem;
  }
`;

export const ContactFormSection = styled.div`
  flex: 1;
  min-width: 260px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  padding: 2rem 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

export const ContactInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #E3E3E3;
  border-radius: 12px;
  font-size: 1.08rem;
  transition: all 0.3s ease;
  background: #f8f8f8;
  margin-bottom: 0.5rem;
  &:focus {
    outline: none;
    border-color: #f4b183;
    background: white;
    box-shadow: 0 0 0 3px rgba(244, 177, 131, 0.1);
  }
`;

export const ContactTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid #E3E3E3;
  border-radius: 12px;
  font-size: 1.08rem;
  transition: all 0.3s ease;
  background: #f8f8f8;
  resize: vertical;
  min-height: 90px;
  &:focus {
    outline: none;
    border-color: #f4b183;
    background: white;
    box-shadow: 0 0 0 3px rgba(244, 177, 131, 0.1);
  }
`;

export const ContactButton = styled.button`
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #f4b183 0%, #e69b62 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(244, 177, 131, 0.3);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(244, 177, 131, 0.4);
    background: linear-gradient(135deg, #e69b62 0%, #f4b183 100%);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const ContactFormMessage = styled.div`
  margin-top: 1rem;
  color: #e69b62;
  font-weight: 600;
  text-align: center;
`;
