import "../App.css";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import AnsweredList from "./AnsweredList";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import * as fakeData from "../services/_DATA";
import { connect } from "react-redux";
import { recieveQuestions } from "../actions/questions";
import { recieveUsers } from "../actions/users";

function App({ dispatch }) {
  const [activeNavItem, setActiveNavItem] = useState("Latest");

  const fetchInitalData = async () => {
    const [users, questions] = await Promise.all([
      fakeData._getUsers(),
      fakeData._getQuestions(),
    ]);
    dispatch(recieveUsers(users));
    dispatch(recieveQuestions(questions));
    console.log(users);
  };

  useEffect(() => {
    fetchInitalData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar active={activeNavItem} onActiveChange={setActiveNavItem} />
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/answered">
          <AnsweredList />
        </Route>
        <Route exact path="/new">
          <NewQuestion />
        </Route>
        <Route exact path="/leaderboard">
          <Leaderboard />
        </Route>
      </div>
    </Router>
  );
}

export default connect()(App);
