import Header from "./Header";
import Main from "./Main";
import HeaderTop from "../home/Sections/header/Header.jsx";

const Index = () => {
  return (
    <>
      <HeaderTop />
      <div className=" h-fit w-full top-24 absolute">
        <div className=" h-fit pb-7 w-full">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
};

export default Index;
