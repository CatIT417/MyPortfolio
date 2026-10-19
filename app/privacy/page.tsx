import type { Metadata } from "next";
import PrivacyContent from "../../components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Aakash",
  description:
    "How this portfolio handles data — contact form details, email delivery via Resend, retention in plain language, and the fact that this site uses no cookies or analytics.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
