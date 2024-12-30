import TopSection from "./TopSection.jsx";
import Tabs from "./tabs/Tabs";

// eslint-disable-next-line react/prop-types
const Budget = ({ sankeyRef }) => {
  return (
    <div>
      <TopSection />
      <Tabs sankeyRef={sankeyRef} />
    </div>
  );
};

export default Budget;
