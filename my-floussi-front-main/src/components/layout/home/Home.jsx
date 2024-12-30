import Header from "./Sections/header/Header";
import Hero from "./Hero.jsx";

const Home = () => {
  return (
    <div className="home  min-h-screen min-w-screen  h-fit ">
      <Header />
      <div className="w-full h-full overflow-hidden">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
