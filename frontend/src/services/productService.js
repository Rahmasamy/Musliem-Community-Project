import axiosInstance from "@/api/authApi";
// Create Product
export const createProduct = async (productData) => {
    let payload;
    let headers = {};
    if (productData instanceof FormData) {
        // For FormData, send it directly with multipart/form-data headers
        payload = productData;
        headers = { "Content-Type": "multipart/form-data" };
        // Log the FormData for debugging
        console.log('Sending FormData directly');
        for (let [key, value] of productData.entries()) {
            console.log(key, value);
        }
    }
    else {
        // For regular Product objects, send as JSON
        payload = productData;
        headers = { "Content-Type": "application/json" };
    }
    try {
        const res = await axiosInstance.post("/products", payload, { headers });
        console.log('Product created successfully:', res.data);
        return res.data;
    }
    catch (error) {
        console.error('Error in createProduct service:', error);
        throw error;
    }
};
// Update Product
export const updateProduct = async (id, productData) => {
    const res = await axiosInstance.put(`/products/${id}`, productData);
    return res.data;
};
// Delete Product
export const deleteProduct = async (id) => {
    const res = await axiosInstance.delete(`/products/${id}`);
    return res.data;
};
// Get Product by ID
export const getProductById = async (id) => {
    try {
        const res = await axiosInstance.get(`/products/${id}`);
        return res.data;
    }
    catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        throw error;
    }
};
export const getPendingProducts = async (page) => {
    try {
        const { data } = await axiosInstance.get(`/products/pending?page=${page}`);
        return data;
    }
    catch (error) {
        console.error(`Error fetching products with page ${page}:`, error);
        throw error;
    }
};
export const updateProductAdminApproval = async (id, approvalPayload) => {
    try {
        const { data } = await axiosInstance.put(`/products/update-admin-status/${id}`, approvalPayload);
        return data;
    }
    catch (error) {
        console.error(`Error updating product admin approval for id ${id}:`, error);
        throw error;
    }
};
