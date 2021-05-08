import { useEffect } from "react";
import { connect } from "react-redux";
import { recieveActive } from "../../actions/active";
import QuestionList from "./QuestionList";
import { navItems } from "../navbar/Navbar";

const Latest = ({ questions, authedUserId, users, dispatch }) => {
  useEffect(() => {
    dispatch(recieveActive(navItems.Latest.name));
  }, [dispatch]);

  // questions ids list
  const answered = Object.keys(users[authedUserId].answers);
  const unanswered = Object.keys(questions)
    .filter((question) => !answered.includes(question))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return <QuestionList qids={unanswered} />;
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  users: state.users,
  authedUserId: state.authedUser?.id,
});

export default connect(mapStateToProps)(Latest);
