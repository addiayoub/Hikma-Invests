import {useEffect, useRef, useState} from "react";
import {idaData as data} from "../../../../assets/data/ida-data.js";
import dataUserScore from "../../../../services/dataUserScore.js";
import statusCalculator from "../../../../services/statusCalculator.js";
import Prudent from "../../../../assets/imgs/vectors/Prudent.svg";
import Modere from "../../../../assets/imgs/vectors/Moderate.svg";
import Dynamic from "../../../../assets/imgs/vectors/Dynamic.svg";
import Agressif from "../../../../assets/imgs/vectors/Aggressive.svg";
import DropDownDetailsCharts from "./content/DropDownDetailsCharts.jsx";
import Cards from "./content/Cards.jsx";
import {Button, Label, Modal, TextInput} from "flowbite-react";
import {Link,} from "react-router-dom";
import {sendResultEmail} from "../../../../services/sendEmail";

/**
 * @function QuestionnaireContent
 * @description This is a functional component that renders the questionnaire content.
 * @returns {JSX.Element} The rendered component.
 */
const QuestionnaireContent = () => {
  // State variables
  let [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState({ Prudent: 0, modere: 0, Agressif: 0 });
  const [result, setResult] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const emailInputRef = useRef(null);
  const progress = (index / data.length) * 100;
  const scoreLevel = dataUserScore(score.Prudent, score.modere, score.Agressif);
  const personType = statusCalculator(scoreLevel);const options = useRef([]);
  const [currentScoreLevel, setCurrentScoreLevel] = useState(scoreLevel);
  const [currentPersonType, setCurrentPersonType] = useState(personType);

  /**
   * @function checkAns
   * @description This function is called when a user selects an answer. It updates the score based on the selected answer.
   * @param {Event} e - The event object.
   * @param {string} ans - The selected answer.
   */
  const checkAns = (e, ans) => {
    const chosenPoints = question.points[ans];
    setScore((prev) => ({
      Prudent: prev.Prudent + chosenPoints.Prudent,
      modere: prev.modere + chosenPoints.modere,
      Agressif: prev.Agressif + chosenPoints.Agressif,
    }));
    setSelectedChoice(ans);
    setLock(true);
  };

  /**
   * @function next
   * @description This function is called when the user clicks the "Next" button. It moves to the next question if the current question is answered.
   */
  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setSelectedChoice(null);
      setLock(false);
    }
  };

  /**
   * @function previous
   * @description This function is called when the user clicks the "Previous" button. It moves to the previous question.
   */
  const previous = () => {
    if (index > 0) {
      setIndex(--index);
      setQuestion(data[index]);
      setSelectedChoice(null);
      setLock(false);
    }
  };

  /**
   * @function reset
   * @description This function is called when the user clicks the "Repeat" button. It resets the questionnaire.
   */
  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore({ Prudent: 0, modere: 0, Agressif: 0 });
    setLock(false);
    setResult(false);
  };

  /**
   * @function handleEmailChange
   * @description This function updates the email state when the input changes.
   * @param {Event} e - The event object.
   */
  // eslint-disable-next-line no-unused-vars
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };



  const colorTextTypePerson = {
    Prudent: "text-green-700",
    Modere: "text-cyan-600",
    Dynamic: "text-cyan-700",
    Agressif: "text-red-700",
  };

  const personTypeImages = {
    Prudent: Prudent,
    Modere: Modere,
    Dynamic: Dynamic,
    Agressif: Agressif,
  };

  useEffect(() => {
    setCurrentPersonType(personType);
    setCurrentScoreLevel(scoreLevel);
  }, [personType, scoreLevel]);

  const displayDataAndChangeIt = (newPersonType, newScoreLevel) => {
      setCurrentPersonType(newPersonType);
      setCurrentScoreLevel(newScoreLevel);
   }



  const sendEmail = async () => {
    sendResultEmail(email, { currentPersonType, currentScoreLevel });
  };
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionId) => {
    setActiveSection((prev) => (prev === sectionId ? null : sectionId));
  };

  const items = [
    {
      id: 1,
      title: (
        <div className="flex items-center px-2 py-2">
          <div className="flex justify-center items-center w-16 h-16 bg-blue-200 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-8 h-8 text-blue-500"
            >
            <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
            </svg>
          </div>
          <h5 className="ml-4 text-xl font-medium">
            <i>Analyse de Hikma:</i>
          </h5>
        </div>
      ),
      content: (
        <div className="p-4">
          <Cards personType={currentPersonType} scoreLevel={currentScoreLevel} />
        </div>
      ),
    },
    {
      id: 2,
      title: (
        <div className="flex items-center px-2 py-2">
          <div className="flex justify-center items-center w-16 h-16 bg-green-200 rounded-full">
          <svg width="300px" height="300px" viewBox="-6 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M15 10V17M7 13V17M19 5V17M11 7V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
          <h5 className="ml-4 text-xl font-medium">
            <i>Charts:</i>
          </h5>
        </div>
      ),
      content: (
        <div className="p-4">
          <DropDownDetailsCharts personType={currentPersonType} />
        </div>
      ),
    },
  ];
  return (
    <div className="container mx-auto text-black flex flex-col space-y-4 p-2 mt-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 font-poppins text-sm">
      {result ? (
        <></>
      ) : (
        <>
          <h1 className="text-2xl sm:text-3xl text-cyan-600 ">
            {question.group}
          </h1>
          <div className="relative h-3 flex items-center justify-center">
            <div
              className=" absolute top-0 bottom-0 left-0 rounded-full transition-all duration-1000 ease-in-out"
              style={{ width: `${progress}%` }}
            >
              <div className="bg-gradient-to-r from-cyan-500 via-cyan-700 to-cyan-900 h-full rounded-full"></div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-xl font-semibold mb-2">
              {index + 1}. {question.question}
            </h2>
            {question.field && (
              <li className="text-gray-400 font-semibold">{question.field}</li>
            )}
          </div>

          <ul
            className={`overflow-auto ${
              Object.keys(question.choices).length === 2
                ? "grid grid-cols-1 gap-4"
                : "grid grid-cols-1 sm:grid-cols-2 gap-4"
            }`}
          >
            {Object.keys(question.choices).map((key, idx) => (
              <li
                key={key}
                ref={(ref) => (options.current[key - 1] = ref)}
                onClick={(e) => checkAns(e, key)}
                className={`flex items-center justify-center text-center h-12 sm:h-16 pl-4 sm:pl-6 border border-gray-600 rounded-lg lg:text-base text-sm cursor-pointer hover:bg-gray-200 transition-colors duration-500 ${selectedChoice === key ? "bg-gray-300" : ""} ${
                  Object.keys(question.choices).length % 2 !== 0 &&
                  idx === Object.keys(question.choices).length - 1
                    ? "sm:col-span-2"
                    : ""
                }`}
              >
                {question.choices[key]}
              </li>
            ))}
          </ul>

          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={previous}
              aria-label="Previous Question"
              className="w-full sm:w-1/3  h-12 sm:text-lg  text-sm rounded-lg text-gray-900 bg-white border border-gray-300 hover:bg-gray-100"
            >
              Previous
            </button>
            <button
              onClick={next}
              aria-label="Next Question"
              className="w-full sm:w-1/3  h-12 bg-cyan-600  text-white rounded-lg hover:bg-cyan-800 sm:text-lg  text-sm cursor-pointer transition-colors duration-200"
            >
              Next
            </button>
          </div>
          <div className="mx-auto text-base sm:text-lg font-medium">
            <span className="text-cyan-600">{index + 1}</span> of {data.length}{" "}
            questions
          </div>
        </>
      )}
      {result && (
        <div className="m-2 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">
            <div className="lg:col-span-1 px-4 py-6 border-r border-gray-300 text-center">
              <img
                src={personTypeImages[currentPersonType]}
                alt={currentPersonType}
                className="w-36 h-36 mx-auto mb-2"
              />
              <div className="text-xl font-medium text-gray-900">
                {currentPersonType}
              </div>
            </div>
            <div className="lg:col-span-2 px-4 py-6">
              <div className="text-center">
                <p className="text-xl font-medium text-gray-900">
                  Hikma Invest
                  <br/>
                  <i className="text-gray-700">
                    rêves, notre expertise. Investissons ensemble pour un avenir
                    réussi.
                  </i>
                </p>

              </div>
              <div className="mt-6 text-xl grid grid-cols-2 font-medium text-center place-item-center">
                <p className="text-gray-800">
                  le score: &nbsp;
                  <i
                      className={`${colorTextTypePerson[currentPersonType]} underline underline-offset-2`}
                  >
                    {currentScoreLevel}
                  </i>
                </p>
                <p className="text-gray-800">
                  le Type: &nbsp;
                  <span
                      className={`${colorTextTypePerson[currentPersonType]} underline underline-offset-2`}
                  >
                    {currentPersonType}
                  </span>
                </p>
              </div>
              <div className="flex mt-6 justify-center space-x-2">
                <button type="button"
                        onClick={() => displayDataAndChangeIt('Prudent', 5)}
                        className={`text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800`}
                >
                  Prudent
                </button>
                <button type="button"
                        onClick={() => displayDataAndChangeIt('Modere', 10)}
                        className={`text-white bg-cyan-600 hover:bg-cyan-500 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-cyan-500 dark:hover:bg-cyan-600 focus:outline-none dark:focus:ring-cyan-700`}>Modere
                </button>
                <button type="button"
                        onClick={() => displayDataAndChangeIt('Dynamic', 15)}
                        className={`text-white bg-cyan-800 hover:bg-cyan-900 focus:ring-4 focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-cyan-700 dark:hover:bg-cyan-800 focus:outline-none dark:focus:ring-cyan-900`}>Dynamic
                </button>
                <button type="button"
                        onClick={() => displayDataAndChangeIt('Agressif', 20)}
                        className={`text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800`}
                >
                  Agressif
                </button>
              </div>

            </div>
          </div>
          <div className="bg-white col-span-2 rounded-lg shadow-lg overflow-hidden">
      {items.map((item) => (
        <div key={item.id} className="border-b border-gray-200">
          <button
            onClick={() => toggleSection(item.id)}
            className="w-full flex items-center justify-between px-4 py-3 focus:outline-none hover:bg-gray-100 transition duration-200"
          >
            <span className="text-lg font-semibold">{item.title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 transition-transform duration-300 ${
                activeSection === item.id ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeSection === item.id && (
            <div className="px-4 py-2">{item.content}</div>
          )}
        </div>
      ))}
    </div>
<br />
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 items-center justify-center px-4 sm:px-12">
            <button
              type="button"
              onClick={reset}
              className="w-full sm:w-1/2 flex items-center justify-center rounded-md border text-gray-800 border-gray-500 py-3 px-8 text-base font-medium"
            >
              Répéter la simulation
            </button>
            <Link
              to="/sign-up"
              type="button"
              className="w-full sm:w-1/2 flex items-center justify-center rounded-md border border-transparent bg-cyan-600 py-3 px-8 text-base font-medium text-white"
            >
              Sauvegarder ma simulation
            </Link>
            <button
              type="button"
              onClick={() => setOpenModal(true)}
              className="w-full sm:w-1/2 flex items-center justify-center rounded-md border border-transparent bg-cyan-600 py-3 px-8 text-base font-medium text-white"
            >
              Envoyer par e-mail
            </button>

            <Modal
              show={openModal}
              size="md"
              popup
              onClose={() => setOpenModal(false)}
              initialFocus={emailInputRef}
            >
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-6">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="Your email" />
                    </div>
                    <TextInput
                      id="email"
                      ref={emailInputRef}
                      placeholder="name@company.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="w-full">
                    <Button onClick={sendEmail}>Send Results</Button>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?&nbsp;
                    <Link
                      to="/sign-up"
                      className="text-cyan-700 hover:underline dark:text-cyan-500"
                    >
                      Create account
                    </Link>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionnaireContent;
