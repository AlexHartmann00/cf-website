import Link from "next/link";

export function SiteFooter() {
  return <footer className="site-footer">
    <Link className="brand" href="/"><img src="/assets/coach-flo-logo.png" alt="" width="62" height="40" /><span>COACH <b>FLO</b></span></Link>
    <p>Personal Training · Workouts · RIZE-App</p>
    <div><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link><span>© {new Date().getFullYear()} Florian Ströhla</span></div>
  </footer>;
}
