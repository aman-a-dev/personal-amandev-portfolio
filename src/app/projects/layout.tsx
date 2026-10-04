import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse real-world projects built by Amanuel Anteneh using Next.js, React, TypeScript, Node.js, Prisma ORM, PostgreSQL, and AI integrations.",
  alternates: {
    canonical: "https://aman.is-a-fullstack.dev/projects",
  },
  openGraph: {
    title: "Projects | Amanuel",
    description:
      "Browse real-world projects built by Amanuel Anteneh using Next.js, React, TypeScript, Node.js, Prisma ORM, PostgreSQL, and AI integrations.",
    url: "https://aman.is-a-fullstack.dev/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Amanuel",
    description:
      "Browse real-world projects built by Amanuel Anteneh using Next.js, React, TypeScript, Node.js, Prisma ORM, PostgreSQL, and AI integrations.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}