import ReactApexChart from "react-apexcharts";
import { chartBarData } from "../../../../assets/data/chart/chartBarData.js";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const ChartBarCompo = ({ personType }) => {
  const [series, setSeries] = useState(chartBarData[personType]);

  const options = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: "75%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    grid: {
      row: {
        colors: ["#fff", "#f2f2f2"],
      },
    },
    xaxis: {
      tickPlacement: "on",
    },
    yaxis: {
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
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.2,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
      },
    },
  };
  useEffect(() => {
    setSeries(chartBarData[personType]);
  }, [personType]);
  return (
    <div className="max-w-full w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <div>
            <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">
              Rendement Annuel
            </h5>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              toolbar
            </p>
          </div>
        </div>
      </div>

      <div id="column-chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height="350"
        />
      </div>
    </div>
  );
};
export default ChartBarCompo;
