import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import "./Title.css";
export default function Title({ title }) {
    return (_jsx(_Fragment, { children: _jsx("h2", { style: { fontSize: "17px", fontWeight: "bold" }, children: title }) }));
}
