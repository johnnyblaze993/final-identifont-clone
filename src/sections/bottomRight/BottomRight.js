import React from "react";

//MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//Shared index.js
import { Item } from "../index";
import { Container, Typography } from "@mui/material";

//index.js
import { designTextMq, rightText } from "./index";

// 👩🏻‍🎤 Emotion Styled Components
const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  width: "100%",
}));

const StyledLeftBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "2rem",
  height: "100%",
  width: "60%",
}));

const StyledDesignText = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontFamily: "Silkscreen, cursive",

  //imported media query from index.js
  ...designTextMq(theme),
}));

const StyledRightBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "flex-end",
  width: "40%",
  height: "100%",
}));

const BottomRight = () => {
  return (
    <Grid item xs={12} sm={6}>
      <Item>
        <StyledContainer>
          <StyledLeftBox>
            <Typography variant="subtitle1">Recently Added</Typography>
            <StyledDesignText variant="h1">DIGESTIVE</StyledDesignText>
          </StyledLeftBox>
          <StyledRightBox>
            <Typography sx={rightText}>15 12 2022</Typography>
            <Typography sx={rightText}>
              DESIGNED BY <br /> JOHN ALVAREZ
            </Typography>
            <Typography sx={rightText}>QHDG TYPE</Typography>
          </StyledRightBox>
        </StyledContainer>
      </Item>
    </Grid>
  );
};

export default BottomRight;
