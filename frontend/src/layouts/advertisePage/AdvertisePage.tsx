import CancelBtn from "@/components/common/cancel-btn/CancelBtn";
import CommonInput from "@/components/common/CommonInput";
import React, { useState, useRef, useEffect } from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { SlCloudUpload } from "react-icons/sl";
import { toast } from "react-hot-toast";
import ConfirmPopup from "@/components/common/popups/ConfirmPopup";
import CancelPayment from "@/components/common/popups/CancelPayment";
import { usePayment } from "@/hooks/useSinglePayment";
import ConfirmPaymentPopup from "@/components/common/popups/ConfirmPaymentPopup";
import Services from "@/services/serviceService";
// import { useSearchParams } from "react-router-dom";
import { fileToBase64 } from "@/utils/readFileHelper/readFileHelper";
import { useCheckUserLimit } from "@/hooks/useCheckUserLimit";

export default function AdvertisePage() {
  // const [plan, setPlan] = useState("website");
  const [targetUrl, setTargetUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirm, setConfrmPayment] = useState(false);
  //   const [searchParams] = useSearchParams();
  //   const ServiceId = searchParams.get("id");
  const [autoSubmit, setAutoSubmit] = useState(false);
 const {
    data: checkUserData,
    isLoading: isCheckUserLoading,
    error: ischeckUserError,
  } = useCheckUserLimit();
  const [showPopUp, setshowPopUp] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
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

  const fileInputRef = useRef<HTMLInputElement>(null);
  // const { handleCreateOrder, loading, error } = usePayment();
  // const handlePay = async (amount: string, serviceId: string) => {
  //   localStorage.setItem("currentServiceId", serviceId);

  //   const approvalUrl = await handleCreateOrder(amount, serviceId);
  //   if (approvalUrl) {
  //     window.location.href = approvalUrl;
  //   }
  //   return approvalUrl;
  // };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      if (
        !formData.businessName ||
        !formData.address ||
        !formData.contactNumber ||
        !selectedImage
      ) {
        toast.error("Please fill in all required fields and upload an image");
        return;
      }

      // Create FormData for multipart/form-data submission
      const payload = new FormData();
      payload.append("name", formData.businessName);
      payload.append(
        "description",
        formData.description || `${formData.businessName} - ${formData.address}`
      );
      // payload.append('price', plan === "website" ? "100" : "50");
      payload.append(
        "location",
        `${formData.address}, ${formData.city}, ${formData.state}`
      );
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
    } catch (error) {
      console.error("Error creating advertisement:", error);
      toast.error("Failed to create advertisement. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto p-6">
      {/* Title */}
      <h2 className="text-gray-400 text-sm mb-4 font-bold">Advertisement</h2>

      {/* Plan Selection */}
      {/* <p className="font-semibold text-lg mb-3">
                How you want to Advertise your business ?
            </p>
            <div className="flex gap-4 mb-6">
                <button
                    onClick={() => setPlan("website")}
                    className={`border rounded-2xl p-4 text-center transition duration-300 ${plan === "website"
                            ? "bg-gradient-to-t from-[#00787B] to-[#003F41] text-white shadow-lg"
                            : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
                        }`}
                >
                    <p className="font-medium">Website & Email</p>
                    <p className="text-sm">$100/Month</p>
                </button>

                <button
                    onClick={() => setPlan("email")}
                    className={`border rounded-lg p-4 text-center transition duration-300 ${plan === "email"
                            ? "bg-gradient-to-t from-[#00787B] to-[#003F41] text-white shadow-lg"
                            : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
                        }`}
                >
                    <p className="font-medium">Via Email Only</p>
                    <p className="text-sm">$50/Month</p>
                </button>
            </div> */}

      {/* Business Name */}
      <CommonInput
        label="Business Name *"
        name="businessName"
        placeholder="Write your business name here"
        value={formData.businessName}
        onChange={handleInputChange}
        required
      />

      {/* Description */}
      <div className="mb-4">
        <label className="text-sm text-gray-700 mb-1 block">Description</label>
        <textarea
          name="description"
          placeholder="Describe your business..."
          value={formData.description}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2 text-gray-700 resize-vertical min-h-[100px]"
        />
      </div>

      {/* Upload Photo */}
      <div className="mb-4">
        <label className="text-sm text-gray-700 mb-1 block">
          Upload your photo (5MB Max) *
        </label>
        <div className="relative">
          <input
            ref={fileInputRef}
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer flex items-center gap-2 border border-gray-300 rounded-md p-3 hover:bg-gray-50 transition-colors border-dashed hover:border-solid hover:border-[#1c7a80]"
          >
            <SlCloudUpload fill="#1c7a80" fontSize={17} />
            <span className="text-gray-600">
              {selectedImage ? selectedImage.name : "Choose an image file"}
            </span>
          </label>
        </div>
        {selectedImage && (
          <div className="mt-2 text-sm text-green-600 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            {selectedImage.name} selected (
            {Math.round(selectedImage.size / 1024)} KB)
          </div>
        )}
        <p className="text-xs text-gray-500 mt-1">
          Supported formats: JPG, PNG, GIF. Maximum size: 5MB
        </p>
      </div>

      {/* Address */}
      <CommonInput
        label="Address *"
        name="address"
        placeholder="Write your address"
        icon={<FiMapPin className="text-gray-400 text-xl" />}
        value={formData.address}
        onChange={handleInputChange}
        required
      />

      {/* City and State */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-sm text-gray-700 mb-1 block">City *</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2 text-gray-700"
            required
          >
            <option value="">Select your city</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Houston">Houston</option>
            <option value="Phoenix">Phoenix</option>
            <option value="Philadelphia">Philadelphia</option>
            <option value="San Antonio">San Antonio</option>
            <option value="San Diego">San Diego</option>
            <option value="Dallas">Dallas</option>
            <option value="San Jose">San Jose</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="text-sm text-gray-700 mb-1 block">State *</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2 text-gray-700"
            required
          >
            <option value="">Select your state</option>
            <option value="NY">New York</option>
            <option value="CA">California</option>
            <option value="TX">Texas</option>
            <option value="FL">Florida</option>
            <option value="IL">Illinois</option>
            <option value="PA">Pennsylvania</option>
            <option value="OH">Ohio</option>
            <option value="GA">Georgia</option>
            <option value="NC">North Carolina</option>
            <option value="MI">Michigan</option>
          </select>
        </div>
      </div>

      {/* Contact Number */}
      <CommonInput
        label="Contact Number *"
        name="contactNumber"
        placeholder="+92 (555) 555-555"
        icon={<FiPhone className="text-gray-400 text-xl" />}
        value={formData.contactNumber}
        onChange={handleInputChange}
        required
      />
      <CommonInput
        label="page you want to advertise *"
        name="targetUrl"
        placeholder="type your page link you want to advertise "
        icon={<FiMapPin className="text-gray-400 text-xl" />}
        value={targetUrl}
        onChange={(e) => setTargetUrl(e.target.value)}
        required
      />
      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <CancelBtn onClick={() => {}} />
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Creating..." : "Create Advertisement"}
        </button>
      </div>
      {/* {
        showPopUp && (
          <ConfirmPaymentPopup
            onClose={() => setshowPopUp(false)}
            onConfirm={handleConfirmPayment}
          />
        )
         
      }
      {/* {isConfirm && <ConfirmPopup onClose={() => {}} />} */}
      {/* {error && <CancelPayment onClose={() => setshowPopUp(false)} />} */}
      {/* {loading && <p>loading ....</p>} } */}
    </div>
  );
}
