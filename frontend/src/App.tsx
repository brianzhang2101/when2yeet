import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Share from './pages/Share';
import { DateObject } from 'react-multi-date-picker';

export interface IState {
  details: {
    event_name: string,
    user_name: string,
    email: string,
    desc: string,
    dates: DateObject[],
    time_start: Date,
    time_end: Date
  }
}

function App() {

  const [details, setDetails] = useState<IState["details"]>({
    event_name: "",
    user_name: "",
    email: "",
    desc: "",
    dates: [new DateObject()],
    time_start: new Date('2021-09-07T09:00:00'),
    time_end: new Date('2021-09-07T17:00:00')
  });

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home setDetails={setDetails} />
            </Route>
            <Route exact path="/share">
              <Share details={details} />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
