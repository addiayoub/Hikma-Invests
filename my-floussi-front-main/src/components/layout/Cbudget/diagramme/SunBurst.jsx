import ReactECharts from "echarts-for-react";
import { graphic } from "echarts";

// eslint-disable-next-line react/prop-types
const SunBurst = ({ data, total }) => {
  const options = {
    series: {
      type: "sunburst",
      data: data,
      radius: [6, "80%"],
      itemStyle: {
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#fff",
      },
      label: {
        show: false,
        fontSize: 10,
        rotate: "tangential",
        color: "#000",
        formatter: function (params) {
          return `${params.name}: ${((+params.value / total) * 100).toFixed(2)}% `;
        },
        emphasis: {
          show: true,
          fontWeight: "bold",
        },
      },
      levels: [
        {},
        {
          itemStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#2b3964",
              },
              {
                offset: 1,
                color: "#7fa6ee",
              },
            ]),
          },
          label: {
            rotate: "tangential",
            color: "#000",
          },
        },
        {
          itemStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#6fe7db",
              },
              {
                offset: 1,
                color: "#7fa6ee",
              },
            ]),
          },
          label: {
            rotate: "tangential",
          },
        },
        {
          itemStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#f2fc9f",
              },
              {
                offset: 1,
                color: "#edbb91",
              },
            ]),
          },
          label: {
            rotate: "tangential",
          },
        },
      ],
    },
  };

  return (
    <div className={"echarts-demo"}>
      <div className="w-full">
        <ReactECharts
          style={{ height: 400 }}
          option={options}
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"}
        />
      </div>
    </div>
  );
};

export default SunBurst;
