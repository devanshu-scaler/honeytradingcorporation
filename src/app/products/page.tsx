import { Footer, Header, PageIntro, Products } from "@/components/sections";
import styles from "../page.module.css";

export default function ProductsPage() {
  return (
    <div className={styles.shell}>
      <Header />
      <main>
        <PageIntro
          eyebrow="Products"
          title="Cutting tools selected for repeatable production"
          description="Explore turning, milling, holemaking, and toolholding ranges for CNC shops that need reliable availability and practical application guidance."
        />
        <Products />
      </main>
      <Footer />
    </div>
  );
}
