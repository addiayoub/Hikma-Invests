import Frais from "./frais/Frais";
import TarifsSlider from "./frais/slider/Slider.jsx";
import TypeTarifsSelect from "./frais/tarifSelection/TarisSelect.jsx";
import TitleQuoteSection from "../../../DRY/TitleQuoteSection.jsx";

const Main = () => {
  return (
    <div className="flex flex-col p-10">
      <TitleQuoteSection
        title={"Économisez pour prospérer"}
        qoute={
          "Prenez le contrôle de votre avenir financier : Hikma Invest, où votre épargne s'envole, et non pas les profits du gérant"
        }
      />
      <div className=" w-full  lg:w-[40%] mx-auto pt-8">
        <TypeTarifsSelect />
        <TarifsSlider />
      </div>

      <div>
        <Frais />
      </div>
    </div>
  );
};

export default Main;
