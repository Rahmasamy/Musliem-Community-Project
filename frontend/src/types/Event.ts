import { User } from "./authTypes";

export interface Event {
  _id: string;
  name: string;
  description: string;
  image?: string;
  startTime: string;
  endTime: string;
  attendance: "In-Person" | "Virtual" | "In-Person&Virtual";
  eventType: "Networking" | "Workshop" | "Course" | 'Fundraiser' | 'other';
  Location: string;
  members: User[];
  createdAt: string;
}