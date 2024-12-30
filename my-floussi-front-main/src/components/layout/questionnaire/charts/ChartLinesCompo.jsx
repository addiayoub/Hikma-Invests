import ReactApexChart from "react-apexcharts";
import { chartLinesData } from "../../../../assets/data/chart/chartLinesData.js";
import { dates } from "../../../../assets/data/chart/dates.js";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const ChartLinesCompo = ({ personType }) => {
  const [series, setSeries] = useState(chartLinesData[personType]);
  const options = {
    xaxis: {
      show: true,
      categories: dates,
      labels: {
        show: false,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      show: true,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
        formatter: function (value) {
          return value.toFixed(0);
        },
      },
    },
    chart: {
      sparkline: {
        enabled: false,
      },
      height: "100%",
      width: "100%",
      type: "chart",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: true,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: true,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
  };
  useEffect(() => {
    setSeries(chartLinesData[personType]);
  }, [personType]);
  return (
    <div className="max-w-full w-full bg-white rounded-lg shadow dark:bg-gray-800">
      <div className="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
        <div>
          <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-2">
            Backtest Historique
          </h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            toolbar
          </p>
        </div>
      </div>
      <div id="labels-chart" className="px-2.5">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height="350"
        />
      </div>
    </div>
  );
};

export default ChartLinesCompo;
