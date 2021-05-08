import { connect } from "react-redux";
import QuestionList from "./QuestionList";

const Latest = ({ questions, users }) => {
  //TODO: replace this with state
  const authedUser = "johndoe";

  // questions ids list
  const answered = Object.keys(users[authedUser].answers);
  const unanswered = Object.keys(questions)
    .filter((question) => !answered.includes(question))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  console.log(unanswered);

  return <QuestionList qids={unanswered} />;
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  users: state.users,
});

export default connect(mapStateToProps)(Latest);
