import React, { useEffect, useState } from "react";
import QuestionList from "./QuestionList";
import * as fakeData from "../services/_DATA";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [questions, setQuestions] = useState([]);

  const fetchInitalData = async () => {
    const [users, questions] = await Promise.all([
      fakeData._getUsers(),
      fakeData._getQuestions(),
    ]);
    setUsers(users);
    setQuestions(questions);
  };

  useEffect(() => {
    fetchInitalData();
  }, []);

  const unansweredQuestions = Object.keys(questions).filter(
    (id) =>
      questions[id].answered === undefined || questions[id].answered === false
  );

  const answeredQuestions = Object.keys(questions).filter(
    (id) =>
      questions[id].answered !== undefined && questions[id].answered === true
  );

  console.log(questions);

  return (
    <div>
      <QuestionList ids={unansweredQuestions} questions={questions} />
      <QuestionList ids={answeredQuestions} questions={questions} />
    </div>
  );
};

export default Dashboard;
