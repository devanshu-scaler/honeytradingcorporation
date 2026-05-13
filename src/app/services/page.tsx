import { Footer, Header, PageIntro, Services } from "@/components/sections";
import styles from "../page.module.css";

export default function ServicesPage() {
  return (
    <div className={styles.shell}>
      <Header />
      <main>
        <PageIntro
          eyebrow="Services"
          title="Application support for cleaner tooling decisions"
          description="Use Honey Trading Corporation for product selection, cutting parameter guidance, inventory planning, and structured trials before production rollout."
        />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
