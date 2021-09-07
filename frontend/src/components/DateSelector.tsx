import React, { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

function DateSelector() {
    const [date, changeDate] = useState<Date | null>(new Date());
    
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
          autoOk
          variant="static"
          openTo="date"
          value={date}
          onChange={(date) => changeDate(date)}
        />
      </MuiPickersUtilsProvider>

    );
}

export default DateSelector;