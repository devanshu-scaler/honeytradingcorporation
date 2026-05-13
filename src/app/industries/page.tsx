import { Footer, Header, Industries, PageIntro } from "@/components/sections";
import styles from "../page.module.css";

export default function IndustriesPage() {
  return (
    <div className={styles.shell}>
      <Header />
      <main>
        <PageIntro
          eyebrow="Industries"
          title="Tooling support across precision manufacturing"
          description="Recommendations are shaped around batch size, material, machine condition, cycle time, and the realities of day-to-day production."
        />
        <Industries />
      </main>
      <Footer />
    </div>
  );
}
