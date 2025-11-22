import UserItemProps from "@/components/interfaces/UserItemProps";
import { JSX } from "react";

export default function UserItem({
  name,
  message,
  time,
  active,
  group,
  img,
}: UserItemProps): JSX.Element {
  return (
    <div
      className={`p-3 rounded cursor-pointer ${
        active ? "bg-orange-200" : "hover:bg-gray-100"
      }`}
    >
      {/* Avatar */}

      {group ? (
        <div className="w-full">
          <div className="flex gap-2">
            <img
              src={img} // Replace with group avatar or icon
              alt="Group"
              className="w-14 h-14 mr-3 rounded-full object-cover"
            />
            <div className="flex flex-col gap-2">
              <h1>{name}</h1>
              
              <p className="text-sm text-gray-500">{message}</p>
              <p className="text-xs text-gray-400">{time}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 m-1">
          <img
            src={img}
            alt="Person Image"
            className="w-14 h-14 object-cover rounded-full"
          />
          <div className="flex flex-col">
            <p className="font-semibold text-gray-800">{name}</p>
            <p className="text-sm text-gray-500">{message}</p>
            <p className="text-xs text-gray-400">{time}</p>
          </div>
        </div>
      )}
    </div>
  );
}
