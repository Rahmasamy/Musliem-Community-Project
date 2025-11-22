import { jsx as _jsx } from "react/jsx-runtime";
export default function TealButton({ onClick }) {
    return (_jsx("div", { className: "flex justify-center mt-6", children: _jsx("button", { className: "bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full shadow", onClick: onClick, children: "Load More" }) }));
}
