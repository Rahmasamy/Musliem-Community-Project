import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProductAdminApproval } from "@/services/productService";
import toast from 'react-hot-toast';
export const useUpdateProductAdmin = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, approvalPayload }) => updateProductAdminApproval(id, approvalPayload),
        onSuccess: (_, variables) => {
            toast.success(variables.approvalPayload.adminApprovalStatus === "approved"
                ? "Product approved successfully!"
                : "Product rejected successfully!");
            queryClient.invalidateQueries({ queryKey: ["pendingProducts"] });
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message ||
                error?.message ||
                "Failed to update product status.");
        },
    });
};
