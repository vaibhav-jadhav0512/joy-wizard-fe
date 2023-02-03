import React, { useState } from "react";
import AdminNav from "../../components/nav/AdminNav";
import { saveQuestion } from "../../functions/joywizardapi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddQuestion = () => {
  const navigate = useNavigate();
  const inputOptions = ["rate", "dropdown", "radio"];
  const [question, setquestion] = useState("");
  const [input, setinput] = useState("");
  const { user } = useSelector((state) => ({ ...state }));
  const handleSubmit = (e) => {
    e.preventDefault();
    saveQuestion(user.token, { question, input })
      .then((res) => {
        toast.success(`Question recorded successfully`);
        navigate("/questions");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-3">
              <label htmlFor="question">Question</label>
              <input
                type="text"
                className="form-control col-md-4 mt-2"
                id="question"
                aria-describedby="question"
                placeholder="Enter question"
                onChange={(e) => setquestion(e.target.value)}
                value={question}
              />
            </div>
            <div className="col-md-5 mt-3">
              <select
                name="input"
                className="form-select my-2"
                id="motivated"
                onChange={(e) => setinput(e.target.value)}
              >
                <option>Please Select</option>
                {inputOptions.map((o) => (
                  <option key={o} name={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
