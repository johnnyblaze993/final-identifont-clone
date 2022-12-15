import React from "react";

//MUI
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

//index.js
import { container, SampleText, flextMq } from "./index";

//Shared index.js
import { Item } from "../index";
import { Box, Container, Typography } from "@mui/material";

// 👩🏻‍🎤 Emotion Styled Components
const StyledMiddleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  fontSize: ".7rem",
  marginTop: "3%",
  marginBottom: "5%",
}));

const StyledInnerMiddleBox = styled(Box)(({ theme }) => ({
  justifyContent: "space-between",
  width: "50%",
  textAlign: "left",
  //imported media query
  ...flextMq(theme),
}));

const BottomLeft = () => {
  return (
    <Grid item xs={12} sm={6}>
      <Item>
        <Container sx={container}>
          {/* title text */}
          <Typography
            sx={{ textAlign: "left", mt: "8%", letterSpacing: "0.1rem" }}
            fontWeight={700}
            variant="h5"
          >
            Latest font inclusions
          </Typography>
          {/* middle section */}
          <StyledMiddleBox>
            <Typography variant="p">December 2022</Typography>

            {/* flex in the middle */}
            <StyledInnerMiddleBox>
              <Typography variant="p">36 Typefaces</Typography>
              <Typography variant="p">Curated by J. Alva</Typography>
            </StyledInnerMiddleBox>
          </StyledMiddleBox>
          {/* {  from index file  } */}
          <SampleText />
        </Container>
      </Item>
    </Grid>
  );
};

export default BottomLeft;
