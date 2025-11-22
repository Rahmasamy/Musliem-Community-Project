import React from "react";
interface TealButtonProps {
  onClick: () => void;
}

export default function TealButton({onClick} : TealButtonProps) {
  return (
    <div className="flex justify-center mt-6">
      <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full shadow"
      onClick={onClick}
      >
        Load More
      </button>
    </div>
  );
}
