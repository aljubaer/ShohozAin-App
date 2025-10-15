// components/features/typing-indicator.tsx
"use client"

import { Scale } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function TypingIndicator() {
  return (
    <div className="flex items-start gap-4">
      <Avatar className="h-8 w-8 border">
        <AvatarFallback className="bg-muted">
          <Scale className="w-4 h-4" />
        </AvatarFallback>
      </Avatar>
      <div className="flex gap-1 items-center py-3">
        <div 
          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" 
          style={{ animationDelay: "0ms" }}
        />
        <div 
          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" 
          style={{ animationDelay: "150ms" }}
        />
        <div 
          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" 
          style={{ animationDelay: "300ms" }}
        />
      </div>
    </div>
  )
}