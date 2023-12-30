
import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import Content from './Content';
// import Gallery from './Gallery';
import Footer from './Footer';

const LayoutOne = () => {
  return (
    
    <div >
      <h1 className='text-center font-semibold text-4xl text-black m-14  '>GeeksforGeeks</h1>
      <p className='text-center text-green-600 text-2xl font-bold -mt-10'>React Suite Sidebar Layout</p>
    <Header />
    <div >
      <div className="flex flex-row h-72" > 
      <SideMenu />
      <Content />
      </div>
      {/* <Gallery /> */}
    </div>
    <Footer />
  </div>
  );
}

export default  LayoutOne;