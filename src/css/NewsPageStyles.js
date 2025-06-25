import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NewsNavbar = styled.nav`
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

export const NewsLogo = styled(Link)`
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

export const NewsNavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex: 1;
  justify-content: center;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
`;

export const NewsNavLink = styled(Link)`
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

export const NewsLoginButton = styled.button`
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

export const NewsBannerSection = styled.section`
  width: 100%;
  height: 260px;
  background: url('/images/news.jpg') center/cover no-repeat;
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

export const NewsBannerTitle = styled.h1`
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

export const NewsFlashBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background: #f7f7f7;
  padding: 0.7rem 2vw;
  border-bottom: 1.5px solid #f4b183;
  margin-bottom: 1.5rem;
  margin-top: -24px;
  position: relative;
  z-index: 2;
`;

export const NewsFlashLabel = styled.span`
  background: #e53935;
  color: #fff;
  font-weight: 700;
  font-size: 1.05rem;
  padding: 0.3rem 1.1rem;
  border-radius: 6px;
  letter-spacing: 1px;
`;

export const NewsFlashText = styled.span`
  color: #b71c1c;
  font-size: 1.08rem;
  font-family: 'Noto Sans Gujarati', 'Segoe UI', Arial, sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  b {
    color: #111;
    font-weight: 700;
  }
`;

export const NewsGridSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 2vw 2.5rem 2vw;
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  background: #f9f9f9;
  @media (max-width: 900px) {
    gap: 1.2rem;
    padding: 1.2rem 1vw;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1.2rem;
    padding: 0.7rem 0.5vw;
  }
`;

export const NewsCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 32px rgba(0,0,0,0.09);
  flex: 1 1 300px;
  max-width: 340px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;
  transition: box-shadow 0.2s, transform 0.2s;
  border: 1.5px solid #f4b183;
  cursor: pointer;
  &:hover {
    box-shadow: 0 12px 40px rgba(244,177,131,0.18);
    transform: translateY(-6px) scale(1.03);
  }
`;

export const NewsCardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  transition: transform 0.25s;
  ${NewsCard}:hover & {
    transform: scale(1.06);
  }
`;

export const NewsCardCaption = styled.div`
  font-size: 1.08rem;
  color: #333;
  text-align: center;
  font-family: 'Noto Sans Gujarati', 'Segoe UI', Arial, sans-serif;
  margin-top: 0.5rem;
  min-height: 32px;
  font-weight: 600;
`;

export const NewsCardSubtext = styled.div`
  font-size: 1rem;
  color: #666;
  text-align: center;
  font-family: 'Noto Sans Gujarati', 'Segoe UI', Arial, sans-serif;
  margin-top: 0.3rem;
  min-height: 24px;
`;
