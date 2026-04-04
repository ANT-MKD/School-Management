import { ReactNode } from 'react'
import AdminNav from './AdminNav'

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="admin-body">
      <AdminNav />
      {children}
    </div>
  )
}
