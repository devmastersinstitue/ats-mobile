import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import Content from "./Content";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Menu from "./Menu";
import HomeContent from "./HomeContent";
import Info from "./Info";
import User from "./User";
import sixImage from "./Jena.jpg";
import firstImage from "./image2.jpg"

const LayoutTwo = () => {
  const images = [
   firstImage,
   firstImage,
   firstImage,
   firstImage,
   firstImage,
    // Add more image URLs as needed
  ];

  return (
    <div>
      {/* <Menu/> */}

      <Header />
      <div className="bg-green-400 w-full h-48 my-10">
        <h1 className="text-white text-4xl  text-center py-10">About Us</h1>
        <p className="text-white text-xl text-center -mt-7">
          Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia
          id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam
          aperiam consequatur laboriosam nemo harum <br /> praesentium.
        </p>
      </div>

      <Info />
      <User />
      <div>
        <div className="mx-32 mt-16 ">
          <h2 className="text-xl text-gray-400">
            TESTIMONIALS <span className="text-green-400">______________</span>
          </h2>{" "}
          <h1 className="font-bold text-5xl">WHAT ARE THEY SAYING</h1>{" "}
        </div>

        <div className="container mx-auto my-8">
          <h1 className="text-3xl font-bold mb-4">Image Gallery</h1>
          <Gallery images={images} />
        </div>
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
    </div>
  );
};

export default LayoutTwo;
