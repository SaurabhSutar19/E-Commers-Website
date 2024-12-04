import React, { useState } from "react";
import { motion } from "framer-motion";

const MyImage = ({ img = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(img[0]);

  // Framer Motion Variants
  const thumbnailVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const mainImageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[0.4fr_1fr] gap-4">
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-rows-4 gap-4">
        {img.map((curElm, index) => (
          <motion.figure
            key={index}
            className="cursor-pointer"
            whileHover="hover"
            whileTap="tap"
            variants={thumbnailVariants}
          >
            <motion.img
              src={curElm.url}
              alt={curElm.filename || `Image ${index + 1}`}
              className="w-full h-auto object-contain shadow-md"
              onClick={() => setMainImage(curElm)}
            />
          </motion.figure>
        ))}
      </div>

      {/* Main Image Display */}
      <motion.div
        className="flex items-center justify-center"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={mainImageVariants}
        key={mainImage.url} // Ensure re-render for animation on image change
      >
        <img
          src={mainImage.url}
          alt={mainImage.filename || "Selected"}
          className="max-w-full h-auto shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default MyImage;
