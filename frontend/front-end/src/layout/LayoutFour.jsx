
import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import Content from './Content';
import Gallery from './Gallery';
import Footer from './Footer';
 import Menu from './Menu';
import HomeContent from './HomeContent';
import Trainers from './Trainers';
const LayoutFour = () => {
  return (
    
    <div >
     {/* <Menu/> */}
    <Header />
    <div className="bg-green-400 w-full h-48 my-10">
        <h1 className="text-white text-4xl  text-center py-10">Trainers</h1>
        <p className="text-white text-xl text-center -mt-7">
          Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia
          id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam
          aperiam consequatur laboriosam nemo harum  praesentium.
        </p>
      </div>
      <Trainers/>
      <Footer/>
    {/* <HomeContent/> */}
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

export default  LayoutFour;