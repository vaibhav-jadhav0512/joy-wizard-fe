import React, { useEffect, useState } from "react";
import AdminNav from "../../components/nav/AdminNav";
import { PieChart } from "react-minimal-pie-chart";
import { Card, Space, Col } from "antd";
import { getAllAnswers } from "../../functions/joywizardapi";

const AdminDashboard = () => {
  const [answers, setanswers] = useState([]);

  const loadAnswers = async () => {
    await getAllAnswers().then((c) => setanswers(c.data));
  };
  useEffect(() => {
    loadAnswers();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-9">
          {answers.map((a) => {
            if (a.ans > 0)
              return (
                <Space direction="vertical" size={10}>
                  <Card key={a.qid} title={a.question} style={{ width: 300 }}>
                    <PieChart
                      viewBoxSize={[150, 150]}
                      totalValue={5}
                      data={[
                        {
                          title: "Satisfied",
                          value: 5 - a.ans,
                          color: "#FF7E74",
                        },
                        {
                          title: "Unsatisfied",
                          value: a.ans,
                          color: "#B6FF67",
                        },
                      ]}
                    />
                  </Card>
                </Space>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
