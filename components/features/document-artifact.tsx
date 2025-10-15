// components/features/document-artifact.tsx
"use client"

import { useState } from "react"
import { FileText, Download, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Document {
  id: string
  title: string
  content: string
  type: string
}

interface DocumentArtifactProps {
  document: Document
}

export function DocumentArtifact({ document }: DocumentArtifactProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(document.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const blob = new Blob([document.content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = window.document.createElement("a")
    a.href = url
    a.download = `${document.title.replace(/\s+/g, "_")}.txt`
    window.document.body.appendChild(a)
    a.click()
    window.document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="h-full flex flex-col bg-muted/30">
      {/* Header */}
      <div className="border-b bg-background px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold">{document.title}</h2>
              <p className="text-xs text-muted-foreground">Generated document</p>
            </div>
          </div>

          <Badge variant="secondary" className="gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Draft
          </Badge>
        </div>
      </div>

      {/* Document Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-wrap font-serif text-base leading-relaxed">
                  {document.content}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="border-t bg-background px-6 py-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground">Review and edit as needed</p>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleCopy}>
              <Copy className="h-4 w-4 mr-2" />
              {copied ? "Copied!" : "Copy"}
            </Button>
            <Button onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}