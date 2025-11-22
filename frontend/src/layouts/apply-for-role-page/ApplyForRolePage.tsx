import CancelBtn from "@/components/common/cancel-btn/CancelBtn";
import CommonInput from "@/components/common/CommonInput";
import ConfirmBtn from "@/components/common/confirm-btn/ConfirmBtn";
import React, { useState, useRef, useEffect } from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { SlCloudUpload } from "react-icons/sl";
import Services from "@/services/serviceService";
import { toast } from "react-hot-toast";
import { useCheckUserLimit } from "@/hooks/useCheckUserLimit";

export default function ApplyForRolePage() {
  const [plan, setPlan] = useState("babysitter");
  const [isLoading, setIsLoading] = useState(false);
  const {
    data: checkUserData,
    isLoading: isCheckUserLoading,
    error: ischeckUserError,
  } = useCheckUserLimit();
  const [formData, setFormData] = useState({
    businessName: "",
    city: "",
    state: "",
    contactNumber: "",
    description: "",
    experience: "",
    hourlyRate: "",
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Map plan names to service types
  const getServiceType = (plan: string) => {
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
  const getPlanDisplayName = (plan: string) => {
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
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
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
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
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
    if (fileInputRef.current) fileInputRef.current.value = "";
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
      if (
        !formData.businessName ||
        !formData.city ||
        !formData.state ||
        !formData.contactNumber ||
        !selectedImage
      ) {
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
      payload.append(
        "description",
        formData.description ||
          `${getPlanDisplayName(plan)} service - ${formData.businessName}`
      );
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

      toast.success(
        `${getPlanDisplayName(plan)} service created successfully!`
      );

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
    } catch (error) {
      console.error("Error creating service:", error);
      toast.error("Failed to create service. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto p-6">
      {/* Title */}
      <h2 className="text-gray-400 text-sm mb-4 font-bold">Apply For A Role</h2>

      {/* Plan Selection */}
      <p className="font-semibold text-lg mb-3">Choose Your Role</p>
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setPlan("babysitter")}
          className={`border rounded-2xl p-4 text-center transition duration-300 ${
            plan === "babysitter"
              ? "bg-gradient-to-t from-[#00787B] to-[#003F41] text-white shadow-lg"
              : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
          }`}
        >
          <p className="font-medium">Babysitter</p>
        </button>

        <button
          onClick={() => setPlan("donation")}
          className={`border rounded-lg p-4 text-center transition duration-300 ${
            plan === "donation"
              ? "bg-gradient-to-t from-[#00787B] to-[#003F41] text-white shadow-lg"
              : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
          }`}
        >
          <p className="font-medium">Donation</p>
        </button>

        <button
          onClick={() => setPlan("quran_tutor")}
          className={`border rounded-lg p-4 text-center transition duration-300 ${
            plan === "quran_tutor"
              ? "bg-gradient-to-t from-[#00787B] to-[#003F41] text-white shadow-lg"
              : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
          }`}
        >
          <p className="font-medium">Quran Tutor</p>
        </button>
      </div>

      {/* Business/Service Name */}
      <div className="w-full mb-4">
        <CommonInput
          label={`${getPlanDisplayName(plan)} Name *`}
          name="businessName"
          placeholder={`Write your ${getPlanDisplayName(
            plan
          ).toLowerCase()} name here`}
          value={formData.businessName}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="text-sm text-gray-700 mb-1 block">Description</label>
        <textarea
          name="description"
          placeholder={`Describe your ${getPlanDisplayName(
            plan
          ).toLowerCase()} service...`}
          value={formData.description}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2 text-gray-700 resize-vertical min-h-[100px]"
        />
      </div>

      {/* Experience */}
      <div className="mb-4">
        <CommonInput
          label="Experience"
          name="experience"
          placeholder="Years of experience or relevant background"
          value={formData.experience}
          onChange={handleInputChange}
        />
      </div>

      {/* Hourly Rate */}
      <div className="mb-4">
        <CommonInput
          label="Hourly Rate ($)"
          name="hourlyRate"
          placeholder="e.g., 25"
          value={formData.hourlyRate}
          onChange={handleInputChange}
          type="number"
        />
      </div>

      {/* Upload Photo */}
      <div className="mb-4">
        <label className="text-sm text-gray-700 mb-1 block">
          Upload your Business Photo or your Photo (5MB Max) *
        </label>
        <div
          className="relative"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
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
          <div className="mt-3 flex items-start gap-4">
            <div className="w-28 h-28 rounded overflow-hidden border">
              {previewUrl && (
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <div className="text-green-700 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {selectedImage.name} selected (
                {Math.round(selectedImage.size / 1024)} KB)
              </div>
              <button
                type="button"
                onClick={clearSelectedImage}
                className="px-3 py-1 rounded-md border text-gray-700 hover:bg-gray-50 w-fit"
              >
                Remove image
              </button>
            </div>
          </div>
        )}
        <p className="text-xs text-gray-500 mt-1">
          Supported formats: JPG, PNG, GIF. Maximum size: 5MB
        </p>
      </div>

      {/* City and State */}
      <div className="flex gap-4 mt-4">
        <div className="flex-1">
          <label className="text-sm text-gray-700 mb-1 block font-bold p-2">
            City *
          </label>
          <select
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full border rounded-xl text-gray-700 bg-gray-50 p-3"
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
          <label className="text-sm text-gray-700 mb-1 block font-bold p-2">
            State *
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full border rounded-xl text-gray-700 bg-gray-50 p-3"
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
      <div className="w-full mt-3">
        <CommonInput
          label="Contact Number *"
          name="contactNumber"
          placeholder="+92 (555) 555-555"
          icon={<FiPhone className="text-gray-400 text-xl" />}
          value={formData.contactNumber}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <CancelBtn onClick={() => {}} />
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading
            ? "Creating..."
            : `Create ${getPlanDisplayName(plan)} Service`}
        </button>
      </div>
    </div>
  );
}
