import CancelBtn from "@/components/common/cancel-btn/CancelBtn";
import CommonInput from "@/components/common/CommonInput";
import ConfirmBtn from "@/components/common/confirm-btn/ConfirmBtn";
import { MdPriceCheck } from "react-icons/md";
import React, { useState, useRef } from "react";
import { FiPhone } from "react-icons/fi";
import { SlCloudUpload } from "react-icons/sl";
import { createProduct } from "@/services/productService";
import { toast } from "react-hot-toast";
import { useCheckUserLimit } from "@/hooks/useCheckUserLimit";

export default function SellProductsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    data: checkUserData,
    isLoading: isCheckUserLoading,
    error: ischeckUserError,
  } = useCheckUserLimit();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    contactNumber: "",
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        console.log("can add more", checkUserData.canAddMore);
        toast.error(" You can't create more events, limit reached!");
        return;
      }
      // Validate required fields
      if (
        !formData.name ||
        !formData.description ||
        !formData.price ||
        !formData.contactNumber ||
        !selectedImage
      ) {
        toast.error("Please fill in all required fields and upload an image");
        return;
      }

      // Validate price
      const price = parseFloat(formData.price);
      if (isNaN(price) || price <= 0) {
        toast.error("Please enter a valid price");
        return;
      }

      // Create FormData for multipart/form-data submission
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("description", formData.description);
      payload.append("price", formData.price);
      payload.append("contactNumber", formData.contactNumber);
      payload.append("image", selectedImage);

      // Debug logging
      console.log("Form data being sent:", formData);
      console.log("Selected image:", selectedImage);
      console.log("FormData entries:");
      for (let [key, value] of payload.entries()) {
        console.log(key, value);
      }

      // Submit the product
      await createProduct(payload);

      toast.success("Product created successfully!");

      // Reset form
      setFormData({
        name: "",
        description: "",
        price: "",
        contactNumber: "",
      });
      setSelectedImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("Failed to create product. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto p-6">
      {/* Title */}
      <h2 className="text-gray-400 text-sm mb-4 font-bold">Sell Products</h2>

      {/* Product Name */}
      <div className="w-full mb-4">
        <CommonInput
          label="Product Name *"
          name="name"
          placeholder="Write your product name here"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Product Description */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Product Description *
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Write your Product Description..."
          rows={4}
          value={formData.description}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-600 focus:border-teal-600 resize-vertical"
        />
      </div>

      {/* Upload Photo */}
      <div className="mb-4">
        <label className="text-sm text-gray-700 mb-1 block">
          Upload Product Photo (5MB Max) *
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
              {selectedImage ? selectedImage.name : "Choose a product image"}
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

      {/* Product Price */}
      <div className="mb-4">
        <CommonInput
          type="number"
          name="price"
          placeholder="Enter product price"
          label="Product Price ($) *"
          required={true}
          value={formData.price}
          onChange={handleInputChange}
          icon={<MdPriceCheck fill="gray" fontSize={13} />}
        />
      </div>

      {/* Contact Number */}
      <div className="w-full mt-3 mb-6">
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
          {isLoading ? "Creating..." : "Create Product"}
        </button>
      </div>
    </div>
  );
}
