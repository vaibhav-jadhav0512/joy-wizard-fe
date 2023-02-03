import React, { useEffect, useState } from "react";
import AdminNav from "../../components/nav/AdminNav";
import { getAllQuestions } from "../../functions/joywizardapi";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const navigate = useNavigate();
  const [questions, setquestions] = useState([]);
  const loadQuestions = async () => {
    await getAllQuestions().then((c) => setquestions(c.data));
  };
  useEffect(() => {
    loadQuestions();
  }, []);
  console.log(questions);
  const handleAdd = () => {
    navigate("/add/question");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-4">
          {questions.map((q) => (
            <Card
              style={{
                width: 300,
              }}
            >
              Q.{q.question}
              <br />
              Input: {q.input}
            </Card>
          ))}
        </div>
        <div className="col mt-3">
          <button className="btn btn-primary" onClick={handleAdd}>
            Add question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
