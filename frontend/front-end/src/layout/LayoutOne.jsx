
import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import Content from './Content';
import Gallery from './Gallery';
import Footer from './Footer';
 import Menu from './Menu';
import HomeContent from './HomeContent';

const LayoutOne = () => {
  return (
    
    <div >
     {/* <Menu/> */}
    <Header />
    <HomeContent/>
    {/* <div >
      <div className="flex flex-row h-72" > 
      
      <SideMenu />
      <Content />
      </div>
      <Gallery />
    </div>
    <Footer /> */}
    
  </div>
  );
}

export default  LayoutOne;