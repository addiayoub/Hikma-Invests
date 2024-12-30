import { Swiper, SwiperSlide } from "swiper/react";
import { User } from "react-feather";
import { useSelector } from "react-redux";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import Choices from "./Choices";

import Inputs from "./Inputs";
import Validation from "./Validation";
import Cancel from "./Cancel";

import Prospects from "./Prospects";
import Age from "./Age";
import Header from "../home/Sections/header/Header.jsx";
import BinaryChoices from "./BinaryChoices";

const Index = () => {
  // const [open, setOpen] = useState(false)
  const { questions } = useSelector((state) => state.smProjetQuestionnaire);
  // console.log(questions)
  return (
    <>
      <Header />

      <div className=" w-screen h-full  top-24 absolute">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
        >
          <SwiperSlide className=" eachSlide swiper-no-swiping">
            <Age />
          </SwiperSlide>
          {questions.map((q, j) => (
            <div key={q.id}>
              <div className=" bg-red w-fit">
                {q.questions.map((e, i) => (
                  <SwiperSlide
                    className=" eachSlide swiper-no-swiping"
                    key={e.id}
                  >
                    <div className="  w-[80%] h-fit my-5 mx-auto ">
                      <div className="flex">
                        <div className=" w-fit h-fit border rounded-full p-3 mt-2">
                          <User size={32} />
                        </div>
                        <div className=" flex flex-col gap-2 ml-3">
                          <h5 className=" text-red text-sm">
                            {" "}
                            {q.name} {i + 1}/{q.questions.length}
                          </h5>

                          <h1 className=" text-mdBlue text-2xl">
                            {e.question}
                          </h1>
                          <p className=" text-grayLight text-sm">
                            {e.instruction}
                          </p>
                        </div>
                      </div>

                      <div className=" w-[90%] my-1 mx-auto h-fit ">
                        {e?.choices && (
                          <Choices
                            categorieId={q.id}
                            questionId={e.id}
                            choices={e?.choices}
                            question={e.question}
                          />
                        )}

                        {e?.inputs && (
                          <Inputs
                            categorieId={q.id}
                            questionId={e.id}
                            inputs={e?.inputs}
                            question={e.question}
                          />
                        )}
                        {e?.binaryChoices && (
                          <BinaryChoices
                            categorieId={q.id}
                            questionId={e.id}
                            choices={e?.binaryChoices}
                            question={e.question}
                          />
                        )}
                        {e?.prospects && (
                          <Prospects
                            question={e.question}
                            prospects={e?.prospects}
                          />
                        )}
                        <Validation />
                        {<Cancel />}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </div>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Index;
