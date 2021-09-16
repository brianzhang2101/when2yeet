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
  id: string;
  eventName: string;
  description?: string;
  members: Member[];
  dates: number[];
  startHour: number;
  endHour: number;
}
