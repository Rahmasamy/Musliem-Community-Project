import React from "react";

export default interface SideBarProps {
  label?: string;
  navItems: { name: string; to: string; key: string }[];
 onNavClick?: (key: string) => void; 
}