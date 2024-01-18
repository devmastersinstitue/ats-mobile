
import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import Content from './Content';
import Gallery from './Gallery';
import Footer from './Footer';
 import Menu from './Menu';
import HomeContent from './HomeContent';
import Info from './Info';
import User from './User';
import sixImage from "./Jena.jpg";
const LayoutTwo = () => {
  return (
    
    <div >
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

    <Info/>
    <User/>
    <div>
    <div className="mx-32 mt-16 ">
        <h2 className="text-xl text-gray-400">
        TESTIMONIALS <span className="text-green-400">______________</span>
        </h2>{" "}
        
        <h1 className="font-bold text-5xl">WHAT ARE THEY SAYING</h1> </div>
       
          
        <div className='flex flex-row my-36 '>
        <img
                    src={sixImage}
                    alt="My Image"
                    className=" h-16 w-16 ml-44"
                  /> 
          <div className='bg-gray-200 w-4/12 h-72 border-2 mx- px-16 py-10'>
         
                 
                   
            <h1 className='font-bold text-3xl'>Jena Karlis</h1>
            
            <h3 className='text-xl '>Store Owner</h3>
            
           
            <p className='text-xl py-2'>" It's possible that this person gained prominence or became  known after that date, 
               or they may not be widely recognized in public domains." </p>
             
          </div>
          <div  className='bg-gray-200 w-4/12 h-72 border-2 '>B</div>
        </div>
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
  </div>
  );
}

export default  LayoutTwo;