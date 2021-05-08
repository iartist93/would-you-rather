import "../App.css";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Latest from "./latest/Latest";
import Navbar from "./navbar/Navbar";
import NewQuestion from "./newQuestion/NewQuestion";
import Leaderboard from "./leaderboard/Leaderboard";
import AnsweredList from "./answered/AnsweredList";
import Login from "./login/Login";
import { handleInitalData } from "../actions/shared";

import { firebase } from "../firebase/firebase";

function App({ dispatch, loading }) {
  const [activeNavItem, setActiveNavItem] = useState("Latest");

  useEffect(() => {
    dispatch(handleInitalData());
  }, [dispatch]);

  const currentUser = firebase.auth().currentUser;
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authedUser) => {
      if (authedUser) {
        console.log(`Hello ${authedUser.displayName} welcone`);
        setUser(authedUser);
      } else {
        console.log(`Hello "undefined" `);
        setUser(null);
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        {user ? (
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
});

export default connect(mapStateToProps)(App);
