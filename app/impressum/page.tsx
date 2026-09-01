import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

export default function ImpressumPage() {
  return <main className="legal-page"><SiteHeader /><article className="legal-content"><p className="section-kicker">Rechtliches</p><h1>Impressum</h1><section><h2>Angaben gemäß § 5 DDG</h2><p><strong>Coach Flo</strong><br />Florian Ströhla<br />Geroldsgrüner Straße 25<br />95138 Bad Steben<br />Deutschland</p></section><section><h2>Kontakt</h2><p>Telefon: <a href="tel:+4915563125361">0155 63125361</a><br />E-Mail: <a href="mailto:info@coach-flo.de">info@coach-flo.de</a><br />Website: <a href="https://www.coach-flo.de">www.coach-flo.de</a></p></section><section><h2>Verbraucherstreitbeilegung</h2><p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p></section><section><h2>Haftung für Inhalte und Links</h2><p>Als Diensteanbieter sind wir für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. Für Inhalte externer Seiten, auf die wir verlinken, sind ausschließlich deren Betreiber verantwortlich.</p></section></article><SiteFooter /></main>;
}
