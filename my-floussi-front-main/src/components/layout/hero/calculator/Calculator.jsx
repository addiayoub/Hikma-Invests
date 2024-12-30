import { useEffect, useState } from "react";
import c1 from "../../../../assets/imgs/calculateur/1.svg";
import c2 from "../../../../assets/imgs/calculateur/2.svg";
import c3 from "../../../../assets/imgs/calculateur/3.svg";
import c4 from "../../../../assets/imgs/calculateur/4.svg";
import c5 from "../../../../assets/imgs/calculateur/5.svg";
import c6 from "../../../../assets/imgs/calculateur/6.svg";
import c7 from "../../../../assets/imgs/calculateur/7.svg";
import c8 from "../../../../assets/imgs/calculateur/8.svg";
import c9 from "../../../../assets/imgs/calculateur/9.svg";
import c10 from "../../../../assets/imgs/calculateur/10.svg";

import CalculatorSlider from "./CalculatorSlider";
import {
  FDG_ANUUEL,
  FDG_ANUUEL_COMPTE_CARNET,
  FDG_ANUUEL_OPVCM,
  FRAIS_MENSUEL_ABONNEMENT,
  fraisCalc,
  investNetFraisTotal_CompteCarnet_Calc,
  investNetFraisTotal_OPVCM_Calc,
  investNetFraisTotalCalc,
  TAUX_RENDEMENT_MOYEN,
  TAUX_RENDEMENT_MOYEN_COMPTE_CARNET,
  TAUX_RENDEMENT_MOYEN_OPVCM,
  tauxNetHebdoCalc,
} from "../../../../utils/hero/calculator/calculator";
import { addSpacesToNumber } from "../../../../utils/sankeyData/sankeyCalucaltors";
import InvestMoneySlider from "./InvestMoneySlider.jsx";
import InvestYearsSlider from "./InvestYearsSlider.jsx";

const svgs = [c1, c2, c3, c4, c4, c5, c6, c7, c8, c9, c10];

const Calculator = () => {
  const [imgSrc, setImageSrc] = useState(5);
  const [invest, setInvest] = useState(500);
  const [year, setyear] = useState(1);

  const [nosFrais, setNosFrais] = useState(0);
  const [OPCVM, setOPVCM] = useState(0);
  const [compteCarnet, setCompteCarnet] = useState(0);

  useEffect(() => {
    const ans = imgSrc * 5;

    const investNetFraisTotal = investNetFraisTotalCalc(
      +invest,
      FRAIS_MENSUEL_ABONNEMENT,
    );
    const tauxNetHebdo = tauxNetHebdoCalc(TAUX_RENDEMENT_MOYEN, FDG_ANUUEL);
    const nosFrais = fraisCalc(investNetFraisTotal, tauxNetHebdo, ans);

    const investNetFraisTotal_opvcm = investNetFraisTotal_OPVCM_Calc(invest);
    const tauxNetHebdo_opvcm = tauxNetHebdoCalc(
      TAUX_RENDEMENT_MOYEN_OPVCM,
      FDG_ANUUEL_OPVCM,
    );
    const fraisOpvcm = fraisCalc(
      investNetFraisTotal_opvcm,
      tauxNetHebdo_opvcm,
      ans,
    );

    const investNetFraisTotal_compteCarnet =
      investNetFraisTotal_CompteCarnet_Calc(invest);
    const tauxNetHebdo_compteCarnet = tauxNetHebdoCalc(
      TAUX_RENDEMENT_MOYEN_COMPTE_CARNET,
      FDG_ANUUEL_COMPTE_CARNET,
    );
    const fraisCompteCaret = fraisCalc(
      investNetFraisTotal_compteCarnet,
      tauxNetHebdo_compteCarnet,
      ans,
    );

    setNosFrais(addSpacesToNumber(parseInt(nosFrais)));
    setOPVCM(addSpacesToNumber(parseInt(fraisOpvcm)));
    setCompteCarnet(addSpacesToNumber(parseInt(fraisCompteCaret)));

    const thumb = document.querySelector(" .calc-slider .MuiSlider-thumb");
    if (thumb) {
      const input = `
                <input data-index="0" aria-label="Always visible" aria-valuenow="0" aria-orientation="horizontal" aria-valuemax="10" aria-valuemin="0" type="range" min="0" max="10" step="1" value="0" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 100%; margin: -1px; overflow: hidden; padding: 0px; position: absolute; white-space: nowrap; width: 100%; direction: ltr;">
                `;
      const txt = `<span>
                     ${imgSrc * 5} années
                </span>`;
      thumb.innerHTML = input;
      thumb.innerHTML += txt;
    }
  }, [imgSrc, invest]);

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Liberté financière ou travail à vie : Quel choix pour votre avenir?
          </h2>
          <p className="mt-4 text-gray-500">
            Découvrez l'impact concret de Hikma Invest sur l'investissement
            financier à travers cet exemple.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Hikma Invest</dt>
              <dd className="mt-2 font-medium text-gray-500">{nosFrais} MAD</dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dd className="mt-2 font-medium text-gray-500">
                <h3>Investissez {addSpacesToNumber(invest)} MAD par semaine</h3>
                <InvestMoneySlider v={invest} setV={setInvest} />
              </dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dd className="mt-2 font-medium text-gray-500">
                <h3>Investissez {year} year </h3>
                <InvestYearsSlider v={year} setV={setyear} />
              </dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">OPCVM Actions</dt>
              <dd className="mt-2 font-medium text-gray-500">{OPCVM} MAD</dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Compte carnet</dt>
              <dd className="mt-2 font-medium text-gray-500">
                {compteCarnet} MAD
              </dd>
            </div>
          </dl>
        </div>

        <div className="sm:gap-6 lg:gap-8">
          <div className="">
            <img src={svgs[imgSrc]} alt={"my image"} />
          </div>
          <CalculatorSlider v={imgSrc} setV={setImageSrc} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
