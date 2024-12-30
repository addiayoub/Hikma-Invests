import { createSlice } from "@reduxjs/toolkit";

export const smPatrimoineSlice = createSlice({
  name: "sp",
  initialState: {
    smPatrimoineData: [],
    repInv: 50,
    repPI: 50,
    pActuel: 100000,
    invAnnuel: 6000,
    nbrAnnesEpargne: 20,
    rendBourse: 8,
    rendAutre: 5,
    txImpositionBourse: 17.2,
    txImpositionAutre: 30,
    txRetrait: 4,
    txInflation: 3,
    revenuParMois: 0,
    valeurNette: 0,
    plusValueNette: 0,
    versementCumule: 0,
  },
  reducers: {
    setRepInv(state, action) {
      const value = action.payload;

      state.repInv = +value;
    },
    setRepPI(state, action) {
      const value = action.payload;

      state.repPI = +value;
    },
    setPActuel(state, action) {
      const value = action.payload;

      state.pActuel = +value;
    },
    setInvAnnuel(state, action) {
      const value = action.payload;

      state.invAnnuel = +value;
    },
    setNbrAnnesEpargne(state, action) {
      const value = action.payload;

      state.nbrAnnesEpargne = +value;
    },
    setRendBourse(state, action) {
      const value = action.payload;

      state.rendBourse = +value;
    },
    setRendAutre(state, action) {
      const value = action.payload;

      state.rendAutre = +value;
    },
    setTxImpositionBourse(state, action) {
      const value = action.payload;

      state.txImpositionBourse = +value;
    },
    setTxImpositionAutre(state, action) {
      const value = action.payload;

      state.txImpositionAutre = +value;
    },
    setTxRetrait(state, action) {
      const value = action.payload;

      state.txRetrait = +value;
    },
    setTxInflation(state, action) {
      const value = action.payload;

      state.txInflation = +value;
    },
    setRevenuParMois(state, action) {
      const value = action.payload;

      state.revenuParMois = +value;
    },
    setValeurNette(state, action) {
      const value = action.payload;

      state.valeurNette = +value;
    },
    setPlusValueNette(state, action) {
      const value = action.payload;

      state.plusValueNette = +value;
    },
    setVersementCumule(state, action) {
      const value = action.payload;

      state.versementCumule = +value;
    },
    setSmPatrimoineData(state, action) {
      state.smPatrimoineData = action.payload;
    },
  },
});

export const {
  setRepInv,
  setRepPI,
  setInvAnnuel,
  setNbrAnnesEpargne,
  setPActuel,
  setPlusValueNette,
  setRendAutre,
  setRendBourse,
  setRevenuParMois,
  setTxImpositionAutre,
  setTxImpositionBourse,
  setTxInflation,
  setTxRetrait,
  setValeurNette,
  setVersementCumule,
  setSmPatrimoineData,
} = smPatrimoineSlice.actions;

export default smPatrimoineSlice.reducer;
