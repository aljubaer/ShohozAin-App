import Link from "next/link"
import { FileText, Scale, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { auth, signOut } from "@/lib/auth"

export async function DashboardNav() {
  const session = await auth()

  return (
    <nav className="border-b">
      <div className="container flex h-16 items-center px-4">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Scale className="h-6 w-6" />
            <span className="font-bold">LegalAI</span>
          </Link>
          
          <div className="flex gap-4">
            <Link href="/document-drafting">
              <Button variant="ghost" className="gap-2">
                <FileText className="h-4 w-4" />
                Document Drafting
              </Button>
            </Link>
            <Link href="/legal-opinion">
              <Button variant="ghost" className="gap-2">
                <Scale className="h-4 w-4" />
                Legal Opinion
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="ml-auto flex items-center gap-4">
          <span className="text-sm">{session?.user?.email}</span>
          <form
            action={async () => {
              "use server"
              await signOut()
            }}
          >
            <Button variant="ghost" size="sm" type="submit">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </form>
        </div>
      </div>
    </nav>
  )
}