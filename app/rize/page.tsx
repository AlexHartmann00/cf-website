import type { Metadata } from "next";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "RIZE-App – Coming soon",
  description: "RIZE ist noch in Entwicklung. Hier bekommst du einen ersten Einblick in die Trainings-App von Coach Flo.",
};

const features = [
  ["Deine Tagesaufgabe", "RIZE kombiniert Übung, Intensität und Umfang passend zu deinem persönlichen Level.", "▰"],
  ["Fortschritt, der motiviert", "Serien, Level, Impact, Meilensteine und Aktivität machen deine Entwicklung sichtbar.", "↗"],
  ["Workout-Bibliothek", "Finde Übungen über Suche und Muskelgruppen – inklusive Details und Video-Erklärungen.", "◎"],
  ["Dein Muskelfokus", "Richte Tagesaufgaben auf gewünschte Muskelgruppen aus und schließe unpassende Übungen aus.", "✦"],
];

export default function RizePage() {
  return (
    <main className="rize-page">
      <SiteHeader inverse />

      <section className="rize-hero">
        <div className="rize-orb orb-one" />
        <div className="rize-orb orb-two" />
        <div className="rize-hero-copy">
          <div className="rize-brand">
            <img src="/assets/rize-logo-web.png" alt="RIZE Logo" width="100" height="100" />
            <span>RIZE</span>
          </div>
          <p className="eyebrow"><span /> Coming soon · Die RIZE-App ist noch in Entwicklung</p>
          <h1>Training, das bald in deinen Tag passt.</h1>
          <p className="lead">Mit RIZE entwickelt Flo eine App für persönliche Tagesaufgaben, verständlich erklärte Übungen und einen Überblick über deinen Fortschritt. Hier siehst du schon jetzt, woran wir arbeiten.</p>
          <div className="hero-actions">
            <a className="text-link" href="#features">Ersten Einblick ansehen <span>↓</span></a>
          </div>
          <p className="cta-note">Noch nicht im App Store oder bei Google Play erhältlich.</p>
        </div>
        <div className="rize-hero-visual">
          <img src="/assets/rize-hero.png" alt="Vorschau der RIZE-App mit Tagesaufgabe, Übungsansicht und Trainingstimer" />
        </div>
      </section>

      <section className="rize-proof">
        <span>TRAINING</span><i /> <span>PROGRESS</span><i /> <span>COACHING</span><i /> <span>MOMENTUM</span>
      </section>

      <section className="rize-features" id="features">
        <div className="section-head">
          <div><p className="section-kicker">Das steckt in RIZE</p><h2>Übersichtlich und leicht zu nutzen.</h2></div>
          <p>Geplant sind machbare Trainingsimpulse für deinen Tag und ein klarer Überblick über deinen Verlauf – ohne komplizierte Planung.</p>
        </div>
        <div className="feature-grid">
          {features.map(([title, text, icon]) => <article key={title}><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="rize-app-detail">
        <div className="rize-app-detail-copy">
          <p className="section-kicker">Direkt in der Übung</p>
          <h2>Klare Anleitung, ohne Umwege.</h2>
          <p>RIZE führt dich durch deine Aufgabe, zählt die Zeit mit und zeigt dir die Bewegung direkt in der App. So weißt du während des Trainings, was als Nächstes kommt.</p>
          <ul><li>Passende Dauer und Intensität</li><li>Video direkt bei der Übung</li><li>Fortschritt automatisch festhalten</li></ul>
        </div>
        <div className="rize-app-shot">
          <img loading="lazy" decoding="async" src="/assets/rize-workout-wall-sit.png" alt="Geführte RIZE-Übung mit Timer, Startschaltfläche und Bewegungsvideo" />
        </div>
      </section>

      <section className="rize-cta" id="coming-soon">
        <img src="/assets/rize-logo-web.png" alt="" width="130" height="130" />
        <p className="section-kicker light">Coming soon</p>
        <h2>RIZE braucht noch etwas Zeit.</h2>
        <p>Die App ist noch nicht veröffentlicht. Sobald sie verfügbar ist, findest du die offiziellen Store-Links hier.</p>
      </section>

      <SiteFooter />
    </main>
  );
}
