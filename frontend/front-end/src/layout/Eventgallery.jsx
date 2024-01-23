import React, { useState } from 'react'


const Eventgallery = () => {
    const [galleryItems, setGalleryItems] = useState([
      {
        id: 1,
       
        heading: "Introduction to webdesign",
        subheading: "Sunday, September 26th at 7:00 pm",
        paragraph:
          " Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
      {
        id: 2,
       
        heading: "Marketing Strategies",
        subheading: "Sunday, November 15th at 7:00 pm",
        paragraph: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ",
      },
      // Add more items as needed
    ]);
  
    const renderGalleryItems = () => {
      return galleryItems.map((item, index) => (
        
        <div key={index} className=" flex flex-row  w-[30%] border-2 h-80 -mt-40 mx-48 mb-10 bg-white">
         
          <div className="flex flex-row py-8 ">
           
            <div className="text-container px-7 py-5 ">
              <h2 className=" text-2xl font-bold text-center">{item.heading}</h2>
              <h3 className="text-center text-lg py-5">{item.subheading}</h3>
              <p className="py-2 text-lg ">{item.paragraph}</p>
            </div>
          </div>
        </div>
      ));
    };
  
    return (
      <div className="gallery-container flex flex-row">
        {renderGalleryItems()}
      </div>
    );
  };
  
  export default Eventgallery;
  