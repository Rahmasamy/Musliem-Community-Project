import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
const PlanCard = ({ title, subtitle, price, perMonth, features, buttonColor, popular = false, plan_id, }) => {
    const navigate = useNavigate();
    return (_jsxs("div", { className: `border rounded-lg shadow-md p-6 flex flex-col items-center w-full md:w-1/3 
        ${popular ? "relative border-teal-500" : ""}`, children: [popular && (_jsx("span", { className: "absolute -top-3 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full", children: "Most Popular" })), _jsx("h2", { className: "text-xl font-bold", children: title }), _jsx("p", { className: "text-gray-500 mb-3", children: subtitle }), _jsxs("p", { className: "text-3xl font-bold", children: ["$", price] }), _jsx("p", { className: "text-sm text-gray-400 mb-5", children: perMonth }), _jsx("button", { className: `w-full py-2 px-4 rounded-md text-white font-semibold transition hover:opacity-90 mb-5 ${buttonColor}`, onClick: () => {
                    navigate("/checkout", {
                        state: { title, price, plan_id }, // send data to checkout
                    });
                }, children: "Get Started" }), _jsx("ul", { className: "text-gray-700 text-sm text-left w-full", children: features.map((feature, index) => (_jsxs("li", { className: "flex items-center gap-2 mb-2", children: [_jsx("span", { className: "text-green-500 font-bold", children: "\u2714" }), " ", feature] }, index))) })] }));
};
export default PlanCard;
