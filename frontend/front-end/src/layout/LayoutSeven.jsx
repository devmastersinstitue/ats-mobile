import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import Content from "./Content";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Menu from "./Menu";
import HomeContent from "./HomeContent";


const LayoutSeven = () => {
  return (
    <div>
      {/* <Menu/> */}
      <Header />

      <div className="bg-green-400 w-full h-48 my-10">
        <h1 className="text-white text-4xl  text-center py-10">Contact Us</h1>
        <p className="text-white text-xl text-center -mt-7">
          Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia
          id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam
          aperiam consequatur laboriosam nemo harum <br /> praesentium.
        </p>
      </div>
      <div>
        <div>
          <form className="text-xl mx-20">
            <label>
              {" "}
              <b>Location:</b>
              <br />
              A108 Adam Street, New York, NY 535022
            </label>
          </form>
          <br />
          <form className="text-xl mx-20">
            <label>
              {" "}
              <b>Email:</b>
              <br />
              info@example.com
            </label>
          </form>
          <br />
          <form className="text-xl mx-20">
            <label>
              {" "}
              <b>Call:</b>
              <br />
              +1 5589 55488 55s
            </label>
            <div className="-mt-60 space-y-5 ml-60 ">
              <input
                type="text"
                placeholder="Your Name"
                className="h-14 w-96 border-2 ml-56"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="h-14 w-96 border-2 ml-10"
              />
              <input
                type="text"
                placeholder="Subject"
                className="h-14 w-6/12 border-2 ml-56"
              />
              <input
                type="text"
                placeholder="Message"
                className="h-20 w-6/12 border-2 ml-56"
              />
            </div>
          </form>
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
  );
};

export default LayoutSeven;
