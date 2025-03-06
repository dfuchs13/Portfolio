import React, { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/rows.css";
import "./PhotoGallery.css";

// Dynamically import all images from the public/images folder
const importAll = (r) =>
  r.keys().map((file, index) => ({
    src: file.replace("./", "/images/"), // Ensure path is correct
    width: 800,
    height: 600,
    index: index,
  }));

const images = importAll(require.context("../../public/images", false, /\.(jpg|jpeg|png|gif)$/));

console.log('Images loaded: ', images); // Debugging the imported images

const PhotoGallery = () => {
  const [index, setIndex] = useState(-1); // Track the selected image index

  // Check if images are correctly imported
  console.log('Imported images array: ', images);

  const handleClick = (photo) => {
    if (photo && photo.index !== undefined) {
      console.log("Photo clicked: ", photo); // Check clicked photo
      setIndex(photo.index); // Set the index for lightbox
    } else {
      console.log("Error: photo is undefined or missing index");
    }
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">My Photo Gallery</h1>

      <RowsPhotoAlbum
        layout="rows"
        photos={images}
        targetRowHeight={250}
        onClick={(event, photo) => {
          console.log("Photo clicked:", photo); // Log photo details
          handleClick(photo); // Trigger handleClick
        }}
      />

      {index >= 0 && (
        <Lightbox
          slides={images.map((img) => ({ src: img.src }))}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)} // Close the lightbox
        />
      )}
    </div>
  );
};

export default PhotoGallery;
