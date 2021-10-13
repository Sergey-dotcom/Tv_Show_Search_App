import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Navbar from "./conponents/Navbar";

//Pages
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import Singlepage from "./pages/Singlepage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
         <Route exact path="/" component={HomePage}/>
         <Route exact path="/about" component={AboutPage}/>
         <Route path="/singleshow/:id" component={Singlepage}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
