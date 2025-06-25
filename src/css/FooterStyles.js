import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #fff;
  border-top: 2px solid #f4b183;
  padding: 3rem 2vw 2rem 2vw;
  margin-top: 3rem;
`;

export const FooterGrid = styled.div`
  display: flex;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

export const FooterCol = styled.div`
  flex: 1;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FooterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #e69b62;
  margin-bottom: 1.2rem;
  letter-spacing: 1px;
`;

export const FooterContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  color: #333;
  font-size: 1.08rem;
  margin-bottom: 0.7rem;
`;

export const FooterIcon = styled.span`
  color: #f4b183;
  font-size: 1.15em;
  margin-top: 2px;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 1.08rem;
  transition: color 0.2s;
  &:hover {
    color: #e69b62;
    text-decoration: underline;
  }
`;

export const FooterAbout = styled.p`
  color: #444;
  font-size: 1.02rem;
  margin-bottom: 1.2rem;
  line-height: 1.6;
`;

export const FooterSocials = styled.div`
  display: flex;
  gap: 1.1rem;
`;

export const FooterSocialIcon = styled.a`
  color: #f4b183;
  font-size: 1.45rem;
  transition: color 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  &:hover {
    color: #e69b62;
    transform: scale(1.15);
  }
`;