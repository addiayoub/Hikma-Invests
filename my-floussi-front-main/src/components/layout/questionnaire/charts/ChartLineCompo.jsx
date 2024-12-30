import React, { memo, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { chartLineData } from "../../../../assets/data/chart/chartLineData.js";

const ChartLineCompo = ({ personType }) => {
  const [series, setSeries] = useState(chartLineData[personType]);

  const options = {
    chart: {
      type: "area",
      height: 500,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
        },
      },
      zoom: {
        enabled: true,
        type: "x",
        autoScaleYaxis: true,
      },
    },
    stroke: {
      curve: "smooth",
      width: 4,
      colors: ["#00E396", "#008FFB", "#FF4560"],
    },
    grid: {
      padding: {
        right: 100,
      },
      borderColor: "#FFFFFF",
    },
    legend: {
      orient: "horizontal",
      position: "bottom",
      horizontalAlign: "center",
      offsetY: 7,
      height: 40,
      fontSize: "14px",
      markers: {
        width: 8,
        height: 8,
        radius: 12,
      },
      labels: {
        colors: ["#00E396", "#008FFB", "#FF4560"],
      },
    },
    xaxis: {
      categories: ["2024", "2025", "2026", "2027", "2028", "2029", "2030"],
      labels: {
        hideOverlappingLabels: true,
        style: {
          fontSize: "12px",
          fontFamily: "Arial, sans-serif",
        },
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
    yaxis: {
      labels: {
        hideOverlappingLabels: true,
        formatter: (value) => value.toFixed(2),
        style: {
          fontSize: "12px",
          fontFamily: "Arial, sans-serif",
        },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (value) {
          return value.toFixed(2);
        },
      },
      style: {
        fontSize: "12px",
        fontFamily: "Arial, sans-serif",
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: ["gradient", "gradient", "solid"], // La dernière série reste solide
      gradient: {
        shadeIntensity: 1,
        type: "vertical",
        gradientToColors: ["#008FFB", "#008FFB"], // Vert et bleu partagent la même couleur de fin (bleu)
        stops: [0, 100, 100], // Les deux premières séries partagent le même intervalle
        opacityFrom: [0.8, 0.5, 1], // Opacité initiale pour chaque série
        opacityTo: [0.2, 0.2, 1], // La dernière série reste solide
      },
    },
    
    colors: ["#00E396", "#008FFB", "#FFFFFF"], // Couleurs des courbes (rouge reste rouge pour la courbe elle-même)

  };

  useEffect(() => {
    setSeries(chartLineData[personType]);
  }, [personType]);

  return (
    <div className="w-full bg-white rounded-lg p-4">
      <ReactApexChart options={options} series={series} type="area" height={500} />
    </div>
  );
};

export default memo(ChartLineCompo);
