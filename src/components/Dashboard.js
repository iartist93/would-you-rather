import QuestionList from "./QuestionList";

const Dashboard = ({
  unansweredQuestions,
  answeredQuestions,
  questions,
  users,
}) => {
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
