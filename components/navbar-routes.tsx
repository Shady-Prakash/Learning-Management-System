"use client";

import { useAuth, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  const { orgRole } = useAuth();
  const pathname = usePathname();

  const isAdminPage = pathname?.startsWith("/admin");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput/>
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isAdminPage || isCoursePage ? (
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2"/>
              Exit
            </Button>
          </Link>
        ) : orgRole === "org:super_admin" || orgRole === "org:admin" ? (
          <Link href="/admin/courses">
            <Button size="sm" variant="ghost">
              Admin mode
            </Button>
          </Link>
        ) : null }
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </>
  )
}