import { useRef } from "react";
import { useSelector } from "react-redux";
import { getTotalOfArrayObject } from "../../../utils/sankeyData/getTotalOfData";
import {
  addSpacesToNumber,
  getTotalOfCategory,
  rest,
  tauxEpargne,
  tauxEpargnePossible,
} from "../../../utils/sankeyData/sankeyCalucaltors";
import { step1, step2, step3 } from "../../../utils/sankeyData/steps";
import SankeyDiagramme from "./diagramme/Sankey";
import HeaderTop from "../home/Sections/header/Header.jsx";
import Main from "./Budget.jsx";
import SunBurst from "./diagramme/SunBurst";
import {
  sunBuerstInvestDepData,
  sunburstRevenuData,
} from "../../../utils/sunburst/data";

const Index = () => {
  const sankeyRef = useRef(null);

  const { investissements, revenus, depences } = useSelector(
    (state) => state.calculateurBudjet,
  );

  const data = [
    ["Budget", "Investissements", "Dépenses"],
    ...step1(revenus, investissements, depences),
    ...step2({ investissements, depences }),
    ...step3({ investissements, depences }),
  ];
  // console.log(data)

  const totalRev = getTotalOfArrayObject(revenus);
  const totalInv = getTotalOfCategory(investissements);
  const totalDep = getTotalOfCategory(depences);
  const atLeastOneItemIsFilled = totalRev > 0 || totalInv > 0 || totalDep > 0;

  const sunBurstRevenusData = sunburstRevenuData(revenus);
  const sunBurstInvsData = sunBuerstInvestDepData(
    investissements,
    "Investissement",
  );
  const sunBurstDepData = sunBuerstInvestDepData(depences, "Depences");

  return (
    <>
      <HeaderTop />

      <div className=" h-fit w-full   absolute">
        <div className=" h-fit pb-7 w-full ">
          <Main sankeyRef={sankeyRef} />

          <div className=" w-[90%] my-10 mx-auto ">
            <p className=" text-black text-center text-lg">
              {`
                                Votre taux d'épargne est de ${tauxEpargne(revenus, investissements)} (taux d'épargne possible: ${tauxEpargnePossible(revenus, depences)} ).
                                 Vous avez un revenu total de ${addSpacesToNumber(parseInt(totalRev))} MAD,
                                  des dépenses de ${addSpacesToNumber(parseInt(totalDep))} MAD \n
                                 et investissez
                                 ${addSpacesToNumber(parseInt(totalInv))} MAD tous les mois, ${rest(totalRev, totalInv, totalDep)}.
                            `}
            </p>
          </div>

          <div>
            {atLeastOneItemIsFilled && (
              <div
                className=" w-[100%] h-full my-4 mx-auto p-10"
                ref={sankeyRef}
              >
                <SankeyDiagramme data={data} />
              </div>
            )}
          </div>

          <div className="flex-col md:flex-row flex justify-between my-5 ">
            <div className=" flex flex-col gap-1 flex-1">
              <div>
                <h4 className=" text-xl text-center ">Revenus</h4>
              </div>
              <SunBurst data={sunBurstRevenusData} total={totalRev} />
            </div>

            <div className=" flex flex-col gap-1 flex-1">
              <div>
                <h4 className=" text-mainLight text-xl text-center ">
                  Investissements
                </h4>
              </div>
              <SunBurst data={sunBurstInvsData} total={totalInv} />
            </div>

            <div className=" flex flex-col gap-1 flex-1">
              <div>
                <h4 className=" text-mainLight text-xl text-center ">
                  Depences
                </h4>
              </div>
              <SunBurst data={sunBurstDepData} total={totalDep} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
