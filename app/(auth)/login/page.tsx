import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md p-8">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <p className="text-muted-foreground mb-4">
          Authentication is temporarily disabled for development.
        </p>
        <Link href="/document-drafting">
          <Button className="w-full">Go to Dashboard</Button>
        </Link>
      </Card>
    </div>
  )
}