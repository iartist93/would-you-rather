import { connect } from "react-redux";
import QuestionList from "./QuestionList";

const Latest = ({ questions, authedUser, users }) => {
  // questions ids list
  const answered = Object.keys(users[authedUser].answers);
  const unanswered = Object.keys(questions)
    .filter((question) => !answered.includes(question))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return <QuestionList qids={unanswered} />;
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  users: state.users,
  authedUser: state.authedUser?.id,
});

export default connect(mapStateToProps)(Latest);
