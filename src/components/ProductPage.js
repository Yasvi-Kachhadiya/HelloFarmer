import React from 'react';
import {
  ProductNavbar,
  ProductLogo,
  ProductNavLinks,
  ProductNavLink,
  ProductLoginButton,
  BannerSection,
  BannerTitle,
  ProductGridSection,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductDesc,
  ProductPriceRow,
  ProductPrice,
  ProductMRP
} from '../css/ProductPageStyles';

const products = [
  {
    name: 'Premium Wheat',
    desc: 'High-quality wheat grains, perfect for baking and cooking.',
    price: '₹1200',
    mrp: '₹1500',
    img: '../images/home.jpg'
  },
  {
    name: 'Organic Rice',
    desc: 'Naturally grown rice, rich in nutrients and flavor.',
    price: '₹950',
    mrp: '₹1200',
    img: '../images/rise.jpg'
  },
  {
    name: 'Fresh Corn',
    desc: 'Sweet and juicy corn, freshly harvested from the farm.',
    price: '₹600',
    mrp: '₹800',
    img: '/images/corn1.jpg'
  },
  {
    name: 'Golden Millet',
    desc: 'Nutritious golden millet, ideal for healthy meals and snacks.',
    price: '₹700',
    mrp: '₹950',
    img: '/images/millet1.jpg'
  }
];

const ProductPage = () => (
  <>
    <ProductNavbar>
      <ProductLogo to="/">
        <img src="/images/farmer.png" alt="HelloFarmer" />
        HelloFarmer
      </ProductLogo>
      <ProductNavLinks>
        <ProductNavLink to="/">Home</ProductNavLink>
        <ProductNavLink to="/product" $active>Product</ProductNavLink>
        <ProductNavLink to="/news">News</ProductNavLink>
        <ProductNavLink to="/about">About</ProductNavLink>
        <ProductNavLink to="/contact">Contact</ProductNavLink>
      </ProductNavLinks>
      <ProductLoginButton>
        Log In <span className="dropdown">&#9662;</span>
      </ProductLoginButton>
    </ProductNavbar>
    <BannerSection>
      <BannerTitle>PRODUCT</BannerTitle>
    </BannerSection>
    <ProductGridSection>
      {products.map((p, i) => (
        <ProductCard key={i}>
          <ProductImage src={p.img} alt={p.name} />
          <ProductInfo>
            <ProductName>{p.name}</ProductName>
            <ProductDesc>{p.desc}</ProductDesc>
            <ProductPriceRow>
              <ProductPrice>{p.price}</ProductPrice>
              <ProductMRP>{p.mrp}</ProductMRP>
            </ProductPriceRow>
          </ProductInfo>
        </ProductCard>
      ))}
    </ProductGridSection>
  </>
);

// export default ProductPage;
export default ProductPage;
