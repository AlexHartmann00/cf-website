import Link from "./site-link";

export function SiteHeader({ inverse = false }: { inverse?: boolean }) {
  return <header className={`nav site-nav${inverse ? " site-nav-inverse" : ""}`}>
    <Link className="brand" href="/" aria-label="Coach Flo Startseite"><img src="/assets/coach-flo-logo-web.png" alt="" width="62" height="40" /><span>COACH <b>FLO</b></span></Link>
    <nav className="desktop-nav" aria-label="Hauptnavigation">
      <Link href="/">Start</Link>
      <Link href="/#ueber-mich">Über mich</Link>
      <Link href="/#coaching">Coaching</Link>
      <Link href="/workouts">Workouts</Link>
      <Link href="/rize">RIZE-App</Link>
    </nav>
    <Link className="button button-small desktop-cta" href="/termin">Termin buchen</Link>
    <details className="mobile-menu">
      <summary aria-label="Navigation öffnen"><span /><span /><span /></summary>
      <nav aria-label="Mobile Navigation">
        <Link href="/">Start</Link>
        <Link href="/#ueber-mich">Über mich</Link>
        <Link href="/#coaching">Coaching</Link>
        <Link href="/workouts">Workouts</Link>
        <Link href="/rize">RIZE-App</Link>
        <Link className="button" href="/termin">Termin buchen</Link>
      </nav>
    </details>
  </header>;
}
