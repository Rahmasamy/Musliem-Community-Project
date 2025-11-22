import { useMutation, useQueryClient } from "@tanstack/react-query";
import Services from "@/services/serviceService";
import toast from 'react-hot-toast';
export const useServiceAdminApprovalMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, approvalPayload }) => Services.updateServiceAdminApproval(id, approvalPayload),
        onSuccess: (_, variables) => {
            toast.success(variables.approvalPayload.adminApprovalStatus === "approved"
                ? "Advertisment approved successfully!"
                : "sorry,Advertisment rejected please contact with the owner");
            queryClient.invalidateQueries({ queryKey: ["services"] });
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message ||
                error?.message ||
                "Failed to update service status.");
        },
    });
};
