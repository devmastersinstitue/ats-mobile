import React, { useState } from "react";
import Image1 from "./Jena.jpg";
import Image2 from "./Sarah.jpg";
const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([
    {
      id: 1,
      imageSrc: Image1,
      heading: "Jena Karlis",
      subheading: "Store Owner",
      paragraph:
        " It's possible that this person gained prominence or became known after that date, or they may not be widely recognized in public domains.",
    },
    {
      id: 2,
      imageSrc: Image2,
      heading: "Sarah Wilsson",
      subheading: "Designer",
      paragraph: "If Sarah Wilsson is a private individual or has gained prominence after my last update, you might want to check more recent and specific sources for up-to-date. ",
    },
    // Add more items as needed
  ]);

  const renderGalleryItems = () => {
    return galleryItems.map((item, index) => (
      <div key={index} className=" flex flex-row mx-10 w-[50%] border-2 h-72">
       
        <div className="flex flex-row py-8">
          <img
            src={item.imageSrc}
            alt={`Image ${item.id}`}
            className="h-24 w-24 rounded-md -ml-5 "
          />
          <div className="text-container px-5 py-5">
            <h2 className=" text-2xl font-bold">{item.heading}</h2>
            <h3 className="">{item.subheading}</h3>
            <p className="py-7 text-2xl">{item.paragraph}</p>
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

export default Gallery;
