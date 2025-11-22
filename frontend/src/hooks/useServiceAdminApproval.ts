import { useMutation, useQueryClient, UseMutationResult } from "@tanstack/react-query";
import Services from "@/services/serviceService";
import toast from 'react-hot-toast';

interface AdminApprovalVars {
  id: string;
  approvalPayload: any;
}

export const useServiceAdminApprovalMutation = (): UseMutationResult<any, any, AdminApprovalVars> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, approvalPayload }: AdminApprovalVars) =>
      Services.updateServiceAdminApproval(id, approvalPayload),
    onSuccess: (_, variables) => {
      toast.success(
        variables.approvalPayload.adminApprovalStatus === "approved"
          ? "Advertisment approved successfully!"
          : "sorry,Advertisment rejected please contact with the owner");
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ||
        error?.message ||
        "Failed to update service status."
      );
    },
  });
};
