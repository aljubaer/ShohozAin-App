import Link from "next/link"
import { FileText, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardNav() {
  return (
    <nav className="border-b bg-background">
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
        
        <div className="ml-auto">
          <span className="text-sm text-muted-foreground">Demo User</span>
        </div>
      </div>
    </nav>
  )
}