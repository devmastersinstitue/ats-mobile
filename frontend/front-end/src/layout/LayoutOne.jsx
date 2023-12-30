
import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import Content from './Content';
import Gallery from './Gallery';
import Footer from './Footer';

const LayoutOne = () => {
  return (
    <div >
    <Header />
    <div >
      <div className="flex flex-row h-72" > 
      <SideMenu />
      <Content />
      </div>
      <Gallery />
    </div>
    <Footer />
  </div>
  );
}

export default  LayoutOne;