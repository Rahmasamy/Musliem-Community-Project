import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Plus } from 'lucide-react';
import OrangeButton from '@/components/common/OrangeButton/OrangeButton';
import EditBtn from '@/components/common/EditButton/EditBtn';
import DeleteBtn from '@/components/common/DeleteBtn/DeleteBtn';
import { useProfileStore } from '@/store/useProfileStore';
import { Link } from 'react-router-dom';
import toast from "react-hot-toast";
export default function ProfileListing() {
    const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";
    const [editableProductId, setEditableProductId] = useState(null);
    const [formData, setFormData] = useState({});
    const inputRef = useRef(null);
    const { profile, products, getUserProducts, deleteProduct, updateProduct } = useProfileStore();
    useEffect(() => {
        getUserProducts();
    }, [getUserProducts]);
    useEffect(() => {
        if (editableProductId && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editableProductId]);
    function handleDeleteProduct(id) {
        deleteProduct(id);
    }
    function handleEditProducts(product) {
        setEditableProductId(product._id);
        setFormData(product);
    }
    async function handleBlur(field, value) {
        if (!editableProductId)
            return;
        try {
            await updateProduct(editableProductId, { [field]: value });
            toast.success("Product updated successfully 🎉");
        }
        catch (err) {
            toast.error("Update failed!");
        }
    }
    return (_jsxs("div", { className: "w-full mx-auto p-6", children: [_jsx("h2", { className: "text-gray-400 text-sm mb-4 font-bold", children: "Your Listing" }), _jsx("div", { className: "flex justify-between items-center p-3", children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("img", { src: `${profile?.photo}`, alt: " profile image", className: 'rounded-full w-24 h-20 object-cover' }), _jsx("h2", { className: 'font-bold ml-4 text-2xl', children: profile?.fullName ?? "Un Known User" })] }) }), _jsx("div", { className: "flex justify-between items-center ", children: _jsx("div", { className: "flex items-center p-2", children: _jsx(Link, { to: "/halal-business-dirctory/sell-products", children: _jsx(OrangeButton, { title: "Make New Shopping", icon: _jsx(Plus, {}) }) }) }) }), products.map((product) => (_jsxs("div", { className: "mb-6", children: [_jsxs("div", { className: "crudBtns flex items-center gap-5 justify-end m-4", children: [_jsx(EditBtn, { onClick: () => handleEditProducts(product) }), _jsx(DeleteBtn, { onClick: () => handleDeleteProduct(product._id) })] }), _jsxs("div", { className: "flex flex-col lg:flex-row shadow-sm", children: [_jsx("div", { className: "w-full lg:w-1/2", children: _jsx("img", { src: product.image, alt: "Labtop image", className: 'w-[400px] h-[250px] object-cover' }) }), _jsxs("div", { className: "w-full lg:w-1/2 w-1/2 p-4 space-y-3", children: [editableProductId === product._id ? (_jsx("input", { ref: inputRef, type: "text", value: formData.name || "", onChange: (e) => setFormData({ ...formData, name: e.target.value }), onBlur: (e) => handleBlur("name", e.target.value), className: 'w-full p-2 border rounded' })) : (_jsx("h1", { className: "font-bold text-xl", children: product.name })), editableProductId === product._id ? (_jsx("textarea", { value: formData.description || "", onChange: (e) => setFormData({ ...formData, description: e.target.value }), onBlur: (e) => handleBlur("description", e.target.value), className: 'w-full p-2 border rounded' })) : (_jsx("p", { className: 'text-gray-500', children: product.description })), editableProductId === product._id ? (_jsx("input", { type: "number", value: formData.price || 0, onChange: (e) => setFormData({ ...formData, price: Number(e.target.value) }), onBlur: (e) => handleBlur("price", Number(e.target.value)), className: 'w-full p-2 border rounded' })) : (_jsxs("p", { className: 'text-gray-500', children: ["Price: $", product.price] })), editableProductId === product._id ? (_jsx("input", { type: "text", value: formData.contactNumber || "", onChange: (e) => setFormData({ ...formData, contactNumber: e.target.value }), onBlur: (e) => handleBlur("contactNumber", e.target.value), className: 'w-full p-2 border rounded' })) : (_jsxs("p", { className: "font-bold", children: ["Call: ", product.contactNumber] }))] })] })] }, product._id))), products.length === 0 && (_jsx("div", { className: "flex justify-center w-full items-center", children: _jsx("h1", { className: 'font-bold text-3xl', children: "No Products in your store" }) }))] }));
}
