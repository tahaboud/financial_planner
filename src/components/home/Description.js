import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import HSBar from "react-horizontal-stacked-bar-chart";
import { DropzoneDialog } from "react-mui-dropzone";
import { uploadExcelAndGetChartData } from "../../backend/server";

const Description = ({ setOpen }) => {
  const [series, setSeries] = useState([2000, 500, 1000, 1500]);
  const [dropZoneOpen, setDropZoneOpen] = useState(false);
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
  const total = series.reduce((a, b) => a + b);
  let seriesPercentage = [];
  series.map((value, index) =>
    seriesPercentage.push({
      value: Math.ceil((value * 100) / total),
      color: colors[index],
      description: Math.ceil((value * 100) / total) + " %",
    })
  );
  const onSave = async (files) => {
    const result = await uploadExcelAndGetChartData(files[0]);
    setDropZoneOpen(false);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", gap: "1em" }}>
          <Typography
            sx={{
              fontFamily: "GilroySemiBold",
              fontSize: "15px",
              color: "#FC5339",
            }}
          >
            2022
          </Typography>
          <Typography
            sx={{
              fontFamily: "GilroyRegular",
              fontSize: "25px",
              color: "#1F1F1F",
            }}
          >
            October - November
          </Typography>
          <Box sx={{ flex: 1 }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "end",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontFamily: "GilroyMedium",
                fontSize: "12px",
                color: "#8E8E8E",
              }}
            >
              Change date
            </Typography>
            <ArrowForwardIcon sx={{ width: ".5em", height: ".5em" }} />
          </Box>
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
            <Box sx={{ display: "flex", gap: "2px" }}>
              <CancelIcon sx={{ color: "#FC5339", cursor: "pointer" }} />
              <Typography sx={{ fontFamily: "GilroyRegular" }}>
                40% Travel
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "2px" }}>
              <CancelIcon sx={{ color: "#FC5339", cursor: "pointer" }} />
              <Typography sx={{ fontFamily: "GilroyRegular" }}>
                30% Food
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "2px" }}>
              <CancelIcon sx={{ color: "#FC5339", cursor: "pointer" }} />
              <Typography sx={{ fontFamily: "GilroyRegular" }}>
                20% Shopping
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "2px" }}>
              <CancelIcon sx={{ color: "#FC5339", cursor: "pointer" }} />
              <Typography sx={{ fontFamily: "GilroyRegular" }}>
                10% Savings
              </Typography>
            </Box>
            <Box sx={{ display: "flex", cursor: "pointer" }}>
              <AddIcon sx={{ color: "#FC5339" }} />
              <Button
                variant="text"
                onClick={() => setDropZoneOpen(true)}
                sx={{ color: "#FC5339", fontFamily: "GilroyMedium" }}
              >
                Add new bank transaction
              </Button>
            </Box>
          </Box>
          <Box sx={{ margin: "1em 0" }}>
            <HSBar
              height={"3em"}
              showTextIn
              fontColor="#ffffff"
              data={seriesPercentage}
              outlineWidth={0.3}
              outlineColor="white"
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontFamily: "GilroyRegular" }}>
            Improve your financial literacy!
          </Typography>
          <Button
            variant="outlined"
            sx={{
              fontFamily: "GilroyMedium",
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
            Get recommended plan
          </Button>
        </Box>
      </Box>
      <DropzoneDialog
        acceptedFiles={[
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "application/vnd.ms-excel",
          "text/csv    ",
        ]}
        cancelButtonText={"cancel"}
        submitButtonText={"submit"}
        maxFileSize={5000000}
        open={dropZoneOpen}
        onClose={() => setDropZoneOpen(false)}
        onSave={(files) => onSave(files)}
        showPreviews={true}
        showFileNamesInPreview={true}
        filesLimit={1}
      />
    </>
  );
};

export default Description;
