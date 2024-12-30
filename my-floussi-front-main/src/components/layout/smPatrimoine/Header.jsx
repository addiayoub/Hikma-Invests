import TitleQuoteSection from "../../DRY/TitleQuoteSection.jsx";

const Header = () => {
  return (
    <div className=" p-10 ">
      <TitleQuoteSection
        title={"Simulateur de patrimoine"}
        qoute={
          " Voyez combien de revenu passif mensuel vous pouvez obtenir en fonction\n" +
          "          de votre patrimoine et de vos investissements. Il vous suffit d'entrer\n" +
          "          quelques informations de base dans notre simulateur.svg de patrimoine."
        }
      />
    </div>
  );
};

export default Header;
