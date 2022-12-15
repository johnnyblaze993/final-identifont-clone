import React from "react";

//MUI
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { ArrowRightAltSharp } from "@mui/icons-material";
import { Typography } from "@mui/material";

//Shared index.js
import { Item } from "../index";

//index.js
import { textMq } from "./index";

//index.js
import { navStyle } from "./index";
import { data } from "./index";

// 👩🏻‍🎤 Emotion Styled Components
const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  height: "100%",
  padding: " 0 1rem",
}));

const StyledNav = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "20%",
  width: "100%",
}));

const StyledMiddleTypography = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  alignSelf: "flex-start",
  //media query for all devices
  ...textMq(theme),
}));

const MiddleSection = () => {
  return (
    <>
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Item>
            <StyledContainer>
              <StyledNav>
                <Typography sx={navStyle} variant="h3">
                  {item.navText}
                </Typography>
                <ArrowRightAltSharp sx={navStyle} />
              </StyledNav>

              {item.icon}
              <StyledMiddleTypography variant="h6">
                {item.mainText}
              </StyledMiddleTypography>
            </StyledContainer>
          </Item>
        </Grid>
      ))}
    </>
  );
};

export default MiddleSection;
