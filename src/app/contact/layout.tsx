import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Amanuel Anteneh for freelance projects, collaborations, or full-time opportunities. Reach out via the contact form.",
  alternates: {
    canonical: "https://aman.is-a-fullstack.dev/contact",
  },
  openGraph: {
    title: "Contact | Amanuel",
    description:
      "Get in touch with Amanuel Anteneh for freelance projects, collaborations, or full-time opportunities.",
    url: "https://aman.is-a-fullstack.dev/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Amanuel",
    description:
      "Get in touch with Amanuel Anteneh for freelance projects, collaborations, or full-time opportunities.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}