import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import numeral from "numeral";

const Donut = ({ series, labels, colors }) => {
  useEffect(() => {
    setOptions({
      labels: labels,
      legend: { show: false },
      colors: colors,
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
  }, [colors, labels]);
  const [options, setOptions] = useState({
    labels: labels,
    legend: { show: false },
    colors: colors,
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
