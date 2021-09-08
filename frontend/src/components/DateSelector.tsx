import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

function DateSelector() {
  const [values, setValues] = useState<DateObject | DateObject[] | null>([new DateObject()]);

  return (
    <DatePicker
      multiple
      minDate={new Date()}
      value={values}
      onChange={setValues}
      sort
      plugins={[
        <DatePanel />
      ]}
    />
  );
}

export default DateSelector;