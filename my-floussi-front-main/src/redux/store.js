import { configureStore } from "@reduxjs/toolkit";
import calclulateurBudjetReducer from "./calculateurBudjetSlice";
import smPatrimoineReducer from "./smPatrimoineSlice";
import questionnaireReducer from "./questionnaireSlice";
import smProjetReducer from "./smProjectSlice";
import tarifsReducer from "./tarifsSlice";
import popupReducer from "./slices/popupSlice";
import loginReducer from "./slices/loginSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const persistedCbudgetReducer = persistReducer(
  persistConfig,
  calclulateurBudjetReducer,
);
const persistedSmPatrimoineReducer = persistReducer(
  persistConfig,
  smPatrimoineReducer,
);
const persistedTarifsReducer = persistReducer(persistConfig, tarifsReducer);
const persistedQuestionnaireReducer = persistReducer(
  persistConfig,
  questionnaireReducer,
);
const persistedSmProjectReducer = persistReducer(
  persistConfig,
  smProjetReducer,
);

const store = configureStore({
  reducer: {
    popup: popupReducer,
    login: loginReducer,
    calculateurBudjet: persistedCbudgetReducer,
    smPatrioine: persistedSmPatrimoineReducer,
    questionnaire: persistedQuestionnaireReducer,
    tarifs: persistedTarifsReducer,
    smProjetQuestionnaire: persistedSmProjectReducer,
  },
  middleware: [thunk],
});
export const persistor = persistStore(store);
export default store;
