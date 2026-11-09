import type { Metadata } from "next";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Datenschutzerklärung für die RIZE-App",
  description: "Datenschutzerklärung für die RIZE-App. Stand: November 2026.",
};

export default function RizePrivacyPage() {
  return (
    <main className={styles.page}>
      <article className={styles.document}>
        <h1>Datenschutzerklärung für die RIZE-App</h1>
        <p className="privacy-date">Stand: November 2026</p>
        <h2>1. Verantwortlicher</h2>
        <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
        <p>Florian Ströhla</p>
        <p>Goppelsstr. 2</p>
        <p>95236 Stammbach</p>
        <p>E-Mail: <a href="mailto:info@coach-flo.de">info@coach-flo.de</a></p>
        <p>Ein Datenschutzbeauftragter ist nicht bestellt, da die gesetzlichen Voraussetzungen für eine Benennungspflicht nicht vorliegen.</p>
        <h2>2. Allgemeines zur Datenverarbeitung</h2>
        <p>Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen App sowie unserer Inhalte und Leistungen erforderlich ist. Rechtsgrundlagen sind – je nach Verarbeitung – Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung), Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>
        <p>Die serverseitige Datenspeicherung erfolgt grundsätzlich in der Europäischen Union. Einzelheiten zu den eingesetzten Diensten und zu Übermittlungen in Drittländer findest du in den Ziffern 7 und 8.</p>
        <h2>3. Registrierung und Nutzerkonto</h2>
        <p>Für die Nutzung der App ist ein Nutzerkonto erforderlich. Bei der Registrierung verarbeiten wir:</p>
        <ul>
          <li>E-Mail-Adresse</li>
          <li>Passwort (verschlüsselt gespeichert, für uns nicht einsehbar)</li>
        </ul>
        <p>Die Authentifizierung erfolgt über den Dienst Firebase Authentication (Google, siehe Ziffer 7). Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Bereitstellung des Nutzerkontos).</p>
        <h2>4. Onboarding- und Trainingsdaten</h2>
        <p>Bei der Einrichtung der App und während der Nutzung verarbeiten wir folgende Kategorien von Daten, um dir täglich eine zu deinem Leistungsstand passende Übung bereitzustellen:</p>
        <ul>
          <li>Angaben aus dem Onboarding (Alter, Einstufung deines Leistungsstands)</li>
          <li>Trainingsdaten (Trainingsfortschritt, absolvierte Einheiten, Trainingsserie)</li>
        </ul>
        <p>Diese Daten werden deinem Nutzerkonto zugeordnet und serverseitig gespeichert, damit dein Trainingsstand geräteübergreifend erhalten bleibt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>
        <h2>5. Auswahl der Trainingsbereiche</h2>
        <p>Mit RIZE Pro kannst du vor dem Ziehen der Tagesübung einzelne Körperbereiche (z. B. Schulter, Knie, Rücken) auswählen, die bei der heutigen Übung nicht dabei sein sollen. Diese Auswahl ist eine Trainingspräferenz und wird ausschließlich dazu verarbeitet, die Auswahl deiner Tagesübung zu steuern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Bereitstellung der App-Funktion). Genauso kannst du einen Muskelfokus wählen, also festlegen, welche Muskelgruppen bei deinen Übungen berücksichtigt werden sollen. Auch diese Auswahl ist eine Trainingspräferenz und wird ausschließlich dazu verarbeitet, die Auswahl deiner Übungen zu steuern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>
        <p>Die Auswahl ist freiwillig und kann vor jedem Ziehen neu getroffen oder aufgehoben werden.</p>
        <h2>6. Push-Benachrichtigungen</h2>
        <p>Auf Wunsch senden wir dir Erinnerungen an dein tägliches Training (z. B. zum Erhalt deiner Trainingsserie). Die Zustellung erfolgt über Firebase Cloud Messaging (Google) bzw. den Apple Push Notification Service. Push-Benachrichtigungen werden nur nach deiner Zustimmung über die Betriebssystem-Abfrage aktiviert und können jederzeit in den Geräteeinstellungen deaktiviert werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO.</p>
        <h2>7. Hosting und Infrastruktur (Firebase)</h2>
        <p>Die App nutzt die folgenden Dienste der Google-Firebase-Plattform: Cloud Firestore (Datenbank), Firebase Authentication (Anmeldung) und Firebase Cloud Messaging (Push-Nachrichten). Google Analytics oder andere Analysedienste setzen wir in der App nicht ein. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.</p>
        <p>Die Speicherung der Konto- und Trainingsdaten in Cloud Firestore erfolgt in einer Speicherregion innerhalb der Europäischen Union. Der Dienst Firebase Authentication wird von Google ausschließlich in Rechenzentren in den USA betrieben; insoweit werden deine Anmeldedaten (E-Mail-Adresse, verschlüsseltes Passwort) in die USA übermittelt.</p>
        <p>Übermittlungen in die USA sind durch die Zertifizierung von Google LLC unter dem EU-U.S. Data Privacy Framework sowie ergänzend durch EU-Standardvertragsklauseln abgesichert. Mit Google besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO (Firebase Data Processing and Security Terms).</p>
        <h2>8. Erklärvideos (YouTube)</h2>
        <p>Zu den Übungen stellen wir dir kurze Erklärvideos bereit. Die Videos liegen auf unserem YouTube-Kanal und werden über den YouTube-Player in der App abgespielt. Anbieter des Dienstes ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.</p>
        <p>Die Erklärvideos sind standardmäßig deaktiviert. Der YouTube-Player wird nur geladen, wenn du eingewilligt hast, und erst dann, wenn du eine Übung öffnest. Beim Laden und Abspielen werden insbesondere deine IP-Adresse, Geräte- und Browserinformationen, das aufgerufene Video sowie Informationen zur Wiedergabe an Google übermittelt. Zudem speichert YouTube Informationen auf deinem Endgerät oder greift auf dort gespeicherte Informationen zu. Google kann diese Daten auch für eigene Zwecke verarbeiten; insoweit ist Google eigenständig verantwortlich. Wir selbst erhalten aus der Wiedergabe keine personenbezogenen Daten über dich.</p>
        <p>Du kannst auf zwei Wegen einwilligen: Im Onboarding fragen wir dich, ob die Erklärvideos geladen werden sollen; diese Einwilligung gilt für alle Erklärvideos. Hast du dort nicht eingewilligt, siehst du bei einer Übung statt des Videos einen Platzhalter mit einem Hinweis auf die Datenübermittlung an Google. Erst wenn du dort auf „Video laden“ tippst, wird der YouTube-Player für dieses eine Video geladen. Rechtsgrundlage ist jeweils deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO; für die Speicherung von und den Zugriff auf Informationen auf deinem Endgerät § 25 Abs. 1 TDDDG). Um deine Einwilligung nachweisen zu können, speichern wir Zeitpunkt, Umfang und Fassung des Einwilligungstextes (Art. 6 Abs. 1 lit. c i. V. m. Art. 7 Abs. 1 DSGVO).</p>
        <p>Die Einwilligung ist freiwillig. Ohne sie kannst du die App uneingeschränkt nutzen; statt des Videos stehen dir die schriftlichen Hinweise zu den Übungen zur Verfügung. Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem du den Schalter „Erklärvideos“ in den Einstellungen der App deaktivierst; dort kannst du sie auch nachträglich für alle Erklärvideos erteilen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.</p>
        <p>Eine Übermittlung an Google LLC in die USA ist möglich. Sie ist durch die Zertifizierung von Google LLC unter dem EU-U.S. Data Privacy Framework abgesichert. Weitere Informationen findest du in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a></p>
        <h2>9. Pro-Abonnement und Zahlungen</h2>
        <p>Das Pro-Abonnement schließt du in der App ab. Zur Zahlung wirst du aus der App auf die Bezahlseite von Mollie weitergeleitet; dabei wird eine Kennung übermittelt, damit die Zahlung deinem Nutzerkonto zugeordnet werden kann. Wir verarbeiten die für die Vertragsabwicklung erforderlichen Daten (Abostatus, Laufzeit, Transaktionsreferenz). Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>
        <p>Die Zahlungsabwicklung erfolgt über den Zahlungsdienstleister Mollie B.V., Keizersgracht 126, 1015 CW Amsterdam, Niederlande. Mollie ist ein beaufsichtigtes Zahlungsinstitut und verarbeitet deine Zahlungsdaten in eigener datenschutzrechtlicher Verantwortung. Informationen hierzu findest du in der Datenschutzerklärung von Mollie: <a href="https://www.mollie.com/de/privacy">https://www.mollie.com/de/privacy</a></p>
        <p>Als Zahlungsmethoden stehen Apple Pay, Kredit- und Debitkarte, PayPal und Google Pay zur Verfügung. Je nach gewählter Methode verarbeitet zusätzlich der jeweilige Anbieter (Apple, dein Kartenherausgeber, PayPal (Europe) S.à r.l. et Cie, S.C.A. bzw. Google) Daten in eigener Verantwortung. Wir selbst erhalten keine vollständigen Zahlungsdaten (z. B. keine Kartennummern), sondern lediglich eine Bestätigung der Zahlung und die zugehörige Transaktionsreferenz.</p>
        <p>Transaktionsbezogene Daten bewahren wir auf, soweit handels- und steuerrechtliche Aufbewahrungspflichten bestehen (Art. 6 Abs. 1 lit. c DSGVO).</p>
        <p>Da der Kauf über eine Weiterleitung aus der App erfolgt, sind wir gegenüber Apple bzw. Google verpflichtet, die so vermittelten Käufe zu melden. Dabei übermitteln wir Angaben zur Transaktion (z. B. Datum, Betrag, Transaktionskennung), jedoch keine Kontaktdaten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in der Erfüllung der Vertriebsbedingungen der App-Stores, ohne die die App dort nicht angeboten werden kann.</p>
        <h2>10. Speicherdauer und Kontolöschung</h2>
        <p>Deine Daten werden gespeichert, solange dein Nutzerkonto besteht. Du kannst dein Konto jederzeit direkt in der App löschen; damit werden sämtliche deinem Konto zugeordneten Daten gelöscht. Ausgenommen sind Daten, für die gesetzliche Aufbewahrungspflichten bestehen (siehe Ziffer 9); diese werden nach Ablauf der jeweiligen Frist gelöscht.</p>
        <h2>11. Deine Rechte</h2>
        <p>Du hast gegenüber uns folgende Rechte hinsichtlich der dich betreffenden personenbezogenen Daten:</p>
        <ul>
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO) – auf Anfrage an <a href="mailto:info@coach-flo.de">info@coach-flo.de</a></li>
          <li>Recht auf Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO)</li>
          <li>Recht, erteilte Einwilligungen jederzeit mit Wirkung für die Zukunft zu widerrufen (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
        <p>Zudem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Zuständig für uns ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.</p>
        <h2>12. Minderjährige</h2>
        <p>Für die Nutzung der App gilt kein Mindestalter. Minderjährige dürfen die App nur mit Zustimmung ihrer Erziehungsberechtigten nutzen; für Kinder unter sieben Jahren legt ein Erziehungsberechtigter das Nutzerkonto an und verwaltet es.</p>
        <p>Verarbeitungen, die auf einer Einwilligung beruhen (Push-Benachrichtigungen nach Ziffer 6, Erklärvideos nach Ziffer 8), setzen bei Nutzern unter 16 Jahren die Einwilligung oder Zustimmung eines Erziehungsberechtigten voraus (Art. 8 DSGVO). Bist du jünger als 16 Jahre, darfst du die Einwilligung in die Erklärvideos daher nur gemeinsam mit oder durch deine Erziehungsberechtigten erteilen. Das im Onboarding angegebene Alter verwenden wir auch, um dich darauf hinzuweisen.</p>
        <p>Die Rechte nach Ziffer 11 können für minderjährige Nutzer auch von deren Erziehungsberechtigten geltend gemacht werden.</p>
        <h2>13. Änderungen dieser Datenschutzerklärung</h2>
        <p>Wir passen diese Datenschutzerklärung an, wenn sich die Datenverarbeitung in der App ändert (z. B. durch neue Funktionen). Es gilt die jeweils in der App abrufbare Fassung.</p>
      </article>
    </main>
  );
}
