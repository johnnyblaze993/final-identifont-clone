//MUI
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

//👩🏻‍🎤 Emotion Styled Components
//Individual grid cell
export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "25vh",
  backgroundColor: "#c59bac",
  color: "black",
}));
