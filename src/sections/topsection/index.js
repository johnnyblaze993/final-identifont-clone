export const textMq = (theme) => ({
  [theme.breakpoints.up("xl")]: {
    fontSize: "13rem",
  },

  [theme.breakpoints.down("xl")]: {
    fontSize: "10rem",
  },

  [theme.breakpoints.down("lg")]: {
    fontSize: "7rem",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "6rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1rem",
  },
});
