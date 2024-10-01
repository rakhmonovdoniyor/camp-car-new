import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from "@mui/material/Button";

import {
  AddWr,
  AddWrapper,
  CarWrapper,
  CompareDetaWrapper,
  CompareWrapper,
  DetaWrapper,
  ModelGrommet,
  ModelGrommetWr,
  ModelsWr,
  ModelsWrapper,
  NameOfCar,
  OrderBTN,
  OrderBTNWR,
} from "./style";
import grommetimg from "../../assets/carousel/photo_3_2024-09-28_19-59-59.jpg";

export default function CompareComponent() {
  return (
    <div>
      <div>
        <div className="motors">
          <h4 className="Home">Home / Motors / Compare</h4>

          <h1 className="Page">Compare Our Models</h1>
        </div>{" "}
      </div>

      <CompareWrapper>
        <div>
          {" "}
          <ModelsWrapper>
            <ModelsWr>Compare Models</ModelsWr>
            <AddWrapper>
              <img
                height={"34px"}
                width={"34px"}
                src="https://static.vecteezy.com/system/resources/previews/000/582/976/original/button-plus-icon-vector.jpg"
              />{" "}
              <AddWr>Add Model</AddWr>
            </AddWrapper>
          </ModelsWrapper>
          <CompareDetaWrapper>
            <DetaWrapper>
              <CarWrapper>
                <img
                  height={"173px"}
                  width={"289px"}
                  src="https://th.bing.com/th/id/OIP.zOUeIgAXJWm9mCTp5fCG_AHaE4?rs=1&pid=ImgDetMain"
                />
              </CarWrapper>
              <NameOfCar>Name Of Car</NameOfCar>
              <div style={{ width: "367px" }}>
                {" "}
                <Accordion>
                  <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <ModelGrommet>
                      {" "}
                      <ModelGrommetWr>Model</ModelGrommetWr>{" "}
                      {/* <img src={grommetimg} />{" "} */}
                    </ModelGrommet>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>{" "}
              </div>
              <div style={{ width: "367px" }}>
                {" "}
                <Accordion>
                  <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <ModelGrommet>
                      {" "}
                      <ModelGrommetWr>Model</ModelGrommetWr>{" "}
                      <img src={grommetimg} />{" "}
                    </ModelGrommet>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>{" "}
              </div>
              <div style={{ width: "367px" }}>
                {" "}
                <Accordion>
                  <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <ModelGrommet>
                      {" "}
                      <ModelGrommetWr>Model</ModelGrommetWr>{" "}
                      <img src={grommetimg} />{" "}
                    </ModelGrommet>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>{" "}
              </div>
              <div style={{ width: "367px" }}>
                {" "}
                <Accordion>
                  <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <ModelGrommet>
                      {" "}
                      <ModelGrommetWr>Model</ModelGrommetWr>{" "}
                      <img src={grommetimg} />{" "}
                    </ModelGrommet>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>{" "}
              </div>
              <div style={{ width: "367px" }}>
                {" "}
                <Accordion>
                  <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <ModelGrommet>
                      {" "}
                      <ModelGrommetWr>Model</ModelGrommetWr>{" "}
                      <img src={grommetimg} />{" "}
                    </ModelGrommet>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>{" "}
              </div>
              <div style={{ width: "367px" }}>
                {" "}
                <Accordion>
                  <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <ModelGrommet>
                      {" "}
                      <ModelGrommetWr>Model</ModelGrommetWr>{" "}
                      <img src={grommetimg} />{" "}
                    </ModelGrommet>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>{" "}
              </div>

              <OrderBTN>
                <OrderBTNWR>Order</OrderBTNWR>
              </OrderBTN>
            </DetaWrapper>

            <DetaWrapper>
              <CarWrapper>
                <img
                  height={"173px"}
                  width={"289px"}
                  src="https://th.bing.com/th/id/OIP.zOUeIgAXJWm9mCTp5fCG_AHaE4?rs=1&pid=ImgDetMain"
                />
              </CarWrapper>
              <NameOfCar>Name Of Car</NameOfCar>
              <div style={{ width: "367px" }}>
                {" "}
                <Accordion>
                  <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <ModelGrommet>
                      {" "}
                      <ModelGrommetWr>Model</ModelGrommetWr>{" "}
                      <img src={grommetimg} />{" "}
                    </ModelGrommet>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>{" "}
              </div>
              <div style={{ width: "367px" }}>
                {" "}
                <Accordion>
                  <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <ModelGrommet>
                      {" "}
                      <ModelGrommetWr>Model</ModelGrommetWr>{" "}
                      <img src={grommetimg} />{" "}
                    </ModelGrommet>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>{" "}
              </div>
              <div style={{ width: "367px" }}>
                {" "}
                <Accordion>
                  <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <ModelGrommet>
                      {" "}
                      <ModelGrommetWr>Model</ModelGrommetWr>{" "}
                      <img src={grommetimg} />{" "}
                    </ModelGrommet>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>{" "}
              </div>
              <div style={{ width: "367px" }}>
                {" "}
                <Accordion>
                  <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <ModelGrommet>
                      {" "}
                      <ModelGrommetWr>Model</ModelGrommetWr>{" "}
                      <img src={grommetimg} />{" "}
                    </ModelGrommet>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>{" "}
              </div>
              <div style={{ width: "367px" }}>
                {" "}
                <Accordion>
                  <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <ModelGrommet>
                      {" "}
                      <ModelGrommetWr>Model</ModelGrommetWr>{" "}
                      <img src={grommetimg} />{" "}
                    </ModelGrommet>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>{" "}
              </div>
              <div style={{ width: "367px" }}>
                {" "}
                <Accordion>
                  <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <ModelGrommet>
                      {" "}
                      <ModelGrommetWr>Model</ModelGrommetWr>{" "}
                      <img src={grommetimg} />{" "}
                    </ModelGrommet>
                  </AccordionSummary>
                  Thomas Shelby, [28/09/2024 19:43]
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>{" "}
              </div>

              <OrderBTN>
                <OrderBTNWR>Order</OrderBTNWR>
              </OrderBTN>
            </DetaWrapper>

            <DetaWrapper>
              <CarWrapper>
                <img
                  height={"173px"}
                  width={"289px"}
                  src="https://th.bing.com/th/id/OIP.zOUeIgAXJWm9mCTp5fCG_AHaE4?rs=1&pid=ImgDetMain"
                />
              </CarWrapper>
              <NameOfCar>Name Of Car</NameOfCar>
              <div style={{ width: "367px" }}>
                {" "}
                <Accordion>
                  <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <ModelGrommet>
                      {" "}
                      <ModelGrommetWr>Model</ModelGrommetWr>{" "}
                      <img src={grommetimg} />{" "}
                    </ModelGrommet>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>{" "}
              </div>
              <div style={{ width: "367px" }}>
                {" "}
                <Accordion>
                  <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <ModelGrommet>
                      {" "}
                      <ModelGrommetWr>Model</ModelGrommetWr>{" "}
                      <img src={grommetimg} />{" "}
                    </ModelGrommet>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>{" "}
              </div>
              <div style={{ width: "367px" }}>
                {" "}
                <Accordion>
                  <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <ModelGrommet>
                      {" "}
                      <ModelGrommetWr>Model</ModelGrommetWr>{" "}
                      <img src={grommetimg} />{" "}
                    </ModelGrommet>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>{" "}
              </div>
              <div style={{ width: "367px" }}>
                {" "}
                <Accordion>
                  <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <ModelGrommet>
                      {" "}
                      <ModelGrommetWr>Model</ModelGrommetWr>{" "}
                      <img src={grommetimg} />{" "}
                    </ModelGrommet>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>{" "}
              </div>
              <div style={{ width: "367px" }}>
                {" "}
                <Accordion>
                  <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <ModelGrommet>
                      {" "}
                      <ModelGrommetWr>Model</ModelGrommetWr>{" "}
                      <img src={grommetimg} />{" "}
                    </ModelGrommet>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>{" "}
              </div>
              <div style={{ width: "367px" }}>
                {" "}
                <Accordion>
                  <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <ModelGrommet>
                      {" "}
                      <ModelGrommetWr>Model</ModelGrommetWr>{" "}
                      <img src={grommetimg} />{" "}
                    </ModelGrommet>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>{" "}
              </div>

              <OrderBTN>
                <OrderBTNWR>Order</OrderBTNWR>
              </OrderBTN>
            </DetaWrapper>
          </CompareDetaWrapper>
        </div>{" "}
      </CompareWrapper>
    </div>
  );
}
