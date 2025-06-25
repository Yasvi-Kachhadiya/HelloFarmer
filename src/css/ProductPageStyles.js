import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductNavbar = styled.nav`
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

export const ProductLogo = styled(Link)`
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

export const ProductNavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex: 1;
  justify-content: center;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
`;

export const ProductNavLink = styled(Link)`
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

export const ProductLoginButton = styled.button`
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

export const BannerSection = styled.section`
  width: 100%;
  height: 320px;
  background: url('/images/contact.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 72px;
  position: relative;
  @media (max-width: 700px) {
    height: 180px;
    margin-top: 60px;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.18);
  }
`;

export const BannerTitle = styled.h1`
  color: #fff;
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: 4px;
  z-index: 2;
  text-shadow: 0 4px 24px rgba(0,0,0,0.18);
  position: relative;
  @media (max-width: 700px) {
    font-size: 2rem;
    letter-spacing: 2px;
  }
`;

export const ProductGridSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3.5rem 2vw 2.5rem 2vw;
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  background: #f9f9f9;
  @media (max-width: 900px) {
    gap: 1.2rem;
    padding: 2.2rem 1vw 1.5rem 1vw;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.2rem 0.5vw;
  }
`;

export const ProductCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 6px 32px rgba(0,0,0,0.09);
  flex: 1 1 300px;
  max-width: 340px;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.2rem 1.5rem 1.5rem 1.5rem;
  transition: box-shadow 0.2s, transform 0.2s;
  position: relative;
  &:hover {
    box-shadow: 0 12px 40px rgba(244,177,131,0.18);
    transform: translateY(-6px) scale(1.03);
  }
  @media (max-width: 700px) {
    max-width: 100%;
    min-width: 0;
    padding: 1.2rem 0.7rem;
  }
`;

export const ProductImage = styled.img`
  width: 110px;
  height: 110px;
  object-fit: contain;
  margin-bottom: 1.2rem;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(244,177,131,0.09);
  background: #f8f8f8;
`;

export const ProductInfo = styled.div`
  width: 100%;
  text-align: center;
`;

export const ProductName = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
`;

export const ProductDesc = styled.p`
  font-size: 1.02rem;
  color: #666;
  margin-bottom: 1.1rem;
  min-height: 40px;
`;

export const ProductPriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
`;

export const ProductPrice = styled.span`
  font-size: 1.18rem;
  font-weight: 700;
  color: #e69b62;
`;

export const ProductMRP = styled.span`
  font-size: 1.05rem;
  color: #aaa;
  text-decoration: line-through;
  font-weight: 500;
`;
