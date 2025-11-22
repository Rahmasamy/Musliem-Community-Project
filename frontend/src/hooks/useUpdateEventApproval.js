import { useMutation, useQueryClient } from "@tanstack/react-query";
import EventService from "@/services/eventService";
import toast from 'react-hot-toast';
export const useUpdateEventApproval = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, approvalPayload }) => EventService.updateEventAdminApproval(id, approvalPayload),
        onSuccess: (_, variables) => {
            toast.success(variables.approvalPayload.adminApprovalStatus === "approved"
                ? "Event approved successfully!"
                : "Event rejected successfully!");
            queryClient.invalidateQueries({ queryKey: ["pendingEvents"] });
            queryClient.invalidateQueries({ queryKey: ["events"] });
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message ||
                error?.message ||
                "Failed to update event status.");
        },
    });
};
