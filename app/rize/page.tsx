import Link from "../components/site-link";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

const features = [
  ["Deine Tagesaufgabe", "RIZE kombiniert Übung, Intensität und Umfang passend zu deinem persönlichen Level.", "▰"],
  ["Fortschritt, der motiviert", "Serien, Level, Impact, Meilensteine und Aktivität machen deine Entwicklung sichtbar.", "↗"],
  ["Workout-Bibliothek", "Finde Übungen über Suche und Muskelgruppen – inklusive Details und Video-Erklärungen.", "◎"],
  ["Dein Muskelfokus", "Richte Tagesaufgaben auf gewünschte Muskelgruppen aus und schließe unpassende Übungen aus.", "✦"],
];

const appStoreUrl = "#download";
const googlePlayUrl = "#download";

function StoreButtons({ light = false }: { light?: boolean }) {
  return <div className={`store-buttons${light ? " store-buttons-light" : ""}`} aria-label="RIZE herunterladen">
    <a className="store-badge-link apple-badge-link" href={appStoreUrl} aria-label="RIZE im App Store – Link folgt"><img src="/assets/download-app-store.svg" alt="Laden im App Store" /></a>
    <a className="store-badge-link google-badge-link" href={googlePlayUrl} aria-label="RIZE bei Google Play – Link folgt"><img src="/assets/google-play-badge.png" alt="Jetzt bei Google Play" /></a>
  </div>;
}

export default function RizePage() {
  return (
    <main className="rize-page">
      <SiteHeader inverse />

      <section className="rize-hero">
        <div className="rize-orb orb-one" />
        <div className="rize-orb orb-two" />
        <div className="rize-hero-copy">
          <div className="rize-brand">
            <img src="/assets/rize-logo.png" alt="RIZE Logo" width="100" height="100" />
            <span>RIZE</span>
          </div>
          <p className="eyebrow"><span /> Training, das in deinen Tag passt.</p>
          <h1>Deine Aufgabe für heute.</h1>
          <p className="lead">RIZE schlägt dir eine passende Übung vor, erklärt sie verständlich und hält fest, was du geschafft hast. Einfach öffnen und loslegen.</p>
          <div className="hero-actions">
            <a className="button" href="#download">App herunterladen <span>↓</span></a>
            <a className="text-link" href="#features">Features ansehen <span>↓</span></a>
          </div>
          <p className="cta-note">Für iPhone und Android · Kostenlos starten</p>
        </div>
        <div className="phone-stage" aria-label="Vorschau der RIZE-App">
          <div className="phone phone-back">
            <div className="phone-screen analytics-screen">
              <small>Deine Woche</small>
              <h3>4 Workouts</h3>
              <div className="chart"><i /><i /><i /><i /><i /><i /><i /></div>
              <p>Starke Woche! <b>+12%</b></p>
            </div>
          </div>
          <div className="phone phone-front">
            <div className="phone-screen">
              <div className="app-top"><img src="/assets/rize-logo.png" alt="" width="34" height="34" /><span>Guten Morgen, Flo</span></div>
              <small>HEUTIGES TRAINING</small>
              <div className="workout-card"><span>DEINE TAGESAUFGABE</span><h3>Build your<br />Momentum.</h3><button>Aufgabe starten →</button></div>
              <div className="mini-stats"><div><b>12</b><small>Einheiten</small></div><div><b>7</b><small>Tage Serie</small></div><div><b>82%</b><small>Level</small></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="rize-proof">
        <span>TRAINING</span><i /> <span>PROGRESS</span><i /> <span>COACHING</span><i /> <span>MOMENTUM</span>
      </section>

      <section className="rize-features" id="features">
        <div className="section-head">
          <div><p className="section-kicker">Das steckt in RIZE</p><h2>Übersichtlich und leicht zu nutzen.</h2></div>
          <p>Du bekommst einen machbaren Impuls für deinen Tag und kannst deinen Verlauf verfolgen – ohne komplizierte Planung.</p>
        </div>
        <div className="feature-grid">
          {features.map(([title, text, icon]) => <article key={title}><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="rize-model">
        <div>
          <p className="section-kicker light">Kostenlos starten</p>
          <h2>Erst ausprobieren, dann entscheiden.</h2>
        </div>
        <div className="model-options">
          <article><small>RIZE</small><strong>Kostenlos</strong><p>Persönliche Tagesaufgabe, Basis-Workoutauswahl und sichtbare Trainingsserie.</p></article>
          <article className="model-pro"><small>RIZE PRO</small><strong>Ab 3,99 € <em>/ Monat</em></strong><p>Vollständige Übungsbibliothek, Muskelfokus sowie erweiterte Verlaufskurven und Aktivitätskalender.</p></article>
        </div>
      </section>

      <section className="rize-cta" id="start">
        <img src="/assets/rize-logo.png" alt="" width="130" height="130" />
        <p className="section-kicker light">RIZE herunterladen</p>
        <h2>Probier RIZE in Ruhe aus.</h2>
        <p>Die App ist kostenlos für iPhone und Android verfügbar.</p>
        <div id="download"><StoreButtons light /></div>
      </section>

      <SiteFooter />
    </main>
  );
}
