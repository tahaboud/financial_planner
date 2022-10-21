import { Box, Typography } from "@mui/material";
import circle from "../../static/images/Circle.png";

const Nav = () => {
  return (
    <Box
      sx={{
        margin: "3em 6em",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "38px",
            width: "38px",
            marginRight: "1px",
          }}
        >
          <img src={circle} alt="logo" />
        </Box>
        <Typography
          sx={{
            fontFamily: "GilroyMedium",
            fontSize: "50px",
            color: "#1F1F1F",
          }}
        >
          IFP
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: "GilroyRegular",
          fontSize: "20px",
          color: "#1F1F1F",
        }}
      >
        Intelligent financial planner
      </Typography>
    </Box>
  );
};

export default Nav;
