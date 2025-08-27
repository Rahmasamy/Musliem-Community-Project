import axiosInstance from "@/utils/axiosInstance";
import { Group } from "../types/group";

export const fetchGroupsByUser = async (userId: string): Promise<Group[]> => {
  const { data } = await axiosInstance.get(`/messages/user/${userId}`);
  return data;
};

export const joinGroup = async (groupId: string): Promise<Group> => {
  const { data } = await axiosInstance.post(`/groups/${groupId}/join`);
  return data;
};
export const leaveGroup = async (groupId: string): Promise<Group> => {
  const { data } = await axiosInstance.post(`/groups/${groupId}/leave`);
  return data;
};