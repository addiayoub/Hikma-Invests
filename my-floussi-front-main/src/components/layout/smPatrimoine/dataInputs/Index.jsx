import { useCallback } from "react";
import Slider from "./Slider";
import {
  setInvAnnuel,
  setNbrAnnesEpargne,
  setPActuel,
  setRendAutre,
  setRendBourse,
  setRepInv,
  setRepPI,
  setTxImpositionAutre,
  setTxImpositionBourse,
  setTxInflation,
  setTxRetrait,
} from "../../../../redux/smPatrimoineSlice";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
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
  } = useSelector((state) => state.smPatrioine);

  const dispatch = useDispatch();

  const handleChange = useCallback(
    (setter, value) => dispatch(setter(value)),
    [dispatch],
  );

  return (
    <div className="w-full max-w-lg mx-auto p-6 border rounded-lg shadow-sm bg-white space-y-6">
      <div>
        <Slider
          setV={setPActuel}
          unit="MAD"
          montant
          step={1000}
          min={0}
          max={10000000}
          title="Patrimoine actuel"
          v={pActuel}
          onChange={(e, v) => handleChange(setPActuel, v)}
        />
        <Slider
          setV={setRepPI}
          v={repPI}
          onChange={(e, v) => handleChange(setRepPI, v)}
          title="Répartition de votre patrimoine initial"
          t1="Bourse"
          t2="Autre"
        />
        <Slider
          setV={setInvAnnuel}
          unit="MAD"
          montant
          min={0}
          max={200000}
          step={2000}
          title="Investissements annuels"
          v={invAnnuel}
          onChange={(e, v) => handleChange(setInvAnnuel, v)}
        />
        <Slider
          setV={setRepInv}
          v={repInv}
          title="Répartition des investissements"
          t1="Bourse"
          t2="Autre"
          onChange={(e, v) => handleChange(setRepInv, v)}
        />
        <Slider
          setV={setNbrAnnesEpargne}
          unit="ANS"
          montant
          min={0}
          max={50}
          title="Nombre d'années d'épargne"
          v={nbrAnnesEpargne}
          onChange={(e, v) => handleChange(setNbrAnnesEpargne, v)}
        />
        <Slider
          setV={setRendBourse}
          min={0}
          max={25}
          title="Rendement bourse"
          v={rendBourse}
          onChange={(e, v) => handleChange(setRendBourse, v)}
        />
      </div>
      <div>
        <Slider
          setV={setRendAutre}
          min={0}
          max={10}
          title="Rendement autre"
          v={rendAutre}
          onChange={(e, v) => handleChange(setRendAutre, v)}
        />
        <Slider
          setV={setTxImpositionBourse}
          min={0}
          max={40}
          title="Taux d'imposition bourse"
          v={txImpositionBourse}
          onChange={(e, v) => handleChange(setTxImpositionBourse, v)}
        />
        <Slider
          setV={setTxImpositionAutre}
          min={0}
          max={40}
          title="Taux d'imposition autre"
          v={txImpositionAutre}
          onChange={(e, v) => handleChange(setTxImpositionAutre, v)}
        />
        <Slider
          setV={setTxRetrait}
          min={0}
          max={25}
          title="Taux de retrait"
          v={txRetrait}
          onChange={(e, v) => handleChange(setTxRetrait, v)}
        />
        <Slider
          setV={setTxInflation}
          min={0}
          max={10}
          title="Taux d'inflation"
          v={txInflation}
          onChange={(e, v) => handleChange(setTxInflation, v)}
        />
      </div>
    </div>
  );
};

export default Index;
