import { useState, useEffect } from "react";
import ChartLineCompo from "../../charts/ChartLineCompo.jsx";
import chart1 from "../../../../../assets/imgs/chart1.svg";
import chart2 from "../../../../../assets/imgs/chart2.svg";
import chart3 from "../../../../../assets/imgs/chart3.svg";
import chartPie1 from "../../../../../assets/imgs/chart-pie1.svg";
import chartPie2 from "../../../../../assets/imgs/chart-pie2.svg";
import chartPie3 from "../../../../../assets/imgs/chart-pie3.svg";
import ChartBarCompo from "../../charts/ChartBarCompo.jsx";
import ChartLinesCompo from "../../charts/ChartLinesCompo.jsx";
import ChartPieSG from "../../charts/pie/ChartPieSG.jsx";
import ChartPieT from "../../charts/pie/ChartPieT.jsx";
import ChartPieC from "../../charts/pie/ChartPieC.jsx";

// eslint-disable-next-line react/prop-types
const DropDownDetailsCharts = ({ personType }) => {
  const colorTextTypePerson = {
    Prudent: "bg-green-300",
    Modere: "bg-cyan-200",
    Dynamic: "bg-cyan-300",
    Agressif: "bg-red-300",
  };

  const [items, setItems] = useState([
    {
      id: 1,
      title: (
          <div className="flex">
            <div className="px-2 py-2 flex">
              <div
                  className={`flex justify-center items-center w-16 h-16 ${colorTextTypePerson[personType]} rounded-full`}
              >
                <img src={chart1} alt="chart 1" className="h-10 w-10" />
              </div>
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-start text-xl font-medium leading-tight">
                Rendement Annuel
              </h5>
            </div>
          </div>
      ),
      content: <ChartBarCompo personType={personType} />,
    },
    {
      id: 2,
      title: (
          <div className="flex">
            <div className="px-2 py-2 flex">
              <div
                  className={`flex justify-center items-center w-16 h-16 ${colorTextTypePerson[personType]} rounded-full`}
              >
                <img src={chart2} alt="chart 2" className="h-10 w-10" />
              </div>
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-start text-xl font-medium leading-tight">
                Simulation sur 6 ans
              </h5>
            </div>
          </div>
      ),
      content: <ChartLineCompo personType={personType} />,
    },
    {
      id: 3,
      title: (
          <div className="flex">
            <div className="px-2 py-2 flex">
              <div
                  className={`flex justify-center items-center w-16 h-16 ${colorTextTypePerson[personType]} rounded-full`}
              >
                <img src={chart3} alt="chart 3" className="h-10 w-10" />
              </div>
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-start text-xl font-medium leading-tight">
                Backtest Historique
              </h5>
            </div>
          </div>
      ),
      content: <ChartLinesCompo personType={personType} />,
    },
    {
      id: 4,
      title: (
          <div className="flex">
            <div className="px-2 py-2 flex">
              <div
                  className={`flex justify-center items-center w-16 h-16 ${colorTextTypePerson[personType]} rounded-full`}
              >
                <img src={chartPie1} alt="chart 1" className="h-10 w-10" />
              </div>
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-start text-xl font-medium leading-tight">
                Societe de Gestion
              </h5>
            </div>
          </div>
      ),
      content: <ChartPieSG personType={personType} />,
    },
    {
      id: 5,
      title: (
          <div className="flex">
            <div className="px-2 py-2 flex">
              <div
                  className={`flex justify-center items-center w-16 h-16 ${colorTextTypePerson[personType]} rounded-full`}
              >
                <img src={chartPie2} alt="chart 2" className="h-10 w-10" />
              </div>
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-start text-xl font-medium leading-tight">
                Classification
              </h5>
            </div>
          </div>
      ),
      content: <ChartPieC personType={personType} />,
    },
    {
      id: 6,
      title: (
          <div className="flex">
            <div className="px-2 py-2 flex">
              <div
                  className={`flex justify-center items-center w-16 h-16 ${colorTextTypePerson[personType]} rounded-full`}
              >
                <img src={chartPie3} alt="chart 3" className="h-10 w-10" />
              </div>
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-start text-xl font-medium leading-tight">
                Titre
              </h5>
            </div>
          </div>
      ),
      content: <ChartPieT personType={personType} />,
    },
  ]);

  useEffect(() => {
    setItems((prevItems) =>
        prevItems.map((item) => {
          let content;
          let title;
          switch (item.id) {
            case 1:
              content = <ChartBarCompo personType={personType} />;
              title = (
                  <div className="flex">
                    <div className="px-2 py-2 flex">
                      <div
                          className={`flex justify-center items-center w-16 h-16 ${colorTextTypePerson[personType]} rounded-full`}
                      >
                        <img src={chart1} alt="chart 1" className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="mb-2 text-start text-xl font-medium leading-tight">
                        Rendement Annuel
                      </h5>
                    </div>
                  </div>
              );
              break;
            case 2:
              content = <ChartLineCompo personType={personType} />;
              title = (
                  <div className="flex">
                    <div className="px-2 py-2 flex">
                      <div
                          className={`flex justify-center items-center w-16 h-16 ${colorTextTypePerson[personType]} rounded-full`}
                      >
                        <img src={chart2} alt="chart 2" className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="mb-2 text-start text-xl font-medium leading-tight">
                        Simulation sur 6 ans
                      </h5>
                    </div>
                  </div>
              );
              break;
            case 3:
              content = <ChartLinesCompo personType={personType} />;
              title = (
                  <div className="flex">
                    <div className="px-2 py-2 flex">
                      <div
                          className={`flex justify-center items-center w-16 h-16 ${colorTextTypePerson[personType]} rounded-full`}
                      >
                        <img src={chart3} alt="chart 3" className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="mb-2 text-start text-xl font-medium leading-tight">
                        Backtest Historique
                      </h5>
                    </div>
                  </div>
              );
              break;
            case 4:
              content = <ChartPieSG personType={personType} />;
              title = (
                  <div className="flex">
                    <div className="px-2 py-2 flex">
                      <div
                          className={`flex justify-center items-center w-16 h-16 ${colorTextTypePerson[personType]} rounded-full`}
                      >
                        <img src={chartPie1} alt="chart 1" className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="mb-2 text-start text-xl font-medium leading-tight">
                        Societe de Gestion
                      </h5>
                    </div>
                  </div>
              );
              break;
            case 5:
              content = <ChartPieC personType={personType} />;
              title = (
                  <div className="flex">
                    <div className="px-2 py-2 flex">
                      <div
                          className={`flex justify-center items-center w-16 h-16 ${colorTextTypePerson[personType]} rounded-full`}
                      >
                        <img src={chartPie2} alt="chart 2" className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="mb-2 text-start text-xl font-medium leading-tight">
                        Classification
                      </h5>
                    </div>
                  </div>
              );
              break;
            case 6:
              content = <ChartPieT personType={personType} />;
              title = (
                  <div className="flex">
                    <div className="px-2 py-2 flex">
                      <div
                          className={`flex justify-center items-center w-16 h-16 ${colorTextTypePerson[personType]} rounded-full`}
                      >
                        <img src={chartPie3} alt="chart 3" className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="mb-2 text-start text-xl font-medium leading-tight">
                        Titre
                      </h5>
                    </div>
                  </div>
              );
              break;
            default:
              content = item.content;
              title = item.title;
          }
          return { ...item, content, title };
        })
    );
  }, [personType]);

  const toggleItem = (id) => {
    setItems(
        items.map((item) =>
            item.id === id ? { ...item, isOpen: !item.isOpen } : item,
        ),
    );
  };

  return (
      <div className="bg-white col-span-2 rounded-lg shadow-lg overflow-hidden">
        {items.map((item) => (
            <div key={item.id} className="border-b border-gray-200">
              <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between px-4 py-3 focus:outline-none"
              >
                <span className="text-lg font-semibold">{item.title}</span>
                <svg
                    className={`w-4 h-4 transform ${item.isOpen ? "rotate-180" : "rotate-0"} transition-transform duration-200`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                  <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                  />
                </svg>
              </button>
              {item.isOpen && (
                  <div className="px-4 py-2">
                    <p className="text-gray-600">{item.content}</p>
                  </div>
              )}
            </div>
        ))}
      </div>
  );
};

export default DropDownDetailsCharts;