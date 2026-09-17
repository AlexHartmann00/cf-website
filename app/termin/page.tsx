import Link from "../components/site-link";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

const calUrl = process.env.NEXT_PUBLIC_CAL_BOOKING_URL ?? "https://cal.com/coachflo/erstgesprach-individuelles-coaching?embed=1&theme=light";

const packages = [
  ["Startklar", "149 €", "Anamnese, Fitness-Check und eine Personal-Training-Einheit"],
  ["Analyse & Ernährung", "189 €", "Auswertung deines Ernährungsprotokolls und individueller Ernährungsplan"],
  ["Train & Eat", "399 €", "Vier Personal-Training-Einheiten, Ernährungscheck und persönlicher Plan"],
];

export default function BookingPage() {
  return (
    <main className="booking-page">
      <SiteHeader />

      <section className="booking-intro">
        <div>
          <p className="eyebrow"><span /> Kostenlos & unverbindlich</p>
          <h1>Lass uns kennenlernen.</h1>
        </div>
        <div><p>Such dir einfach einen passenden Termin aus. Im Gespräch erzählst du mir, was dich beschäftigt, und wir schauen gemeinsam, ob eine Zusammenarbeit sinnvoll ist.</p><ul><li>Direkt mit Flo</li><li>Kostenlos und ohne Verpflichtung</li><li>Etwa 20 Minuten Zeit füreinander</li></ul></div>
      </section>

      <section className="booking-shell" aria-label="Terminbuchung">
        <iframe title="Kostenloses Erstgespräch mit Coach Flo buchen" src={calUrl} loading="lazy" allow="camera; microphone; fullscreen; payment" />
      </section>

      <section className="booking-prices">
        <div className="section-head"><div><p className="section-kicker">Coaching-Angebote</p><h2>Ein paar Möglichkeiten für unsere Zusammenarbeit.</h2></div><p>Die Pakete geben dir eine erste Orientierung. Im Gespräch klären wir in Ruhe, was zu deiner Situation passt – ganz ohne Verkaufsdruck.</p></div>
        <div className="package-grid">{packages.map(([name, price, description]) => <article key={name}><small>Coaching-Paket</small><h3>{name}</h3><strong>{price}</strong><p>{description}</p><Link href="/termin">Im Gespräch klären →</Link></article>)}</div>
        <p className="price-footnote">Einzelleistung Personal Training / Online Coaching: 70 € pro Stunde. Alle Preise sind Endpreise gemäß § 19 UStG. Stand 01.02.2026.</p>
      </section>

      <SiteFooter />
    </main>
  );
}
