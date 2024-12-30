import { Chart } from "react-google-charts";

const colors = [
  "#F49352",
  "#D6475D",
  "#85357D",
  "#6F50E5",
  "#3C898E",
  "#F08696",
];
export const options = {
  tooltip: { isHtml: true, trigger: "selection" },

  sankey: {
    link: {
      // colors,
      // color: {
      //     stroke: 'black', strokeWidth: 1
      // }
      colorMode: "target",
      color: {
        // fill: '#efd',     // Color of the link.
        fillOpacity: 0.5, // Transparency of the link.
        // Thickness of the link border (default 0).
      },
    },
    node: {
      colors,
      label: {
        fontName: "Times-Roman",
        // fontSize: 11,
        color: "#000",
        // bold: true,
      },
      color: {
        // fill: '#efd',     // Color of the link.
        fillOpacity: 0.5, // Transparency of the link.
        // Thickness of the link border (default 0).
      },
    },
  },
};

// eslint-disable-next-line react/prop-types
const SankeyDiagramme = ({ data }) => {
  // console.log(stepe2(_data))
  return (
    <Chart
      chartType="Sankey"
      width="100%"
      height="400px"
      data={data}
      options={options}
      // tooltip={{ isHtml: true, trigger: 'selection', textStyle: { color: '#333' } }}
    />
  );
};

export default SankeyDiagramme;
