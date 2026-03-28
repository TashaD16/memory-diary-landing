import type { LucideIcon } from "lucide-react";

export interface Step {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  img: string;
}

export interface Feature {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  comingSoon?: boolean;
}

export interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  text: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  featured: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface LandingContent {
  lang: "ru" | "en";
  nav: {
    features: string;
    pricing: string;
    faq: string;
    cta: string;
  };
  hero: {
    badge: string;
    h1Line1: string;
    h1Accent: string;
    h1Line3: string;
    p: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustText: string;
  };
  stats: Stat[];
  howItWorks: {
    badge: string;
    h2Line1: string;
    h2Accent: string;
    steps: Step[];
  };
  features: {
    badge: string;
    h2Line1: string;
    h2Accent: string;
    items: Feature[];
  };
  testimonials: {
    badge: string;
    h2Line1: string;
    h2Accent: string;
    items: Testimonial[];
  };
  pricing: {
    badge: string;
    h2Line1: string;
    h2Accent: string;
    subtitle: string;
    plans: PricingPlan[];
    popularLabel: string;
  };
  faq: {
    badge: string;
    h2Line1: string;
    h2Accent: string;
    items: FaqItem[];
  };
  cta: {
    h2Line1: string;
    h2Accent: string;
    p: string;
    btn: string;
  };
  waitlist: {
    h3: string;
    p: string;
    placeholder: string;
    btn: string;
    thanks: string;
  };
  footer: {
    desc: string;
    col1: string;
    col2: string;
    col3: string;
    links1: string[];
    links2: string[];
    links3: string[];
    copyright: string;
    email: string;
  };
}
