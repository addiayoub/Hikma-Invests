import { Provider, useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
import { resetPopup } from "./redux/slices/popupSlice.js";
import Router from "./router/router";

function Popup() {
  const { showPopup, message } = useSelector((state) => state.popup);
  const dispatch = useDispatch();

  const handleClosePopup = () => {
    dispatch(resetPopup());
  };

  if (!showPopup) return null;

  return (
    <div className="px-4 pt-2  rounde-lg" onClick={handleClosePopup}>
      <div
        className="bg-cyan-500 border border-cyan-700 text-cyan-950 px-4 py-3 rounded-lg relative text-center"
        role="alert"
      >
        <span className="font-bold">{message}</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6 text-cyan-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Popup />
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
