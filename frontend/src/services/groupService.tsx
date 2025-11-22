import { Group, GroupsResponse } from "../types/group";
import axiosInstance from "@/api/authApi";
export const fetchGroupsByUser = async (userId: string): Promise<Group[]> => {
  const { data } = await axiosInstance.get(`/messages/user/${userId}`);
  return data;
};
interface leaveGroupResponse {
   message:string;
}
export const fetchUserGroups = async (
  page: number = 1,
  filters: Record<string, any> = {}
): Promise<GroupsResponse> => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: "3",
    ...filters, // زي title, category, membersCount ...
  });

  const { data } = await axiosInstance.get(`/groups/my-groups?${params.toString()}`);
  return data;
};

export const joinGroup = async (groupId: string): Promise<Group> => {
  const { data } = await axiosInstance.post(`/groups/${groupId}/join`);

  return data;
};
export const leaveGroup = async (groupId: string): Promise<leaveGroupResponse> => {
  const { data } = await axiosInstance.post(`/groups/${groupId}/leave`);
  return data;
};
