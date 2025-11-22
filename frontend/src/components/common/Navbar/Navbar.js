import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/imgs/logo.png";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useProfileStore } from "@/store/useProfileStore";
import useDebounce from "@/hooks/useDebounce";
import axiosInstance from "@/utils/axiosInstance";
import SearchResults from "../searchResult/SearchResults";
export default function Navbar() {
    const location = useLocation();
    const [showServices, setShowServices] = useState(false);
    const [showinput, setShowInput] = useState(false);
    const [query, setQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [results, setResults] = useState({
        services: [],
        groups: [],
        products: [],
        events: [],
    });
    const AuthState = useAuthStore();
    console.log("Auth stores user", AuthState.user);
    const userId = AuthState.user?._id;
    const profileState = useProfileStore();
    const { profile } = profileState;
    const role = AuthState.user?.role;
    const toggleService = () => {
        setShowServices((prev) => !prev);
    };
    const debounce = useDebounce(query, 500);
    const searchRef = useRef(null);
    useEffect(() => {
        if (debounce.trim() === "") {
            setResults({ services: [], groups: [], products: [], events: [] });
            return;
        }
        const fetchResults = async () => {
            try {
                const { data } = await axiosInstance.get(`/search?q=${debounce}`);
                setResults(data);
            }
            catch (error) {
                console.error(error);
            }
        };
        fetchResults();
    }, [debounce]);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current &&
                !searchRef.current.contains(event.target)) {
                setShowInput(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);
    return (_jsxs("div", { className: "header w-full flex justify-center items-center flex-col", children: [_jsxs("div", { className: "navbar-container w-[95%] flex justify-between md:justify-around items-center", children: [_jsxs("div", { className: "logo flex gap-1 items-center", children: [_jsx("img", { src: logo, alt: "Logo Image" }), _jsx("h2", { children: "MCUS" })] }), _jsx("div", { className: "navLinks hidden lg:flex items-center", children: _jsxs("ul", { className: "flex gap-1 items-center cursor-pointer", children: [_jsx("li", { children: _jsx(Link, { to: "/", onClick: () => setIsMobileMenuOpen(false), children: "Home" }) }), _jsx("li", { children: _jsx(Link, { to: "/Groups", onClick: () => setIsMobileMenuOpen(false), children: "Groups" }) }), _jsx("li", { children: _jsx(Link, { to: "/Events", onClick: () => setIsMobileMenuOpen(false), children: "Events" }) }), _jsx("li", { className: "flex items-center text-center relative cursor-pointer", onClick: toggleService, children: _jsx(Link, { to: "/ServicesPage", children: "Services" }) }), _jsx("li", { children: _jsx(Link, { to: "/halal-business-dirctory", onClick: () => setIsMobileMenuOpen(false), children: "Market Place" }) }), _jsx("li", { children: _jsx(Link, { to: "/contactus", onClick: () => setIsMobileMenuOpen(false), children: "Contact Us" }) })] }) }), _jsxs("div", { className: "Logos hidden lg:flex items-center", children: [location.pathname === "/" && (_jsx("span", { children: _jsx(CiSearch, { fontSize: 25, onClick: () => setShowInput(true), className: "cursor-pointer" }) })), _jsx(Link, { to: `/messages/user/${userId}/false`, children: _jsx(MdOutlineMail, { fontSize: 25 }) }), AuthState?.user ? (_jsxs(Link, { to: "/profilePage", className: "flex items-center space-x-2", children: [_jsx("img", { src: AuthState.user?.photo
                                            ? `${AuthState.user.photo}`
                                            : profile?.photo
                                                ? `${profile.photo}`
                                                : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg", alt: "profile", className: "w-12 h-10 rounded-full object-cover" }), _jsx("span", { className: "hidden lg:inline", children: AuthState.user?.fullName })] })) : (_jsx(Link, { className: "login-btn flex items-center space-x-2", to: "/login", children: _jsx("span", { className: "px-6 py-1 rounded-lg", children: "Login" }) }))] }), _jsx("div", { className: "mobile-controls flex lg:hidden items-center", children: _jsx("button", { onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), className: "mobile-menu-button p-2", "aria-label": "Toggle menu", children: isMobileMenuOpen ? (_jsx(HiX, { fontSize: 28 })) : (_jsx(HiMenu, { fontSize: 28 })) }) })] }), _jsx("div", { className: `mobile-menu w-full lg:hidden ${isMobileMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"}`, children: _jsxs("div", { className: "mobile-menu-content p-4", children: [_jsxs("div", { className: "mobile-menu-icons flex items-center justify-center gap-4 mb-4 pb-4 border-b", children: [location.pathname === "/" && (_jsx("span", { children: _jsx(CiSearch, { fontSize: 25, onClick: () => setShowInput(true), className: "cursor-pointer" }) })), _jsx(Link, { to: `/messages/user/${userId}/false`, onClick: () => setIsMobileMenuOpen(false), children: _jsx(MdOutlineMail, { fontSize: 25 }) }), AuthState?.user ? (_jsxs(Link, { to: "/profilePage", className: "flex items-center gap-2", onClick: () => setIsMobileMenuOpen(false), children: [_jsx("img", { src: AuthState.user?.photo
                                                ? `${AuthState.user.photo}`
                                                : profile?.photo
                                                    ? `${profile.photo}`
                                                    : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg", alt: "profile", className: "w-10 h-10 rounded-full object-cover" }), _jsx("span", { children: AuthState.user?.fullName })] })) : (_jsx(Link, { className: "login-btn flex items-center space-x-2", to: "/login", onClick: () => setIsMobileMenuOpen(false), children: _jsx("span", { className: "px-4 py-1 rounded-lg text-sm", children: "Login" }) }))] }), _jsxs("ul", { className: "flex flex-col gap-4 cursor-pointer", children: [_jsx("li", { children: _jsx(Link, { to: "/", onClick: () => setIsMobileMenuOpen(false), children: "Home" }) }), _jsx("li", { children: _jsx(Link, { to: "/Groups", onClick: () => setIsMobileMenuOpen(false), children: "Groups" }) }), _jsx("li", { children: _jsx(Link, { to: "/Events", onClick: () => setIsMobileMenuOpen(false), children: "Events" }) }), _jsx("li", { className: "flex items-center text-center relative cursor-pointer", onClick: toggleService, children: _jsx(Link, { to: "/ServicesPage", onClick: () => setIsMobileMenuOpen(false), children: "Services" }) }), role === "admin" && (_jsx("li", { children: _jsx(Link, { to: "/admin-dashboard", onClick: () => setIsMobileMenuOpen(false), children: "Admin-dashboard" }) })), _jsx("li", { children: _jsx(Link, { to: "/halal-business-dirctory", onClick: () => setIsMobileMenuOpen(false), children: "Halal Business Dirctory" }) }), _jsx("li", { children: _jsx(Link, { to: "/contactus", onClick: () => setIsMobileMenuOpen(false), children: "Contact Us" }) })] })] }) }), _jsxs("div", { className: "relative w-full flex justify-center items-center", ref: searchRef, children: [showinput && (_jsx("input", { type: "text", name: "searchInput", placeholder: "Search...", autoFocus: true, className: "my-2 w-5/6 border border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm transition duration-200", onBlur: () => setShowInput(false), value: query, onChange: (e) => setQuery(e.target.value) })), _jsx(SearchResults, { results: results, isOpen: showinput && query.length > 0 })] })] }));
}
