import { Box, Button, Icon, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CancelIcon from "@mui/icons-material/Cancel";
import HSBar from "react-horizontal-stacked-bar-chart";

const Description = ({
  setOpen,
  series,
  labels,
  colors,
  setLabels,
  setSeries,
  setColors,
}) => {
  const total = series.reduce((a, b) => a + b);
  let seriesPercentage = [];
  series.map((value, index) =>
    seriesPercentage.push({
      value: parseFloat(((value * 100) / total).toFixed(1)),
      color: colors[index],
      description: ((value * 100) / total).toFixed(1) + " %",
    })
  );
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", gap: "1em" }}>
        <Typography sx={{ fontFamily: "GilroyRegular", fontSize: "25px" }}>
          <Typography
            component={"span"}
            sx={{
              color: "#FC5339",
              textDecoration: "underline",
              fontFamily: "GilroyRegular",
              fontSize: "25px",
            }}
          >
            Your
          </Typography>{" "}
          recommended plan
          <Icon>
            <ArrowForwardIcon />
          </Icon>
        </Typography>
      </Box>
      <Box
        sx={{
          border: "1.3px solid #E2E2E2",
          borderRadius: "10px",
          padding: "1em",
          margin: "1em 0",
        }}
      >
        <Box sx={{ display: "flex", gap: "1em", flexWrap: "wrap" }}>
          {seriesPercentage.map((serie, index) => {
            return (
              <Box key={index} sx={{ display: "flex", gap: "2px" }}>
                <CancelIcon sx={{ color: "#FC5339", cursor: "pointer" }} />
                <Typography sx={{ fontFamily: "GilroyRegular" }}>
                  {`${serie.value}% ${labels[index]}`}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ margin: "1em 0" }}>
          <HSBar
            height={"3em"}
            showTextIn
            fontColor="#ffffff"
            data={seriesPercentage}
            outlineWidth={0.01}
            outlineColor="white"
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontFamily: "GilroyRegular", fontSize: "25px" }}>
          Check out the top stoks NYSE!
        </Typography>
        <Button
          variant="outlined"
          sx={{
            fontFamily: "GilroyMedium",
            fontSize: "20px",
            borderColor: "#E2E2E2",
            borderRadius: "100px",
            color: "#FC5339",
            textTransform: "capitalize",
            "&:hover": {
              borderColor: "#d3d3d3",
            },
          }}
          endIcon={<ArrowForwardIcon />}
          onClick={() => {
            setOpen(true);
          }}
        >
          Top stocks in NYSE
        </Button>
      </Box>
    </Box>
  );
};

export default Description;
