import type { Metadata } from "next";
import { Intro } from "@/components/common/intro";
import { BookCheck } from "lucide-react";
import Bio from "@/components/layout/bio";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Amanuel Anteneh (Aman), a Full Stack Web Developer specializing in Next.js, React, TypeScript, Node.js, Prisma ORM, and PostgreSQL.",
  alternates: {
    canonical: "https://aman.is-a-fullstack.dev/about",
  },
  openGraph: {
    title: "About | Amanuel",
    description:
      "Learn about Amanuel Anteneh (Aman), a Full Stack Web Developer specializing in Next.js, React, TypeScript, Node.js, Prisma ORM, and PostgreSQL.",
    url: "https://aman.is-a-fullstack.dev/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Amanuel",
    description:
      "Learn about Amanuel Anteneh (Aman), a Full Stack Web Developer specializing in Next.js, React, TypeScript, Node.js, Prisma ORM, and PostgreSQL.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <div className="mx-5">
        <Intro
          icon={<BookCheck />}
          badge="About"
          heading="About"
          highlight="Me"
          paragraph="Let's me introduce my self briefly."
        />
        <Bio />
      </div>
    </main>
  );
}