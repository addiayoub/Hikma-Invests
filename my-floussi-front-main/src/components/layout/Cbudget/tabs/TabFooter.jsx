import { useEffect, useState } from "react";
import { Plus } from "react-feather";

const TabFooter = ({ addItem, type }) => {
  const [source, setSource] = useState("");

  useEffect(() => {
    switch (type) {
      case "investissements":
        setSource("d'investissements");
        break;
      case "depences":
        setSource("de depences");
        break;
      default:
        setSource("de revenu");
        break;
    }
  }, [type]);
  return (
    <div
      onClick={addItem}
      className=" px-6 py-6 flex gap-2 opacity-70 hover:opacity-100  h-[80px] items-center border-b border-b-grayExtraLight cursor-pointer "
    >
      <h6 className="max-w-fit text-grayLight text-md h-full">
        Ajouter une source {source}{" "}
      </h6>

      <Plus color="#707070" size={30} />
    </div>
  );
};

export default TabFooter;
