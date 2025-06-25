import React, { useState } from 'react';
import {
  LoginContainer,
  LeftSection,
  Logo,
  RightSection,
  LoginForm,
  Title,
  InputGroup,
  InputLabel,
  InputWrapper,
  Input,
  InputIcon,
  ForgotPassword,
  LoginButton,
  Divider,
  SocialButton,
  UserTypeContainer,
  UserTypeButton
} from '../css/LoginStyles';

const Login = () => {
  const [userType, setUserType] = useState('farmer');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, userType });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <LoginContainer>
      <LeftSection>
        <Logo>
          <img src="/images/farmer.png" alt="HelloFarmer" />
          HelloFarmer
        </Logo>
      </LeftSection>
      <RightSection>
        <LoginForm onSubmit={handleSubmit}>
          <Title>Login Account</Title>

          <UserTypeContainer>
            <UserTypeButton 
              type="button"
              active={userType === 'farmer'}
              onClick={() => setUserType('farmer')}
            >
              Farmer
            </UserTypeButton>
            <UserTypeButton 
              type="button"
              active={userType === 'customer'}
              onClick={() => setUserType('customer')}
            >
              Customer
            </UserTypeButton>
          </UserTypeContainer>
          
          <InputGroup>
            <InputLabel>Username</InputLabel>
            <InputWrapper>
              <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                placeholder={userType === 'farmer' ? "Enter farmer username" : "Enter customer username"}
              />
              <InputIcon>@</InputIcon>
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <InputLabel>Password</InputLabel>
            <InputWrapper>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="Enter your password"
              />
              <InputIcon>🔒</InputIcon>
            </InputWrapper>
          </InputGroup>

          <ForgotPassword href="#">Forgot Password ?</ForgotPassword>

          <LoginButton type="submit">
            Log in as {userType === 'farmer' ? 'Farmer' : 'Customer'}
          </LoginButton>

          <Divider>OR</Divider>

          <SocialButton type="button">
            <img src="/images/google.png" alt="Google" />
            Sign up with Google
          </SocialButton>

          <SocialButton type="button">
            <img src="/images/facebook.png" alt="Facebook" />
            Sign up with Facebook
          </SocialButton>
        </LoginForm>
      </RightSection>
    </LoginContainer>
  );
};

export default Login;