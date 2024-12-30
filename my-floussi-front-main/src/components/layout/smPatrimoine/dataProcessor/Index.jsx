import { useEffect, useState } from "react";
import { setSmPatrimoineData } from "../../../../redux/smPatrimoineSlice";
import {
  investBourseCalc,
  pmvBourseCalc,
  pmvBourseNetteCalc,
  repBourseCalc,
  versBourseCalc,
  versBourseCumuleCalc,
} from "../../../../utils/smPatrimoine/pmvBourse";
import {
  autreCalc,
  autreFisrtCalc,
  investAutreCalc,
  investAutreFisrtCalc,
  pmvAutreCalc,
  pmvAutreNetteCalc,
  versAutreCalc,
  versAutreCumuleCalc,
} from "../../../../utils/smPatrimoine/pmvAutre";
import {
  revenuMensuelCalc,
  valeurFutureCalc,
  valeurNetteCalc,
} from "../../../../utils/smPatrimoine/revenueNette";
import { useDispatch, useSelector } from "react-redux";
import {
  plusValueBrutteCalc,
  plusValueNetteCalc,
} from "../../../../utils/smPatrimoine/plusValue";
import TopParagraphe from "./TopParagraphe.jsx";
import Graph from "./Graph.jsx";
import GraphYearsIndicator from "./GraphYearsIndicator.jsx";
import GraphColorsIndicator from "./GraphColorsIndicator.jsx";
import MainParagraphe from "./MainParagraphe.jsx";
import Results from "./Results.jsx";
import EndSection from "./EndSection.jsx";

const Index = () => {
  const currentDate = new Date();

  const dispatch = useDispatch();

  const {
    repInv,
    repPI,
    pActuel,
    invAnnuel,
    nbrAnnesEpargne,
    rendBourse,
    rendAutre,
    txImpositionAutre,
    txImpositionBourse,
    txRetrait,
    txInflation,
    smPatrimoineData,
  } = useSelector((state) => state.smPatrioine);

  const [revenuParMois, setRevenuParMois] = useState(0);
  const [valeurNette, setValeurNette] = useState(0);
  const [plusValueNette, setPlusValueNette] = useState(0);
  // const [plusValueBrutte, setPlusValueBrutte] = useState(0)
  const [versementCumule, setVersementCumule] = useState(0);

  const [data, setData] = useState(smPatrimoineData);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const arr = [];
    const repBourseFisrt = repBourseCalc(repPI, pActuel, 0, 0, 0, true);
    const autreFisrt = autreFisrtCalc(pActuel, repBourseFisrt);
    let versAutreFisrt = 0;
    let versBourse = 0;
    let versAutre = 0;
    let versementCumule = 0;
    let investAutre = 0;
    let autre = autreFisrtCalc(pActuel, repBourseFisrt);
    let versAutreCumule = 0;

    let pmvAutre = 0;

    let repBourse = repBourseCalc(
      repPI,
      pActuel,
      repBourseCalc,
      rendAutre,
      txImpositionAutre,
      true,
    );
    let investBourse = 0;
    let versBourseCumule = 0;
    let pmvBourse = 0;

    for (let i = 0; i <= nbrAnnesEpargne; i++) {
      if (i !== 0) {
        versementCumule += invAnnuel;

        versBourse = versBourseCalc(invAnnuel, repInv);
        versAutre = versAutreCalc(invAnnuel, versBourse);

        investAutre =
          i === 1
            ? investAutreFisrtCalc(versAutre)
            : investAutreCalc(
                investAutre,
                rendAutre,
                txInflation,
                repPI,
                invAnnuel,
              );

        autre = autreCalc(autre, rendAutre, txInflation);
        versAutreCumule = versAutreCumuleCalc(versAutre, versAutreCumule);

        pmvAutre = pmvAutreCalc(
          autreFisrt,
          autre,
          versAutreCumule,
          investAutre,
        );

        repBourse = repBourseCalc(
          repPI,
          pActuel,
          repBourse,
          rendBourse,
          txInflation,
        );
        investBourse =
          i === 1
            ? versBourse
            : investBourseCalc(
                versBourse,
                invAnnuel,
                repPI,
                investBourse,
                rendBourse,
                txInflation,
              );
        versBourseCumule = versBourseCumuleCalc(versBourse, versBourseCumule);

        pmvBourse = pmvBourseCalc(
          repBourseFisrt,
          repBourse,
          investBourse,
          versBourseCumule,
        );
      }

      arr.push({
        year: currentDate.getFullYear() + i,
        Invetissements: pActuel,
        "Versement cumulé": parseInt(versementCumule),
        "Pmv Autre": parseInt(pmvAutre),
        "Pmv Bourse": parseInt(pmvBourse),
      });
    }

    setData([...arr]);
    dispatch(setSmPatrimoineData([...data]));
    const pmvBourseNette = pmvBourseNetteCalc(pmvBourse, txImpositionBourse);
    const pmvAutreNette = pmvAutreNetteCalc(pmvAutre, txImpositionAutre);

    const valeurNette = valeurNetteCalc(
      pActuel,
      versementCumule,
      pmvBourseNette,
      pmvAutreNette,
    );

    const revenuMensuel = revenuMensuelCalc(txRetrait, valeurNette);

    setRevenuParMois(parseInt(revenuMensuel));
    const valeurFuture = valeurFutureCalc(
      pActuel,
      pmvBourse,
      pmvAutre,
      versementCumule,
    );

    setValeurNette(parseInt(valeurNette));

    const plusValueNette = plusValueNetteCalc(pmvBourseNette, pmvAutreNette);
    setPlusValueNette(parseInt(plusValueNette));

    const plusValueBrutte = plusValueBrutteCalc(
      valeurFuture,
      pActuel,
      versementCumule,
    );

    setVersementCumule(parseInt(versementCumule));

    const results = [
      {
        name: "Valeur future",
        value: valeurFuture,
      },

      {
        name: "Valeur nette",
        value: valeurNette,
      },
      {
        name: "Capital Initial",
        value: pActuel,
      },
      {
        name: "Total Versement",
        value: versementCumule,
      },
      {
        name: "Plus value nette",
        value: plusValueNette,
      },
      {
        name: "Plus value brutte",
        value: plusValueBrutte,
      },

      {
        name: "Revenu mensuel",
        value: revenuMensuel,
      },
    ];
    setResults(results);

    // console.log(data)
  }, [
    repInv,
    repPI,
    pActuel,
    invAnnuel,
    nbrAnnesEpargne,
    rendBourse,
    rendAutre,
    txImpositionBourse,
    txImpositionAutre,
    txRetrait,
    txInflation,
  ]);

  return (
    <div className=" w-[65%] max-[640px]:w-full max-[640px]:mt-12 pb-12  h-full  px-4">
      <TopParagraphe
        years={nbrAnnesEpargne}
        revenuParMois={revenuParMois}
        capitalFinal={valeurNette}
      />
      <Graph data={data} />
      <GraphYearsIndicator years={nbrAnnesEpargne} />
      <GraphColorsIndicator />

      <MainParagraphe
        versementsCumule={versementCumule}
        revenuMensuel={revenuParMois}
        plusValueNette={plusValueNette}
        years={nbrAnnesEpargne}
      />
      <Results results={results} />

      <EndSection />
    </div>
  );
};

export default Index;
