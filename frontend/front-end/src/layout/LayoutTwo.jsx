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
import sevenImage from "./Sarah.jpg";
import firstImage from "./image2.jpg";

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
        <div className="flex flex-row justify-between mx-40 my-12">
          <div className="bg-white border-2 w-5/12 h-64">
            <img
              src={sixImage}
              alt="My Image"
              className="h-20 w-20 -ml-12 my-4"
            />
            <div className="mx-12 -mt-20 ">
              <h1 className="font-bold text-2xl">Jena Karlis</h1>
              <h2 className="text-xl">Store Owner</h2>
              <p className="text-xl py-2">
                {" "}
                Jena Karlis is a public figure or has gained recognition after
                my last update, I recommend checking recent news articles,
                professional websites for the latest information.
              </p>
            </div>
          </div>
          <div className="bg-white border-2 w-5/12 h-64">
            <img
              src={sevenImage}
              alt="My Image"
              className="h-20 w-20 -ml-12 my-4"
            />
            <div className="mx-12 -mt-20 ">
              <h1 className="font-bold text-2xl">Sarah Wilsson</h1>
              <h2 className="text-xl">Designer</h2>
              <p className="text-xl py-5">
                If Sarah Wilsson is a private individual or has gained
                prominence after my last update, you might want to check more
                recent and specific sources for up-to-date.{" "}
              </p>
            </div>
          </div>
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
