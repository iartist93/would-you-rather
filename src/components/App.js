import "../App.css";
import Dashboard from "./Dashboard";
import Navbar, { navItems } from "./Navbar";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [activeNavItem, setActiveNavItem] = useState("Latest");
  return (
    <Router>
      <div className="App">
        <Navbar active={activeNavItem} onActiveChange={setActiveNavItem} />
        <Route exact path="/">
          <Dashboard />
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

export default App;
