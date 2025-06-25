import React, { useEffect, useState } from 'react';
import {
  HeroSection,
  Title,
  Subtitle,
  Description,
  ContentWrapper,
  ScrollIndicator,
  ParticleEffect
} from '../css/HomeStyles.js';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <HeroSection>
      <ParticleEffect />
      <ContentWrapper style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translateY(-5px)`
      }}>
        <Title>WELCOME</Title>
        <Subtitle>CHANGE TO WAY YOU FARM</Subtitle>
        <Description>
          Our system provides farmers expert advice, crop tips,
          weather updates, and market trends for sustainable, efficient farming
        </Description>
      </ContentWrapper>
      <ScrollIndicator onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} />
    </HeroSection>
  );
};

export default Home;