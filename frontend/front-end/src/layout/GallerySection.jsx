import React from 'react';

const GallerySection = () => {
  // Replace these image URLs with your actual image URLs
  const galleryImages = [
    'https://placekitten.com/300/200',
    'https://placekitten.com/300/201',
    'https://placekitten.com/300/202',
    'https://placekitten.com/300/203',
    // 'https://placekitten.com/300/204',
  ];

  return (
    <section className="p-4">
      <h2 className="text-3xl font-bold mb-4">Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((imageUrl, index) => (
          <div key={index} className="overflow-hidden rounded-md">
            <img
              src={imageUrl}
              alt={`Gallery Image ${index + 1}`}
              className="w-auto h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default GallerySection;