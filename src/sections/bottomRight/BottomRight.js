import React from "react";

//MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//Shared index.js
import { Item } from "../index";
import { Container } from "@mui/material";

const BottomRight = () => {
  return (
    <Grid item xs={12} sm={6}>
      <Item>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              height: "100%",
              width: "70%",
            }}
          >
            <h1>Bottom Right</h1>
            <h1>Bang Boom</h1>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "flex-end",
              width: "30%",
              height: "100%",
            }}
          >
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </Box>
        </Container>
      </Item>
    </Grid>
  );
};

export default BottomRight;
