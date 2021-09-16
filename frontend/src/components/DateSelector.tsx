import { useEffect, useState } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

interface IProps {
  handleChange: (e: string[]) => void
}

function DateSelector(props: IProps) {
  const [dates, setDates] = useState<string | string[] | null>([new DateObject().format()]);

  /* useState is asynchronous, useEffect will notify instantly of changes */

  // useEffect(() => {
  //   if (dates !== null) {
  //     if (Array.isArray(dates)) {
  //       props.handleChange(dates);
  //     } else {
  //       props.handleChange([dates]);
  //     }
  //   }
  //   // eslint-disable-next-line
  // }, [dates]);

  const handleChange = (dates: DateObject | DateObject[] | null) => {
    if (dates !== null) {
      if (Array.isArray(dates)) {
        let result: string[] = [];
        dates.map((date) => {
          result.push(date.format());
        })
        setDates(result);
        props.handleChange(result);
      } else {
        setDates([dates.format()]);
        props.handleChange([dates.format()]);
      }
    }
  }

  return (
    <div>
      <Calendar
        value={dates}
        onChange={dates => handleChange(dates)}
        plugins={[
          <DatePanel />
        ]}
      />
    </div>
  );
}

export default DateSelector;