import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation';
import React from 'react'

const AdminLayout = ({
  children
}:{
  children: React.ReactNode;
}) => {
  const { orgRole } = auth();

  if (orgRole === "org:member") {
    return redirect("/")
  }

  return (
    <>{children}</>
  )
}

export default AdminLayout;