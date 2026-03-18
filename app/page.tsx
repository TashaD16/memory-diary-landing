"use client";

import { LandingPage } from "@/components/landing/LandingPage";
import { ruContent } from "@/lib/content/ru";

export default function Home() {
  return <LandingPage content={ruContent} />;
}
