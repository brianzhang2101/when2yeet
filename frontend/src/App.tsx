import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Share from './pages/Share';
import { DateObject } from 'react-multi-date-picker';
import axios from "axios";

export interface IState {
  details: {
    event_name: string,
    user_name: string,
    email: string,
    desc: string,
    dates: string[],
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
    dates: [new DateObject().format()],
    time_start: new Date('2021-09-07T09:00:00'),
    time_end: new Date('2021-09-07T17:00:00')
  });

  const postData = (details: IState["details"]) => {
    setDetails(details);
    axios.post('http://localhost:3001/api/events/create', 
    {
      eventName: details.event_name,
      description: details.desc,
      dates: details.dates,
      startHour: details.time_start.getTime(),
      endHour: details.time_end.getTime(),
      admin: {
        name: details.user_name,
        email: details.email,
        availabilities: []
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home postData={postData} />
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
