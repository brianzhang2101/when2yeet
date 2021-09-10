import React, { useState } from 'react';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

interface details {
    name: string,
    title: string,
    default: string,
    handleChange: (e: Date | null, name: string) => void
}

function TimeSelector(props: details) {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(props.default));

    const handleChange = (e: Date | null, name: string) => {
        setSelectedDate(e);
        props.handleChange(e, name);
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label={props.title}
                value={selectedDate}
                name={props.name}
                onChange={(date) => handleChange(date, props.name)}
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
            />
        </MuiPickersUtilsProvider>
    );
}


export default TimeSelector;