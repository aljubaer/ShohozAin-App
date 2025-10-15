// components/features/welcome-screen.tsx
"use client"

import { FileText, Scale, MessageSquare, type LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface PromptTemplate {
  icon: LucideIcon
  title: string
  description: string
  prompt: string
}

interface WelcomeScreenProps {
  onSelectPrompt: (prompt: string) => void
}

const WELCOME_PROMPTS: PromptTemplate[] = [
  {
    icon: FileText,
    title: "Draft Legal Document",
    description: "Create contracts, agreements, or notices",
    prompt: "Help me draft a rental agreement"
  },
  {
    icon: Scale,
    title: "Legal Consultation",
    description: "Get advice on Bangladesh laws",
    prompt: "What are the legal requirements for starting a business in Bangladesh?"
  },
  {
    icon: MessageSquare,
    title: "Document Review",
    description: "Review and analyze legal documents",
    prompt: "Review this contract for potential issues"
  }
]

export function WelcomeScreen({ onSelectPrompt }: WelcomeScreenProps) {
  return (
    <div className="flex items-center justify-center h-full p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
            <Scale className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">সহজ আইন - SohozAin</h1>
          <p className="text-lg text-muted-foreground">
            AI Legal Assistant for Bangladesh Laws
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {WELCOME_PROMPTS.map((prompt, idx) => {
            const IconComponent = prompt.icon
            return (
              <Card
                key={idx}
                className="cursor-pointer hover:border-primary hover:bg-accent transition-all group"
                onClick={() => onSelectPrompt(prompt.prompt)}
              >
                <CardContent className="flex items-start gap-4 p-4">
                  <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                    <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{prompt.title}</h3>
                    <p className="text-sm text-muted-foreground">{prompt.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Start a conversation or choose a prompt above
        </div>
      </div>
    </div>
  )
}