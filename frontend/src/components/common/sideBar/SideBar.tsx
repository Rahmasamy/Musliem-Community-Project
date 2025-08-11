import SideBarProps from "@/components/interfaces/SideBarProps";
import { Link, Outlet } from "react-router-dom";
import logo from '@/assets/imgs/logo.png'
export default function SideBar({ label, navItems,}: SideBarProps) {
    return (
        <aside className="w-64 bg-white shadow p-6 shrink-0">
          <div className="w-full">
  <div className="logo flex gap-1 items-center">
                    <img src={logo} alt="Logo Image" />
                    <h2>
                        MCUS
                    </h2>
                </div>
                 <nav>
        <ul className="space-y-3">
         
          {navItems.map((item) => (
            <li key={item.key}>
              <Link to={item.to}
            
                className="text-gray-700 hover:text-orange-500 font-medium"
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