import "../App.css";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Latest from "./latest/Latest";
import Navbar from "./navbar/Navbar";
import Login from "./login/Login";
import NewQuestion from "./newQuestion/NewQuestion";
import Leaderboard from "./leaderboard/Leaderboard";
import AnsweredList from "./answered/AnsweredList";
import { handleInitalData } from "../actions/shared";
import { handleUserLogin } from "../actions/shared";

function App({ dispatch, loading, authedUser }) {
  const [activeNavItem, setActiveNavItem] = useState("Latest");

  useEffect(() => {
    dispatch(handleInitalData());
    dispatch(handleUserLogin());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        {authedUser ? (
          loading === true ? (
            <div> Is Loading </div>
          ) : (
            <>
              <Navbar
                active={activeNavItem}
                onActiveChange={setActiveNavItem}
              />
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
          )
        ) : (
          <Login />
        )}
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  authedUser: state.authedUser?.id,
});

export default connect(mapStateToProps)(App);
