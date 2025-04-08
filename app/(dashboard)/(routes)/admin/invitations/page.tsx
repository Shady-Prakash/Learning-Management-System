'use client'

import { useOrganization } from '@clerk/nextjs'
import { DataTable } from './_components/data-table'
import { columns } from './_components/columns'
import { OrgInvitationsParams, OrgMembershipRequestsParams } from '@/lib/organizations'

// List of pending invitations to an organization.
export const InvitationList = () => {
  const { isLoaded, invitations } = useOrganization({
    ...OrgInvitationsParams,
    ...OrgMembershipRequestsParams
  })

  if (!isLoaded) {
    return <>Loading</>
  }

  const invitedUsers = invitations?.data?.map((inv) => {
    return inv;
  })

  return (
    <div className="p-6">
      <DataTable columns={columns} data={invitedUsers!}/>
    </div>
  )
}
 export default InvitationList;