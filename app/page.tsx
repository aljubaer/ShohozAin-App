// src/app/page.tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Scale,
  FileText,
  Brain,
  Search,
  MessageSquare,
  BookOpen,
  Zap,
  Shield,
  Users,
  GraduationCap,
  Briefcase,
  UserCheck,
  ArrowRight,
  Check,
  Sparkles,
  Globe,
  Clock,
  TrendingUp,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b" style={{ background: 'linear-gradient(to bottom, hsl(var(--background)), hsl(var(--muted) / 0.2))' }}>
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            {/* Badge */}
            <Badge variant="secondary" className="gap-2">
              <Sparkles className="h-3 w-3" />
              AI-Powered Legal Assistant for Bangladesh
            </Badge>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Legal Help Made{" "}
              <span className="text-primary">Simple</span>
              <br />
              আইনি সহায়তা এখন{" "}
              <span className="text-primary">সহজ</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get instant legal document drafting, expert opinions, and case research powered by AI. 
              Designed for lawyers, students, and everyday citizens of Bangladesh.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/document-drafting">
                <Button size="lg" className="gap-2">
                  Start for Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#features">
                <Button size="lg" variant="outline">
                  Explore Features
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Documents Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5K+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">AI Availability</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <Scale className="absolute top-20 left-10 h-32 w-32 text-primary" />
          <FileText className="absolute bottom-20 right-10 h-24 w-24 text-primary" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Powerful AI Legal Tools
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for legal work, powered by cutting-edge artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Cards */}
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    {feature.popular && (
                      <Badge variant="secondary">Popular</Badge>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                  {feature.bengali && (
                    <p className="text-xs text-muted-foreground italic">
                      {feature.bengali}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Everyone Section */}
      <section id="for-everyone" className="py-24 border-b" style={{ backgroundColor: 'hsl(var(--muted) / 0.3)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">For Everyone</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Built for Every Legal Mind
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're a lawyer, student, or everyday citizen—ShohozAin helps you navigate legal complexities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {personas.map((persona, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <persona.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl">{persona.title}</h3>
                  <p className="text-sm text-muted-foreground">{persona.description}</p>
                  <ul className="space-y-2 text-sm text-left">
                    {persona.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Resources Section */}
      <section className="py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Quick Links</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Bangladesh Legal Resources
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access official legal databases and court information
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {legalResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="p-6 text-center hover:shadow-lg hover:border-primary/50 transition-all">
                  <div className="space-y-3">
                    <div className="text-4xl">{resource.icon}</div>
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Simplify Your Legal Work?
            </h2>
            <p className="text-lg opacity-90">
              Join thousands of lawyers, students, and citizens using ShohozAin every day
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/document-drafting">
                <Button size="lg" variant="secondary" className="gap-2">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" style={{ backgroundColor: 'transparent', borderColor: 'hsl(var(--primary-foreground))', color: 'hsl(var(--primary-foreground))' }} className="hover:bg-white/10">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t" style={{ backgroundColor: 'hsl(var(--muted) / 0.3)' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Scale className="h-6 w-6 text-primary" />
                <span className="font-bold">ShohozAin</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Making legal help accessible to everyone in Bangladesh
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/#features" className="hover:text-primary">Features</Link></li>
                <li><Link href="/document-drafting" className="hover:text-primary">Document Drafting</Link></li>
                <li><Link href="/legal-opinion" className="hover:text-primary">Legal Opinion</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="http://bdlaws.minlaw.gov.bd" target="_blank" rel="noopener noreferrer" className="hover:text-primary">BD Laws</a></li>
                <li><a href="https://www.supremecourt.gov.bd" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Supreme Court</a></li>
                <li><a href="https://judiciary.gov.bd" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Judiciary</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary">About</Link></li>
                <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-primary">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 ShohozAin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: FileText,
    title: "Document Drafting",
    description: "Generate professional legal documents instantly with AI assistance",
    bengali: "আইনি দলিল তৈরি করুন দ্রুত",
    popular: true,
  },
  {
    icon: Brain,
    title: "Legal Opinion Generation",
    description: "Get expert legal analysis and opinions on complex matters",
    bengali: "আইনি মতামত পান তাৎক্ষণিক",
    popular: true,
  },
  {
    icon: Search,
    title: "Case Law Research",
    description: "Search through thousands of Bangladesh Supreme Court judgments",
    bengali: "মামলার তথ্য খুঁজুন সহজে",
  },
  {
    icon: MessageSquare,
    title: "Legal Q&A",
    description: "Ask any legal question and get AI-powered answers instantly",
    bengali: "আইনি প্রশ্ন করুন সরাসরি",
  },
  {
    icon: BookOpen,
    title: "Law Library Access",
    description: "Access comprehensive Bangladesh legal codes and statutes",
    bengali: "আইন পুস্তিকা দেখুন",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get responses in seconds, not hours or days",
    bengali: "তাৎক্ষণিক ফলাফল",
  },
]

const personas = [
  {
    icon: Briefcase,
    title: "For Lawyers",
    description: "Enhance your practice with AI-powered legal tools",
    benefits: [
      "Draft contracts 10x faster",
      "Research case law efficiently",
      "Generate legal opinions",
      "Focus on high-value work",
    ],
  },
  {
    icon: GraduationCap,
    title: "For Students",
    description: "Learn and excel in your legal studies",
    benefits: [
      "Understand complex legal concepts",
      "Practice document drafting",
      "Access case summaries",
      "Affordable pricing for students",
    ],
  },
  {
    icon: Users,
    title: "For Everyone",
    description: "Legal help for everyday situations",
    benefits: [
      "Understand your legal rights",
      "Draft simple agreements",
      "Get quick legal guidance",
      "No legal jargon—plain language",
    ],
  },
]

const legalResources = [
  {
    icon: "📚",
    title: "BD Laws",
    description: "Official Bangladesh Laws Database",
    url: "http://bdlaws.minlaw.gov.bd",
  },
  {
    icon: "⚖️",
    title: "Supreme Court",
    description: "Supreme Court of Bangladesh",
    url: "https://www.supremecourt.gov.bd",
  },
  {
    icon: "🏛️",
    title: "Judiciary",
    description: "Bangladesh Judiciary Portal",
    url: "https://judiciary.gov.bd",
  },
  {
    icon: "📖",
    title: "BLD Reports",
    description: "Bangladesh Legal Decisions",
    url: "https://www.bldlegalized.com",
  },
  {
    icon: "🔍",
    title: "BDLEX",
    description: "Legal Research Database",
    url: "https://www.bdlex.com",
  },
]