import { addSpacesToNumber } from "../../../../utils/sankeyData/sankeyCalucaltors.js";

// eslint-disable-next-line react/prop-types
const MainParagraphe = ({ versementsCumule, plusValueNette,  revenuMensuel, years,}) => {
  return (
    <div className=" text-black text-sm my-10  text-center text-md  opacity-90 ">
      <p>
        Celui-ci se compose de{" "}
        <span className=" font-bold text-lg opacity-100 text-black">
          {addSpacesToNumber(versementsCumule)}{" "}
        </span>{" "}
        MAD de versements et de{" "}
        <span className=" font-bold text-lg opacity-100 text-black">
          {addSpacesToNumber(plusValueNette)}{" "}
        </span>{" "}
        MAD d'intérêts perçus pour un revenu mensuel de{" "}
        <span className=" font-bold text-lg opacity-100 text-black">
          {addSpacesToNumber(revenuMensuel)}{" "}
        </span>{" "}
        MAD à partir de la{" "}
        <span className=" font-bold text-lg opacity-100 text-black">
          {years}
        </span>{" "}
        eme année.
      </p>
    </div>
  );
};

export default MainParagraphe;
