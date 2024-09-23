import React from "react";

const Mapa = () => {
  return (
    <div
      id="mapa"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Ajusta esto según tus necesidades
      }}
    >
      <div
        style={{
          textDecoration: "none",
          overflow: "hidden",
          maxWidth: "100%",
          width: "500px",
          height: "500px",
        }}
      >
        <div
          id="my-map-display"
          style={{ height: "100%", width: "100%", maxWidth: "100%" }}
        >
          <iframe
            title="Google Map"
            style={{ height: "100%", width: "100%", border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?q=30.6035118++-104.5183397&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            allowFullScreen
          ></iframe>
        </div>
        <a
          className="googlecoder"
          rel="nofollow"
          href="https://www.bootstrapskins.com/themes"
          id="grab-maps-authorization"
        >
          premium bootstrap themes
        </a>
        <style>{`
        #my-map-display img.text-marker {
          max-width: none !important;
          background: none !important;
        }
        img {
          max-width: none;
        }
      `}</style>
      </div>
    </div>
  );
};

export default Mapa;
