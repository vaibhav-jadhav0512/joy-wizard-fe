import axios from "axios";

export const getAllQuestions = async () => {
  return await axios.get(`http://localhost:9001/joy/get/questions`);
};
export const getAllAnswers = async () => {
  return await axios.get(`http://localhost:9001/joy/get/all/answers`);
};

export const saveSurvey = async (token, answers) => {
  return await axios.post(`http://localhost:9001/joy/save/survey`, answers, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const saveQuestion = async (token, question) => {
  return await axios.post(`http://localhost:9001/joy/save/question`, question, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
