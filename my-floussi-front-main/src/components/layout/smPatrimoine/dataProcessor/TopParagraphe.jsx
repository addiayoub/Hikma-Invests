import { addSpacesToNumber } from "../../../../utils/sankeyData/sankeyCalucaltors";

// eslint-disable-next-line react/prop-types
const TopParagraphe = ({ years, revenuParMois, capitalFinal }) => {
  return (
    <div className=" w-[80%] mx-auto my-14">
      <p className=" text-black text-center text-sm font-light ">
        Au bout de <span className="text-lg font-bold"> {years} </span> ans,
        vous pouvez générer un revenu passif de{" "}
        <span className="text-lg font-bold">
          {" "}
          {addSpacesToNumber(revenuParMois)}{" "}
        </span>{" "}
        MAD/mois pour un capital final de
        <span className="text-lg font-bold">
          {" "}
          {addSpacesToNumber(capitalFinal)}{" "}
        </span>{" "}
        MAD
      </p>
    </div>
  );
};

export default TopParagraphe;
