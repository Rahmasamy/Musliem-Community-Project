import SideBarProps from "@/components/interfaces/SideBarProps";
import { Link, Outlet } from "react-router-dom";
import logo from '@/assets/imgs/logo.png'
export default function SideBar({ label, navItems,}: SideBarProps) {
    return (
        <aside className="w-full lg:w-64 bg-white shadow p-4 sm:p-5 lg:p-6 shrink-0">
          <div className="w-full">
  <div className="logo flex gap-1 items-center mb-4 sm:mb-6">
                    <img src={logo} alt="Logo Image" className="w-16 h-12 sm:w-20 sm:h-16 lg:w-24 lg:h-20" />
                    <h2 className="text-base sm:text-lg lg:text-xl">
                        MCUS
                    </h2>
                </div>
                 <nav>
        <ul className="space-y-2 sm:space-y-3">
         
          {navItems.map((item) => (
            <li key={item.key}>
              <Link to={item.to}
            
                className="text-sm sm:text-base text-gray-700 hover:text-orange-500 font-medium block py-2 px-2 rounded-lg hover:bg-orange-50 transition-colors duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
          </div>
            
      {/* <h2 className="text-xl font-bold mb-4">{label}</h2> */}
     
    </aside>
    );
}