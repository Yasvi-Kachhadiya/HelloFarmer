import React, { useState } from 'react';
import {
  LoginContainer,
  LeftSection,
  Logo,
  RightSection,
  SignupForm,
  Title,
  InputGroup,
  InputLabel,
  InputWrapper,
  Input,
  InputIcon,
  SignupButton,
  Divider,
  SocialButton,
  UserTypeContainer,
  UserTypeButton,
  LoginLink
} from '../css/SignupStyles';

const Signup = () => {
  const [userType, setUserType] = useState('farmer');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
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
        <SignupForm onSubmit={handleSubmit}>
          <Title>Create Account</Title>

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
            <InputLabel>Full Name</InputLabel>
            <InputWrapper>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
              <InputIcon>👤</InputIcon>
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <InputLabel>Email</InputLabel>
            <InputWrapper>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
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
                placeholder="Create a password"
              />
              <InputIcon>🔒</InputIcon>
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <InputLabel>Confirm Password</InputLabel>
            <InputWrapper>
              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                placeholder="Confirm your password"
              />
              <InputIcon>🔒</InputIcon>
            </InputWrapper>
          </InputGroup>

          <SignupButton type="submit">
            Sign up as {userType === 'farmer' ? 'Farmer' : 'Customer'}
          </SignupButton>

          <LoginLink href="/login">
            Already have an account? Log in
          </LoginLink>

          <Divider>OR</Divider>

          <SocialButton type="button">
            <img src="/images/google.png" alt="Google" />
            Sign up with Google
          </SocialButton>

          <SocialButton type="button">
            <img src="/images/facebook.png" alt="Facebook" />
            Sign up with Facebook
          </SocialButton>
        </SignupForm>
      </RightSection>
    </LoginContainer>
  );
};

export default Signup;