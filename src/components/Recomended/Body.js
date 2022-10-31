import { Box } from "@mui/material";
import distinctColors from "distinct-colors";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getRecommendedPlan } from "../../backend/server";
import Description from "./Description";
import Donut from "./Donut";

const Body = ({ setOpen }) => {
  const location = useLocation();
  const numberOfKids = location.state && location.state.numberOfKids;
  const age = location.state && location.state.age;
  const monthlyEmis = location.state && location.state.monthlyEmis;
  const retireAge = location.state && location.state.retireAge;
  const dataMap = location.state && location.state.dataMap;
  const [result, setResult] = useState(null);
  useEffect(() => {
    if (age && numberOfKids && monthlyEmis && retireAge && dataMap) {
      setResult(
        getRecommendedPlan(dataMap, monthlyEmis, retireAge, numberOfKids, age)
      );
    }
  }, []);
  const [firstLevelData, setFirstLevelData] = useState("");
  const [information, setInformation] = useState("");
  const [series, setSeries] = useState([750, 1500, 500, 750, 1000, 400, 100]);
  const [labels, setLabels] = useState([
    "Travel",
    "Food",
    "Shopping",
    "Dept",
    "Fuel",
    "Equity",
    "Debt",
  ]);
  const [colors, setColors] = useState([
    "#C97063",
    "#723C21",
    "#FC5339",
    "#FC6B21",
    "#AC2F1C",
    "#B07658",
    "#C9A998",
  ]);
  useEffect(() => {
    if (result) {
      let new_series = [];
      let new_labels = [];
      let new_data = [];
      let new_information = [];
      result.map((r) => {
        if (
          r.name !== "Salary" &&
          r.name !== "Information" &&
          r.name !== "Retirement Corpus" &&
          r.name !== "Monthly Expenses at Retirement age"
        ) {
          new_series.push(r.value);
          new_labels.push(r.name);
        } else if (
          r.name === "Retirement Corpus" ||
          r.name === "Monthly Expenses at Retirement age"
        ) {
          new_data.push(r);
        } else if (r.name === "Information") {
          new_information.push(r);
        }
      });
      setSeries(new_series);
      setLabels(new_labels);
      setFirstLevelData(new_data);
      setInformation(new_information);
    }
  }, [result]);
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
        setSeries={setSeries}
        labels={labels}
        setLabels={setLabels}
        colors={colors}
        setColors={setColors}
        firstLevelData={firstLevelData}
        information={information}
      />
    </Box>
  );
};

export default Body;
