import {
  Contact,
  Footer,
  Header,
  Hero,
  Industries,
  Products,
  Services,
} from "@/components/sections";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.shell}>
      <Header />
      <main>
        <Hero />
        <div className="divider" />
        <Products compact />
        <div className="divider" />
        <Services compact />
        <div className="divider" />
        <Industries compact />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
