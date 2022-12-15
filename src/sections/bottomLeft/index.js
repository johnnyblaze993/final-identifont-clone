import { Box, Typography } from "@mui/material";

export const loremText1 = `  Venenatis tellus in metus vulputate eu scelerisque felis imperdiet.
Facilisis volutpat est velit egestas dui id. Venenatis cras sed
felis eget velit aliquet. Ultrices tincidunt arcu non sodales. Nisl
nisi scelerisque eu ultrices. Suspendisse ultrices
gravida dictum fusce ut placerat. `;

export const loremText2 = `Aliquet eget sit amet tellus cras adipiscing enim eu.
Fusce id velit ut tortor pretium viverra suspendisse. Ipsum dolor
sit amet consectetur adipiscing elit. Non quam lacus suspendisse
faucibus interdum. Mattis enim ut tellus elementum sagittis vitae.
Quis blandit turpis cursus in hac. Vestibulum morbi blandit cursus
risus at ultrices mi. Egestas quis ipsum suspendisse ultrices
gravida dictum fusce ut placerat. In est ante in nibh mauris cursus.
Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor
sit. `;

export const loremText3 = `Nec dui nunc mattis enim. Sed blandit libero volutpat sed. In nibh
mauris cursus mattis molestie a iaculis at. Amet volutpat consequat
mauris nunc. Ultrices tincidunt arcu non sodales neque sodales ut.
Purus non enim praesent elementum facilisis. Tellus id interdum
velit laoreet id donec ultrices. Posuere sollicitudin aliquam
ultrices sagittis orci a. Pharetra massa massa ultricies mi quis
hendrerit dolor magna eget. Arcu risus quis varius quam. Ultrices
sagittis orci a scelerisque.`;

//css
export const container = {
  overflowY: "scroll",
  height: "100%",
  textAlign: "left",
};

//components
export const SampleText = () => {
  return (
    <Typography sx={{ textAlign: "left" }} variant="p">
      {loremText1}
      <Box sx={{ my: "5%" }} />
      {loremText2}
      <Box sx={{ my: "5%" }} />
      {loremText3}
    </Typography>
  );
};

// StyledMiddleTypography MQ
export const flextMq = (theme) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    flexDirection: "row",
  },
});
