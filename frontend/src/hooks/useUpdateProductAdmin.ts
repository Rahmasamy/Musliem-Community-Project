import { useMutation, useQueryClient, UseMutationResult } from "@tanstack/react-query";
import { updateProductAdminApproval } from "@/services/productService";
import toast from 'react-hot-toast';

interface ProductApprovalVars {
  id: string;
  approvalPayload: any;
}

export const useUpdateProductAdmin = (): UseMutationResult<any, any, ProductApprovalVars> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, approvalPayload }: ProductApprovalVars) =>
      updateProductAdminApproval(id, approvalPayload),
    onSuccess: (_, variables) => {
      toast.success(
        variables.approvalPayload.adminApprovalStatus === "approved"
          ? "Product approved successfully!"
          : "Product rejected successfully!");
      queryClient.invalidateQueries({ queryKey: ["pendingProducts"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ||
        error?.message ||
        "Failed to update product status."
      );
    },
  });
};
