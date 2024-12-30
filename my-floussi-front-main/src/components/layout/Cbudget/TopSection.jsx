import TitleQuoteSection from "../../DRY/TitleQuoteSection.jsx";

const TopSection = () => {
  return (
    <div className="p-10 ">
      <TitleQuoteSection
        title={"Calculateur de budget"}
        qoute={
          "Voyez ce que représente visuellement la répartition de vos dépenses et découvrez votre taux d'épargne mensuel. Il vous suffit juste d'inscrirevos revenus et vos dépenses"
        }
      />
    </div>
  );
};

export default TopSection;
