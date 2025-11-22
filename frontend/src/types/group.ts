import { Message } from "./Message";


export interface GroupMember {
  user: string;
  role: "admin" | "member";
}

export interface Group {
  _id: string;
  name: string;
  description: string;
  image: string;
  joinOption: "all" | "invite_only" | "premium";
  createdBy: string;
  members: GroupMember[];
  createdAt: string;
  updatedAt: string;
  lastMessage?: Message;
}
export interface GroupsResponse {
  groups: Group[];
  page: number;
  totalPages: number;
}