"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BookHeart, Sparkles, Star, BookOpen, Github, Check, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import type { LandingContent } from "@/lib/content/types";

const avatarUrls = [
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&q=80",
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 } as { opacity: number; y: number },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export function LandingPage({ content }: { content: LandingContent }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const isRu = content.lang === "ru";
  const comingSoonLabel = isRu ? "В разработке" : "Coming soon";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-[#BEBBB4] bg-background/90 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#6F5B42] to-[#15160A] flex items-center justify-center">
              <BookHeart className="h-4 w-4 text-[#D2D2D1]" />
            </div>
            <span className="font-bold text-lg tracking-tight">Memory Diary</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{content.nav.features}</Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{content.nav.pricing}</Link>
            <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{content.nav.faq}</Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1 text-sm border border-[#BEBBB4] rounded-md px-2 py-1">
              <Link
                href="/"
                className={`px-1.5 py-0.5 rounded transition-colors ${isRu ? "font-medium text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                RU
              </Link>
              <span className="text-[#BEBBB4]">|</span>
              <Link
                href="/en"
                className={`px-1.5 py-0.5 rounded transition-colors ${!isRu ? "font-medium text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                EN
              </Link>
            </div>
            <Button size="sm" className="bg-[#6F5B42] hover:bg-[#6F5B42]/85 text-[#D2D2D1] border-0" asChild>
              <Link href="#pricing">{content.nav.cta}</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/0803md.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#15160A]/65 via-[#15160A]/45 to-[#15160A]/75" />
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge className="mb-6 bg-[#B5A892]/15 text-[#D2D2D1] border border-[#B5A892]/30 hover:bg-[#B5A892]/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              {content.hero.badge}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
              {content.hero.h1Line1}<br />
              <span className="text-[#B5A892]">{content.hero.h1Accent}</span><br />
              {content.hero.h1Line3}
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              {content.hero.p}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-[#6F5B42] hover:bg-[#6F5B42]/85 text-[#D2D2D1] border-0 h-12 px-8 text-base" asChild>
                <Link href="#pricing">
                  {content.hero.ctaPrimary}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/25 hover:bg-white/10 text-white backdrop-blur-sm" asChild>
                <Link href="#features">{content.hero.ctaSecondary}</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="flex -space-x-2">
                {avatarUrls.map((src) => (
                  <Image
                    key={src}
                    src={src}
                    width={32}
                    height={32}
                    priority
                    className="rounded-full border-2 border-white/30 object-cover"
                    alt=""
                  />
                ))}
              </div>
              <span className="text-white/70 text-sm">{content.hero.trustText}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#15160A]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            {content.stats.map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="h-10 w-10 rounded-full bg-[#D2D2D1]/10 flex items-center justify-center mb-1">
                  <stat.icon className="h-5 w-5 text-[#B5A892]" />
                </div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <p className="text-sm text-[#B5A892]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-32 bg-[#D2D2D1]/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div className="text-center mb-20" {...fadeUp}>
            <Badge className="mb-4 bg-[#D2D2D1] text-[#6F5B42] border border-[#BEBBB4] px-3 py-1 text-xs">
              {content.howItWorks.badge}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              {content.howItWorks.h2Line1}<br />
              <span className="gradient-text">{content.howItWorks.h2Accent}</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.howItWorks.steps.map((step, i) => (
              <motion.div
                key={i}
                className="rounded-2xl overflow-hidden border border-[#BEBBB4] bg-[#EAEAE8] hover:border-[#6F5B42]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="relative">
                  <Image
                    src={step.img}
                    width={400}
                    height={280}
                    className="w-full object-cover"
                    alt={step.title}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-3 left-3 h-8 w-8 rounded-full bg-[#6F5B42] flex items-center justify-center">
                    <step.icon className="h-4 w-4 text-[#D2D2D1]" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-[#6F5B42] font-mono mb-2">{step.num}</div>
                  <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 relative">
        <div className="dot-grid absolute inset-0 opacity-60" />
        <div className="container mx-auto px-6 max-w-7xl relative">
          <motion.div className="text-center mb-20" {...fadeUp}>
            <Badge className="mb-4 bg-[#D2D2D1] text-[#6F5B42] border border-[#BEBBB4] px-3 py-1 text-xs">
              {content.features.badge}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              {content.features.h2Line1}<br />
              <span className="gradient-text">{content.features.h2Accent}</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {content.features.items.map((feature, i) => (
              <motion.div
                key={i}
                className="glass-card rounded-xl p-6 flex gap-5 group hover:border-[#6F5B42]/40 transition-all duration-300 relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {feature.comingSoon && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#15160A] text-[#B5A892] border border-[#6F5B42]/40">
                      <Clock className="h-2.5 w-2.5" />
                      {comingSoonLabel}
                    </span>
                  </div>
                )}
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-xl bg-[#D2D2D1] border border-[#BEBBB4] flex items-center justify-center group-hover:bg-[#BEBBB4] transition-colors">
                    <feature.icon className="h-5 w-5 text-[#6F5B42]" />
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#6F5B42] font-mono mb-1">{feature.num}</div>
                  <h3 className="text-base font-semibold mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#15160A]">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div className="text-center mb-20" {...fadeUp}>
            <Badge className="mb-4 bg-[#D2D2D1]/10 text-[#B5A892] border border-[#D2D2D1]/10 px-3 py-1 text-xs">
              {content.testimonials.badge}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              {content.testimonials.h2Line1}<br />
              <span className="text-[#B5A892]">{content.testimonials.h2Accent}</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {content.testimonials.items.map((testimonial, i) => (
              <motion.div
                key={i}
                className="glass-card-dark rounded-xl p-6 flex flex-col gap-4 hover:border-[#D2D2D1]/20 transition-all duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-[#B5A892] fill-[#B5A892]" />
                  ))}
                </div>
                <p className="text-sm text-[#BEBBB4] leading-relaxed flex-1">{testimonial.text}</p>
                <div className="flex items-center gap-3 pt-2 border-t border-[#D2D2D1]/10">
                  <div className="h-8 w-8 rounded-full bg-[#6F5B42] flex items-center justify-center text-xs font-bold text-white">
                    {testimonial.name[0]}
                  </div>
                  <span className="text-sm font-medium text-white">{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 relative">
        <div className="dot-grid absolute inset-0 opacity-60" />
        <div className="container mx-auto px-6 max-w-7xl relative">
          <motion.div className="text-center mb-20" {...fadeUp}>
            <Badge className="mb-4 bg-[#D2D2D1] text-[#6F5B42] border border-[#BEBBB4] px-3 py-1 text-xs">
              {content.pricing.badge}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              {content.pricing.h2Line1}<br />
              <span className="gradient-text">{content.pricing.h2Accent}</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">{content.pricing.subtitle}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {content.pricing.plans.map((plan, i) => (
              <motion.div
                key={i}
                className={`relative rounded-2xl p-6 flex flex-col gap-6 transition-all duration-300 ${
                  plan.featured
                    ? "bg-gradient-to-b from-[#6F5B42] to-[#15160A] border border-[#B5A892]/50 text-[#D2D2D1] shadow-xl"
                    : "glass-card hover:border-[#6F5B42]/40"
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-[#B5A892] text-[#15160A] border-0 px-3 py-1 text-xs font-medium">
                      <Sparkles className="h-3 w-3 mr-1" />
                      {content.pricing.popularLabel}
                    </Badge>
                  </div>
                )}
                <div>
                  <div className={`text-sm mb-3 ${plan.featured ? "text-[#D2D2D1]" : "text-muted-foreground"}`}>{plan.name}</div>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className={`mb-1 text-sm ${plan.featured ? "text-[#BEBBB4]" : "text-muted-foreground"}`}>/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.featured ? "bg-[#6F5B42]/50" : "bg-[#D2D2D1]"}`}>
                        <Check className={`h-3 w-3 ${plan.featured ? "text-[#D2D2D1]" : "text-[#6F5B42]"}`} />
                      </div>
                      <span className={plan.featured ? "text-[#D2D2D1]" : "text-muted-foreground"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full h-11 ${
                    plan.featured
                      ? "bg-[#D2D2D1] hover:bg-white text-[#15160A] border-0"
                      : "bg-[#6F5B42] hover:bg-[#6F5B42]/85 text-[#D2D2D1] border-0"
                  }`}
                  asChild
                >
                  <Link href="#">{plan.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 border-t border-[#BEBBB4] bg-[#D2D2D1]/40">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <Badge className="mb-4 bg-[#D2D2D1] text-[#6F5B42] border border-[#BEBBB4] px-3 py-1 text-xs">
              {content.faq.badge}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {content.faq.h2Line1}<br />
              <span className="gradient-text">{content.faq.h2Accent}</span>
            </h2>
          </motion.div>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {content.faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card rounded-xl px-5 border-[#BEBBB4] data-[state=open]:border-[#6F5B42]/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-5 hover:text-[#6F5B42] transition-colors">
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

      {/* Waitlist / Email Form */}
      <section className="py-20 bg-[#D2D2D1]/40 border-t border-[#BEBBB4]">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <motion.div {...fadeUp}>
            <h3 className="text-2xl font-bold mb-2">{content.waitlist.h3}</h3>
            <p className="text-muted-foreground mb-6">{content.waitlist.p}</p>
            {submitted ? (
              <p className="text-[#6F5B42] font-medium py-3">{content.waitlist.thanks}</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={content.waitlist.placeholder}
                  className="flex-1 h-11 px-4 rounded-lg border border-[#BEBBB4] bg-[#EAEAE8] text-sm focus:outline-none focus:ring-2 focus:ring-[#6F5B42]"
                />
                <Button type="submit" className="bg-[#6F5B42] hover:bg-[#6F5B42]/85 text-[#D2D2D1] h-11 px-6 border-0">
                  {content.waitlist.btn}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#15160A] via-[#6F5B42] to-[#15160A]" />
        <div className="orb w-96 h-96 bg-[#6F5B42] top-0 left-1/2 -translate-x-1/2 opacity-20" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              {content.cta.h2Line1}<br />
              <span className="text-[#B5A892]">{content.cta.h2Accent}</span>
            </h2>
            <p className="text-[#BEBBB4]/80 mb-10 text-lg max-w-xl mx-auto">{content.cta.p}</p>
            <Button size="lg" className="bg-[#D2D2D1] hover:bg-white text-[#15160A] border-0 h-13 px-10 text-base" asChild>
              <Link href="#pricing">
                {content.cta.btn}
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#BEBBB4] py-16 bg-[#D2D2D1]/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#6F5B42] to-[#15160A] flex items-center justify-center">
                  <BookHeart className="h-4 w-4 text-[#D2D2D1]" />
                </div>
                <span className="font-bold text-lg">Memory Diary</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{content.footer.desc}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-5">{content.footer.col1}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#features" className="hover:text-[#6F5B42] transition-colors">{content.footer.links1[0]}</Link></li>
                <li><Link href="#pricing" className="hover:text-[#6F5B42] transition-colors">{content.footer.links1[1]}</Link></li>
                <li><Link href="#faq" className="hover:text-[#6F5B42] transition-colors">{content.footer.links1[2]}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-5">{content.footer.col2}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {content.footer.links2.map((link, i) => (
                  <li key={i}><Link href="#" className="hover:text-[#6F5B42] transition-colors">{link}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-5">{content.footer.col3}</h3>
              <div className="space-y-3">
                <Link href="#" className="flex items-center gap-3 p-3 rounded-lg border border-[#BEBBB4] hover:border-[#6F5B42] hover:bg-[#D2D2D1]/50 transition-all text-sm group">
                  <BookOpen className="h-4 w-4 text-muted-foreground group-hover:text-[#6F5B42] transition-colors" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{content.footer.links3[0]}</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 p-3 rounded-lg border border-[#BEBBB4] hover:border-[#6F5B42] hover:bg-[#D2D2D1]/50 transition-all text-sm group">
                  <Github className="h-4 w-4 text-muted-foreground group-hover:text-[#6F5B42] transition-colors" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{content.footer.links3[1]}</span>
                </Link>
              </div>
            </div>
          </div>
          <Separator className="bg-[#BEBBB4] mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>{content.footer.copyright}</p>
            <p>{content.footer.email}</p>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 p-4 bg-[#6F5B42]/95 backdrop-blur-sm border-t border-[#B5A892]">
        <Button className="w-full bg-[#D2D2D1] hover:bg-white text-[#15160A] border-0 h-11" asChild>
          <Link href="#pricing">{content.hero.ctaPrimary}</Link>
        </Button>
      </div>
    </div>
  );
}
