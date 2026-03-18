"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { BookHeart, Sparkles, Users, CalendarHeart, ImagePlay, Mic2, BookOpen, Star, Github, Check, ChevronRight, MessageCircleHeart, Bot, Flame, UserPlus, Upload, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const avatarUrls = [
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&q=80",
];

const steps = [
  {
    num: "01",
    icon: UserPlus,
    title: "Create a memorial",
    desc: "Fill in the name, dates, biography — it takes just 5 minutes",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=280&fit=crop&q=80",
  },
  {
    num: "02",
    icon: Upload,
    title: "Upload memories",
    desc: "Photos, videos, voice recordings, letters and diaries",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=280&fit=crop&q=80",
  },
  {
    num: "03",
    icon: Share2,
    title: "Share with family",
    desc: "Send the link — relatives can add memories without registration",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=280&fit=crop&q=80",
  },
];

export default function HomeEn() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-stone-200 bg-background/90 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-700 to-stone-600 flex items-center justify-center">
              <BookHeart className="h-4 w-4 text-amber-100" />
            </div>
            <span className="font-bold text-lg tracking-tight">Memory Diary</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1 text-sm border border-stone-200 rounded-md px-2 py-1">
              <Link href="/" className="px-1.5 py-0.5 rounded text-muted-foreground hover:text-foreground transition-colors">RU</Link>
              <span className="text-stone-300">|</span>
              <Link href="/en" className="px-1.5 py-0.5 rounded font-medium text-foreground">EN</Link>
            </div>
            <Button size="sm" className="bg-amber-800 hover:bg-amber-700 text-amber-50 border-0" asChild>
              <Link href="#pricing">Get started free</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/0803md.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/55 via-stone-900/45 to-stone-950/70" />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-100/15 text-amber-200 border border-amber-400/30 hover:bg-amber-100/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              Preserve the memory of those you love
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
              Digital Memorial<br />
              <span className="text-amber-300">for those</span><br />
              you love
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Upload photos, videos and voice recordings. AI avatar and chatbot let your family feel the presence of your loved one again
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-600 text-amber-50 border-0 h-12 px-8 text-base" asChild>
                <Link href="#pricing">
                  Create a memorial for free
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/25 hover:bg-white/10 text-white backdrop-blur-sm" asChild>
                <Link href="#features">Learn more</Link>
              </Button>
            </div>

            {/* Trust badge */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="flex -space-x-2">
                {avatarUrls.map((src) => (
                  <Image
                    key={src}
                    src={src}
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-white/30 object-cover"
                    alt=""
                  />
                ))}
              </div>
              <span className="text-white/70 text-sm">12,000+ families have already created a memorial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section — dark */}
      <section className="py-16 bg-stone-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            {[
              { value: "4.9", label: "average rating from families", icon: Star },
              { value: "12K+", label: "memorial pages created", icon: Flame },
              { value: "98%", label: "families recommend", icon: Users },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mb-1">
                  <stat.icon className="h-5 w-5 text-amber-400" />
                </div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <p className="text-sm text-stone-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-32 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border border-amber-200 px-3 py-1 text-xs">
              How it works
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Three steps to<br />
              <span className="gradient-text">eternal memory</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-stone-200 bg-white hover:border-amber-400/50 transition-all duration-300">
                <div className="relative">
                  <Image
                    src={step.img}
                    width={400}
                    height={280}
                    className="w-full object-cover"
                    alt={step.title}
                  />
                  <div className="absolute top-3 left-3 h-8 w-8 rounded-full bg-amber-700 flex items-center justify-center">
                    <step.icon className="h-4 w-4 text-amber-100" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-amber-600 font-mono mb-2">{step.num}</div>
                  <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="dot-grid absolute inset-0 opacity-60" />
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border border-amber-200 px-3 py-1 text-xs">
              Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Keep everything,<br />
              <span className="gradient-text">in one place</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {[
              { num: "01", icon: Bot, title: "AI Avatar", desc: "Upload a few photos — the service creates an animated video avatar that moves and speaks in your loved one's voice" },
              { num: "02", icon: Users, title: "Family Access", desc: "Share a unique link with relatives. Anyone can add memories, photos and stories — no account required" },
              { num: "03", icon: CalendarHeart, title: "Biography", desc: "Name, birth and passing dates, hometown, education, profession — create a full biographical page" },
              { num: "04", icon: ImagePlay, title: "Media Archive", desc: "Upload photos, videos, voice messages and documents. Everything is stored securely and accessible to the whole family" },
              { num: "05", icon: Mic2, title: "Voice Synthesis", desc: "Upload audio recordings — ElevenLabs clones the voice. The avatar will speak in your loved one's real voice" },
              { num: "06", icon: MessageCircleHeart, title: "AI Chatbot", desc: "Upload texts, letters, diaries — AI learns to respond as your loved one would have" },
            ].map((feature, i) => (
              <div key={i} className="glass-card rounded-xl p-6 flex gap-5 group hover:border-amber-400/40 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                    <feature.icon className="h-5 w-5 text-amber-700" />
                  </div>
                </div>
                <div>
                  <div className="text-xs text-amber-600 font-mono mb-1">{feature.num}</div>
                  <h3 className="text-base font-semibold mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — dark */}
      <section className="py-32 bg-stone-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-white/10 text-amber-300 border border-white/10 px-3 py-1 text-xs">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              What families<br />
              <span className="text-amber-400">are saying</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {[
              { name: "Maria", text: "After losing my father, I didn't know how to preserve his memory for my children. Memory Diary helped create a page where grandchildren can get to know their grandfather through his photos, voice, and stories." },
              { name: "Alex", text: "We uploaded old cassettes with my grandmother's voice. The AI reproduced her intonations so accurately that my mother couldn't hold back tears. It's something incredible." },
              { name: "Svetlana", text: "My brothers and sisters live in different cities. Through one link, everyone added their memories and photos. No registration — just open and write." },
              { name: "Dmitry", text: "The chatbot replies with phrases my dad might have said. At first it felt strange, but then I understood — it's a way not to forget his wisdom and humor." },
              { name: "Elena", text: "Setting up the memorial took half an hour. The interface is intuitive, support responded in 10 minutes. I recommend it to anyone who wants to preserve memory with dignity." },
              { name: "Igor", text: "We created a memorial page for my grandfather, a veteran. Now it's a family archive for the whole lineage. Grandchildren will know what kind of person he was." },
            ].map((testimonial, i) => (
              <div key={i} className="glass-card-dark rounded-xl p-6 flex flex-col gap-4 hover:border-white/20 transition-all duration-300">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-stone-300 leading-relaxed flex-1">{testimonial.text}</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <div className="h-8 w-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold text-white">
                    {testimonial.name[0]}
                  </div>
                  <span className="text-sm font-medium text-white">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 relative">
        <div className="dot-grid absolute inset-0 opacity-60" />
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border border-amber-200 px-3 py-1 text-xs">
              Pricing
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Choose<br />
              <span className="gradient-text">your plan</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Start for free and expand your memorial&apos;s features as needed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                features: ["1 memorial page", "Up to 100 photos", "Up to 5 videos", "Text memories", "Family access via link"],
                cta: "Create a memorial",
                featured: false,
              },
              {
                name: "Premium ⭐",
                price: "$9",
                period: "per month",
                features: ["Up to 5 memorial pages", "Unlimited media storage", "AI avatar from photos", "Voice synthesis (ElevenLabs)", "AI chatbot based on memories", "Priority support"],
                cta: "Try 14 days free",
                featured: true,
              },
              {
                name: "Family",
                price: "$19",
                period: "per month",
                features: ["Everything in Premium", "Unlimited pages", "Up to 20 co-authors", "Public memorial page", "Personal manager"],
                cta: "Contact us",
                featured: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-6 flex flex-col gap-6 transition-all duration-300 ${
                  plan.featured
                    ? "bg-gradient-to-b from-amber-800 to-stone-800 border border-amber-600/50 text-amber-50 shadow-xl"
                    : "glass-card hover:border-amber-400/40"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-amber-500 text-white border-0 px-3 py-1 text-xs font-medium">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}
                <div>
                  <div className={`text-sm mb-3 ${plan.featured ? "text-amber-300" : "text-muted-foreground"}`}>{plan.name}</div>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className={`mb-1 text-sm ${plan.featured ? "text-amber-300" : "text-muted-foreground"}`}>/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.featured ? "bg-amber-600/40" : "bg-amber-100"}`}>
                        <Check className={`h-3 w-3 ${plan.featured ? "text-amber-300" : "text-amber-700"}`} />
                      </div>
                      <span className={plan.featured ? "text-amber-100" : "text-muted-foreground"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full h-11 ${
                    plan.featured
                      ? "bg-amber-500 hover:bg-amber-400 text-white border-0"
                      : "bg-amber-800 hover:bg-amber-700 text-amber-50 border-0"
                  }`}
                  asChild
                >
                  <Link href="#">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 border-t border-stone-200 bg-amber-50/60">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border border-amber-200 px-3 py-1 text-xs">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Common<br />
              <span className="gradient-text">questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {[
              { q: "How do I create a memorial page?", a: "Register, click 'Create memorial' and fill in the basic details: name, dates, biography. Then upload photos, videos and memories. It takes between 10 and 30 minutes." },
              { q: "How does the AI avatar work?", a: "Upload several clear photos of the face. The service sends them to a video generation system (HeyGen / D-ID), which creates an animated avatar. For voice synthesis, upload audio recordings at least 1 minute long — ElevenLabs will clone the voice." },
              { q: "How does the AI chatbot work?", a: "Upload text memories, letters, diaries and stories about your loved one. The system processes them using semantic search and trains a language model to respond in their style. The more texts — the more accurate the responses." },
              { q: "How is privacy ensured?", a: "The memorial page is private by default — accessible only via a unique link. Public mode is enabled manually. All uploaded media files and memories are encrypted at rest." },
              { q: "Do relatives need to register?", a: "No. The memorial creator generates a unique invite link. Relatives follow it and can immediately add memories, photos and comments without creating an account." },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card rounded-xl px-5 border-stone-200 data-[state=open]:border-amber-400/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-5 hover:text-amber-700 transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900 via-stone-800 to-amber-900" />
        <div className="orb w-96 h-96 bg-amber-600 top-0 left-1/2 -translate-x-1/2 opacity-20" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Create a memorial<br />
            <span className="text-amber-300">while you remember every detail</span>
          </h2>
          <p className="text-amber-200/70 mb-10 text-lg max-w-xl mx-auto">
            Free. No credit card. Memorial ready in 10 minutes.
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-white border-0 h-13 px-10 text-base" asChild>
            <Link href="#pricing">
              Create a memorial for free
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-16 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-700 to-stone-600 flex items-center justify-center">
                  <BookHeart className="h-4 w-4 text-amber-100" />
                </div>
                <span className="font-bold text-lg">Memory Diary</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Digital memorials for preserving the memory of loved ones. AI avatar, voice synthesis and chatbot — all in one place.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-5">About</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#features" className="hover:text-amber-700 transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-amber-700 transition-colors">Pricing</Link></li>
                <li><Link href="#faq" className="hover:text-amber-700 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-5">Support</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-amber-700 transition-colors">Help center</Link></li>
                <li><Link href="#" className="hover:text-amber-700 transition-colors">Contact us</Link></li>
                <li><Link href="#" className="hover:text-amber-700 transition-colors">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-5">Resources</h3>
              <div className="space-y-3">
                <Link href="#" className="flex items-center gap-3 p-3 rounded-lg border border-stone-200 hover:border-amber-400 hover:bg-amber-50 transition-all text-sm group">
                  <BookOpen className="h-4 w-4 text-muted-foreground group-hover:text-amber-700 transition-colors" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">Documentation</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 p-3 rounded-lg border border-stone-200 hover:border-amber-400 hover:bg-amber-50 transition-all text-sm group">
                  <Github className="h-4 w-4 text-muted-foreground group-hover:text-amber-700 transition-colors" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
                </Link>
              </div>
            </div>
          </div>
          <Separator className="bg-stone-200 mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 Memory Diary. All rights reserved.</p>
            <p>support@memorydiary.ru</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
