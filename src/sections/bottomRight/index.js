export const designTextMq = (theme) => ({
  //mq from large to small
  [theme.breakpoints.up("lg")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "2rem",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1rem",
  },
});

//css
export const rightText = {
  fontSize: ".5rem",
};
