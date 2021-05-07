import { connect } from "react-redux";
import { Centered } from "../CustomStyles";
import QuestionList from "./QuestionList";

const Latest = ({ questions, users }) => {
  // questions ids list
  const qids = Object.keys(questions).filter(
    (id) =>
      questions[id].answered === undefined || questions[id].answered === false
  );

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

  return <QuestionList qids={qids} />;
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  users: state.users,
});

export default connect(mapStateToProps)(Latest);
