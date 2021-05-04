import React from "react";
import QuestionList from "./QuestionList";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <QuestionList />
        <QuestionList />
      </div>
    );
  }
}

export default Dashboard;
