import "../App.css";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Latest from "./latest/Latest";
import Navbar from "./navbar/Navbar";
import NewQuestion from "./newQuestion/NewQuestion";
import Leaderboard from "./leaderboard/Leaderboard";
import AnsweredList from "./answered/AnsweredList";

import { recieveQuestions } from "../actions/questions";
import { recieveUsers } from "../actions/users";
import { toggleLoading } from "../actions/loading";
import * as fakeData from "../services/_DATA";

function App({ dispatch, loading }) {
  const [activeNavItem, setActiveNavItem] = useState("Latest");

  const fetchInitalData = async () => {
    const [questions, users] = await Promise.all([
      fakeData._getQuestions(),
      fakeData._getUsers(),
    ]);
    dispatch(recieveQuestions(questions));
    dispatch(recieveUsers(users));
    dispatch(toggleLoading());
  };

  useEffect(() => {
    fetchInitalData();
  }, []);

  return (
    <Router>
      <div className="App">
        {loading === true ? (
          <div> Is Loading </div>
        ) : (
          <>
            <Navbar active={activeNavItem} onActiveChange={setActiveNavItem} />
            <Route exact path="/">
              <Latest />
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
          </>
        )}
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(App);
