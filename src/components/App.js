import "../App.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";
import styled from "@emotion/styled";

import Latest from "./latest/Latest";
import Navbar from "./navbar/Navbar";
import Login from "./login/Login";
import NewQuestion from "./newQuestion/NewQuestion";
import Leaderboard from "./leaderboard/Leaderboard";
import AnsweredList from "./answered/AnsweredList";
import { handleInitalData } from "../actions/shared";
import { handleUserLogin } from "../actions/shared";
import LogoImage from "../logo2.png";

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin: 1rem 0;
`;

function App({ dispatch, loading, authedUserId, active }) {
  useEffect(() => {
    dispatch(handleInitalData());
    dispatch(handleUserLogin());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <LoadingBar style={{ backgroundColor: "blue", height: "5px" }} />
        {authedUserId ? (
          loading === true ? (
            <>
              <h3> Loading </h3>
              <Logo src={LogoImage} />
            </>
          ) : (
            <>
              <Navbar active={active} />
              <Route exact path="/">
                <Latest />
              </Route>
              <Route exact path="/answered">
                <AnsweredList />
              </Route>
              <Route exact path="/add">
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
  authedUserId: state.authedUser?.id,
  active: state.active,
});

export default connect(mapStateToProps)(App);
