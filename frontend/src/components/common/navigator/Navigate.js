import { jsxs as _jsxs } from "react/jsx-runtime";
import "./Navigate.css";
export default function Navigate({ home, arg2, arg3, }) {
    return (_jsxs("div", { className: "NavigatorContainer font-bold", children: [_jsxs("h2", { children: [home, " "] }), _jsxs("span", { className: "text-gray-500 text-md", children: [home, arg2 && " - ", arg2, arg3 && " - ", arg3] })] }));
}
