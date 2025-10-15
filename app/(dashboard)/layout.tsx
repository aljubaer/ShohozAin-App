export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  )
}