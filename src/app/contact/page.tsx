import { Contact, Footer, Header, PageIntro } from "@/components/sections";
import styles from "../page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.shell}>
      <Header />
      <main>
        <PageIntro
          eyebrow="Contact"
          title="Send your tooling requirement"
          description="Share the operation, material, machine, quantity, and current tooling if available. The demo form is ready for backend wiring."
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
