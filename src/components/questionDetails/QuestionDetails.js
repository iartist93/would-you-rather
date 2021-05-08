import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Header from "../question/Header";
import AnsweredFooter from "../answered/Footer";

import AnsweredContent from "../answered/Content";
import UnAnsweredContent from "../latest/Content";

import { Container, RoundedContainer } from "../CustomStyles";

const QuestionDetails = ({ questions, users, authedUserId }) => {
  const { id } = useParams();
  const question = questions[id];
  const voters = question.optionOne.votes.concat(question.optionTwo.votes);
  const votersAvatars = voters.map((voter) => users[voter].avatarURL);

  console.log(votersAvatars);

  const isAnswerd = users[authedUserId].answers[question.id] !== undefined;

  return (
    <Container centered aligncenter column top="2rem">
      {isAnswerd ? <h3>You answered this</h3> : <h3>Answer this question</h3>}

      <RoundedContainer>
        <Header
          avatarURL={users[question.author].avatarURL}
          author={users[question.author].name}
          timestamp={question.timestamp}
        />
        {isAnswerd ? (
          <>
            <AnsweredContent question={question} />
            <AnsweredFooter votersAvatars={votersAvatars} />
          </>
        ) : (
          <>
            <UnAnsweredContent
              question={question}
              votersAvatars={votersAvatars}
            />
          </>
        )}
      </RoundedContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  users: state.users,
  authedUserId: state.authedUser.id,
});

export default connect(mapStateToProps)(QuestionDetails);
