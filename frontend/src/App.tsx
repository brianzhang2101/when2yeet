import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import TimeSelector from './components/TimeSelector';
import DateSelector from './components/DateSelector';

function App() {
  return (
    <div className="App">
      <h1>Create an Event</h1>
      <header className="App-header">
        <div className="entry-fields">
          <Input label="Event Name" helperText="What's your event called?" required={true} />
          <Input label="Your Name" helperText="Surely you've got a name!" required={true} />
          <Input label="Your Email" helperText="(Optional) We will send you an email copy of the link." required={false} />
          <Input label="Event Description" helperText="(Optional) Write something about your event." required={false}
            multiline={true} rows={1} rowsMax={Infinity} />
        </div>
        <div>
          <DateSelector/>
        </div>
        <div className="date-fields">
          <TimeSelector name="No earlier than:" default={'2021-09-07T09:00:00'}/>
          <TimeSelector name="No later than:" default={'2021-09-07T17:00:00'}/>
        </div>
      </header>
    </div>
  );
}

export default App;
