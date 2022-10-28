import { Box } from "@mui/material";
import { useState } from "react";
import Description from "./Description";
import Donut from "./Donut";

const Body = ({ setOpen, setDataMap }) => {
  const [series, setSeries] = useState([2000, 500, 1000, 1500]);
  const [labels, setLabels] = useState([
    "Travel",
    "Food",
    "Shopping",
    "Savings",
  ]);
  const [colors, setColors] = useState([
    "#c05746",
    "#adc698",
    "#679948",
    "#C2C2C2",
    "#503047",
  ]);
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
      <Donut series={series} labels={labels} colors={colors} />
      <Description
        setOpen={setOpen}
        series={series}
        labels={labels}
        colors={colors}
        setSeries={setSeries}
        setLabels={setLabels}
        setColors={setColors}
        setDataMap={setDataMap}
      />
    </Box>
  );
};

export default Body;
