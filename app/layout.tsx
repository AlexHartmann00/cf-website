import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://cf-website-24f52.web.app"),
  icons: { icon: [{ url: "/assets/coach-flo-logo.png", type: "image/png" }] },
  title: { default: "Coach Flo | Personal Training", template: "%s | Coach Flo" },
  description: "Individuelles Personal Training, Ernährungsberatung und die RIZE-Coaching-App mit Florian Ströhla in Bad Steben.",
  openGraph: {
    title: "Coach Flo | Dein Körper kann mehr.",
    description: "Personal Training und die RIZE-Coaching-App.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Coach Flo und die RIZE-App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coach Flo | Dein Körper kann mehr.",
    description: "Personal Training und die RIZE-Coaching-App.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
