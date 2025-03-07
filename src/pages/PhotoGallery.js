import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/styles.css";
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

console.log("Images loaded:", images); // Debugging the imported images

const PhotoGallery = () => {
  const [index, setIndex] = useState(-1); // Track the selected image index

  const handleClick = ({ index }) => {
    console.log("Photo clicked:", index); // Debugging click event
    setIndex(index);
  };

  return (
    <div className="gallery-container">
      <div className="photo_title">
          <h1>| Photography |</h1>
      </div>
      <div className="photo_text">
            <p>
              This collection showcases my passion for capturing moments through a creative lens, featuring a variety of subjects from landscapes and cityscapes to portraits and action shots. Each image reflects my eye for composition, lighting, and storytelling. Click on any photo to view it in full detail with an interactive lightbox experience. Enjoy exploring my work!
            </p>
      </div>

      <PhotoAlbum
        layout="rows"
        photos={images}
        targetRowHeight={250}
        onClick={handleClick}
      />

      {index >= 0 && (
        <Lightbox
          slides={images.map((img) => ({ src: img.src }))}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      )}
    </div>
  );
};

export default PhotoGallery;
