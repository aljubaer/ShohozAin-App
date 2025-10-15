import { Button } from "@/components/ui/button"
import { Scale } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="flex justify-center mb-4">
          <Scale className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-5xl font-bold">LegalAI</h1>
        <p className="text-xl text-muted-foreground">
          AI-powered legal document drafting and opinion generation
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Link href="/document-drafting">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}