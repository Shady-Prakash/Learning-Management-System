"use client";

import { BarChart, Compass, Layout, List, Tent, UserCog} from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/"
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search"
  },
];

const adminRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/admin/courses"
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/admin/analytics"
  },
  {
    icon: UserCog,
    label: "Users",
    href: "#"
  },
]

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isAdminPage = pathname?.includes("/admin");
  
  const routes = isAdminPage ? adminRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}