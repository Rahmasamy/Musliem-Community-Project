import { createPayment, getAllPayments, getAllUserPayments } from "@/services/SingleItemOrDonationPaypal";
import { useMutation, useQuery } from "@tanstack/react-query";
export const useAllPayments = () => {
    return useQuery({
        queryKey: ["payments"],
        queryFn: getAllPayments,
    });
};
export const useAllUserPayments = () => {
    return useQuery({
        queryKey: ["user-payments"],
        queryFn: getAllUserPayments,
    });
};
export const useCreatePayment = () => {
    return useMutation({
        mutationFn: (payload) => createPayment(payload),
    });
};
