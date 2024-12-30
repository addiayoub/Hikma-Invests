import { createSlice } from "@reduxjs/toolkit";

export const fraisSlice = createSlice({
  name: "tf",
  initialState: {
    fraisMoyensPourcentage: 0,
    fraisRobotAdvisorPourcentage: 0,

    fraisMoyens: 0,
    fraisRoboAdvisorX: 0,
    economieAnnuelle: 0,
    economieParAns: 0,
    typeTarifs: 1.8,
    sommePlacee: 250000,
  },
  reducers: {
    setFraisMoyens(state, action) {
      state.fraisMoyens = action.payload;
    },
    setFraisRobotAdvisorX(state, action) {
      state.fraisRoboAdvisorX = action.payload;
    },
    setEconomieAnnuelle(state, action) {
      state.economieAnnuelle = action.payload;
    },
    setAconomieParAns(state, action) {
      state.economieParAns = action.payload;
    },
    setTypeTarifs(state, action) {
      state.typeTarifs = action.payload;
    },
    setSommePlacee(state, action) {
      state.sommePlacee = action.payload;
    },
    setFraisMoyensPourcentage(state, action) {
      state.fraisMoyensPourcentage = action.payload;
    },
    setFraisRobotAdvisorPourcentage(state, action) {
      state.fraisRobotAdvisorPourcentage = action.payload;
    },
  },
});

export const {
  setFraisMoyens,
  setFraisRobotAdvisorX,
  setAconomieParAns,
  setEconomieAnnuelle,
  setTypeTarifs,
  setSommePlacee,
  setFraisMoyensPourcentage,
  setFraisRobotAdvisorPourcentage,
} = fraisSlice.actions;

export default fraisSlice.reducer;
