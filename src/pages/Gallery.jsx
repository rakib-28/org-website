import React, { useState } from "react";
import Modal from "react-modal";

const images = [
  "./src/assets/School1.jpg",
  "./src/assets/School2.jpg",
  "./src/assets/School3.jpg",
  "./src/assets/School4.jpg",
  "./src/assets/School5.jpg",
  "./src/assets/School6.jpg",
  "./src/assets/School7.jpg",
  "./src/assets/School8.jpg",
];

const Gallery = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open the modal and set the selected image index
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Navigate to the previous image
  const goToPrevious = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = images.length - 1; // Wrap to the last image if at the start
    }
    setCurrentIndex(newIndex);
  };

  // Navigate to the next image
  const goToNext = () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= images.length) {
      newIndex = 0; // Wrap to the first image if at the end
    }
    setCurrentIndex(newIndex);
  };
  // Function to load more images
  const loadMoreImages = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Increase the count by 6 each time
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Photo Gallery
      </h2>
      {/* Horizontal Scrollable Image Slider */}
      <div className="flex overflow-x-auto space-x-4 py-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-96 h-80 overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover transform hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>

      {/* Modal for Enlarged Image with Navigation */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true} // Enables closing when clicking outside the modal content
        className="relative max-w-screen-lg mx-auto  rounded-lg p-4 shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      >
        <div className="relative flex items-center justify-center">
          {/* Close Indicator Image/Icon */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            &times;
          </button>
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full"
          >
            &#8592; {/* Left Arrow */}
          </button>

          {/* Display Selected Image */}
          <img
            src={images[currentIndex]}
            alt={`Enlarged View ${currentIndex + 1}`}
            className="max-w-lg sm:max-w-screen-lg max-h-[350px] md:max-h-[700px] rounded-lg px-4"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking on the image
          />

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full"
          >
            &#8594; {/* Right Arrow */}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
