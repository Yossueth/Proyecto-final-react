// ExampleCarouselImage.jsx
import React from 'react';
import foto4 from "../img/foto4.png"
import foto7 from "../img/foto7.png"
import foto10 from "../img/foto10.png"

function CarouselImage({ src, alt }) {
  return <img className="d-block w-100" src={foto10} alt={alt} />;
}

export default CarouselImage;
