import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memory Diary — Digital Memorial for Your Loved Ones",
  description: "Create an eternal digital memorial. Upload memories, photos and voice — AI will let you hear and see your loved one again.",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
