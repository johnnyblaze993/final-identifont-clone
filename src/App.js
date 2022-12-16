import * as React from "react";

//MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//Shared index.js

//Sections
import TopSection from "./sections/topsection/TopSection";
import MiddleSection from "./sections/middleSection/MiddleSection";
import BottomLeft from "./sections/bottomLeft/BottomLeft";
import BottomRight from "./sections/bottomRight/BottomRight";

// 👩🏻‍🎤 Emotion Styled Components
const StyledGridContainer = styled(Grid)(({ theme }) => ({
  width: "80%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

// new change

const StyledMainContainer = styled(Box)(({ theme }) => ({
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "black",
  alignItems: "center",
  boxSizing: "border-box",

  [theme.breakpoints.up("md")]: {
    height: "100vh",
  },
  [theme.breakpoints.down("md")]: {
    height: "auto",
  },
}));

export default function BasicGrid() {
  return (
    <StyledMainContainer>
      <StyledGridContainer container spacing={1 / 4}>
        <TopSection />
        <MiddleSection />
        <BottomLeft />
        <BottomRight />
      </StyledGridContainer>
    </StyledMainContainer>
  );
}
