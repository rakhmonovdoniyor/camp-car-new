import React, { useEffect } from "react";
import Popup from "reactjs-popup";

const MapCom = () => {
  const new_script = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };
  useEffect(() => {
    const my_script = new_script(
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=e49611d442be90c7ec3aef4e29cc18ac"
    );
    my_script.then(() => {
      console.log("script loaded!!!");
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(35.8998931,128.6375522),
          level: 5,
        };
        const map = new kakao.maps.Map(mapContainer, options);

        const markerPositions = [
          new kakao.maps.LatLng(35.88419, 128.7029796),
          new kakao.maps.LatLng(37.5666791, 126.9782914),
        ];

        markerPositions.forEach((position) => {
          const marker = new kakao.maps.Marker({
            position: position,
          });
          marker.setMap(map);
        });
      });
    });
  }, []);
  return (
    <div>
      <div id="map" className="map"   />
      <p></p>
     
    </div>
  );
};

export default MapCom;