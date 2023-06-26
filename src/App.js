import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Mail from "./components/midSection/Mail";
import EmailList from "./components/midSection/EmailList";
import SendMail from "./components/midSection/SendMail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSandMessageIsOpen } from "./features/mailSlice";

function App() {
  const sendMessegeIsOpen = useSelector(selectSandMessageIsOpen);
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        {sendMessegeIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
