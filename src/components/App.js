import "../App.css";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import * as fakeData from "../services/_DATA";

function App() {
  const [activeNavItem, setActiveNavItem] = useState("Latest");
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
  // console.log("App component re-rendered");

  console.log(users);

  return (
    <Router>
      <div className="App">
        <Navbar active={activeNavItem} onActiveChange={setActiveNavItem} />
        <Route exact path="/">
          <Dashboard
            unansweredQuestions={unansweredQuestions}
            answeredQuestions={answeredQuestions}
            questions={questions}
            users={users}
          />
        </Route>
        <Route exact path="/new">
          <NewQuestion />
        </Route>
        <Route exact path="/leaderboard">
          <Leaderboard questions={questions} users={users} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
