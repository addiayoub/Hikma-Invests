import { useAuth } from "../../../context/AuthContext.jsx";
import { useEffect, useState } from "react";
import { fetchAllQuestionnairesByIdUser } from "../../../services/questionnaireService.js";

const UserQuestionnaires = () => {
  const { token, user } = useAuth();

  const [questionnaires, setQuestionnaires] = useState(0);
  useEffect(() => {
    const getQuestionnairesByUserId = async () => {
      try {
        const questionnaires = await fetchAllQuestionnairesByIdUser(
          token,
          user.id,
        );
        setQuestionnaires(questionnaires);
      } catch (error) {
        console.error("Error fetching questionnaires:", error);
      }
    };
    getQuestionnairesByUserId();
  }, [token, user.id]);

  const typeColors = {
    Modere: "text-green-700 bg-green-100",
    Prudent: "text-blue-700 bg-blue-100",
    Agressif: "text-red-700 bg-red-100",
    Dynamic: "text-yellow-700 bg-yellow-100",
  };
  return (
    <main className="flex-1">
      <div className="space-y-2 pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Questionnaires
          </h1>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th className="px-4 py-3">Questionnaire id</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Score</th>
              <th className="px-4 py-3">Info</th>
            </tr>
            </thead>
            <tbody className="bg-white  w-full dark:divide-gray-700 dark:bg-gray-800">
            {Array.isArray(questionnaires) ? (
                // eslint-disable-next-line react/prop-types
                questionnaires.map((questionnaire) => (
                    <tr
                        className="text-gray-700 dark:text-gray-400"
                        key={questionnaire.id}
                    >
                      <td className="px-4 py-3 text-sm">{questionnaire._id}</td>
                      <td className="px-4 py-3 text-sm">
                      <span
                          className={`px-2 py-1 font-semibold leading-tight rounded-full ${typeColors[questionnaire.type] || "default-class"}`}
                      >
                        {questionnaire.type}
                      </span>
                      </td>
                      <td className="px-4 py-3 text-sm">{questionnaire.score}</td>
                      <td className="px-4 py-3 text-xs">
                      <span
                          className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:bg-green-700 dark:text-green-100">
                        more
                      </span>
                      </td>
                    </tr>
                ))
            ) : (
                <p>No questionnaires found</p>
            )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
export default UserQuestionnaires;
