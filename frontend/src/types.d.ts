export interface IState {
  event_name: string;
  user_name: string;
  email: string;
  desc: string;
  dates: string[];
  time_start: Date;
  time_end: Date;
}

export interface Availability {
  date: string;
  startHour: number;
  endHour: number;
}

export interface Member {
  name: string;
  email: string;
  availabilities: Availability[];
}

export interface Event {
  eventName: string;
  description?: string;
  members: Member[];
  dates: number[];
  startHour: number;
  endHour: number;
}
