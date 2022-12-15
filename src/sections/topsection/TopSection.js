import React from "react";

//MUI
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Menu, Search } from "@mui/icons-material";
import { Typography } from "@mui/material";

//Shared index.js
import { Item } from "../index";
//index.js
import { textMq } from "./index";

// 👩🏻‍🎤 Emotion Styled Components
const StyledNav = styled("nav")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "20%",
  borderBottom: "1px solid black",
  padding: "0 1rem",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  padding: "1rem 0",
  height: "80%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  letterSpacing: ".5rem",

  //media query imported from index.js
  ...textMq(theme),
}));

const TopSection = () => {
  return (
    <Grid item xs={12}>
      <Item>
        <StyledNav>
          <Menu sx={{ fontSize: "2rem" }} />
          <Search sx={{ fontSize: "2rem" }} />
        </StyledNav>

        <StyledTypography variant="h1">IDENTIFONT</StyledTypography>
      </Item>
    </Grid>
  );
};

export default TopSection;
