import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAconomieParAns,
  setFraisMoyens,
  setFraisMoyensPourcentage,
  setFraisRobotAdvisorPourcentage,
  setFraisRobotAdvisorX,
} from "../../../../../redux/tarifsSlice";
import {
  economieAnnuelleCalc,
  economieParAnnesCalc,
  fraisMoyensCalc,
  fraisMoyensPourcentageCalc,
  fraisRobotAdvisorCalc,
  fraisRobotAdvisorPourcentageCalc,
} from "../../../../../utils/tarifs/tarifsCalcs";
import EconomiesFraisAnnes from "./cards/EconomiesFraisAnnes.jsx";
import FrMoyensGerantsPrvs from "./cards/FrMoyensGerantsPrvs.jsx";
import FraisHikmaInvest from "./cards/FraisHikmaInvest.jsx";

const Frais = () => {
  const dispatch = useDispatch();
  const {
    fraisMoyens,
    fraisRoboAdvisorX,
    economieAnnuelle,
    economieParAns,
    typeTarifs,
    sommePlacee,
  } = useSelector((state) => state.tarifs);

  useEffect(() => {
    const fraisMoyensPourcentage = fraisMoyensPourcentageCalc(typeTarifs);
    dispatch(setFraisMoyensPourcentage(fraisMoyensPourcentage));

    const fraisMoyens = fraisMoyensCalc(fraisMoyensPourcentage, sommePlacee);
    dispatch(setFraisMoyens(fraisMoyens));

    const fraisRobotAdvisorPourcentage =
      fraisRobotAdvisorPourcentageCalc(typeTarifs);
    dispatch(setFraisRobotAdvisorPourcentage(fraisRobotAdvisorPourcentage));

    const fraisRoboAdvisor = fraisRobotAdvisorCalc(
      fraisRobotAdvisorPourcentage,
      sommePlacee,
    );
    dispatch(setFraisRobotAdvisorX(fraisRoboAdvisor));

    const economieAnnuelle = economieAnnuelleCalc(
      fraisMoyens,
      fraisRoboAdvisor,
    );
    const economieParaAns = economieParAnnesCalc(economieAnnuelle, 20);
    dispatch(setAconomieParAns(economieParaAns));
  }, [fraisMoyens, fraisRoboAdvisorX, economieAnnuelle, economieParAns, typeTarifs, sommePlacee, dispatch]);

  return (
    <div className="lg:grid grid-cols-3 mx-auto lg:flex-row  lg:gap-x-5 space-y-5 justify-center">
      <FrMoyensGerantsPrvs />
      <FraisHikmaInvest />
      <EconomiesFraisAnnes />
    </div>
  );
};

export default Frais;
