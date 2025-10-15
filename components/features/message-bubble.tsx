// components/features/message-bubble.tsx
"use client"

import { User, Scale } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface MessageBubbleProps {
  message: Message
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user"

  return (
    <div className={cn("flex items-start gap-4", isUser && "flex-row-reverse")}>
      <Avatar className="h-8 w-8 border">
        <AvatarFallback className={isUser ? "bg-primary text-primary-foreground" : "bg-muted"}>
          {isUser ? <User className="w-4 h-4" /> : <Scale className="w-4 h-4" />}
        </AvatarFallback>
      </Avatar>

      <div className={cn("flex-1 space-y-2", isUser && "flex flex-col items-end")}>
        <div
          className={cn(
            "rounded-2xl px-4 py-3 max-w-[85%]",
            isUser
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-foreground"
          )}
        >
          <p className="text-sm whitespace-pre-wrap leading-relaxed">
            {message.content}
          </p>
        </div>
        <span className="text-xs text-muted-foreground px-1">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          })}
        </span>
      </div>
    </div>
  )
}