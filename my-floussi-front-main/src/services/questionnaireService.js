// const BASE_URL = "https://my-floussi-back.onrender.com/api";
const BASE_URL = "http://localhost:5000/api";

export const fetchAllQuestionnaires = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/questionnaires`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch Questionnaires");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching Questionnaires:", error);
    throw error;
  }
};

// 66a63542d850042e2c509212/questionnaires
export const fetchAllQuestionnairesByIdUser = async (token, userId) => {
  try {
    const response = await fetch(`${BASE_URL}/${userId}/questionnaires`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || "Failed to fetch Questionnaires for user",
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching Questionnaires for user:", error);
    throw error;
  }
};

export const submitQuestionnaireResult = async (token, userId, score, type) => {
  try {
    const response = await fetch(`${BASE_URL}/${userId}/questionnaire`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ score, type }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || "Failed to submit questionnaire result",
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting questionnaire result:", error);
    throw error;
  }
};
