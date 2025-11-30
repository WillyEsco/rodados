import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "999px",
  width: "100%",
  textTransform: "none",
  fontWeight: 500,
  fontSize: "1rem",
  padding: "10px 0",
  boxShadow: "0px 1px 4px rgba(0,0,0,0.10)",
  background: "linear-gradient(90deg, #6750A4 0%, #D0BCFF 100%)",
  color: "#fff",
  "&:hover": {
    background: "linear-gradient(90deg, #7F67BE 0%, #B69DF8 100%)",
  },
}));
export default StyledButton;
