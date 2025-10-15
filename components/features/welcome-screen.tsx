// src/components/features/welcome-screen.tsx
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Scale, Briefcase, FileSignature, Mail, Building } from "lucide-react"

interface WelcomeScreenProps {
  onSelectTemplate: (prompt: string) => void
}

const documentTemplates = [
  {
    icon: FileText,
    title: "Employment Contract",
    description: "Create a comprehensive employment agreement",
    prompt: "I need to draft an employment contract for a full-time software engineer position. Include standard clauses for confidentiality, non-compete, and intellectual property rights.",
  },
  {
    icon: Briefcase,
    title: "Service Agreement",
    description: "Professional services contract template",
    prompt: "Draft a service agreement for consulting services. Include scope of work, payment terms, deliverables, and termination clauses.",
  },
  {
    icon: FileSignature,
    title: "Non-Disclosure Agreement",
    description: "Protect confidential information",
    prompt: "Create a mutual non-disclosure agreement for a potential business partnership. Include provisions for confidential information definition and duration of obligations.",
  },
  {
    icon: Building,
    title: "Lease Agreement",
    description: "Residential or commercial lease",
    prompt: "Draft a commercial lease agreement for office space. Include rent amount, security deposit, maintenance responsibilities, and lease term.",
  },
  {
    icon: Mail,
    title: "Demand Letter",
    description: "Formal notice for payment or action",
    prompt: "Write a demand letter for unpaid services. Include invoice details, payment deadline, and consequences of non-payment.",
  },
  {
    icon: Scale,
    title: "Partnership Agreement",
    description: "Business partnership terms",
    prompt: "Create a partnership agreement for a two-partner business venture. Include profit sharing, decision-making authority, and exit provisions.",
  },
]

export function WelcomeScreen({ onSelectTemplate }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <FileText className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold">Document Drafting</h1>
          <p className="text-muted-foreground text-lg">
            Select a document template to get started, or describe what you need
          </p>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documentTemplates.map((template, index) => {
            const Icon = template.icon
            return (
              <Card
                key={index}
                className="p-6 cursor-pointer hover:shadow-md hover:border-primary/50 transition-all"
                onClick={() => onSelectTemplate(template.prompt)}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">{template.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {template.description}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Custom Prompt Hint */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Or type your own requirements in the chat below
          </p>
        </div>
      </div>
    </div>
  )
}