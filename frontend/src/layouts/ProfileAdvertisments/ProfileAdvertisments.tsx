import React, { useEffect, useState } from "react";
import DeleteBtn from "@/components/common/DeleteBtn/DeleteBtn";
import EditBtn from "@/components/common/EditButton/EditBtn";
import OrangeButton from "@/components/common/OrangeButton/OrangeButton";
import { Plus, Upload } from "lucide-react";
import { useServiceStore } from "@/store/serviceStore";
import { useProfileStore } from "@/store/useProfileStore";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function ProfileAdvertisements() {
  const [editId, setEditId] = useState<string | null>(null);
  const [editData, setEditData] = useState({
    name: "",
    location: "",
    phone: "",
    extraDetails: {
      startDate: "",
      endDate: "",
    },
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const { services, getServicesByType, deleteService, updateService, loading } =
    useServiceStore();
  const { profile, getMyProfile } = useProfileStore();

  useEffect(() => {
    getServicesByType("advertisement");
    getMyProfile();
  }, [getServicesByType, getMyProfile]);

  const handleDeleteService = async (id: string) => {
    try {
      await deleteService(id);
      toast.success("Service deleted successfully!");
      console.log("delete clicked");
    } catch (error) {
      toast.error("Failed to delete service");
      console.error("Failed to delete service:", error);
    }
  };

  const handleEditForm = (service: any) => {
    console.log("edit clicked", service._id);
    setEditId(service._id);
    setEditData({
      name: service.name,
      location: service.location,
      phone: service.phone,
      extraDetails: {
        startDate: service.extraDetails?.startDate || "",
        endDate: service.extraDetails?.endDate || "",
      },
    });
    // Reset image states
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSave = async () => {
    if (!editId) return;
    try {
      // ✅ Create FormData for image upload
      const formData = new FormData();
      formData.append("name", editData.name);
      formData.append("location", editData.location);
      formData.append("phone", editData.phone);
      formData.append("extraDetails", JSON.stringify(editData.extraDetails));
      
      // ✅ Add image if user selected one
      if (imageFile) {
        formData.append("image", imageFile);
      }
      
      await updateService(editId, formData);
      setEditId(null);
      setImageFile(null);
      setImagePreview(null);

      // ✅ Show success toast
      toast.success("Service updated successfully!");

      // ✅ Refresh the data
      await getServicesByType("advertisement");

      console.log("Service updated successfully");
    } catch (error) {
      toast.error("Failed to update service");
      console.error("Failed to update service:", error);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "startDate" || field === "endDate") {
      setEditData((prev) => ({
        ...prev,
        extraDetails: {
          ...prev.extraDetails,
          [field]: value,
        },
      }));
    } else {
      setEditData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditData({
      name: "",
      location: "",
      phone: "",
      extraDetails: {
        startDate: "",
        endDate: "",
      },
    });
    setImageFile(null);
    setImagePreview(null);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  console.log("edit id", editId);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full mx-auto p-6">
      {/* Title */}
      <h2 className="text-gray-400 text-sm mb-4 font-bold">
        Your Advertisements
      </h2>
      <div className="flex justify-between items-center p-3">
        <div className="flex justify-between items-center">
          <img
            src={`${profile?.photo}`}
            alt="profile image"
            className="rounded-full w-24 h-20 object-cover"
          />
          <h2 className="font-bold ml-4 text-2xl">
            {profile?.fullName ?? "Unknown User"}
          </h2>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center">
        <div className="flex items-center p-2">
          <Link to="/halal-business-directory/advertise">
            <OrangeButton title="Make New Ads" icon={<Plus />} />
          </Link>
        </div>
      </div>

      {services.services.map((service) => (
        <div
          className="advertisementContainer border rounded-lg p-4 mb-4 bg-white shadow"
          key={service._id}
        >
          <div className="flex flex-col items-start gap-3 p-3">
            {/* Name Field */}
            {editId === service._id ? (
              <input
                type="text"
                value={editData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="font-bold text-xl mb-2 border border-gray-300 rounded px-2 py-1 w-full"
                placeholder="Service Name"
              />
            ) : (
              <h1 className="font-bold text-xl mb-2">{service.name}</h1>
            )}

            <div className="flex flex-col lg:flex-row gap-4 font-bold justify-between w-full">
              {/* Location Field */}
              <div className="flex items-center gap-2">
                <span>
                  <svg
                    width="24"
                    height="30"
                    viewBox="0 0 24 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.73331 6.25158C6.53411 4.4868 8.95861 3.50399 11.48 3.51672C14.0013 3.52946 16.4157 4.53671 18.1986 6.31959C19.9815 8.10247 20.9888 10.5169 21.0015 13.0383C21.0142 15.5596 20.0314 17.9841 18.2666 19.7849L13.2086 24.843C12.7554 25.2961 12.1408 25.5506 11.5 25.5506C10.8592 25.5506 10.2446 25.2961 9.79139 24.843L4.73331 19.7849C2.9388 17.9902 1.93066 15.5562 1.93066 13.0182C1.93066 10.4803 2.9388 8.04628 4.73331 6.25158Z"
                      stroke="#1F1F1F"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.5 16.6431C13.502 16.6431 15.125 15.0201 15.125 13.0181C15.125 11.016 13.502 9.39307 11.5 9.39307C9.49797 9.39307 7.875 11.016 7.875 13.0181C7.875 15.0201 9.49797 16.6431 11.5 16.6431Z"
                      stroke="#1F1F1F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {editId === service._id ? (
                  <input
                    type="text"
                    value={editData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    className="border border-gray-300 rounded px-2 py-1 flex-1"
                    placeholder="Location"
                  />
                ) : (
                  <span>{service.location}</span>
                )}
              </div>

              {/* Opening Hours */}
              <div className="flex items-center gap-2">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C10.0222 22 8.08879 21.4135 6.4443 20.3147C4.79981 19.2159 3.51809 17.6541 2.76121 15.8268C2.00433 13.9996 1.8063 11.9889 2.19215 10.0491C2.578 8.10929 3.53041 6.32746 4.92894 4.92894C6.32746 3.53041 8.10929 2.578 10.0491 2.19215C11.9889 1.8063 13.9996 2.00433 15.8268 2.76121C17.6541 3.51809 19.2159 4.79981 20.3147 6.4443C21.4135 8.08879 22 10.0222 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22ZM12 3.42858C10.3047 3.42858 8.64754 3.93128 7.23797 4.87312C5.82841 5.81496 4.72979 7.15364 4.08104 8.71986C3.43229 10.2861 3.26254 12.0095 3.59327 13.6722C3.924 15.3349 4.74035 16.8622 5.93909 18.0609C7.13782 19.2597 8.66511 20.076 10.3278 20.4067C11.9905 20.7375 13.7139 20.5677 15.2801 19.919C16.8464 19.2702 18.185 18.1716 19.1269 16.762C20.0687 15.3525 20.5714 13.6953 20.5714 12C20.5714 9.72672 19.6684 7.54654 18.0609 5.93909C16.4535 4.33163 14.2733 3.42858 12 3.42858Z"
                      fill="#1F1F1F"
                    />
                    <path
                      d="M14.9929 17L11 13.2733V7H12.4286V12.72L16 16.06L14.9929 17Z"
                      fill="#1F1F1F"
                    />
                  </svg>
                </span>
                {editId === service._id ? (
                  <div className="flex items-center gap-1 flex-wrap">
                    <span>Open Daily:</span>
                    <input
                      type="text"
                      value={editData.extraDetails.startDate}
                      onChange={(e) =>
                        handleInputChange("startDate", e.target.value)
                      }
                      placeholder="8 AM"
                      className="border border-gray-300 rounded px-1 py-1 w-20 text-sm"
                    />
                    <span>-</span>
                    <input
                      type="text"
                      value={editData.extraDetails.endDate}
                      onChange={(e) =>
                        handleInputChange("endDate", e.target.value)
                      }
                      placeholder="10 PM"
                      className="border border-gray-300 rounded px-1 py-1 w-20 text-sm"
                    />
                  </div>
                ) : (
                  <span>
                    Open Daily:{" "}
                    {service.extraDetails?.startDate
                      ? new Date(
                          service.extraDetails.startDate
                        ).toLocaleDateString()
                      : ""}
                    {" - "}
                    {service.extraDetails?.endDate
                      ? new Date(
                          service.extraDetails.endDate
                        ).toLocaleDateString()
                      : ""}
                  </span>
                )}
              </div>

              {/* Phone Field */}
              <div className="flex items-center gap-2">
                <span>
                  <svg
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.85895 3.36655C3.92946 2.3174 5.69224 2.50382 6.58858 3.68476L7.69867 5.1449C8.42876 6.1056 8.36367 7.44782 7.49724 8.29667L7.28788 8.50303C7.26414 8.58966 7.26173 8.68062 7.28085 8.76836C7.33626 9.12212 7.63622 9.87126 8.89233 11.1025C10.1484 12.3337 10.9137 12.6285 11.2779 12.684C11.3696 12.7022 11.4644 12.6995 11.555 12.6762L11.9139 12.3242C12.6844 11.5698 13.8666 11.4285 14.8202 11.9392L16.5002 12.841C17.9402 13.6109 18.3035 15.5393 17.1248 16.6951L15.8748 17.9193C15.4808 18.3052 14.9512 18.6269 14.3056 18.6867C12.7134 18.8332 9.00404 18.6459 5.10464 14.8248C1.46562 11.2577 0.76719 8.14667 0.678347 6.6137C0.634365 5.83855 1.00557 5.18305 1.47881 4.72004L2.85895 3.36655ZM5.53302 4.46425C5.08705 3.87725 4.25668 3.83043 3.78872 4.28911L2.4077 5.64172C2.11742 5.92612 1.97844 6.24 1.99603 6.54C2.0664 7.75823 2.62937 10.5649 6.03529 13.9031C9.60835 17.4043 12.9078 17.5092 14.1833 17.3913C14.4437 17.3679 14.7023 17.2344 14.9442 16.9977L16.1933 15.7725C16.7017 15.2748 16.59 14.3679 15.8704 13.9829L14.1903 13.082C13.7259 12.834 13.1823 12.9155 12.8445 13.2467L12.4443 13.6395L11.9781 13.1782C12.4443 13.6395 12.4434 13.6404 12.4425 13.6404L12.4416 13.6421L12.439 13.6447L12.4328 13.6499L12.4196 13.6621C12.3825 13.696 12.3425 13.7268 12.3 13.754C12.2296 13.7999 12.1364 13.8511 12.0194 13.8936C11.7819 13.9811 11.467 14.028 11.0782 13.969C10.3156 13.8537 9.30487 13.3412 7.96168 12.025C6.61937 10.7088 6.09511 9.71866 5.97724 8.96778C5.91654 8.58454 5.96492 8.27413 6.05464 8.04002C6.10402 7.90829 6.17472 7.78531 6.264 7.67586L6.29214 7.64551L6.30446 7.6325L6.30974 7.6273L6.31238 7.6247L6.31413 7.62296L6.56747 7.37498C6.94395 7.00475 6.99673 6.39173 6.64224 5.92439L5.53302 4.46425Z"
                      fill="#1F1F1F"
                    />
                  </svg>
                </span>
                {editId === service._id ? (
                  <input
                    type="text"
                    value={editData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                    placeholder="Phone"
                  />
                ) : (
                  <span>{service.phone}</span>
                )}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-4 flex flex-col justify-center items-center gap-3">
            <img
              src={editId === service._id && imagePreview ? imagePreview : `${service?.image}`}
              alt="Ad"
              className="rounded-md w-2/3 object-cover"
            />
            
            {/* ✅ Image upload input - Only show when editing */}
            {editId === service._id && (
              <div className="w-2/3">
                <label 
                  htmlFor={`image-upload-${service._id}`}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full cursor-pointer hover:bg-blue-600 transition"
                >
                  <Upload size={20} />
                  <span>{imageFile ? "Change Image" : "Upload New Image"}</span>
                </label>
                <input
                  id={`image-upload-${service._id}`}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                {imageFile && (
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    Selected: {imageFile.name}
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="crudBtns flex items-center gap-5">
            <div className="w-full p-2 flex items-center justify-end gap-2">
              {editId === service._id ? (
                <>
                  <button
                    onClick={handleSave}
                    disabled={loading}
                    className="px-7 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Saving..." : "Save"}
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    disabled={loading}
                    className="px-7 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <EditBtn onClick={() => handleEditForm(service)} />
                  <DeleteBtn
                    onClick={() => handleDeleteService(service._id || "")}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}