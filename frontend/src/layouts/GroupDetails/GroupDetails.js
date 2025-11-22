import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate, useParams } from "react-router-dom";
import viewMessage from "@/assets/icons/message.png";
import groupPerson1 from "@/assets/imgs/groupperson1.jpg";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { useAuthStore } from "@/store/authStore";
export default function GroupDetails() {
    const { id } = useParams();
    const [group, setGroup] = useState();
    const AuthState = useAuthStore();
    const navigate = useNavigate();
    console.log("Auth stores user", AuthState.user?._id);
    const userId = AuthState.user?._id;
    useEffect(() => {
        const fetchGroup = async () => {
            try {
                const res = await axiosInstance.get(`groups/${id}`);
                setGroup(res.data);
            }
            catch (err) {
                console.error(err);
            }
        };
        if (id) {
            fetchGroup();
        }
    }, [id]);
    if (!group)
        return _jsx("p", { children: "Loading..." });
    const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";
    const handleViewMessages = () => {
        navigate(`/messages/user/${userId}/true`, {
            state: {
                selectedChat: {
                    id: group._id,
                    type: "group",
                    chatName: group.name,
                    chatImage: group.image,
                },
            },
        });
    };
    const handlePrivateChat = (selectedUser) => {
        if (!selectedUser?._id)
            return;
        // const userImage = selectedUser.photo
        //   ? selectedUser.photo.startsWith("http")
        //     ? selectedUser.photo
        //     : `${BASE_URL}/${selectedUser.photo.replace(/^\//, "")}`
        //   : "https://tse2.mm.bing.net/th/id/OIP.QxyJPitKvOFt8gdSX2G3LwHaFV?rs=1&pid=ImgDetMain&o=7&rm=3";
        navigate(`/messages/user/${selectedUser._id}/false`, {
            state: {
                selectedChat: {
                    id: selectedUser._id,
                    type: "private",
                    chatName: selectedUser.fullName || "Unknown User",
                    chatImage: selectedUser.photo,
                },
            },
        });
    };
    console.log("group is", group);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "p-4 w-full flex flex-col justify-center items-center gap-3", children: [_jsxs("div", { className: "p-3 w-full rounded flex flex-col md:flex-row justify-between items-center text-center md:text-left", children: [_jsx("h1", { className: "font-bold text-2xl mb-3 md:mb-0", children: "Group Details" }), _jsxs("button", { onClick: handleViewMessages, className: "bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow", children: ["View Messages", _jsx("img", { src: viewMessage, alt: "view Message" })] })] }), _jsxs("div", { className: "flex flex-col md:flex-row bg-slate-100 w-full justify-start my-5 gap-3 md:h-96", children: [_jsx("div", { className: "flex justify-center items-center w-full md:w-1/2", children: _jsx("img", { src: group.image
                                    ? `${group.image}`
                                    : "https://tse2.mm.bing.net/th/id/OIP.QxyJPitKvOFt8gdSX2G3LwHaFV?rs=1&pid=ImgDetMain&o=7&rm=3", alt: group.name || "Group Image", className: "w-full h-64 md:h-96 object-cover rounded", onError: (e) => {
                                    e.currentTarget.src = groupPerson1;
                                } }) }), _jsxs("div", { className: "p-3 w-full md:w-1/2", children: [_jsx("h2", { className: "p-3 font-bold text-xl", children: group.name }), _jsx("p", { className: "text-gray-700 text-sm md:text-base", children: group.description.length > 500
                                        ? `${group.description.slice(0, 500)}...`
                                        : group.description })] })] }), _jsxs("div", { className: "w-full p-2 flex flex-col gap-4 justify-center", children: [_jsx("h1", { className: "font-bold text-2xl mt-3 text-center", children: "Group Members" }), _jsxs("p", { className: "text-gray-500 text-center", children: [group.members.length, " members"] }), _jsx("div", { className: "users p-2", children: _jsx("div", { className: "flex flex-wrap gap-3 justify-center", children: group.members.map((member, index) => (_jsx("div", { className: "w-full sm:w-[48%] lg:w-[30%] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300", children: _jsxs("div", { className: "flex items-center gap-4", children: [(() => {
                                                const raw = member.user?.photo;
                                                const hasImage = Boolean(raw);
                                                const normalizedBase = BASE_URL.replace(/\/$/, "");
                                                const normalizedPath = (raw || "").replace(/^\//, "");
                                                const src = hasImage
                                                    ? raw.startsWith("http")
                                                        ? raw
                                                        : `${normalizedBase}/${normalizedPath}`
                                                    : "https://tse2.mm.bing.net/th/id/OIP.QxyJPitKvOFt8gdSX2G3LwHaFV?rs=1&pid=ImgDetMain&o=7&rm=3";
                                                return (_jsx("img", { src: src, alt: member.user?.fullName || "Member", className: "w-16 h-16 object-cover rounded-full border-2 border-white", onError: (e) => {
                                                        e.currentTarget.src =
                                                            "https://blogs.autodesk.com/autodesk-life/wp-content/uploads/sites/160/Legal.jpg";
                                                    } }));
                                            })(), _jsxs("div", { className: "personDetails flex flex-col lg:flex justify-between items-start lg:items-center w-full", children: [_jsxs("div", { className: "person", children: [_jsx("h1", { className: "text-lg font-semibold text-black", children: member.user?.fullName || "Unknown User" }), _jsx("p", { className: "py-2 text-gray-400", children: member.user?.email }), _jsxs("p", { className: "text-sm text-gray-500 cursor-pointer hover:text-orange-500 transition-colors flex gap-2 items-center", onClick: () => member.user && handlePrivateChat(member.user), children: [_jsx("span", { children: _jsx(IoChatbubbleEllipsesOutline, {}) }), "Send Message"] })] }), _jsx("div", { className: "personType text-amber-500", children: member.role })] })] }) }, index))) }) })] })] }) }));
}
