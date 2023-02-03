import { Button, Steps } from "antd";
import { useEffect, useState } from "react";
import UserNav from "../../components/nav/UserNav";
import Rating from "@mui/material/Rating";
import { getAllQuestions, saveSurvey } from "../../functions/joywizardapi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const motiveOptions = ["Always", "Often", "Sometimes", "Rarely", "Never"];
const SurveyForm = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [values, setvalues] = useState([]);
  useEffect(() => {
    getAllQuestions().then((c) => setvalues(c.data));
  }, []);

  const handleChange = (e, v) => {
    const index = values.findIndex((v) => v.qid === e.target.name);
    let items = [...values];
    let obj = items[index];
    obj.ans = v.toString();
    items[index] = obj;
    setvalues(items);
  };
  const { user } = useSelector((state) => ({ ...state }));
  const handleDrop = (e) => {
    const index = values.findIndex((v) => v.qid === e.target.name);
    let items = [...values];
    let obj = items[index];
    obj.ans = e.target.value;
    items[index] = obj;
    setvalues(items);
    console.log(values);
  };
  const form1 = () => {
    return (
      <div>
        {Object.values(values.slice(0, 5)).map((q) => (
          <div key={q.qid}>
            <div className="my-3">
              <h5>{q.question}</h5>
              {q.input === "dropdown" && (
                <div className="col-md-3">
                  <select
                    name={q.qid}
                    className="form-select my-2"
                    id="motivated"
                    onChange={handleDrop}
                  >
                    <option>Please Select</option>
                    {motiveOptions.map((o) => (
                      <option key={o} name={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {q.input === "rate" && (
                <span>
                  <Rating onChange={handleChange} name={q.qid} value={q.ans} />
                </span>
              )}
              {q.input === "radio" && (
                <>
                  <label className="mx-2">Yes</label>
                  <input
                    type="radio"
                    id={q.qid}
                    name={q.qid}
                    value="Yes"
                    onChange={handleDrop}
                  />
                  <label className="mx-2">No</label>
                  <input
                    type="radio"
                    id={q.qid}
                    name={q.qid}
                    value="No"
                    onChange={handleDrop}
                  />
                </>
              )}
              {q.input === "text" && (
                <div className="my-3">
                  <textarea
                    className="form-control"
                    name={q.qid}
                    rows="3"
                    style={{ width: "80%" }}
                    onChange={handleDrop}
                    value={q.ans}
                  ></textarea>
                </div>
              )}
            </div>
            <hr />
          </div>
        ))}
      </div>
    );
  };
  const form2 = () => {
    return (
      <>
        {Object.values(values.slice(5, 10)).map((q) => (
          <div key={q.qid}>
            <div className="my-3">
              <h5>{q.question}</h5>
              {q.input === "dropdown" && (
                <div className="col-md-3">
                  <select
                    name={q.qid}
                    className="form-select my-2"
                    id="motivated"
                    onChange={handleDrop}
                  >
                    <option>Please Select</option>
                    {motiveOptions.map((o) => (
                      <option key={o} name={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {q.input === "rate" && (
                <span>
                  <Rating onChange={handleChange} name={q.qid} value={q.ans} />
                </span>
              )}
              {q.input === "radio" && (
                <>
                  <label className="mx-2">Yes</label>
                  <input
                    type="radio"
                    id={q.qid}
                    name={q.qid}
                    value="Yes"
                    onChange={handleDrop}
                  />
                  <label className="mx-2">No</label>
                  <input
                    type="radio"
                    id={q.qid}
                    name={q.qid}
                    value="No"
                    onChange={handleDrop}
                  />
                </>
              )}
              {q.input === "text" && (
                <div className="my-3">
                  <textarea
                    className="form-control"
                    name={q.qid}
                    rows="3"
                    style={{ width: "80%" }}
                    onChange={handleDrop}
                    value={q.ans}
                  ></textarea>
                </div>
              )}
            </div>
            <hr />
          </div>
        ))}
      </>
    );
  };
  const form3 = (handleChange) => {
    return (
      <>
        {Object.values(values.slice(10, 15)).map((q) => (
          <div key={q.qid}>
            <div className="my-3">
              <h5>{q.question}</h5>
              {q.input === "dropdown" && (
                <div className="col-md-3">
                  <select
                    name={q.qid}
                    className="form-select my-2"
                    id="motivated"
                    onChange={handleDrop}
                  >
                    <option>Please Select</option>
                    {motiveOptions.map((o) => (
                      <option key={o} name={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {q.input === "rate" && (
                <span>
                  <Rating onChange={handleChange} name={q.qid} value={q.ans} />
                </span>
              )}
              {q.input === "radio" && (
                <>
                  <label className="mx-2">Yes</label>
                  <input
                    type="radio"
                    id={q.qid}
                    name={q.qid}
                    value="Yes"
                    onChange={handleDrop}
                  />
                  <label className="mx-2">No</label>
                  <input
                    type="radio"
                    id={q.qid}
                    name={q.qid}
                    value="No"
                    onChange={handleDrop}
                  />
                </>
              )}
              {q.input === "text" && (
                <div className="my-3">
                  <textarea
                    className="form-control"
                    name={q.qid}
                    value={q.ans}
                    rows="3"
                    style={{ width: "80%" }}
                    onChange={handleDrop}
                  ></textarea>
                </div>
              )}
            </div>
            <hr />
          </div>
        ))}
      </>
    );
  };
  const steps = [
    {
      title: "Formal",
      content: form1(handleChange),
    },
    {
      title: "Personal",
      content: form2(handleChange),
    },
    {
      title: "Submit",
      content: form3(handleChange),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    saveSurvey(user.token, values)
      .then((res) => {
        toast.success(`Survey recorded successfully`);
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <UserNav />
          </div>
          <div className="col mt-4">
            <form id="surveyform" onSubmit={handleSubmit}>
              <Steps current={current} items={items} />
              <div className="mt-4">{steps[current].content}</div>
              <div
                style={{
                  marginTop: 24,
                }}
              >
                {current > 0 && (
                  <Button
                    style={{
                      margin: "0 8px",
                    }}
                    onClick={() => prev()}
                  >
                    Previous
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <input type="submit" className="btn btn-primary" />
                )}
                {current < steps.length - 1 && (
                  <Button
                    className="mb-5"
                    type="primary"
                    onClick={() => next()}
                  >
                    Next
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SurveyForm;
