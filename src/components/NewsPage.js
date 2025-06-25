import React from 'react';
import {
  NewsNavbar,
  NewsLogo,
  NewsNavLinks,
  NewsNavLink,
  NewsLoginButton,
  NewsBannerSection,
  NewsBannerTitle,
  NewsFlashBar,
  NewsFlashLabel,
  NewsFlashText,
  NewsGridSection,
  NewsCard,
  NewsCardImage,
  NewsCardCaption,
  NewsCardSubtext
} from '../css/NewsPageStyles';

const newsCards = [
  {
    img: '/images/about.jpg',
    caption: 'કૃષિ સેમિનાર અમદાવાદમાં યોજાયો',
    subtext: '➔ ખેડૂતો માટે નવી તક, નવી ટેકનોલોજી રજૂ'
  },
  {
    img: '/images/news-farmer-cartoon.jpg',
    caption: 'iKhedut પોર્ટલ: સહાય માટે અરજી',
    subtext: '➔ સહાય મેળવવા માટે ઓનલાઇન અરજી કરો'
  },
  {
    img: '/images/news-farming-scene.jpg',
    caption: 'પીએમ કિસાન યોજના: 6,000 રૂપિયા સહાય',
    subtext: '➔ લાભ લેવા માટે નોંધણી ફરજિયાત'
  }
];

const NewsPage = () => (
  <>
    <NewsNavbar>
      <NewsLogo to="/">
        <img src="/images/farmer.png" alt="HelloFarmer" />
        HelloFarmer
      </NewsLogo>
      <NewsNavLinks>
        <NewsNavLink to="/">Home</NewsNavLink>
        <NewsNavLink to="/product">Product</NewsNavLink>
        <NewsNavLink to="/news" $active>News</NewsNavLink>
        <NewsNavLink to="/about">About</NewsNavLink>
        <NewsNavLink to="/contact">Contact</NewsNavLink>
      </NewsNavLinks>
      <NewsLoginButton>
        Log In <span className="dropdown">&#9662;</span>
      </NewsLoginButton>
    </NewsNavbar>
    <NewsBannerSection>
      <NewsBannerTitle>News</NewsBannerTitle>
    </NewsBannerSection>
    <NewsFlashBar>
      <NewsFlashLabel>NEWS FLASH</NewsFlashLabel>
      <NewsFlashText>
        <span>બિઝનેસ શરૂ કરવા માંગો છો?, <b>સરકાર 1 કરોડ</b> સુધીની લોન આપે છે...</span>
      </NewsFlashText>
    </NewsFlashBar>
    <NewsGridSection>
      {newsCards.map((card, idx) => (
        <NewsCard key={idx}>
          <NewsCardImage src={card.img} alt={card.caption} />
          <NewsCardCaption>{card.caption}</NewsCardCaption>
          <NewsCardSubtext>{card.subtext}</NewsCardSubtext>
        </NewsCard>
      ))}
    </NewsGridSection>
  </>
);

export default NewsPage;
