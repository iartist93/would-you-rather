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

  const voters = Object.values(questions).map((question) => question.voters);

  const johndoeVotes = Object.values(questions).filter(
    (question) =>
      question.voters.filter((voter) => voter.user === "johndoe").length > 0
  );

  // console.log(voters);

  return (
    <div>
      <QuestionList
        ids={unansweredQuestions}
        questions={questions}
        users={users}
      />
      <QuestionList
        ids={answeredQuestions}
        questions={questions}
        users={users}
      />
    </div>
  );
};

export default Dashboard;
