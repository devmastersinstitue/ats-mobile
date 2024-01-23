import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import Content from "./Content";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Menu from "./Menu";
import HomeContent from "./HomeContent";
import myImage from "./pic3.jpg";
import seventhImage from "./pic9.avif";
import Eventgallery from "./Gallery";

const LayoutFive = () => {
  return (
    <div>
      {/* <Menu/> */}
      <Header />
      <div className="bg-green-400 w-full h-48 my-10">
        <h1 className="text-white text-4xl  text-center py-10">Events</h1>
        <p className="text-white text-xl text-center -mt-7">
          Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia
          id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam
          aperiam consequatur laboriosam nemo harum praesentium.
        </p>
      </div>
      <div className="flex flex-row justify-between py-5">
        <img src={myImage} alt="My Image" className="w-4/12 h-4/5 mx-auto" />
        <img src={seventhImage} alt="My Image" className="w-4/12 h-4/5 mx-auto " />
      </div>
      
      <Eventgallery/>
      <Footer />
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
};

export default LayoutFive;
