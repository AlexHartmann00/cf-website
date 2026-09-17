import Link from "../components/site-link";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

export default function WorkoutsPage() {
  return (
    <main className="workouts-page">
      <SiteHeader inverse />

      <section className="workouts-hero">
        <img className="fill-image" src="/assets/coach-flo-banner.jpg" alt="Coach Flo – Fitness, Gesundheit und Lifestyle" />
        <div className="workouts-hero-overlay" />
        <div className="workouts-hero-copy">
          <p className="eyebrow"><span /> Live · Online · Im Team</p>
          <h1>Gemeinsam trainieren.</h1>
          <p>Zweimal pro Woche online oder als eigenes Training für dein Team und deinen Verein. Persönlich angeleitet und passend für die Gruppe.</p>
          <a className="button" href="#formate">Formate entdecken <span>↓</span></a>
        </div>
      </section>

      <section className="workout-formats" id="formate">
        <article id="online">
          <span className="format-number">01</span>
          <p className="section-kicker">Online Workout</p>
          <h2>Online trainieren – mit einem festen Termin.</h2>
          <p>Eine gemeinsame Stunde voller Bewegung und Energie. Du brauchst nur eine Matte, Minibänder und Microsoft Teams – Schweiß ist garantiert.</p>
          <div className="schedule-grid">
            <div><small>Montag</small><strong>18–19 Uhr</strong></div>
            <div><small>Donnerstag</small><strong>18–19 Uhr</strong></div>
          </div>
          <div className="format-bottom"><strong>10er-Karte · 70 €</strong><a href="mailto:info@coach-flo.de?subject=Online%20Workout">Online Workout anfragen ↗</a></div>
        </article>

        <article className="group-format" id="gruppe">
          <span className="format-number">02</span>
          <p className="section-kicker light">Gruppenworkout</p>
          <h2>Ein Workout für eure Gruppe.</h2>
          <p>Für Teams und Vereine plane ich ein gemeinsames Training, das zu den Menschen und ihrem Leistungsstand passt – bei euch vor Ort oder online.</p>
          <ul><li>Für Teams und Vereine</li><li>Vor Ort oder online</li><li>Individuell abgestimmt</li></ul>
          <div className="format-bottom"><strong>Termin nach Absprache</strong><a href="mailto:info@coach-flo.de?subject=Gruppenworkout%20Anfrage">Gruppenworkout anfragen ↗</a></div>
        </article>
      </section>

      <section className="workout-rize-bridge">
        <img src="/assets/rize-logo.png" alt="RIZE" width="110" height="110" />
        <div><p className="section-kicker">Coming soon</p><h2>RIZE ist noch in Entwicklung.</h2><p>Flo arbeitet an einer App für flexible Tagesaufgaben. Einen ersten Einblick gibt es schon jetzt.</p></div>
        <Link className="button" href="/rize">Einblick ansehen <span>↗</span></Link>
      </section>

      <section className="contact workout-contact">
        <p className="section-kicker">Noch Fragen?</p>
        <h2>Welches Format passt zu dir?</h2>
        <p>Schreib mir kurz, welches Format dich interessiert. Ich melde mich persönlich bei dir und beantworte deine Fragen.</p>
        <div className="contact-actions"><a className="button" href="mailto:info@coach-flo.de?subject=Workout%20Anfrage">Workout anfragen <span>↗</span></a><a className="text-link dark" href="tel:+4915563125361">0155 63125361</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
