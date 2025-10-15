// components/features/document-drafting-chat.tsx
"use client"

import { useState } from "react"
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

// Dummy data for testing
const DUMMY_MESSAGES: Message[] = [
  {
    id: '1',
    role: 'user',
    content: 'I need to draft an employment contract for a full-time software engineer position. Include standard clauses for confidentiality, non-compete, and intellectual property rights.',
    timestamp: new Date(Date.now() - 120000)
  },
  {
    id: '2',
    role: 'assistant',
    content: 'I\'ll help you draft an employment contract compliant with Bangladesh Labour Act, 2006. I\'ll include the essential clauses you mentioned. Let me create a comprehensive contract for you.',
    timestamp: new Date(Date.now() - 60000)
  }
]

const DUMMY_DOCUMENT: Document = {
  id: 'doc-1',
  title: 'Employment Contract',
  type: 'Contract',
  content: `EMPLOYMENT CONTRACT

This Employment Contract ("Agreement") is entered into on this _____ day of _________, 20___, between:

EMPLOYER:
[Company Name]
[Company Address]
Bangladesh

AND

EMPLOYEE:
[Employee Name]
[Employee Address]
Bangladesh

1. POSITION AND DUTIES
The Employee is hired for the position of Software Engineer. The Employee agrees to perform duties assigned by the Employer and shall devote full working time and attention to the business of the Employer.

2. TERM OF EMPLOYMENT
This employment shall commence on _________ and shall continue unless terminated as per the terms of this Agreement.

3. COMPENSATION
The Employee shall receive a monthly salary of BDT _______ (Taka in words), payable on the last working day of each month.

4. WORKING HOURS
The Employee shall work 8 hours per day, 5 days per week, as per Bangladesh Labour Act, 2006.

5. CONFIDENTIALITY
The Employee agrees to maintain confidentiality of all proprietary information, trade secrets, and confidential business information of the Employer during and after employment.

6. INTELLECTUAL PROPERTY
All intellectual property, inventions, designs, and works created by the Employee during employment shall be the sole property of the Employer.

7. NON-COMPETE CLAUSE
The Employee agrees not to engage in any competing business or employment with competitors for a period of 1 year after termination of employment within Bangladesh.

8. TERMINATION
Either party may terminate this Agreement by providing 60 days written notice or payment in lieu of notice as per Bangladesh Labour Act, 2006.

9. GOVERNING LAW
This Agreement shall be governed by the laws of Bangladesh.


EMPLOYER                                    EMPLOYEE

_____________________                       _____________________
Signature                                   Signature

Name: _______________                       Name: _______________
Date: _______________                       Date: _______________`
}

export function DocumentDraftingChat() {
  const [messages, setMessages] = useState<Message[]>(DUMMY_MESSAGES)
  const [currentDocument, setCurrentDocument] = useState<Document | null>(DUMMY_DOCUMENT)
  const [isStreaming, setIsStreaming] = useState(false)

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])

    // Simulate AI response
    setIsStreaming(true)
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I understand you need assistance with that. Let me help you draft the appropriate legal document according to Bangladesh laws.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsStreaming(false)
    }, 1500)
  }

  return (
    <div className="flex h-full bg-background">
      {/* Chat Column */}
      <div
        className={`flex flex-col transition-all duration-300 bg-background ${
          currentDocument ? "w-1/2" : "w-full"
        }`}
      >
        {messages.length === 0 ? (
          <WelcomeScreen onSelectPrompt={handleSendMessage} />
        ) : (
          <ChatInterface
            messages={messages}
            onSendMessage={handleSendMessage}
            isStreaming={isStreaming}
          />
        )}
      </div>

      {/* Document Artifact Column */}
      {currentDocument && (
        <div className="w-1/2 border-l">
          <DocumentArtifact document={currentDocument} />
        </div>
      )}
    </div>
  )
}