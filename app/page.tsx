import Link from "./components/site-link";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

const services = [
  {
    number: "01",
    title: "Bewegung verstehen",
    text: "Mit einem Functional Movement Screen erkennen wir Defizite, Asymmetrien und dein persönliches Potenzial.",
  },
  {
    number: "02",
    title: "Individuell trainieren",
    text: "Funktionelles 1:1 Training, das zu deinem Alltag, deinem Leistungsstand und deinen Zielen passt.",
  },
  {
    number: "03",
    title: "Gemeinsam stärker",
    text: "Motivierende Workouts für Vereine, Gruppen oder als fester Termin für deine persönliche Fitness.",
  },
  {
    number: "04",
    title: "Besser ernähren",
    text: "Praktische Ernährungsberatung von Makronährstoffen bis zur nachhaltigen Integration in deinen Alltag.",
  },
];

const process = [
  ["Kennenlernen", "Wir sprechen unverbindlich über dich, deine Ziele und die passende Zusammenarbeit."],
  ["Analyse", "Anamnese, Bewegungsscreening, Krafttest und Körperanalyse schaffen eine fundierte Basis."],
  ["Dein Plan", "Du erhältst ein Trainings- und Ernährungskonzept, das wirklich zu deinem Leben passt."],
  ["Coaching", "Wir setzen gemeinsam um, messen Fortschritte und passen den Weg regelmäßig an."],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Personal Training · Bad Steben</p>
          <h1>Training, das zu dir und deinem Alltag passt.</h1>
          <p className="lead">
            Ich bin Flo. Gemeinsam schauen wir, wo du gerade stehst und was dir
            wirklich hilft – beim Training, bei der Ernährung und im Alltag.
          </p>
          <div className="hero-actions">
            <a className="text-link" href="#coaching">Coaching ansehen <span>↓</span></a>
          </div>
          <div className="hero-stats">
            <div><strong>1:1</strong><span>individuelles Coaching</span></div>
            <div><strong>Ganzheitlich</strong><span>Training & Ernährung</span></div>
            <div><strong>Persönlich</strong><span>direkt mit Flo</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <img className="fill-image hero-portrait" src="/assets/flo-portrait.png" alt="Florian Ströhla – Coach Flo" />
          </div>
          <div className="floating-card">
            <span className="pulse" />
            <div><b>Lass uns kurz sprechen.</b><small>Ich höre zu und sage dir ehrlich, was passt.</small></div>
          </div>
          <span className="outline-word">MOVE</span>
        </div>
      </section>

      <section className="statement">
        <div className="statement-photo"><img className="fill-image" src="/assets/flo-obstacle-run.jpg" alt="Flo nach einem Hindernislauf" /></div>
        <div className="statement-copy">
          <p className="section-kicker">Meine Haltung</p>
          <h2>Bewegung darf sich gut anfühlen.</h2>
          <p>Ich weiß aus eigener Erfahrung, dass Training nicht immer leicht beginnt. Rückenschmerzen haben mich damals überhaupt erst dazu gebracht, mich ernsthaft mit Bewegung zu beschäftigen.</p>
          <p>Heute geht es mir nicht darum, dass du einem Ideal hinterherläufst. Ich möchte dir helfen, deinen Körper besser kennenzulernen und etwas zu finden, das langfristig zu dir passt.</p>
          <span className="statement-signature">– Flo</span>
        </div>
      </section>

      <section className="about" id="ueber-mich">
        <div className="about-visual">
          <img className="fill-image" src="/assets/florian-pole.jpg" alt="Florian Ströhla beim Calisthenics-Training" />
          <div className="about-badge"><strong>Mehr als Training</strong><span>Bewegung · Ernährung · Regeneration</span></div>
        </div>
        <div className="about-copy">
          <p className="section-kicker">Über mich</p>
          <h2>Hi, ich bin Flo.</h2>
          <p>Mein eigener Weg begann mit Rückenschmerzen und klassischem Gerätetraining. Calisthenics hat daraus echte Leidenschaft gemacht – und den Wunsch, Training fundiert, funktionell und für jeden Menschen passend zu gestalten.</p>
          <blockquote>„Ein guter Plan muss nicht perfekt aussehen. Er muss in dein Leben passen.“</blockquote>
          <div className="qualification-list" aria-label="Auswahl der Qualifikationen">
            <span>Personal Trainer</span><span>Sporttherapeut</span><span>FMS Experte</span><span>Functional Nutrition Coach</span><span>Mobility Trainer</span>
          </div>
        </div>
      </section>

      <section className="services" id="coaching">
        <div className="section-head">
          <div><p className="section-kicker">So kann ich dich begleiten</p><h2>Was wir gemeinsam angehen können.</h2></div>
          <p>Wir starten bei deiner Situation und deinem Alltag. Daraus entsteht eine Begleitung, die fachlich sinnvoll und für dich realistisch ist.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-icon">{service.number === "01" ? "◎" : service.number === "02" ? "↗" : service.number === "03" ? "✦" : "◒"}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process" id="ablauf">
        <div className="process-intro">
          <p className="section-kicker">Dein Weg</p>
          <h2>So läuft die Zusammenarbeit ab.</h2>
          <p>Wir lernen uns kennen, schauen genau hin und entscheiden gemeinsam, was für dich sinnvoll ist.</p>
        </div>
        <div className="process-list">
          {process.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="workout-teaser">
        <div className="workout-teaser-copy">
          <p className="section-kicker light">Workout Time</p>
          <h2>Zusammen trainieren.</h2>
          <p>Personal Training ist nicht dein Format? Trainiere zweimal pro Woche im Online Workout oder hol Coach Flo für dein Team und deinen Verein.</p>
          <Link className="button button-light" href="/workouts">Workouts ansehen <span>↗</span></Link>
        </div>
        <div className="workout-teaser-art"><strong>2×</strong><span>pro Woche<br />online trainieren</span></div>
      </section>

      <section className="rize-teaser">
        <div className="rize-logo-wrap">
          <img src="/assets/rize-logo.png" alt="RIZE" width="220" height="220" />
        </div>
        <div>
          <p className="section-kicker light">RIZE-App · Coming soon</p>
          <h2>Training für deinen Alltag.</h2>
          <p>Flo entwickelt gerade RIZE: eine App mit passenden Tagesaufgaben, verständlich erklärten Übungen und einem Überblick über deinen Fortschritt. Noch ist sie nicht veröffentlicht.</p>
          <div className="rize-teaser-actions"><Link className="button button-light" href="/rize">Ersten Einblick ansehen <span>↗</span></Link></div>
        </div>
      </section>

      <section className="choice-section">
        <div className="choice-intro"><p className="section-kicker">Was passt zu dir?</p><h2>Verschiedene Wege, persönlich begleitet.</h2><p>Du musst noch nicht wissen, welches Format das richtige ist. Schau dich in Ruhe um – oder wir sprechen kurz darüber.</p></div>
        <div className="choice-grid">
          <a href="#coaching"><small>Maximal persönlich</small><strong>1:1 Coaching</strong><span>Mehr über das Coaching →</span></a>
          <Link href="/workouts"><small>Gemeinsam motiviert</small><strong>Live Workouts</strong><span>Formate & Termine ansehen →</span></Link>
          <Link href="/rize"><small>Coming soon</small><strong>RIZE-App</strong><span>Mehr über die App erfahren →</span></Link>
        </div>
      </section>

      <section className="contact" id="kontakt">
        <p className="section-kicker">Kennenlernen</p>
        <h2>Lass uns in Ruhe darüber sprechen.</h2>
        <p>Erzähl mir, wo du gerade stehst. Ich höre zu, beantworte deine Fragen und sage dir ehrlich, ob und wie ich dich unterstützen kann.</p>
        <div className="contact-actions">
          <a className="text-link dark" href="mailto:info@coach-flo.de">info@coach-flo.de</a>
          <a className="text-link dark" href="tel:+4915563125361">0155 63125361</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
