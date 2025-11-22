import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CommonInput from "@/components/common/CommonInput";
import { MdOutlineEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { SlCloudUpload } from "react-icons/sl";
import DeleteBtn from "@/components/common/DeleteBtn/DeleteBtn";
import ChangeInput from "@/components/common/popups/changeInput";
import { useProfileStore } from "@/store/useProfileStore";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function ProfileSection() {
    const [Skill, setSkill] = useState("skill0");
    const [showPopUp, setshowPopUp] = useState(false);
    const [role, setRole] = useState("");
    const { profile, getMyProfile, updateMyProfile, logout, delteProfile } = useProfileStore();
    console.log("profile============", profile);
    const setUser = useAuthStore((state) => state.setUser);
    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const otherSkillRef = useRef(null);
    const bioRef = useRef(null);
    const fileInputRef = useRef(null);
    const [editingField, setEditingField] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        getMyProfile();
    }, [getMyProfile]);
    useEffect(() => {
        if (profile?.role) {
            setRole(profile.role);
        }
    }, [profile]);
    function handleLogout() {
        toast.success("Logged out successfully");
        logout();
        navigate("/login");
        setUser(null);
    }
    function deleteUser() {
        toast.success("Account deleted successfully");
        delteProfile?.();
        navigate("/login");
        setUser(null);
        toast.success("Your profile has been delted Successfully");
    }
    const focusAfterEnable = (field) => {
        requestAnimationFrame(() => {
            if (field === "email")
                emailRef.current?.focus();
            if (field === "fullName")
                nameRef.current?.focus();
            if (field === "phoneNumber")
                phoneRef.current?.focus();
            if (field === "otherSkill")
                otherSkillRef.current?.focus();
            if (field === "bio")
                bioRef.current?.focus();
        });
    };
    const handleEdit = (field) => {
        setEditingField(field);
        focusAfterEnable(field);
    };
    const handleUpdateField = async (field) => {
        let newValue = "";
        switch (field) {
            case "fullName":
                newValue = nameRef.current?.value || "";
                break;
            case "email":
                newValue = emailRef.current?.value || "";
                break;
            case "phoneNumber":
                newValue = phoneRef.current?.value || "";
                break;
            case "otherSkill":
                newValue = otherSkillRef.current?.value || "";
                break;
            case "bio":
                newValue = bioRef.current?.value || "";
                break;
            // case "skill":
            //   newValue = Skill || "";
            //   break;
        }
        if (!newValue.trim()) {
            toast.error(`${field} cannot be empty`);
            return;
        }
        try {
            await updateMyProfile({ [field]: newValue });
            toast.success(`${field} updated successfully`);
            await getMyProfile();
            // if (field === "skill") setSkill(newValue);
            setEditingField(null);
        }
        catch {
            toast.error(`Failed to update ${field}`);
        }
    };
    const handleImageUpload = async (e) => {
        if (!e.target.files || e.target.files.length === 0)
            return;
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("photo", file);
        try {
            await updateMyProfile(formData);
            toast.success("Profile photo updated!");
            getMyProfile();
        }
        catch {
            toast.error("Failed to upload image");
        }
    };
    const onKeyDownSave = (field) => (e) => {
        if (e.key === "Enter") {
            e.currentTarget.blur();
            handleUpdateField(field);
        }
    };
    return (_jsxs("div", { className: "w-full mx-auto p-6 ", children: [_jsx("h2", { className: "text-gray-400 text-sm mb-4 font-bold", children: "Profile" }), _jsxs("div", { className: "flex-col lg:flex-row justify-between items-center p-3", children: [_jsxs("div", { className: "flex items-center", children: [_jsxs("div", { className: "relative w-24 h-24", children: [_jsx("img", { src: `${profile?.photo ??
                                            "https://tse3.mm.bing.net/th/id/OIP._aC-G3lqi8LHgTetCe6tCgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"}`, alt: "profile image", className: "rounded-full w-24 h-20 object-cover" }), _jsx("button", { onClick: () => fileInputRef.current?.click(), className: "absolute bottom-5 right-5 bg-teal-500 text-white p-2 rounded-full shadow-lg", children: _jsx(SlCloudUpload, { size: 18 }) }), _jsx("input", { type: "file", ref: fileInputRef, onChange: handleImageUpload, accept: "image/*", hidden: true })] }), editingField === "fullName" ? (_jsx(CommonInput, { label: "", name: "fullName", defaultValue: profile?.fullName || "", placeholder: "Your name", useRef: nameRef, disabled: false, onBlur: () => handleUpdateField("fullName"), onKeyDown: onKeyDownSave("fullName") })) : (_jsx("h2", { className: "font-bold ml-4 text-2xl", children: profile?.fullName ?? "Un known User" })), _jsx("span", { onClick: () => handleEdit("fullName"), className: "ml-2 cursor-pointer", children: _jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.8796 4.51327C17.9587 4.63344 17.994 4.77726 17.9794 4.92043C17.9649 5.0636 17.9013 5.19735 17.7996 5.29911L10.1387 12.9591C10.0604 13.0374 9.96258 13.0935 9.8554 13.1216L6.66457 13.9549C6.55909 13.9824 6.44826 13.9819 6.34306 13.9533C6.23787 13.9248 6.14197 13.8692 6.06489 13.7921C5.98782 13.715 5.93224 13.6191 5.90368 13.5139C5.87511 13.4087 5.87456 13.2979 5.90207 13.1924L6.7354 10.0024C6.76032 9.90691 6.80614 9.8181 6.86957 9.74244L14.5587 2.05827C14.6759 1.94123 14.8348 1.87549 15.0004 1.87549C15.166 1.87549 15.3249 1.94123 15.4421 2.05827L17.7996 4.41494C17.8287 4.44564 17.8554 4.47851 17.8796 4.51327ZM16.4737 4.85661L15.0004 3.3841L7.90207 10.4824L7.38123 12.4766L9.3754 11.9558L16.4737 4.85661Z", fill: "black" }), _jsx("path", { d: "M16.3672 14.3001C16.595 12.3534 16.6677 10.3916 16.5847 8.4334C16.5827 8.38725 16.5904 8.34119 16.6072 8.29815C16.624 8.25512 16.6495 8.21604 16.6822 8.1834L17.5022 7.3634C17.5246 7.34086 17.553 7.32528 17.5841 7.31852C17.6151 7.31176 17.6475 7.31411 17.6772 7.32528C17.707 7.33646 17.7329 7.35599 17.7518 7.38153C17.7707 7.40706 17.7818 7.43752 17.7839 7.46923C17.9378 9.79527 17.8792 12.1305 17.6089 14.4459C17.4122 16.1309 16.0589 17.4517 14.3814 17.6392C11.4691 17.9615 8.53024 17.9615 5.61802 17.6392C3.94135 17.4517 2.58719 16.1309 2.39052 14.4459C2.04561 11.492 2.04561 8.50809 2.39052 5.55423C2.58719 3.86923 3.94052 2.5484 5.61802 2.3609C7.82839 2.11677 10.0553 2.0574 12.2755 2.1834C12.3073 2.18568 12.3377 2.19702 12.3633 2.21607C12.3888 2.23513 12.4083 2.2611 12.4196 2.29091C12.4308 2.32073 12.4332 2.35313 12.4266 2.38429C12.42 2.41545 12.4046 2.44406 12.3822 2.46673L11.5547 3.2934C11.5223 3.32577 11.4837 3.35113 11.4411 3.36791C11.3985 3.38468 11.3529 3.39251 11.3072 3.3909C9.45448 3.32744 7.59961 3.39846 5.75719 3.6034C5.2188 3.66299 4.71623 3.90233 4.33065 4.28277C3.94507 4.66321 3.699 5.16253 3.63219 5.70006C3.2979 8.55699 3.2979 11.4431 3.63219 14.3001C3.699 14.8376 3.94507 15.3369 4.33065 15.7174C4.71623 16.0978 5.2188 16.3371 5.75719 16.3967C8.55302 16.7092 11.4464 16.7092 14.243 16.3967C14.7814 16.3371 15.284 16.0978 15.6696 15.7174C16.0551 15.3369 16.3004 14.8376 16.3672 14.3001Z", fill: "black" })] }) })] }), _jsx("div", { className: "logout flex items-center cursor-pointer", children: _jsxs("button", { className: "flex m-2 gap-2 text-red-400 rounded-xl p-2 hover:bg-slate-50 hover:text-teal-600 hover:border-teal-600 border-red-400 border-2", onClick: handleLogout, children: [_jsx("p", { children: "Logout" }), _jsx("span", { children: _jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M5 3H11C11.7956 3 12.5587 3.31607 13.1213 3.87868C13.6839 4.44129 14 5.20435 14 6V10H13V6C13 5.46957 12.7893 4.96086 12.4142 4.58579C12.0391 4.21071 11.5304 4 11 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H11C11.5304 21 12.0391 20.7893 12.4142 20.4142C12.7893 20.0391 13 19.5304 13 19V15H14V19C14 19.7956 13.6839 20.5587 13.1213 21.1213C12.5587 21.6839 11.7956 22 11 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V6C2 5.20435 2.31607 4.44129 2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3ZM8 12H19.25L16 8.75L16.66 8L21.16 12.5L16.66 17L16 16.25L19.25 13H8V12Z", fill: "#FF5E5E" }) }) })] }) })] }), _jsxs("div", { className: "flex", children: [_jsx(CommonInput, { label: "Email", name: "email", defaultValue: profile?.email || "", placeholder: "", icon: _jsx(MdOutlineEmail, { fill: "#1c7a80", fontSize: 17 }), useRef: emailRef, disabled: editingField !== "email", onBlur: () => handleUpdateField("email"), onKeyDown: onKeyDownSave("email") }), _jsx("span", { onClick: () => handleEdit("email"), className: "ml-2 cursor-pointer", children: _jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.8796 4.51327C17.9587 4.63344 17.994 4.77726 17.9794 4.92043C17.9649 5.0636 17.9013 5.19735 17.7996 5.29911L10.1387 12.9591C10.0604 13.0374 9.96258 13.0935 9.8554 13.1216L6.66457 13.9549C6.55909 13.9824 6.44826 13.9819 6.34306 13.9533C6.23787 13.9248 6.14197 13.8692 6.06489 13.7921C5.98782 13.715 5.93224 13.6191 5.90368 13.5139C5.87511 13.4087 5.87456 13.2979 5.90207 13.1924L6.7354 10.0024C6.76032 9.90691 6.80614 9.8181 6.86957 9.74244L14.5587 2.05827C14.6759 1.94123 14.8348 1.87549 15.0004 1.87549C15.166 1.87549 15.3249 1.94123 15.4421 2.05827L17.7996 4.41494C17.8287 4.44564 17.8554 4.47851 17.8796 4.51327ZM16.4737 4.85661L15.0004 3.3841L7.90207 10.4824L7.38123 12.4766L9.3754 11.9558L16.4737 4.85661Z", fill: "black" }), _jsx("path", { d: "M16.3672 14.3001C16.595 12.3534 16.6677 10.3916 16.5847 8.4334C16.5827 8.38725 16.5904 8.34119 16.6072 8.29815C16.624 8.25512 16.6495 8.21604 16.6822 8.1834L17.5022 7.3634C17.5246 7.34086 17.553 7.32528 17.5841 7.31852C17.6151 7.31176 17.6475 7.31411 17.6772 7.32528C17.707 7.33646 17.7329 7.35599 17.7518 7.38153C17.7707 7.40706 17.7818 7.43752 17.7839 7.46923C17.9378 9.79527 17.8792 12.1305 17.6089 14.4459C17.4122 16.1309 16.0589 17.4517 14.3814 17.6392C11.4691 17.9615 8.53024 17.9615 5.61802 17.6392C3.94135 17.4517 2.58719 16.1309 2.39052 14.4459C2.04561 11.492 2.04561 8.50809 2.39052 5.55423C2.58719 3.86923 3.94052 2.5484 5.61802 2.3609C7.82839 2.11677 10.0553 2.0574 12.2755 2.1834C12.3073 2.18568 12.3377 2.19702 12.3633 2.21607C12.3888 2.23513 12.4083 2.2611 12.4196 2.29091C12.4308 2.32073 12.4332 2.35313 12.4266 2.38429C12.42 2.41545 12.4046 2.44406 12.3822 2.46673L11.5547 3.2934C11.5223 3.32577 11.4837 3.35113 11.4411 3.36791C11.3985 3.38468 11.3529 3.39251 11.3072 3.3909C9.45448 3.32744 7.59961 3.39846 5.75719 3.6034C5.2188 3.66299 4.71623 3.90233 4.33065 4.28277C3.94507 4.66321 3.699 5.16253 3.63219 5.70006C3.2979 8.55699 3.2979 11.4431 3.63219 14.3001C3.699 14.8376 3.94507 15.3369 4.33065 15.7174C4.71623 16.0978 5.2188 16.3371 5.75719 16.3967C8.55302 16.7092 11.4464 16.7092 14.243 16.3967C14.7814 16.3371 15.284 16.0978 15.6696 15.7174C16.0551 15.3369 16.3004 14.8376 16.3672 14.3001Z", fill: "black" })] }) })] }), _jsxs("div", { className: "flex", children: [_jsx(CommonInput, { label: "Password", name: "password", defaultValue: "************", placeholder: "Write your password here", icon: _jsx(FaLock, { fill: "#1c7a80", fontSize: 17 }), disabled: true }), _jsx("span", { onClick: () => setshowPopUp(true), className: "ml-2 cursor-pointer", children: _jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.8796 4.51327C17.9587 4.63344 17.994 4.77726 17.9794 4.92043C17.9649 5.0636 17.9013 5.19735 17.7996 5.29911L10.1387 12.9591C10.0604 13.0374 9.96258 13.0935 9.8554 13.1216L6.66457 13.9549C6.55909 13.9824 6.44826 13.9819 6.34306 13.9533C6.23787 13.9248 6.14197 13.8692 6.06489 13.7921C5.98782 13.715 5.93224 13.6191 5.90368 13.5139C5.87511 13.4087 5.87456 13.2979 5.90207 13.1924L6.7354 10.0024C6.76032 9.90691 6.80614 9.8181 6.86957 9.74244L14.5587 2.05827C14.6759 1.94123 14.8348 1.87549 15.0004 1.87549C15.166 1.87549 15.3249 1.94123 15.4421 2.05827L17.7996 4.41494C17.8287 4.44564 17.8554 4.47851 17.8796 4.51327ZM16.4737 4.85661L15.0004 3.3841L7.90207 10.4824L7.38123 12.4766L9.3754 11.9558L16.4737 4.85661Z", fill: "black" }), _jsx("path", { d: "M16.3672 14.3001C16.595 12.3534 16.6677 10.3916 16.5847 8.4334C16.5827 8.38725 16.5904 8.34119 16.6072 8.29815C16.624 8.25512 16.6495 8.21604 16.6822 8.1834L17.5022 7.3634C17.5246 7.34086 17.553 7.32528 17.5841 7.31852C17.6151 7.31176 17.6475 7.31411 17.6772 7.32528C17.707 7.33646 17.7329 7.35599 17.7518 7.38153C17.7707 7.40706 17.7818 7.43752 17.7839 7.46923C17.9378 9.79527 17.8792 12.1305 17.6089 14.4459C17.4122 16.1309 16.0589 17.4517 14.3814 17.6392C11.4691 17.9615 8.53024 17.9615 5.61802 17.6392C3.94135 17.4517 2.58719 16.1309 2.39052 14.4459C2.04561 11.492 2.04561 8.50809 2.39052 5.55423C2.58719 3.86923 3.94052 2.5484 5.61802 2.3609C7.82839 2.11677 10.0553 2.0574 12.2755 2.1834C12.3073 2.18568 12.3377 2.19702 12.3633 2.21607C12.3888 2.23513 12.4083 2.2611 12.4196 2.29091C12.4308 2.32073 12.4332 2.35313 12.4266 2.38429C12.42 2.41545 12.4046 2.44406 12.3822 2.46673L11.5547 3.2934C11.5223 3.32577 11.4837 3.35113 11.4411 3.36791C11.3985 3.38468 11.3529 3.39251 11.3072 3.3909C9.45448 3.32744 7.59961 3.39846 5.75719 3.6034C5.2188 3.66299 4.71623 3.90233 4.33065 4.28277C3.94507 4.66321 3.699 5.16253 3.63219 5.70006C3.2979 8.55699 3.2979 11.4431 3.63219 14.3001C3.699 14.8376 3.94507 15.3369 4.33065 15.7174C4.71623 16.0978 5.2188 16.3371 5.75719 16.3967C8.55302 16.7092 11.4464 16.7092 14.243 16.3967C14.7814 16.3371 15.284 16.0978 15.6696 15.7174C16.0551 15.3369 16.3004 14.8376 16.3672 14.3001Z", fill: "black" })] }) })] }), _jsxs("div", { className: "flex", children: [_jsx(CommonInput, { label: "Phone Number (OPTIONAL)", name: "phone-number", defaultValue: profile?.phoneNumber || "", placeholder: "+92 (555) 555-555", icon: _jsx(FiPhone, { className: "text-gray-400 text-xl" }), useRef: phoneRef, disabled: editingField !== "phoneNumber", onBlur: () => handleUpdateField("phoneNumber"), onKeyDown: onKeyDownSave("phoneNumber") }), _jsx("span", { onClick: () => handleEdit("phoneNumber"), className: "ml-2 cursor-pointer", children: _jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.8796 4.51327C17.9587 4.63344 17.994 4.77726 17.9794 4.92043C17.9649 5.0636 17.9013 5.19735 17.7996 5.29911L10.1387 12.9591C10.0604 13.0374 9.96258 13.0935 9.8554 13.1216L6.66457 13.9549C6.55909 13.9824 6.44826 13.9819 6.34306 13.9533C6.23787 13.9248 6.14197 13.8692 6.06489 13.7921C5.98782 13.715 5.93224 13.6191 5.90368 13.5139C5.87511 13.4087 5.87456 13.2979 5.90207 13.1924L6.7354 10.0024C6.76032 9.90691 6.80614 9.8181 6.86957 9.74244L14.5587 2.05827C14.6759 1.94123 14.8348 1.87549 15.0004 1.87549C15.166 1.87549 15.3249 1.94123 15.4421 2.05827L17.7996 4.41494C17.8287 4.44564 17.8554 4.47851 17.8796 4.51327ZM16.4737 4.85661L15.0004 3.3841L7.90207 10.4824L7.38123 12.4766L9.3754 11.9558L16.4737 4.85661Z", fill: "black" }), _jsx("path", { d: "M16.3672 14.3001C16.595 12.3534 16.6677 10.3916 16.5847 8.4334C16.5827 8.38725 16.5904 8.34119 16.6072 8.29815C16.624 8.25512 16.6495 8.21604 16.6822 8.1834L17.5022 7.3634C17.5246 7.34086 17.553 7.32528 17.5841 7.31852C17.6151 7.31176 17.6475 7.31411 17.6772 7.32528C17.707 7.33646 17.7329 7.35599 17.7518 7.38153C17.7707 7.40706 17.7818 7.43752 17.7839 7.46923C17.9378 9.79527 17.8792 12.1305 17.6089 14.4459C17.4122 16.1309 16.0589 17.4517 14.3814 17.6392C11.4691 17.9615 8.53024 17.9615 5.61802 17.6392C3.94135 17.4517 2.58719 16.1309 2.39052 14.4459C2.04561 11.492 2.04561 8.50809 2.39052 5.55423C2.58719 3.86923 3.94052 2.5484 5.61802 2.3609C7.82839 2.11677 10.0553 2.0574 12.2755 2.1834C12.3073 2.18568 12.3377 2.19702 12.3633 2.21607C12.3888 2.23513 12.4083 2.2611 12.4196 2.29091C12.4308 2.32073 12.4332 2.35313 12.4266 2.38429C12.42 2.41545 12.4046 2.44406 12.3822 2.46673L11.5547 3.2934C11.5223 3.32577 11.4837 3.35113 11.4411 3.36791C11.3985 3.38468 11.3529 3.39251 11.3072 3.3909C9.45448 3.32744 7.59961 3.39846 5.75719 3.6034C5.2188 3.66299 4.71623 3.90233 4.33065 4.28277C3.94507 4.66321 3.699 5.16253 3.63219 5.70006C3.2979 8.55699 3.2979 11.4431 3.63219 14.3001C3.699 14.8376 3.94507 15.3369 4.33065 15.7174C4.71623 16.0978 5.2188 16.3371 5.75719 16.3967C8.55302 16.7092 11.4464 16.7092 14.243 16.3967C14.7814 16.3371 15.284 16.0978 15.6696 15.7174C16.0551 15.3369 16.3004 14.8376 16.3672 14.3001Z", fill: "black" })] }) })] }), _jsx("div", { className: "flex flex-col lg:flex-row gap-4 mb-6 p-3", children: profile?.skills.map((skill) => (_jsx("button", { className: `border rounded-2xl p-4 text-center transition duration-300 ${Skill === skill
                        ? "bg-gradient-to-t from-[#00787B] to-[#003F41] text-white shadow-lg"
                        : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"}`, children: _jsx("p", { className: "font-medium", children: skill }) }, skill))) }), _jsxs("div", { className: "flex", children: [_jsx(CommonInput, { label: "Other Skills (OPTIONAL)", name: "other-skills", placeholder: "other skills ....", defaultValue: profile?.otherSkill || "", useRef: otherSkillRef, disabled: editingField !== "otherSkill", onBlur: () => handleUpdateField("otherSkill"), onKeyDown: onKeyDownSave("otherSkill") }), _jsx("span", { onClick: () => handleEdit("otherSkill"), className: "ml-2 cursor-pointer", children: _jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.8796 4.51327C17.9587 4.63344 17.994 4.77726 17.9794 4.92043C17.9649 5.0636 17.9013 5.19735 17.7996 5.29911L10.1387 12.9591C10.0604 13.0374 9.96258 13.0935 9.8554 13.1216L6.66457 13.9549C6.55909 13.9824 6.44826 13.9819 6.34306 13.9533C6.23787 13.9248 6.14197 13.8692 6.06489 13.7921C5.98782 13.715 5.93224 13.6191 5.90368 13.5139C5.87511 13.4087 5.87456 13.2979 5.90207 13.1924L6.7354 10.0024C6.76032 9.90691 6.80614 9.8181 6.86957 9.74244L14.5587 2.05827C14.6759 1.94123 14.8348 1.87549 15.0004 1.87549C15.166 1.87549 15.3249 1.94123 15.4421 2.05827L17.7996 4.41494C17.8287 4.44564 17.8554 4.47851 17.8796 4.51327ZM16.4737 4.85661L15.0004 3.3841L7.90207 10.4824L7.38123 12.4766L9.3754 11.9558L16.4737 4.85661Z", fill: "black" }), _jsx("path", { d: "M16.3672 14.3001C16.595 12.3534 16.6677 10.3916 16.5847 8.4334C16.5827 8.38725 16.5904 8.34119 16.6072 8.29815C16.624 8.25512 16.6495 8.21604 16.6822 8.1834L17.5022 7.3634C17.5246 7.34086 17.553 7.32528 17.5841 7.31852C17.6151 7.31176 17.6475 7.31411 17.6772 7.32528C17.707 7.33646 17.7329 7.35599 17.7518 7.38153C17.7707 7.40706 17.7818 7.43752 17.7839 7.46923C17.9378 9.79527 17.8792 12.1305 17.6089 14.4459C17.4122 16.1309 16.0589 17.4517 14.3814 17.6392C11.4691 17.9615 8.53024 17.9615 5.61802 17.6392C3.94135 17.4517 2.58719 16.1309 2.39052 14.4459C2.04561 11.492 2.04561 8.50809 2.39052 5.55423C2.58719 3.86923 3.94052 2.5484 5.61802 2.3609C7.82839 2.11677 10.0553 2.0574 12.2755 2.1834C12.3073 2.18568 12.3377 2.19702 12.3633 2.21607C12.3888 2.23513 12.4083 2.2611 12.4196 2.29091C12.4308 2.32073 12.4332 2.35313 12.4266 2.38429C12.42 2.41545 12.4046 2.44406 12.3822 2.46673L11.5547 3.2934C11.5223 3.32577 11.4837 3.35113 11.4411 3.36791C11.3985 3.38468 11.3529 3.39251 11.3072 3.3909C9.45448 3.32744 7.59961 3.39846 5.75719 3.6034C5.2188 3.66299 4.71623 3.90233 4.33065 4.28277C3.94507 4.66321 3.699 5.16253 3.63219 5.70006C3.2979 8.55699 3.2979 11.4431 3.63219 14.3001C3.699 14.8376 3.94507 15.3369 4.33065 15.7174C4.71623 16.0978 5.2188 16.3371 5.75719 16.3967C8.55302 16.7092 11.4464 16.7092 14.243 16.3967C14.7814 16.3371 15.284 16.0978 15.6696 15.7174C16.0551 15.3369 16.3004 14.8376 16.3672 14.3001Z", fill: "black" })] }) })] }), _jsxs("div", { className: "Bio w-full", children: [_jsxs("div", { className: "Bio-Header flex justify-between items-center mb-1", children: [_jsx("label", { htmlFor: "bio", className: "block text-sm font-medium mb-1", children: "Bio" }), _jsx("span", { onClick: () => handleEdit("bio"), className: "mt-2 inline-block cursor-pointer", children: _jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.8796 4.51327C17.9587 4.63344 17.994 4.77726 17.9794 4.92043C17.9649 5.0636 17.9013 5.19735 17.7996 5.29911L10.1387 12.9591C10.0604 13.0374 9.96258 13.0935 9.8554 13.1216L6.66457 13.9549C6.55909 13.9824 6.44826 13.9819 6.34306 13.9533C6.23787 13.9248 6.14197 13.8692 6.06489 13.7921C5.98782 13.715 5.93224 13.6191 5.90368 13.5139C5.87511 13.4087 5.87456 13.2979 5.90207 13.1924L6.7354 10.0024C6.76032 9.90691 6.80614 9.8181 6.86957 9.74244L14.5587 2.05827C14.6759 1.94123 14.8348 1.87549 15.0004 1.87549C15.166 1.87549 15.3249 1.94123 15.4421 2.05827L17.7996 4.41494C17.8287 4.44564 17.8554 4.47851 17.8796 4.51327ZM16.4737 4.85661L15.0004 3.3841L7.90207 10.4824L7.38123 12.4766L9.3754 11.9558L16.4737 4.85661Z", fill: "black" }), _jsx("path", { d: "M16.3672 14.3001C16.595 12.3534 16.6677 10.3916 16.5847 8.4334C16.5827 8.38725 16.5904 8.34119 16.6072 8.29815C16.624 8.25512 16.6495 8.21604 16.6822 8.1834L17.5022 7.3634C17.5246 7.34086 17.553 7.32528 17.5841 7.31852C17.6151 7.31176 17.6475 7.31411 17.6772 7.32528C17.707 7.33646 17.7329 7.35599 17.7518 7.38153C17.7707 7.40706 17.7818 7.43752 17.7839 7.46923C17.9378 9.79527 17.8792 12.1305 17.6089 14.4459C17.4122 16.1309 16.0589 17.4517 14.3814 17.6392C11.4691 17.9615 8.53024 17.9615 5.61802 17.6392C3.94135 17.4517 2.58719 16.1309 2.39052 14.4459C2.04561 11.492 2.04561 8.50809 2.39052 5.55423C2.58719 3.86923 3.94052 2.5484 5.61802 2.3609C7.82839 2.11677 10.0553 2.0574 12.2755 2.1834C12.3073 2.18568 12.3377 2.19702 12.3633 2.21607C12.3888 2.23513 12.4083 2.2611 12.4196 2.29091C12.4308 2.32073 12.4332 2.35313 12.4266 2.38429C12.42 2.41545 12.4046 2.44406 12.3822 2.46673L11.5547 3.2934C11.5223 3.32577 11.4837 3.35113 11.4411 3.36791C11.3985 3.38468 11.3529 3.39251 11.3072 3.3909C9.45448 3.32744 7.59961 3.39846 5.75719 3.6034C5.2188 3.66299 4.71623 3.90233 4.33065 4.28277C3.94507 4.66321 3.699 5.16253 3.63219 5.70006C3.2979 8.55699 3.2979 11.4431 3.63219 14.3001C3.699 14.8376 3.94507 15.3369 4.33065 15.7174C4.71623 16.0978 5.2188 16.3371 5.75719 16.3967C8.55302 16.7092 11.4464 16.7092 14.243 16.3967C14.7814 16.3371 15.284 16.0978 15.6696 15.7174C16.0551 15.3369 16.3004 14.8376 16.3672 14.3001Z", fill: "black" })] }) })] }), _jsx("textarea", { id: "bio", name: "bio", placeholder: "Tell us more about yourself...", rows: 4, className: "w-full p-3 rounded-md focus:ring-teal-600 border border-gray-300 disabled:bg-gray-100", defaultValue: profile?.bio || "", ref: bioRef, disabled: editingField !== "bio", onBlur: () => handleUpdateField("bio") }), editingField !== "bio" && !profile?.bio && (_jsx("p", { className: "text-sm text-gray-400 mt-1", children: "No bio added" }))] }), _jsx("div", { className: "flex justify-start items-center p-3", children: _jsx(DeleteBtn, { onClick: deleteUser }) }), showPopUp && _jsx(ChangeInput, { onClose: () => setshowPopUp(false) })] }));
}
