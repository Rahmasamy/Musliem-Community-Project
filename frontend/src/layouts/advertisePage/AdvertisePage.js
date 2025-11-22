import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CancelBtn from "@/components/common/cancel-btn/CancelBtn";
import CommonInput from "@/components/common/CommonInput";
import { useState, useRef } from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { SlCloudUpload } from "react-icons/sl";
import { toast } from "react-hot-toast";
import Services from "@/services/serviceService";
import { useCheckUserLimit } from "@/hooks/useCheckUserLimit";
export default function AdvertisePage() {
    // const [plan, setPlan] = useState("website");
    const [targetUrl, setTargetUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isConfirm, setConfrmPayment] = useState(false);
    //   const [searchParams] = useSearchParams();
    //   const ServiceId = searchParams.get("id");
    const [autoSubmit, setAutoSubmit] = useState(false);
    const { data: checkUserData, isLoading: isCheckUserLoading, error: ischeckUserError, } = useCheckUserLimit();
    const [showPopUp, setshowPopUp] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [formData, setFormData] = useState({
        businessName: "",
        address: "",
        city: "",
        state: "",
        contactNumber: "",
        description: "",
    });
    // const handleConfirmPayment = async () => {
    //   localStorage.setItem("adFormData", JSON.stringify(formData));
    //   if (
    //     !formData.businessName ||
    //     !formData.address ||
    //     !formData.contactNumber ||
    //     !selectedImage
    //   ) {
    //     toast.error("Please fill in all required fields and upload an image");
    //     return;
    //   }
    //   if (selectedImage) {
    //     const imageBase64 = (await fileToBase64(selectedImage)) as string;
    //     localStorage.setItem("adImageBase64", imageBase64);
    //   }
    //   setConfrmPayment(true);
    //   setshowPopUp(false);
    //   try {
    //     const approvalUrl = await handlePay("1", "Ads123");
    //     if (!approvalUrl) {
    //       toast.error("Payment could not be processed!");
    //     }
    //   } catch (err) {
    //     toast.error("Payment error occurred!");
    //   }
    // };
    // const handleDataToSubmit = (
    //   savedForm: string | null,
    //   savedImageBase64: string | null
    // ) => {
    //   if (!savedForm || !savedImageBase64) return;
    //   try {
    //     const parsedData = JSON.parse(savedForm);
    //     setFormData(parsedData);
    //     // ✅ تأكدي إن Base64 فعلاً فيه فاصلة
    //     const base64Parts = savedImageBase64.split(",");
    //     if (base64Parts.length < 2) return;
    //     const byteString = atob(base64Parts[1]);
    //     const mimeString = base64Parts[0].split(":")[1].split(";")[0];
    //     const ab = new ArrayBuffer(byteString.length);
    //     const ia = new Uint8Array(ab);
    //     for (let i = 0; i < byteString.length; i++) {
    //       ia[i] = byteString.charCodeAt(i);
    //     }
    //     const blob = new Blob([ab], { type: mimeString });
    //     const file = new File([blob], "advertisement_image.jpg", {
    //       type: mimeString,
    //     });
    //     setSelectedImage(file);
    //     setAutoSubmit(true);
    //   } catch (error) {
    //     console.error("❌ Error restoring ad data:", error);
    //   }
    // };
    // useEffect(() => {
    //   const serviceId = localStorage.getItem("currentServiceId");
    //   const isPaid = localStorage.getItem(`paymentCaptured_${serviceId}`);
    //   if (isPaid === "true") {
    //     const savedForm = localStorage.getItem("adFormData");
    //     const savedImageBase64 = localStorage.getItem("adImageBase64");
    //     handleDataToSubmit(savedForm, savedImageBase64);
    //     // 🧹 نظافة
    //     localStorage.removeItem(`paymentCaptured_${serviceId}`);
    //     localStorage.removeItem("adFormData");
    //     localStorage.removeItem("adImageBase64");
    //   }
    // }, []);
    //   useEffect(() => {
    //   if (autoSubmit && formData && selectedImage) {
    //     handleSubmit();
    //     setAutoSubmit(false); // reset flag
    //     setshowPopUp(true);
    //   }
    // }, [autoSubmit, formData, selectedImage]);
    const fileInputRef = useRef(null);
    // const { handleCreateOrder, loading, error } = usePayment();
    // const handlePay = async (amount: string, serviceId: string) => {
    //   localStorage.setItem("currentServiceId", serviceId);
    //   const approvalUrl = await handleCreateOrder(amount, serviceId);
    //   if (approvalUrl) {
    //     window.location.href = approvalUrl;
    //   }
    //   return approvalUrl;
    // };
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
            // Check file size (5MB max)
            if (file.size > 5 * 1024 * 1024) {
                toast.error("Image size must be less than 5MB");
                return;
            }
            // Check file type
            if (!file.type.startsWith("image/")) {
                toast.error("Please select a valid image file");
                return;
            }
            setSelectedImage(file);
        }
    };
    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            if (checkUserData && !checkUserData.canAddMore) {
                toast.error(" You can't create more events, limit reached!");
                return;
            }
            // Validate required fields
            if (!formData.businessName ||
                !formData.address ||
                !formData.contactNumber ||
                !selectedImage) {
                toast.error("Please fill in all required fields and upload an image");
                return;
            }
            // Create FormData for multipart/form-data submission
            const payload = new FormData();
            payload.append("name", formData.businessName);
            payload.append("description", formData.description || `${formData.businessName} - ${formData.address}`);
            // payload.append('price', plan === "website" ? "100" : "50");
            payload.append("location", `${formData.address}, ${formData.city}, ${formData.state}`);
            payload.append("phone", formData.contactNumber);
            payload.append("serviceType", "advertisement");
            payload.append("image", selectedImage);
            payload.append("adminApprovalStatus", "pending");
            payload.append("paymentStatus", "confirmed");
            // Add extra details
            const extraDetails = {
                targetUrl,
                city: formData.city,
                state: formData.state,
            };
            payload.append("extraDetails", JSON.stringify(extraDetails));
            // Submit the advertisement
            const response = await Services.createService(payload);
            const ServiceId = response.data._id;
            console.log("ServiceId created", ServiceId);
            toast.success("Advertisement created successfully,Need Admin Approval!");
            // Reset form
            setFormData({
                businessName: "",
                address: "",
                city: "",
                state: "",
                contactNumber: "",
                description: "",
            });
            setSelectedImage(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
        catch (error) {
            console.error("Error creating advertisement:", error);
            toast.error("Failed to create advertisement. Please try again.");
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsxs("div", { className: "w-full mx-auto p-6", children: [_jsx("h2", { className: "text-gray-400 text-sm mb-4 font-bold", children: "Advertisement" }), _jsx(CommonInput, { label: "Business Name *", name: "businessName", placeholder: "Write your business name here", value: formData.businessName, onChange: handleInputChange, required: true }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "text-sm text-gray-700 mb-1 block", children: "Description" }), _jsx("textarea", { name: "description", placeholder: "Describe your business...", value: formData.description, onChange: handleInputChange, className: "w-full border border-gray-300 rounded-md p-2 text-gray-700 resize-vertical min-h-[100px]" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "text-sm text-gray-700 mb-1 block", children: "Upload your photo (5MB Max) *" }), _jsxs("div", { className: "relative", children: [_jsx("input", { ref: fileInputRef, type: "file", name: "image", accept: "image/*", onChange: handleImageChange, className: "hidden", id: "image-upload" }), _jsxs("label", { htmlFor: "image-upload", className: "cursor-pointer flex items-center gap-2 border border-gray-300 rounded-md p-3 hover:bg-gray-50 transition-colors border-dashed hover:border-solid hover:border-[#1c7a80]", children: [_jsx(SlCloudUpload, { fill: "#1c7a80", fontSize: 17 }), _jsx("span", { className: "text-gray-600", children: selectedImage ? selectedImage.name : "Choose an image file" })] })] }), selectedImage && (_jsxs("div", { className: "mt-2 text-sm text-green-600 flex items-center gap-2", children: [_jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full" }), selectedImage.name, " selected (", Math.round(selectedImage.size / 1024), " KB)"] })), _jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Supported formats: JPG, PNG, GIF. Maximum size: 5MB" })] }), _jsx(CommonInput, { label: "Address *", name: "address", placeholder: "Write your address", icon: _jsx(FiMapPin, { className: "text-gray-400 text-xl" }), value: formData.address, onChange: handleInputChange, required: true }), _jsxs("div", { className: "flex gap-4", children: [_jsxs("div", { className: "flex-1", children: [_jsx("label", { className: "text-sm text-gray-700 mb-1 block", children: "City *" }), _jsxs("select", { name: "city", value: formData.city, onChange: handleInputChange, className: "w-full border border-gray-300 rounded-md p-2 text-gray-700", required: true, children: [_jsx("option", { value: "", children: "Select your city" }), _jsx("option", { value: "New York", children: "New York" }), _jsx("option", { value: "Los Angeles", children: "Los Angeles" }), _jsx("option", { value: "Chicago", children: "Chicago" }), _jsx("option", { value: "Houston", children: "Houston" }), _jsx("option", { value: "Phoenix", children: "Phoenix" }), _jsx("option", { value: "Philadelphia", children: "Philadelphia" }), _jsx("option", { value: "San Antonio", children: "San Antonio" }), _jsx("option", { value: "San Diego", children: "San Diego" }), _jsx("option", { value: "Dallas", children: "Dallas" }), _jsx("option", { value: "San Jose", children: "San Jose" })] })] }), _jsxs("div", { className: "flex-1", children: [_jsx("label", { className: "text-sm text-gray-700 mb-1 block", children: "State *" }), _jsxs("select", { name: "state", value: formData.state, onChange: handleInputChange, className: "w-full border border-gray-300 rounded-md p-2 text-gray-700", required: true, children: [_jsx("option", { value: "", children: "Select your state" }), _jsx("option", { value: "NY", children: "New York" }), _jsx("option", { value: "CA", children: "California" }), _jsx("option", { value: "TX", children: "Texas" }), _jsx("option", { value: "FL", children: "Florida" }), _jsx("option", { value: "IL", children: "Illinois" }), _jsx("option", { value: "PA", children: "Pennsylvania" }), _jsx("option", { value: "OH", children: "Ohio" }), _jsx("option", { value: "GA", children: "Georgia" }), _jsx("option", { value: "NC", children: "North Carolina" }), _jsx("option", { value: "MI", children: "Michigan" })] })] })] }), _jsx(CommonInput, { label: "Contact Number *", name: "contactNumber", placeholder: "+92 (555) 555-555", icon: _jsx(FiPhone, { className: "text-gray-400 text-xl" }), value: formData.contactNumber, onChange: handleInputChange, required: true }), _jsx(CommonInput, { label: "page you want to advertise *", name: "targetUrl", placeholder: "type your page link you want to advertise ", icon: _jsx(FiMapPin, { className: "text-gray-400 text-xl" }), value: targetUrl, onChange: (e) => setTargetUrl(e.target.value), required: true }), _jsxs("div", { className: "flex justify-end gap-4 mt-6", children: [_jsx(CancelBtn, { onClick: () => { } }), _jsx("button", { onClick: handleSubmit, disabled: isLoading, className: "bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed", children: isLoading ? "Creating..." : "Create Advertisement" })] })] }));
}
