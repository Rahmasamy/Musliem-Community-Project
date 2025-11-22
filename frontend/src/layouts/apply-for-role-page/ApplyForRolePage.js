import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CancelBtn from "@/components/common/cancel-btn/CancelBtn";
import CommonInput from "@/components/common/CommonInput";
import { useState, useRef, useEffect } from "react";
import { FiPhone } from "react-icons/fi";
import { SlCloudUpload } from "react-icons/sl";
import Services from "@/services/serviceService";
import { toast } from "react-hot-toast";
import { useCheckUserLimit } from "@/hooks/useCheckUserLimit";
export default function ApplyForRolePage() {
    const [plan, setPlan] = useState("babysitter");
    const [isLoading, setIsLoading] = useState(false);
    const { data: checkUserData, isLoading: isCheckUserLoading, error: ischeckUserError, } = useCheckUserLimit();
    const [formData, setFormData] = useState({
        businessName: "",
        city: "",
        state: "",
        contactNumber: "",
        description: "",
        experience: "",
        hourlyRate: "",
    });
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const fileInputRef = useRef(null);
    // Map plan names to service types
    const getServiceType = (plan) => {
        switch (plan) {
            case "babysitter":
                return "babysitter";
            case "donation":
                return "donation";
            case "quran_tutor":
                return "quran_tutor";
            default:
                return "babysitter";
        }
    };
    // Get plan display name
    const getPlanDisplayName = (plan) => {
        switch (plan) {
            case "babysitter":
                return "Babysitter";
            case "donation":
                return "Donation";
            case "quran_tutor":
                return "Quran Tutor";
            default:
                return "Babysitter";
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                toast.error("Image size must be less than 5MB");
                return;
            }
            if (!file.type.startsWith("image/")) {
                toast.error("Please select a valid image file");
                return;
            }
            setSelectedImage(file);
        }
    };
    // Drag & drop support
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                toast.error("Image size must be less than 5MB");
                return;
            }
            if (!file.type.startsWith("image/")) {
                toast.error("Please drop a valid image file");
                return;
            }
            setSelectedImage(file);
        }
    };
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    // Preview object URL lifecycle
    useEffect(() => {
        if (!selectedImage) {
            setPreviewUrl(null);
            return;
        }
        const url = URL.createObjectURL(selectedImage);
        setPreviewUrl(url);
        return () => URL.revokeObjectURL(url);
    }, [selectedImage]);
    const clearSelectedImage = () => {
        setSelectedImage(null);
        setPreviewUrl(null);
        if (fileInputRef.current)
            fileInputRef.current.value = "";
    };
    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            if (checkUserData && !checkUserData.canAddMore) {
                console.log("can add more", checkUserData.canAddMore);
                toast.error(" You can't create more events, limit reached!");
                return;
            }
            // Validate required fields
            if (!formData.businessName ||
                !formData.city ||
                !formData.state ||
                !formData.contactNumber ||
                !selectedImage) {
                toast.error("Please fill in all required fields and upload an image");
                return;
            }
            // Role-specific validation
            if (plan === "babysitter" && !formData.experience) {
                toast.error("Please provide your babysitting experience");
                return;
            }
            if (plan === "quran_tutor" && !formData.experience) {
                toast.error("Please provide your Quran teaching experience");
                return;
            }
            if (plan === "donation" && !formData.description) {
                toast.error("Please provide a description of your donation cause");
                return;
            }
            // Create FormData for multipart/form-data submission
            const payload = new FormData();
            payload.append("name", formData.businessName);
            payload.append("description", formData.description ||
                `${getPlanDisplayName(plan)} service - ${formData.businessName}`);
            payload.append("price", formData.hourlyRate || "0");
            payload.append("location", `${formData.city}, ${formData.state}`);
            payload.append("phone", formData.contactNumber);
            payload.append("serviceType", getServiceType(plan));
            payload.append("image", selectedImage);
            // Add extra details
            const extraDetails = {
                role: plan,
                experience: formData.experience,
                hourlyRate: formData.hourlyRate,
                city: formData.city,
                state: formData.state,
            };
            payload.append("extraDetails", JSON.stringify(extraDetails));
            // Submit the service
            await Services.createService(payload);
            toast.success(`${getPlanDisplayName(plan)} service created successfully!`);
            // Reset form
            setFormData({
                businessName: "",
                city: "",
                state: "",
                contactNumber: "",
                description: "",
                experience: "",
                hourlyRate: "",
            });
            setSelectedImage(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
        catch (error) {
            console.error("Error creating service:", error);
            toast.error("Failed to create service. Please try again.");
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsxs("div", { className: "w-full mx-auto p-6", children: [_jsx("h2", { className: "text-gray-400 text-sm mb-4 font-bold", children: "Apply For A Role" }), _jsx("p", { className: "font-semibold text-lg mb-3", children: "Choose Your Role" }), _jsxs("div", { className: "flex gap-4 mb-6", children: [_jsx("button", { onClick: () => setPlan("babysitter"), className: `border rounded-2xl p-4 text-center transition duration-300 ${plan === "babysitter"
                            ? "bg-gradient-to-t from-[#00787B] to-[#003F41] text-white shadow-lg"
                            : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"}`, children: _jsx("p", { className: "font-medium", children: "Babysitter" }) }), _jsx("button", { onClick: () => setPlan("donation"), className: `border rounded-lg p-4 text-center transition duration-300 ${plan === "donation"
                            ? "bg-gradient-to-t from-[#00787B] to-[#003F41] text-white shadow-lg"
                            : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"}`, children: _jsx("p", { className: "font-medium", children: "Donation" }) }), _jsx("button", { onClick: () => setPlan("quran_tutor"), className: `border rounded-lg p-4 text-center transition duration-300 ${plan === "quran_tutor"
                            ? "bg-gradient-to-t from-[#00787B] to-[#003F41] text-white shadow-lg"
                            : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"}`, children: _jsx("p", { className: "font-medium", children: "Quran Tutor" }) })] }), _jsx("div", { className: "w-full mb-4", children: _jsx(CommonInput, { label: `${getPlanDisplayName(plan)} Name *`, name: "businessName", placeholder: `Write your ${getPlanDisplayName(plan).toLowerCase()} name here`, value: formData.businessName, onChange: handleInputChange, required: true }) }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "text-sm text-gray-700 mb-1 block", children: "Description" }), _jsx("textarea", { name: "description", placeholder: `Describe your ${getPlanDisplayName(plan).toLowerCase()} service...`, value: formData.description, onChange: handleInputChange, className: "w-full border border-gray-300 rounded-md p-2 text-gray-700 resize-vertical min-h-[100px]" })] }), _jsx("div", { className: "mb-4", children: _jsx(CommonInput, { label: "Experience", name: "experience", placeholder: "Years of experience or relevant background", value: formData.experience, onChange: handleInputChange }) }), _jsx("div", { className: "mb-4", children: _jsx(CommonInput, { label: "Hourly Rate ($)", name: "hourlyRate", placeholder: "e.g., 25", value: formData.hourlyRate, onChange: handleInputChange, type: "number" }) }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "text-sm text-gray-700 mb-1 block", children: "Upload your Business Photo or your Photo (5MB Max) *" }), _jsxs("div", { className: "relative", onDrop: handleDrop, onDragOver: handleDragOver, children: [_jsx("input", { ref: fileInputRef, type: "file", name: "image", accept: "image/*", onChange: handleImageChange, className: "hidden", id: "image-upload" }), _jsxs("label", { htmlFor: "image-upload", className: "cursor-pointer flex items-center gap-2 border border-gray-300 rounded-md p-3 hover:bg-gray-50 transition-colors border-dashed hover:border-solid hover:border-[#1c7a80]", children: [_jsx(SlCloudUpload, { fill: "#1c7a80", fontSize: 17 }), _jsx("span", { className: "text-gray-600", children: selectedImage ? selectedImage.name : "Choose an image file" })] })] }), selectedImage && (_jsxs("div", { className: "mt-3 flex items-start gap-4", children: [_jsx("div", { className: "w-28 h-28 rounded overflow-hidden border", children: previewUrl && (_jsx("img", { src: previewUrl, alt: "Preview", className: "w-full h-full object-cover" })) }), _jsxs("div", { className: "flex flex-col gap-2 text-sm", children: [_jsxs("div", { className: "text-green-700 flex items-center gap-2", children: [_jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full" }), selectedImage.name, " selected (", Math.round(selectedImage.size / 1024), " KB)"] }), _jsx("button", { type: "button", onClick: clearSelectedImage, className: "px-3 py-1 rounded-md border text-gray-700 hover:bg-gray-50 w-fit", children: "Remove image" })] })] })), _jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Supported formats: JPG, PNG, GIF. Maximum size: 5MB" })] }), _jsxs("div", { className: "flex gap-4 mt-4", children: [_jsxs("div", { className: "flex-1", children: [_jsx("label", { className: "text-sm text-gray-700 mb-1 block font-bold p-2", children: "City *" }), _jsxs("select", { name: "city", value: formData.city, onChange: handleInputChange, className: "w-full border rounded-xl text-gray-700 bg-gray-50 p-3", required: true, children: [_jsx("option", { value: "", children: "Select your city" }), _jsx("option", { value: "New York", children: "New York" }), _jsx("option", { value: "Los Angeles", children: "Los Angeles" }), _jsx("option", { value: "Chicago", children: "Chicago" }), _jsx("option", { value: "Houston", children: "Houston" }), _jsx("option", { value: "Phoenix", children: "Phoenix" }), _jsx("option", { value: "Philadelphia", children: "Philadelphia" }), _jsx("option", { value: "San Antonio", children: "San Antonio" }), _jsx("option", { value: "San Diego", children: "San Diego" }), _jsx("option", { value: "Dallas", children: "Dallas" }), _jsx("option", { value: "San Jose", children: "San Jose" })] })] }), _jsxs("div", { className: "flex-1", children: [_jsx("label", { className: "text-sm text-gray-700 mb-1 block font-bold p-2", children: "State *" }), _jsxs("select", { name: "state", value: formData.state, onChange: handleInputChange, className: "w-full border rounded-xl text-gray-700 bg-gray-50 p-3", required: true, children: [_jsx("option", { value: "", children: "Select your state" }), _jsx("option", { value: "NY", children: "New York" }), _jsx("option", { value: "CA", children: "California" }), _jsx("option", { value: "TX", children: "Texas" }), _jsx("option", { value: "FL", children: "Florida" }), _jsx("option", { value: "IL", children: "Illinois" }), _jsx("option", { value: "PA", children: "Pennsylvania" }), _jsx("option", { value: "OH", children: "Ohio" }), _jsx("option", { value: "GA", children: "Georgia" }), _jsx("option", { value: "NC", children: "North Carolina" }), _jsx("option", { value: "MI", children: "Michigan" })] })] })] }), _jsx("div", { className: "w-full mt-3", children: _jsx(CommonInput, { label: "Contact Number *", name: "contactNumber", placeholder: "+92 (555) 555-555", icon: _jsx(FiPhone, { className: "text-gray-400 text-xl" }), value: formData.contactNumber, onChange: handleInputChange, required: true }) }), _jsxs("div", { className: "flex justify-end gap-4 mt-6", children: [_jsx(CancelBtn, { onClick: () => { } }), _jsx("button", { onClick: handleSubmit, disabled: isLoading, className: "bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed", children: isLoading
                            ? "Creating..."
                            : `Create ${getPlanDisplayName(plan)} Service` })] })] }));
}
