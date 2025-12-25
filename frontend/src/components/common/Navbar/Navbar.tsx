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
  const [showinput, setShowInput] = useState(false);
  const [query, setQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [results, setResults] = useState<any>({
    services: [],
    groups: [],
    products: [],
    events: [],
  });
  const AuthState = useAuthStore();
  const userId = AuthState.user?._id;
  const profileState = useProfileStore();
  const { profile } = profileState;
  const role = AuthState.user?.role;
  console.log("auth state",AuthState)
  const debounce = useDebounce(query, 500);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (debounce.trim() === "") {
      setResults({ services: [], groups: [], products: [], events: [] });

      return;
    }

    const fetchResults = async () => {
      try {
        const { data } = await axiosInstance.get(`/search?q=${debounce}`);

        setResults(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResults();
  }, [debounce]);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
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
  return (
    <div className="header w-full flex justify-center items-center flex-col">
      <div className="navbar-container w-[95%] flex justify-between md:justify-around items-center">
        <div className="logo flex gap-1 items-center">
          <img src={logo} alt="Logo Image" />
          <h2>MCUS</h2>
        </div>

        {/* Desktop Navigation */}
        <div className="navLinks hidden lg:flex items-center">
          <ul className="flex gap-1 items-center cursor-pointer">
            <li>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Groups" onClick={() => setIsMobileMenuOpen(false)}>
                Groups
              </Link>
            </li>
            <li>
              <Link to="/Events" onClick={() => setIsMobileMenuOpen(false)}>
                Events
              </Link>
            </li>
            <li className="flex items-center text-center relative cursor-pointer">
              <Link to="/ServicesPage">Market Place</Link>
            </li>
            <li>
                            {
                                role ==="admin"  ?
                                 <Link to="/admin-dashboard" onClick={() => setIsMobileMenuOpen(false)}>Admin-dashboard</Link> 
                                 : undefined 
                                 
                            }
                        </li>
            <li>
              <Link
                to="/halal-business-dirctory"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Halal Business Directory
              </Link>
            </li>
            <li>
              <Link to="/contactus" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Icons */}
        <div className="Logos hidden lg:flex items-center">
          {location.pathname === "/" && (
            <span>
              <CiSearch
                fontSize={25}
                onClick={() => setShowInput(true)}
                className="cursor-pointer"
              />
            </span>
          )}

          <Link to={`/messages/user/${userId}/false`}>
            <MdOutlineMail fontSize={25} />
          </Link>

          {AuthState?.user ? (
            <Link to="/profilePage" className="flex items-center space-x-2">
              <img
                src={
                  AuthState.user?.photo
                    ? `${AuthState.user.photo}`
                    : profile?.photo
                    ? `${profile.photo}`
                    : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                }
                alt="profile"
                className="w-12 h-10 rounded-full object-cover"
              />
              <span className="hidden lg:inline">
                {AuthState.user?.fullName}
              </span>
            </Link>
          ) : (
            <Link className="login-btn flex items-center space-x-2" to="/login">
              <span className="px-6 py-1 rounded-lg">Login</span>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button - Show on mobile and tablets */}
        <div className="mobile-controls flex lg:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-button p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX fontSize={28} />
            ) : (
              <HiMenu fontSize={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`mobile-menu w-full lg:hidden ${
          isMobileMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"
        }`}
      >
        <div className="mobile-menu-content p-4">
          {/* Mobile Icons - Only shown when menu is open */}
          <div className="mobile-menu-icons flex items-center justify-center gap-4 mb-4 pb-4 border-b">
            {location.pathname === "/" && (
              <span>
                <CiSearch
                  fontSize={25}
                  onClick={() => setShowInput(true)}
                  className="cursor-pointer"
                />
              </span>
            )}

            <Link
              to={`/messages/user/${userId}/false`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MdOutlineMail fontSize={25} />
            </Link>
            {userId ? (
              <Link
                to="/profilePage"
                className="flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img
                  src={
                    AuthState.user?.photo
                      ? `${AuthState.user.photo}`
                      : profile?.photo
                      ? `${profile.photo}`
                      : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                  }
                  alt="profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span>{AuthState.user?.fullName}</span>
              </Link>
            ) : (
              <Link
                className="login-btn flex items-center space-x-2"
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="px-4 py-1 rounded-lg text-sm">Login</span>
              </Link>
            )}
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-4 cursor-pointer">
            <li>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Groups" onClick={() => setIsMobileMenuOpen(false)}>
                Groups
              </Link>
            </li>
            <li>
              <Link to="/Events" onClick={() => setIsMobileMenuOpen(false)}>
                Events
              </Link>
            </li>
            <li className="flex items-center text-center relative cursor-pointer">
              <Link
                to="/ServicesPage"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Market Place
              </Link>
            </li>

            {role === "admin" && (
              <li>
                <Link
                  to="/admin-dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin-dashboard
                </Link>
              </li>
            )}

            <li>
              <Link
                to="/halal-business-dirctory"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Halal Business Dirctory
              </Link>
            </li>
            <li>
              <Link to="/contactus" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="relative w-full flex justify-center items-center"
        ref={searchRef}
      >
        {showinput && (
          <input
            type="text"
            name="searchInput"
            placeholder="Search..."
            autoFocus
            className="my-2 w-5/6 border border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm transition duration-200"
            onBlur={() => setShowInput(false)}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        )}
        <SearchResults
          results={results}
          isOpen={showinput && query.length > 0}
        />
      </div>
    </div>
  );
}
