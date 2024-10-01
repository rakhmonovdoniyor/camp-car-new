import React, { useState } from "react";
import {
  BgWrap,
  BigConWrap,
  Left,
  Right,
  TwoFlexWrap,
  TwoFlexWrap2,
} from "../style/styles";
import { Campcar } from "../../data/motordata";
import { Link } from "react-router-dom";
import ItemPAge from "./Itemscar";
import AccordionUsage from "./according copy";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import menu from "../../assets/motor-img/clarity_grid-view-solid.png";
import navmenu from "../../assets/ic_round-view-list (1).png";
import minicar from "../../assets/motor-img/Rectangle 705.png";
import {
  Allp,
  BrandItems,
  Colum,
  Hash,
  InputAll,
  Inputwrap,
  Inputwrap2,
  Line,
  MiniWrap,
  Minip,
  Threephoto,
  TwoButton,
  TwoButton1,
} from "./accordstyle";
import { Checkbox, FormControlLabel } from "@mui/material";
import {
  Btn2,
  BtnWrap,
  BtnWrap2,
  Button,
  Button2,
  COlumnItemLeft,
  COlumnItemLeft2,
  CamperWrap,
  Camperh5,
  Camperh6,
  INput227,
  INput227227,
  Item24,
  Item242,
  Item242242,
  ItemLeft,
  ItemLeft2,
  ItemRight,
  ItemRight2,
  Items24,
  LeftSearch,
  RightIn,
  RightIn2,
  StarWrap,
  StarWrap2,
} from "../style/styles";
import HMenu from "./HMenu";
import TemporaryDrawer from "../../filter/filterdrawer";
import VMenu2 from "./newVMneu";

