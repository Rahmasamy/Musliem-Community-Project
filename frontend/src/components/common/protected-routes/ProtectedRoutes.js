import { jsx as _jsx } from "react/jsx-runtime";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children, requiredRole, }) {
    const loginUser = useAuth();
    const user = loginUser?.user;
    console.log("from protected routes", user);
    if (!user) {
        return _jsx(Navigate, { to: "/login", replace: true });
    }
    if (requiredRole && user.role !== requiredRole) {
        return _jsx(Navigate, { to: "/login", replace: true });
    }
    return children;
}
