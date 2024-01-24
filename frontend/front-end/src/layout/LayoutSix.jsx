import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import Content from "./Content";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Menu from "./Menu";
import HomeContent from "./HomeContent";
import StudentTable from "./StudentTable";
import LayoutEight from "./LayoutEight";

const LayoutSix = () => {
  return (
    <div>
      {/* <Menu/> */}
      <Header />
      <div className="bg-green-400 w-full h-48 my-10">
        <h1 className="text-white text-4xl  text-center py-10">Pricing</h1>
        <p className="text-white text-xl text-center -mt-7">
          Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia
          id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam
          aperiam consequatur laboriosam nemo harum praesentium.
        </p>
      </div>
      <div className="flex flex-row justify-between mx-40">
        <div className="bg-white border-2 w-80 h-96">
          <div className="text-center text-2xl bg-gray-100 h-16 py-3">
            <h2>Free</h2>
          </div>
          <div className="text-center text-2xl my-10 ">
           <span className="text-green-600">$0</span>  / month br Aida dere <br />
            Nec feugiat nisl <br />
            Nulla at volutpat dola <br />
            Pharetra massa <br />
            Massa ultricies mi
          </div>
          <div className="bg-gray-100  h-20 w-full">
            <button className="bg-green-400 rounded-3xl text-white h-12 w-40 mx-20 my-3">
            Buy Now
            </button>
          </div>
        </div>
        <div className="bg-white border-2 w-80 h-96">
        <div className="bg-white border-2 w-80 h-96">
          <div className="text-center text-2xl bg-gray-100 h-16 py-3">
            <h2>Business</h2>
          </div>
          <div className="text-center text-2xl my-10 ">
           <span className="text-green-600">$0</span>  / month br Aida dere <br />
            Nec feugiat nisl <br />
            Nulla at volutpat dola <br />
            Pharetra massa <br />
            Massa ultricies mi
          </div>
          <div className="bg-gray-100  h-20 w-full">
            <button className="bg-green-400 rounded-3xl text-white h-12 w-40 mx-20 my-3">
            Buy Now
            </button>
          </div>
        </div>
        </div>
        <div className="bg-white border-2 w-80 h-96">
        <div className="bg-white border-2 w-80 h-96">
          <div className="text-center text-2xl bg-gray-100 h-16 py-3">
            <h2>Developer</h2>
          </div>
          <div className="text-center text-2xl my-10 ">
           <span className="text-green-600">$0</span>  / month br Aida dere <br />
            Nec feugiat nisl <br />
            Nulla at volutpat dola <br />
            Pharetra massa <br />
            Massa ultricies mi
          </div>
          <div className="bg-gray-100  h-20 w-full">
            <button className="bg-green-400 rounded-3xl text-white h-12 w-40 mx-20 my-3">
            Buy Now
            </button>
          </div>
        </div>
        </div>
        <div className="bg-white border-2 w-80 h-96">
           <div className="bg-white border-2 w-80 h-96">
          <div className="text-center text-2xl bg-gray-100 h-16 py-3">
            <h2>Ultimate</h2>
          </div>
          <div className="text-center text-2xl my-10 ">
           <span className="text-green-600">$0</span>  / month br Aida dere <br />
            Nec feugiat nisl <br />
            Nulla at volutpat dola <br />
            Pharetra massa <br />
            Massa ultricies mi
          </div>
          <div className="bg-gray-100  h-20 w-full">
            <button className="bg-green-400 rounded-3xl text-white h-12 w-40 mx-20 my-3">
            Buy Now
            </button>
          </div>
        </div>
        </div>
        
      </div>
      <StudentTable/>
      <LayoutEight/>
      <Footer />
     
    </div>
  );
};

export default LayoutSix;
