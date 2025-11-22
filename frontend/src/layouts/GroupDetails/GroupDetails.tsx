import { Link, useNavigate, useParams } from "react-router-dom";
import viewMessage from "@/assets/icons/message.png";
import groupPerson1 from "@/assets/imgs/groupperson1.jpg";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { Group, User } from "@/utils/context-interface/groupInterface";
import { useAuthStore } from "@/store/authStore";

export default function GroupDetails() {
  const { id } = useParams();

  const [group, setGroup] = useState<Group>();
  const AuthState = useAuthStore();
    const navigate = useNavigate();

  console.log("Auth stores user", AuthState.user?._id);
  const userId = AuthState.user?._id;
  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const res = await axiosInstance.get(`groups/${id}`);
        setGroup(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (id) {
      fetchGroup();
    }
  }, [id]);

  if (!group) return <p>Loading...</p>;

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
  }


  const handlePrivateChat = (selectedUser:User) => {
  if (!selectedUser?._id) return;

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

  return (
    <>
     <div className="p-4 w-full flex flex-col justify-center items-center gap-3">
  {/* Header */}
  <div className="p-3 w-full rounded flex flex-col md:flex-row justify-between items-center text-center md:text-left">
    <h1 className="font-bold text-2xl mb-3 md:mb-0">Group Details</h1>
    <button
      onClick={handleViewMessages}
      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow"
    >
      View Messages
      <img src={viewMessage} alt="view Message" />
    </button>
  </div>

  {/* Group Info */}
  <div className="flex flex-col md:flex-row bg-slate-100 w-full justify-start my-5 gap-3 md:h-96">
    <div className="flex justify-center items-center w-full md:w-1/2">
      <img
        src={
          group.image
            ? `${group.image}`
            : "https://tse2.mm.bing.net/th/id/OIP.QxyJPitKvOFt8gdSX2G3LwHaFV?rs=1&pid=ImgDetMain&o=7&rm=3"
        }
        alt={group.name || "Group Image"}
        className="w-full h-64 md:h-96 object-cover rounded"
        onError={(e) => {
          e.currentTarget.src = groupPerson1;
        }}
      />
    </div>
    <div className="p-3 w-full md:w-1/2">
      <h2 className="p-3 font-bold text-xl">{group.name}</h2>
      <p className="text-gray-700 text-sm md:text-base">
        {group.description.length > 500
          ? `${group.description.slice(0, 500)}...`
          : group.description}
      </p>
    </div>
  </div>

  {/* Members */}
  <div className="w-full p-2 flex flex-col gap-4 justify-center">
    <h1 className="font-bold text-2xl mt-3 text-center">Group Members</h1>
    <p className="text-gray-500 text-center">{group.members.length} members</p>
    <div className="users p-2">
      <div className="flex flex-wrap gap-3 justify-center">
        {group.members.map((member, index) => (
          <div
            className="w-full sm:w-[48%] lg:w-[30%] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            key={index}
          >
            <div className="flex items-center gap-4">
              {(() => {
                const raw = member.user?.photo as unknown as string | undefined;
                const hasImage = Boolean(raw);
                const normalizedBase = BASE_URL.replace(/\/$/, "");
                const normalizedPath = (raw || "").replace(/^\//, "");
                const src = hasImage
                  ? raw!.startsWith("http")
                    ? raw!
                    : `${normalizedBase}/${normalizedPath}`
                  : "https://tse2.mm.bing.net/th/id/OIP.QxyJPitKvOFt8gdSX2G3LwHaFV?rs=1&pid=ImgDetMain&o=7&rm=3";
                return (
                  <img
                    src={src}
                    alt={member.user?.fullName || "Member"}
                    className="w-16 h-16 object-cover rounded-full border-2 border-white"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://blogs.autodesk.com/autodesk-life/wp-content/uploads/sites/160/Legal.jpg";
                    }}
                  />
                );
              })()}

              <div className="personDetails flex flex-col lg:flex justify-between items-start lg:items-center w-full">
                <div className="person">
                  <h1 className="text-lg font-semibold text-black">
                    {member.user?.fullName || "Unknown User"}
                  </h1>
                  <p className="py-2 text-gray-400">{member.user?.email}</p>
                  <p
                    className="text-sm text-gray-500 cursor-pointer hover:text-orange-500 transition-colors flex gap-2 items-center"
                    onClick={() => member.user && handlePrivateChat(member.user)}
                  >
                    <span>
                      <IoChatbubbleEllipsesOutline />
                    </span>
                    Send Message
                  </p>
                </div>
                <div className="personType text-amber-500">{member.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Load More */}
  {/* <div className="w-full flex justify-center items-center">
    <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full shadow">
      Load More
    </button>
  </div> */}
</div>

    </>
  );
}
