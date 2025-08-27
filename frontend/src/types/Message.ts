import { User } from "./authTypes";

export interface Message {
  _id: string;
  group: string;
  sender: User;
  text: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}
