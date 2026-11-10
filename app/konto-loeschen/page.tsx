import type { Metadata } from "next";
import styles from "../datenschutz-rize/privacy.module.css";

export const metadata: Metadata = {
  title: "RIZE-Konto löschen",
  description: "Melde dich zur Löschung deines RIZE-Kontos per E-Mail bei Flo.",
};

export default function DeleteAccountPage() {
  return (
    <main className={styles.page}>
      <article className={styles.document}>
        <h1>RIZE-Konto löschen</h1>
        <p>
          Wenn du dein RIZE-Konto löschen möchtest, melde dich bitte per E-Mail bei
          Flo unter <a href="mailto:info@coach-flo.de">info@coach-flo.de</a>.
        </p>
      </article>
    </main>
  );
}
