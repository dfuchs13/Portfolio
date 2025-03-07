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
            During the height of COVID-19, Viterbo Universitys musical theater students came together virtually to perform A Million Dreams. I edited this video to bring their voices and performances to life, seamlessly weaving together individual recordings into a cohesive and moving final piece. This project not only highlighted the resilience and creativity of the performers but also captured the spirit of connection and hope during a challenging time.
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
