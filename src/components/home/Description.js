import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import HSBar from "react-horizontal-stacked-bar-chart";
import { DropzoneDialog } from "react-mui-dropzone";
import { uploadExcelAndGetChartData } from "../../backend/server";
import distinctColors from "distinct-colors";

const Description = ({
  setOpen,
  series,
  labels,
  colors,
  setSeries,
  setLabels,
  setColors,
  setDataMap,
}) => {
  const [dropZoneOpen, setDropZoneOpen] = useState(false);
  const [file, setFile] = useState(null);
  const total = series.reduce((a, b) => a + b);
  let seriesPercentage = [];
  series.map((value, index) =>
    seriesPercentage.push({
      value: parseFloat(((value * 100) / total).toFixed(1)),
      color: colors[index],
      description: ((value * 100) / total).toFixed(1) + " %",
    })
  );
  const onSave = async (files) => {
    setFile(files[0]);
    const result = await uploadExcelAndGetChartData(files[0]);
    setDataMap(result);
    setSeries([...result.values()]);
    setLabels([...result.keys()]);
    const colo = distinctColors({ count: result.size });
    colo.forEach((color, index) => {
      colo[index] = color.css();
    });
    setColors(colo);
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

            <Box sx={{ display: "flex", cursor: "pointer" }}>
              {file ? (
                <Button
                  variant="text"
                  onClick={() => setDropZoneOpen(true)}
                  sx={{ color: "#FC5339", fontFamily: "GilroyMedium" }}
                >
                  {file.name}
                </Button>
              ) : (
                <>
                  <AddIcon sx={{ color: "#FC5339" }} />
                  <Button
                    variant="text"
                    onClick={() => setDropZoneOpen(true)}
                    sx={{ color: "#FC5339", fontFamily: "GilroyMedium" }}
                  >
                    Add new bank transaction
                  </Button>
                </>
              )}
            </Box>
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
