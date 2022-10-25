import { Box } from "@mui/material";
import Description from "./Description";
import Donut from "./Donut";

const Body = ({ setOpen }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "60px",
        margin: "1em 6em",
        padding: "1em 3em",
        display: "flex",
        gap: "1em",
      }}
    >
      <Donut />
      <Description setOpen={setOpen} />
    </Box>
  );
};

export default Body;
