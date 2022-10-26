import { Box } from "@mui/material";
import { useState } from "react";
import Chart from "react-apexcharts";
import numeral from "numeral";

const Donut = () => {
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
  const [options, setOptions] = useState({
    labels: labels,
    legend: { show: false },
    colors: ["#C97063", "#723C21", "#FC5339", "#FC6B21", "#AC2F1C", "#B07658"],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: { show: true },
            value: { show: true },
            total: {
              show: true,
              showAlways: true,
              formatter: function (w) {
                const total = w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
                return "$ " + numeral(total).format("0 a");
              },
            },
          },
        },
        expandOnClick: false,
      },
    },
  });
  return (
    <Box>
      <Chart options={options} series={series} type="donut" width={380} />
    </Box>
  );
};

export default Donut;
