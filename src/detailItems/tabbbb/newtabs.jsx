import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
// import ItemReviewsComponent from "./itemReviews";
// import QnAComponent from "./QnA";
// import FAQComponent from "./FAQ";
// import ContactComponent from "./contact";
import Premium1 from "../tabs/premium";
import Faq1 from "../tabs/faq1";
import AccordionUsage from "../tabs/FAQ";
import KartaNew from "../tabs/karta";
import Premium2 from "../tabs/tabcolumn";

export default function TabsComponent() {
  const [placement, setPlacement] = React.useState("review");
  return (
    <Tabs
      variant="plain"
      aria-label="Placement indicator tabs"
      value={placement}
      onChange={(event, newValue) => setPlacement(newValue)}
      sx={{ width: "100%", marginTop: "80px", backgroundColor: 'white'}}
    >
      <TabList
        underlinePlacement={placement}
        sx={{
          backgroundColor: "rgba(81, 79, 200, 0.747)",
          height: "60px",
          color: 'white'
          // display: 'flex',
          // justifyContent: "center",
          // marginLeft: "-700px",
          // ...(window.innerWidth <= 600 && { marginLeft: "0px", justifyContent: "start" }),
          
        }}
      >
        <Tab disableIndicator value="review" sx={{ width: "170px"}}>
          Item reviews
        </Tab>
        <Tab disableIndicator value="QnA" sx={{ width: "170px" }}>
          Q&A
        </Tab>
        <Tab disableIndicator value="FAQ" sx={{ width: "170px" }}>
          FAQ
        </Tab>
        <Tab disableIndicator value="contact" sx={{ width: "170px" }}>
          Contact
        </Tab>
      </TabList>
      <TabPanel value="review" style={{padding: 100}}>
        <Premium1 />
        <Premium2/>
      </TabPanel >
      <TabPanel value="QnA" style={{padding: 100}}>
        <Faq1 />
      </TabPanel>
      <TabPanel value="FAQ" style={{padding: 100}}>
        <AccordionUsage />
      </TabPanel>
      <TabPanel value="contact" style={{padding: 100}}>
        <KartaNew />
      </TabPanel>
    </Tabs>
  );
}