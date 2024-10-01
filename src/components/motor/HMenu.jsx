import React, { useEffect, useState } from "react";

import {
  BigWrap,
  BtnWrap,
  Camperh6,
  Item24,
  StarWrap,
  StarWrap2,
} from "../style/styles";
import { Button } from "./vmenuStyle";
import { Link } from "react-router-dom";
import star from "../../assets/motor-img/bx_bxs-star.png";
import axios from "axios";
import img1 from "../../assets/motor/22 1.png";

const HMenu = () => {
  // const data = Campcar.maindata;
  // const dataLength = data.length;

  const [dataList, setDataList] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5052/api/data");
      setDataList(response.data);
    } catch (error) {
      console.log("Fetch data is NOT successfull", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("data:", data.length);
  return (
    <Item24>
      <BigWrap>
        {dataList.map((value, key) => {
          return (
            <Link
              to={`${value._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Camperh6 key={key}>
                <img
                  src={img1}
                  alt="car-photo"
                  style={{ width: 200, height: 140 }}
                />
                <h1>{value.name || "no data"}</h1>
                <StarWrap>
                  <p>{value.company || "no data"}</p>
                  <StarWrap2>
                    <img src={star} alt="startr" />
                    <p>4.5</p>
                  </StarWrap2>
                </StarWrap>

                <h2>{value.cost || "no data"}</h2>

                <BtnWrap>
                  <Button>Order</Button>
                  <Link
                    to={`/compare`}
                    style={{ textDecoration: "none", borderRadius: "7px" }}
                  >
                    <Button>Compare</Button>
                  </Link>
                </BtnWrap>
              </Camperh6>
            </Link>
          );
        })}
      </BigWrap>
    </Item24>
  );
};

export default HMenu;
