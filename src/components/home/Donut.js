import { Box } from "@mui/material";
import { useState } from "react";
import Chart from "react-apexcharts";
import numeral from "numeral";

const Donut = () => {
  const [series, setSeries] = useState([2000, 500, 1000, 1500]);
  const [labels, setLabels] = useState([
    "Travel",
    "Food",
    "Shopping",
    "Savings",
  ]);
  const [options, setOptions] = useState({
    labels: labels,
    legend: { show: false },
    colors: ["#c05746", "#adc698", "#679948", "#C2C2C2", "#503047"],
    plotOptions: {
      pie: {
        donut: {
          background: "#E2E2E2",
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
