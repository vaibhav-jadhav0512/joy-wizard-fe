import React from "react";
import UserNav from "../components/nav/UserNav";
import { Alert, Space, Button } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="col">
          <div className="flex-container mt-3">
            <Space direction="vertical" style={{ width: "60%" }}>
              <Alert
                message="Welcome! Please read the instructions before taking the survey."
                description={
                  <>
                    1.Log in to the survey platform using your unique username
                    and password.
                    <br />
                    2.Read each question carefully and answer truthfully.
                    <br />
                    3.If a question asks for a rating, use the provided scale to
                    rate your answer.
                    <br />
                    4.If a question is a multiple-choice question, select the
                    answer that best represents your feelings or opinions.
                    <br />
                    5.If a question asks for a written response, please type
                    your answer in the provided text box.
                    <br />
                    6.Once you have answered all the questions, submit the
                    survey.
                  </>
                }
                type="info"
              />
              <Link to="/user/survey">
                <Button className="mt-3" type="primary">
                  Start Survey
                </Button>
              </Link>
            </Space>
            <img
              align="right"
              className="ml-auto"
              src="/joywiz.jpg"
              alt=""
              style={{ height: "187.5px", width: "375px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
