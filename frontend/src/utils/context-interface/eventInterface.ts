export interface Event {
  _id: string;
  name: string;
  description: string;
  image: string;
  startTime: string;
  endTime: string;
  attendance: string;
  invitationLink: string;
  eventType: string;
}

export interface EventContextType {
  events: Event[];
}