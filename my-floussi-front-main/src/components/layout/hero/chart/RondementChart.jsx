import { PureComponent } from "react";
import data from "../../../../utils/json/rondementChartData.json";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import PosterText from "../poster/PosterText";

const postertext = {
  title: "Une stratégie d'investissement à long terme qui a fait ses preuves",
  paragraphe:
    "Optez pour la sagesse plutôt que les conjectures : investissez tôt, régulièrement et de manière systématique avec un portefeuille de fonds indiciels, une stratégie d'investissement qui a fait ses preuves.",
};

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          style={{ fontSize: 10 }}
          x={0}
          y={0}
          dy={6}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

class CustomizedYAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          style={{ fontSize: 10 }}
          x={0}
          y={0}
          dy={6}
          textAnchor="end"
          fill="#666"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

const RondementChart = () => {
  return (
    <div className=" flex flex-col lg:flex-row w-[95%] bg-bodyLight lg:w-[100%] mx-auto  p-3 lg:p-10 my-5  transition-all duration-300 gap-x-11">
      <PosterText title={postertext.title} paragraphe={postertext.paragraphe} />
      <div className="w-full h-full">
        <h1 className=" text-mdBlue text-3xl text-center my-5 ">
          {" "}
          Rendement annuel Moyen de 12%{" "}
        </h1>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart data={data}>
            {/* <CartesianGrid strokeDasharray="1 1" /> */}
            <XAxis tick={<CustomizedAxisTick />} dataKey="date" />

            <YAxis tick={<CustomizedYAxisTick />} />
            <Tooltip />
            <Legend
              wrapperStyle={{
                paddingTop: 40,
              }}
            />
            <Line
              dot={false}
              type="monotone"
              dataKey="Masi Rtb Brut"
              stroke="#009AD5"
            />
            <Line
              dot={false}
              type="monotone"
              dataKey="model"
              stroke="#F49352"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RondementChart;
