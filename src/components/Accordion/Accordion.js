import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  const data = [
    {
      title: "What is MovieTime?",
      subtitle:
        "MovieTime is a free movies and web-series streaming application created by Sanket Zende. It fetches latest movies and web-series from various torrent websites and streaming platform.",
    },
    {
      title: "How much does MovieTime cost?",
      subtitle:
        "It is completely free, just signup without any card details and binge watch.",
    },
    {
      title: "Where can I watch?",
      subtitle:
        "You can watch it on any smart phone, desktop or TV .Would highly recommend Brave Browser that comes with inbuilt ad-blocker.",
    },
    {
      title: "What can I watch on MovieTime?",
      subtitle:
        "You can watch the latest movies and web-series completely free, just use any adblocker in case of any ad-popups.",
    },
  ];
  return (
    <div style={{ background: "black" }}>
      <h1 style={{ textAlign: "center" }}>Frequently Asked Questions</h1>
      {data.map((el, index) => {
        return (
          <Accordion
            key={index}
            style={{
              background: "rgb(48, 48, 48)",
              color: "white",
              padding: ".6rem",
              margin: ".5rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls={`panel${index}a-content`}
              id="panel1a-header"
            >
              <Typography style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                {el.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{el.subtitle}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