const MotorPage = () => {
  const data = Campcar.maindata;
  const dataLength = data.length;
  console.log("data:", data.length);

  const [active, setActive] = useState(true);
  const [searchQuerry, setSearchQuery1] = useState("");

  function handleVMenu() {
    setActive(true);
  }
  function handleHMenu() {
    setActive(false);
  }

  const [selectedLabel, setselextchange] = useState([]);

  const handleCheckBoxChange = (labelName) => {
    const setcheckbox = selectedLabel.includes(labelName);
    setselextchange(
      setcheckbox
        ? selectedLabel.filter((itsName) => itsName !== labelName)
        : [...selectedLabel, labelName]
    );
  };

  const filteredData = data
    .filter(
      (item) =>
        selectedLabel.length === 0 ||
        selectedLabel.includes(item.car.company) ||
        selectedLabel.includes(item.car.license) ||
        selectedLabel.includes(item.car.people) ||
        selectedLabel.includes(item.car.location)
    )
    .filter(
      (item) =>
        searchQuerry.length === 0 ||
        item.car.name.toLocaleLowerCase().includes(searchQuerry)
    );

  const handleFilterData = (e) => {
    const searchQuerry = e.target.value.toLowerCase();
    setSearchQuery1(searchQuerry);
  };

  ////////////////////////////
  const [showFilteredCompany, setShowFilteredCompany] = useState(false);

  console.log("filtered data", filteredData);

  return (
    <BigConWrap>
      <BgWrap $home>
        <h3> Home / Motors</h3> <br /> <br />
        <h2>Our ranges</h2> <br /> <br />
        <h1>Motors</h1> <br /> <br />
      </BgWrap>

      <TwoFlexWrap>
        <Left>
          {/* <AccordionUsage/> */}

          <Colum>
            <Inputwrap>
              <Hash>Cost of car</Hash>
              <Line></Line> <br /> <br />
              <Inputwrap2>
                <div>
                  <p>from</p>
                  <input type="text" />
                </div>
                <p></p>

                <div>
                  <p>to</p>
                  <input type="text" />
                </div>
              </Inputwrap2>
            </Inputwrap>

            <Accordion
              defaultExpanded={true}
              style={{ boxShadow: "none", borderBottom: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Brand
              </AccordionSummary>
              <AccordionDetails>
                <Line></Line>
                <BrandItems style={{ paddingTop: 50 }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Wilderness Wheels+"
                    onChange={() => handleCheckBoxChange("Wilderness Wheels")}
                  />
                </BrandItems>

                <BrandItems>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Wilderness Wheels+"
                    onChange={() => handleCheckBoxChange("Wilderness Wheels")}
                  />
                </BrandItems>

                <BrandItems>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Wilderness Wheels+"
                    onChange={() => handleCheckBoxChange("Wilderness Wheels")}
                  />
                </BrandItems>
              </AccordionDetails>
            </Accordion>

            <Accordion
              defaultExpanded={true}
              style={{ boxShadow: "none", borderBottom: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Company
              </AccordionSummary>
              <AccordionDetails>
                <Line></Line>
                <BrandItems style={{ paddingTop: 50 }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Wilderness Wheels+"
                    onChange={() => handleCheckBoxChange("Wilderness Wheels")}
                  />
                </BrandItems>
                <BrandItems>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Nature Nomads"
                    onChange={() => handleCheckBoxChange("Nature Nomads")}
                  />
                </BrandItems>
                <BrandItems>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Campfire Cruisers"
                    onChange={() => handleCheckBoxChange("Campfire Cruisers")}
                  />
                </BrandItems>
                <BrandItems>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Adventure Axle C"
                    onChange={() => handleCheckBoxChange("Adventure Axle C")}
                  />
                </BrandItems>
                <BrandItems>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="TrekKing RV Co."
                    onChange={() => handleCheckBoxChange("TrekKing RV Co.")}
                  />
                </BrandItems>
                <BrandItems>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Wilderness  Co."
                    onChange={() => handleCheckBoxChange("Wilderness  Co.")}
                  />
                </BrandItems>
                <BrandItems>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="TrailTrekker RVs"
                    onChange={() => handleCheckBoxChange("TrailTrekker RVs")}
                  />
                </BrandItems>
              </AccordionDetails>
            </Accordion>

            <Accordion
              defaultExpanded={true}
              style={{ boxShadow: "none", borderBottom: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                License type
              </AccordionSummary>
              <AccordionDetails>
                <Line></Line>
                <BrandItems style={{ paddingTop: 50 }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="1종 보통"
                    onChange={() => handleCheckBoxChange("1종 보통")}
                  />
                </BrandItems>

                <BrandItems>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="2종 보통"
                    onChange={() => handleCheckBoxChange("2종 보통")}
                  />
                </BrandItems>

                <BrandItems>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="3종 보통"
                    onChange={() => handleCheckBoxChange("3종 보통")}
                  />
                </BrandItems>
              </AccordionDetails>
            </Accordion>

            <Accordion
              defaultExpanded={true}
              style={{ boxShadow: "none", borderBottom: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                People
              </AccordionSummary>

              <AccordionDetails>
                <Line></Line>
                <BrandItems style={{ paddingTop: 50 }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="7"
                    onChange={() => handleCheckBoxChange("7")}
                  />
                </BrandItems>
                <BrandItems>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="6"
                    onChange={() => handleCheckBoxChange("6")}
                  />
                </BrandItems>

                <BrandItems>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="5"
                    onChange={() => handleCheckBoxChange("5")}
                  />
                </BrandItems>

                <BrandItems>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="4"
                    onChange={() => handleCheckBoxChange("4")}
                  />
                </BrandItems>

                <BrandItems>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="3"
                    onChange={() => handleCheckBoxChange("3")}
                  />
                </BrandItems>
              </AccordionDetails>
            </Accordion>

            <Accordion
              defaultExpanded={true}
              style={{ boxShadow: "none", borderBottom: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Location
              </AccordionSummary>
              <AccordionDetails>
                <Line></Line>
                <BrandItems style={{ paddingTop: 50 }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="수도권"
                    onChange={() => handleCheckBoxChange("수도권")}
                  />
                </BrandItems>

                <BrandItems>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="경상권"
                    onChange={() => handleCheckBoxChange("경상권")}
                  />
                </BrandItems>

                <BrandItems>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Kyongsan"
                    onChange={() => handleCheckBoxChange("Kyongsan")}
                  />
                </BrandItems>
              </AccordionDetails>
            </Accordion>

            <Accordion
              defaultExpanded={true}
              style={{ boxShadow: "none", borderBottom: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                Accordion Actions
              </AccordionSummary>
              <AccordionDetails>
                <TwoButton>
                  <TwoButton1>Cancel</TwoButton1>
                  <TwoButton1 $btn2>Serach</TwoButton1>
                </TwoButton>

                <MiniWrap>
                  <Minip>
                    <p>Compare</p>
                  </Minip>
                  <Threephoto>
                    <img src={minicar} alt="" />
                    <img src={minicar} alt="" />
                    <img src={minicar} alt="" />
                  </Threephoto>
                </MiniWrap>
              </AccordionDetails>
            </Accordion>
          </Colum>
        </Left>

        <Right>
          {/* <ItemPAge/>  */}
          <Item24>
            <Item242>
              <LeftSearch>
                <TemporaryDrawer />
              </LeftSearch>
              <ItemLeft>
                <p>Item</p>
                <p style={{ color: " #006dab" }}>{filteredData.length}</p>
              </ItemLeft>

              <ItemRight>
                <RightIn>
                  <p>Sort by</p>
                  <INput227
                    type="text"
                    placeholder="Search"
                    onChange={handleFilterData}
                  />
                  <INput227
                    style={{ width: 60, height: 30, paddingLeft: 10 }}
                    type="text"
                    placeholder="60"
                  />
                </RightIn>
                {/* <ButtonHV/> */}
                <BtnWrap $iconBtn>
                  <Btn2 $big onClick={handleVMenu}>
                    <img src={menu} alt="menu-h" />
                  </Btn2>
                  <Btn2 $small onClick={handleHMenu}>
                    <img src={navmenu} alt="nv-menu" />
                  </Btn2>
                </BtnWrap>
              </ItemRight>
            </Item242>

            {/* twice */}
            <Item242242>
              <ItemLeft2>
                <LeftSearch>
                  <TemporaryDrawer />
                </LeftSearch>

                <COlumnItemLeft2>
                  <p>Item</p>
                  <p style={{ color: " #006dab" }}>{filteredData.length}</p>
                </COlumnItemLeft2>

                <BtnWrap2 $iconBtn>
                  <Button2 $iconBtn onClick={handleHMenu}>
                    <img src={menu} alt="menu-h" />
                  </Button2>
                  <Button $iconBtn onClick={handleVMenu}>
                    <img src={navmenu} alt="nv-menu" />
                  </Button>
                </BtnWrap2>
              </ItemLeft2>

              <ItemRight2>
                <RightIn2>
                  <p>Sort by</p>
                  <INput227227 type="text" placeholder="Search" />
                  <INput227
                    style={{ width: 60, height: 30, paddingLeft: 10 }}
                    type="text"
                    placeholder="60"
                  />
                </RightIn2>
                {/* <ButtonHV/> */}
                {/* <BtnWrap2 $iconBtn>
                          <Button2 $iconBtn onClick={handleVMenu}>
                          <img src={menu} alt="menu-h" />
                          </Button2>
                        <Button $iconBtn onClick={handleHMenu}>
                        <img src={navmenu} alt="nv-menu" />
                        </Button>
            </BtnWrap2>  */}
              </ItemRight2>
            </Item242242>

            <>
              {active ? (
                <HMenu exportedData={filteredData} />
              ) : (
                <VMenu2 exportedData={filteredData} />
              )}
            </>
          </Item24>
        </Right>
      </TwoFlexWrap>
    </BigConWrap>
  );
};

export default MotorPage;
