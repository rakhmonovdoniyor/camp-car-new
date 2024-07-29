import React, { useEffect } from 'react'
import { ContactWrap, InputTwo, InputWrap, Karta, KartaRasm } from './tabstyle'
import { Inputs } from './inputs'
import { Flex2 } from './q$aStyle'
import HomeComponent from '../../popup/kakaomap'
import MapCom from '../../components/campPlace/kakaomap'
import { MapWrapper } from '../motodetstyle'
import { MapWrapper1 } from '../../components/campPlace/detail'

const KartaNew = () => {

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
          level: 3,
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
         <ContactWrap>
            <Karta>
                <KartaRasm>
                <div id="map" className="map" />
                </KartaRasm>
                 {/* <div id="map" className="map" /> */}
                <InputWrap>
                <InputTwo> 
                <p>Phone Number </p>
                <h4>01097575501</h4>
                <h4>01097575501</h4>
                </InputTwo>
                <InputTwo>
                <p>E-mail:</p>
                <h4>logo.uz</h4>
                </InputTwo>
                </InputWrap>
            </Karta>

            <Flex2>
           <Inputs/>
            </Flex2>

        </ContactWrap>

    </div>
  )
}

export default KartaNew