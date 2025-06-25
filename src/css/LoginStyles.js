import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: white;
  max-width: 1600px;
  margin: 2rem auto;
  border: 1px solid rgba(227, 227, 227, 0.8);
  border-radius: 25px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 1700px) {
    margin: 0 auto;
    border-radius: 0;
  }
`;

export const LeftSection = styled.div`
  flex: 0 0 45%;
  background: url('/images/login1.png') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  min-height: 800px;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
  }
`;

export const Logo = styled.div`
  color: white;
  font-size: 2.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    height: 50px;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
    object-fit: contain;
  }
`;

export const RightSection = styled.div`
  flex: 0 0 55%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  min-height: 800px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
    pointer-events: none;
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 500px;
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  color: #333;
  margin-bottom: 3rem;
  font-weight: 600;
  text-align: center;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #f4b183;
    border-radius: 2px;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 2rem;
  position: relative;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.8rem;
  color: #333;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;

  &:focus-within {
    transform: translateX(5px);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  border: 2px solid #E3E3E3;
  border-radius: 12px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  background: #f8f8f8;

  &:focus {
    outline: none;
    border-color: #f4b183;
    background: white;
    box-shadow: 0 0 0 3px rgba(244, 177, 131, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

export const InputIcon = styled.span`
  position: absolute;
  right: 1.2rem;
  color: #f4b183;
  font-size: 1.3rem;
  transition: transform 0.3s ease;
`;

export const ForgotPassword = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 1rem;
  display: block;
  margin-bottom: 2rem;
  text-align: right;
  transition: all 0.3s ease;
  
  &:hover {
    color: #f4b183;
    transform: translateX(-5px);
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #f4b183 0%, #e69b62 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(244, 177, 131, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(244, 177, 131, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 2.5rem 0;
  color: #666;
  font-weight: 500;
  font-size: 1.1rem;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #E3E3E3;
    margin: 0 1.5rem;
  }
`;

export const SocialButton = styled.button`
  width: 100%;
  padding: 1.2rem;
  border: 2px solid #E3E3E3;
  border-radius: 12px;
  background: white;
  color: #333;
  font-size: 1.1rem;
  cursor: pointer;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:hover {
    border-color: #f4b183;
    background: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }
  
  img {
    height: 28px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const UserTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
  background: #f8f9fa;
  border-radius: 15px;
  padding: 0.5rem;
  width: 100%;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.05);
`;

export const UserTypeButton = styled.button`
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  background: ${props => props.active ? 'linear-gradient(135deg, #f4b183 0%, #e69b62 100%)' : 'transparent'};
  color: ${props => props.active ? 'white' : '#666'};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? '0 4px 15px rgba(244, 177, 131, 0.3)' : 'none'};
  
  &:hover {
    transform: ${props => props.active ? 'translateY(-2px)' : 'none'};
    color: ${props => props.active ? 'white' : '#f4b183'};
  }

  &:active {
    transform: translateY(1px);
  }
`;
