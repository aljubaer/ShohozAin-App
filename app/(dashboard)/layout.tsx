import { DashboardNav } from "@/components/layout/dashboard-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <DashboardNav />
      <main className="container py-6">{children}</main>
    </div>
  )
}