import { useEffect, useState } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

interface IProps {
  handleChange: (e: DateObject[]) => void
}

function DateSelector(props: IProps) {
  const [dates, setDates] = useState<DateObject | DateObject[] | null>([new DateObject()]);

  /* useState is asynchronous, useEffect will notify instantly of changes */

  useEffect(() => {
    if (dates !== null) {
      if (Array.isArray(dates)) {
        props.handleChange(dates);
      } else {
        props.handleChange([dates]);
      }
    }
    // eslint-disable-next-line
  }, [dates]);

  return (
    <div>
      <Calendar
        value={dates}
        onChange={setDates}
        plugins={[
          <DatePanel />
        ]}
      />
    </div>
  );
}

export default DateSelector;