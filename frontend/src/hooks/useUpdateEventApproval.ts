import { useMutation, useQueryClient, UseMutationResult } from "@tanstack/react-query";
import EventService from "@/services/eventService";
import toast from 'react-hot-toast';

interface EventApprovalVars {
  id: string;
  approvalPayload: any;
}

export const useUpdateEventApproval = (): UseMutationResult<any, any, EventApprovalVars> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, approvalPayload }: EventApprovalVars) =>
      EventService.updateEventAdminApproval(id, approvalPayload),
    onSuccess: (_, variables) => {
      toast.success(
        variables.approvalPayload.adminApprovalStatus === "approved"
          ? "Event approved successfully!"
          : "Event rejected successfully!");
      queryClient.invalidateQueries({ queryKey: ["pendingEvents"] });
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ||
        error?.message ||
        "Failed to update event status."
      );
    },
  });
};
