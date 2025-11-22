export interface User {
  _id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  profilePhoto: string | null;
  photo: string | null;
  skills: string[];
  otherSkill: string | null;
  bio: string;
  role: string;
  businessPhoto: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  resetPasswordExpire?: string;
  resetPasswordToken?: string;
}

export interface Member {
  user: User | null;
  role: "admin" | "member";
}
export interface GroupContextType {
  groups: Group[];
  page: number;
  totalPages: number;
  loading: boolean;
  search : string;
  setSearch : (searchTerm : string) => void;
  loadGroups: (pageNum: number,search : string) => void;
}

export interface Group {
  _id: string;
  name: string;
  description: string;
  image: string;
  joinOption: "all" | "premium";
  createdBy: string; // ObjectId as string
  members: Member[];
  createdAt: string;
  updatedAt: string;
}
