import React from "react";

export default interface SideBarProps {
  label?: string;
  navItems: { name: string; to: string }[];
 onNavClick?: (key: string) => void; 
}