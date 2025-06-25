import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AboutNavbar = styled.nav`
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

export const AboutLogo = styled(Link)`
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

export const AboutNavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex: 1;
  justify-content: center;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
`;

export const AboutNavLink = styled(Link)`
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

export const AboutLoginButton = styled.button`
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

export const AboutBannerSection = styled.section`
  width: 100%;
  height: 260px;
  background: url('/images/about.jpg') center/cover no-repeat;
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

export const AboutBannerTitle = styled.h1`
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

export const AboutMainSection = styled.section`
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

export const AboutImage = styled.img`
  width: 340px;
  max-width: 90vw;
  border-radius: 18px;
  box-shadow: 0 6px 32px rgba(0,0,0,0.09);
  object-fit: cover;
  @media (max-width: 700px) {
    width: 100%;
    max-width: 100vw;
  }
`;

export const AboutContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 260px;
`;

export const AboutHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
`;

export const AboutServicesGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.1rem 2.2rem;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 0.7rem 0;
  }
`;

export const AboutServiceItem = styled.li`
  font-size: 1.08rem;
  color: #444;
  background: #fff;
  border-radius: 8px;
  padding: 0.7rem 1.2rem;
  box-shadow: 0 2px 12px rgba(244,177,131,0.09);
  transition: box-shadow 0.2s, transform 0.2s;
  &:hover {
    box-shadow: 0 6px 24px rgba(244,177,131,0.18);
    transform: translateY(-2px) scale(1.03);
  }
`;

export const AboutBottomSection = styled.div`
  max-width: 900px;
  margin: 2.5rem auto 2rem auto;
  padding: 2rem 2vw;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  font-size: 1.13rem;
  color: #333;
  text-align: center;
  line-height: 1.7;
`;