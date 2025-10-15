"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChatInterface } from "./chat-interface"
import { DocumentArtifact } from "./document-artifact"
import { WelcomeScreen } from "./welcome-screen"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface Document {
  id: string
  title: string
  content: string
  type: string
}

export function DocumentDraftingChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [currentDocument, setCurrentDocument] = useState<Document | null>(null)
  const [isStreaming, setIsStreaming] = useState(false)

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setIsStreaming(true)

    try {
      const response = await fetch("/api/stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          prompt: content, 
          feature: "document-drafting",
          conversationHistory: messages 
        }),
      })

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) throw new Error("No reader available")

      let assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, assistantMessage])

      let fullContent = ""
      while (true) {
        const { done, value } = await reader.read()
        
        if (done) break

        const text = decoder.decode(value, { stream: true })
        fullContent += text

        setMessages(prev => 
          prev.map(msg => 
            msg.id === assistantMessage.id 
              ? { ...msg, content: fullContent }
              : msg
          )
        )

        // Check if document is being generated
        if (fullContent.includes("[DOCUMENT_START]")) {
          const docMatch = fullContent.match(/\[DOCUMENT_START\](.*?)\[DOCUMENT_END\]/s)
          if (docMatch) {
            setCurrentDocument({
              id: Date.now().toString(),
              title: extractTitle(content),
              content: docMatch[1].trim(),
              type: "legal-document",
            })
          }
        }
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsStreaming(false)
    }
  }

  const extractTitle = (prompt: string): string => {
    // Extract document type from prompt
    const types = ["contract", "agreement", "letter", "notice", "petition"]
    const found = types.find(type => prompt.toLowerCase().includes(type))
    return found ? `${found.charAt(0).toUpperCase() + found.slice(1)} Document` : "Legal Document"
  }

  return (
    <div className="flex h-full">
      {/* Chat Column */}
      <div className={`flex flex-col transition-all duration-300 ${
        currentDocument ? "w-1/2" : "w-full"
      }`}>
        <div className="flex-1 overflow-hidden">
          {messages.length === 0 ? (
            <WelcomeScreen onSelectTemplate={handleSendMessage} />
          ) : (
            <ChatInterface
              messages={messages}
              onSendMessage={handleSendMessage}
              isStreaming={isStreaming}
            />
          )}
        </div>
      </div>

      {/* Artifact Column */}
      {currentDocument && (
        <div className="w-1/2 border-l">
          <DocumentArtifact doc={currentDocument} />
        </div>
      )}
    </div>
  )
}

function extractTitle(prompt: string): string {
  const types = ["contract", "agreement", "letter", "notice", "petition", "memo"]
  const found = types.find(type => prompt.toLowerCase().includes(type))
  return found ? `${found.charAt(0).toUpperCase() + found.slice(1)} Document` : "Legal Document"
}