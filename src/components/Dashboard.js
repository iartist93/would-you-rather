import { connect } from "react-redux";
import QuestionList from "./QuestionList";

const Dashboard = ({ questions, users }) => {
  const unansweredQuestions = Object.keys(questions).filter(
    (id) =>
      questions[id].answered === undefined || questions[id].answered === false
  );

  console.log(users);

  /*

  const answeredQuestions = Object.keys(questions).filter(
    (id) =>
      questions[id].answered !== undefined && questions[id].answered === true
  );

  const voters = Object.values(questions).map((question) => question.voters);

  const johndoeVotes = Object.values(questions).filter(
    (question) =>
      question.voters.filter((voter) => voter.user === "johndoe").length > 0
  );

  */

  return (
    <div>
      <QuestionList
        ids={unansweredQuestions}
        questions={questions}
        users={users}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  users: state.users,
});

export default connect(mapStateToProps)(Dashboard);
