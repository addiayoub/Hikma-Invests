import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "react-feather";
import GripDots from "../../../utils/svgs/gripDots";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDepences,
  deleteInvistissements,
  deleteRevenu,
  editDepence,
  editInvistissment,
  editRevenu,
} from "../../../redux/calculateurBudjetSlice";

// eslint-disable-next-line react/prop-types
const Form = ({ groupId, id, dataLength, type }) => {
  const dispatch = useDispatch();
  const nomRef = useRef(null);
  const montantRef = useRef(null);
  const montantTypeRef = useRef(null);
  const [data, setData] = useState({});
  const { revenus, depences, investissements } = useSelector(
    (state) => state.calculateurBudjet,
  );

  const handlechange = useCallback(() => {
    const nom = nomRef.current.value;
    const montant = +montantRef.current.value;
    const montantType = montantTypeRef.current.value;
    switch (type) {
      case "investissements":
        if (!isNaN(montant)) {
          dispatch(
            editInvistissment({
              groupId,
              id,
              nom,
              montant: montant,
              type: montantType,
            }),
          );
        }
        break;
      case "depences":
        if (!isNaN(montant)) {
          dispatch(
            editDepence({
              groupId,
              id,
              nom,
              montant: montant,
              type: montantType,
            }),
          );
        }
        break;
      default:
        if (!isNaN(montant)) {
          dispatch(
            editRevenu({
              id,
              nom,
              montant,
              type: montantType,
            }),
          );
        }
        break;
    }
  }, []);

  const deleteItem = useCallback(() => {
    switch (type) {
      case "investissements":
        dispatch(
          deleteInvistissements({
            groupId,
            id,
          }),
        );
        break;
      case "depences":
        dispatch(
          deleteDepences({
            groupId,
            id,
          }),
        );
        break;
      default:
        dispatch(deleteRevenu({ id }));
        break;
    }
  }, []);

  useEffect(() => {
    switch (type) {
      case "investissements":
        for (const item of investissements) {
          for (const _ of item.data) {
            if (_.id === id) {
              setData(_);
            }
          }
        }
        break;
      case "depences":
        for (const item of depences) {
          for (const _ of item.data) {
            if (_.id === id) {
              setData(_);
            }
          }
        }
        break;

      default:
        for (const item of revenus) {
          if (item.id === id) {
            setData(item);
          }
        }
        break;
    }
  }, [data, type, revenus, depences, investissements]);

  return (
    <div className=" flex w-full align-middle justify-between items-center  mb-1 form-container max-h-fit">
      <div className="px-2  w-[30%] flex items-center ">
        <GripDots />
        <div className="input-container">
          <h6
            className="tracking-wide text-grayLight opacity-50 p-1 text-sm max-w-fit
                     align-bottom flex justify-center items-end"
          >
            Nom
          </h6>
          <div className="flex ">
            <input
              style={{ width: "100%" }}
              className="input-field placeholder-white "
              type="text"
              ref={nomRef}
              onChange={handlechange}
              value={data.nom ?? ""}
            />
          </div>
          <span className="input-highlight"></span>
        </div>
      </div>

      <div className=" w-[30%] px-5 flex items-center flex-col">
        <div className="input-container ">
          <div className="flex flex-col ">
            <h6
              className="tracking-wide text-grayLight opacity-50 p-1 text-sm max-w-fit
                     align-bottom "
            >
              Montant
            </h6>
            <input
              ref={montantRef}
              placeholder={data?.montant ? `${data?.montant} M A D` : ""}
              onChange={handlechange}
              value={data.montant?.toString() ?? 0}
              style={{ width: "100%" }}
              className="input-field placeholder-white "
              type="number"
            />
          </div>
          <span className="input-highlight"></span>
        </div>
      </div>
      <div className=" w-[30%] flex items-end justify-center self-end mb-5 h-[100%] mr-2">
        <select
          onChange={handlechange}
          value={data.type ?? "m"}
          ref={montantTypeRef}
          className=" w-[100%] mt-10 rounded-md outline-none text-center bg-forth"
        >
          <option value={"m"}>Mensuelle</option>
          <option value={"a"}>Annuelle</option>
        </select>
      </div>

      {dataLength !== 1 && (
        <div
          onClick={deleteItem}
          className=" cursor-pointer mx-4 my-auto h-full flex align-end items-end justify-end opacity-20 hover:opacity-100"
        >
          <X style={{ marginTop: 20 }} color="black" size={30} />
        </div>
      )}
    </div>
  );
};

export default Form;
