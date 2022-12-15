import React from "react";

//MUI
import {
  BedroomBaby,
  Cake,
  Curtains,
  FilterVintage,
} from "@mui/icons-material";

//CSS
export const navStyle = {
  fontSize: {
    xs: "1.5rem",
    sm: "1.8rem",
    md: ".8rem",
    lg: "1.3rem",
    xl: "1.8rem",
  },
  fontWeight: "bold",
};

export const mainIconStyle = {
  fontSize: {
    xs: "4rem",
    sm: "6rem",
    md: "4rem",
    lg: "5rem",
    xl: "8rem",
  },
  alignSelf: "flex-start",
};

//Data for each component
export const data = [
  {
    icon: <BedroomBaby sx={mainIconStyle} />,
    navText: "  By Similarity",
    mainText: "lorem ipsum dolor sit amet  adipisicing elit.",
  },
  {
    icon: <FilterVintage sx={mainIconStyle} />,
    navText: "By Year",
    mainText: "Tempor incididunt ut labore et  magna aliqua.",
  },
  {
    icon: <Curtains sx={mainIconStyle} />,
    navText: "By Appearance",
    mainText: "Cursus vitae congue mauris vel elit mauris.",
  },
  {
    icon: <Cake sx={mainIconStyle} />,
    navText: "By Designer",
    mainText: "Eget aliquet nibh praesent  magna sit amet",
  },
];

// StyledMiddleTypography MQ
export const textMq = (theme) => ({
  [theme.breakpoints.down("xl")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },
});
