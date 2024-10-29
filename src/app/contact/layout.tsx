// app/contact/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Meeting | LAMZ",
  description:
    "Schedule a consultation to transform your knowledge into a profitable online course",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
