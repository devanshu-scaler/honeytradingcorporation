import Image from "next/image";
import { ContactForm } from "./contact-form";
import { ArrowRightIcon, CheckIcon } from "./icons";

export const products = [
  {
    title: "Turning",
    description:
      "External and internal turning solutions with grade, chipbreaker, and holder recommendations for stable production.",
    image: "/products/turning-category.jpg",
    tags: ["High Feed Turning", "External Turning", "Internal Turning", "Chipbreakers"],
  },
  {
    title: "Parting and Grooving",
    description:
      "Cut-off, groove-turn, face grooving, modular systems, and coolant-ready holders for repeatable groove quality.",
    image: "/products/parting-grooving-category.jpg",
    tags: ["Parting", "Groove-Turn", "Face Grooving", "Coolant Holders"],
  },
  {
    title: "Milling",
    description:
      "Face, shoulder, profile, slotting, high-feed, and solid end mill options matched to material and machine power.",
    image: "/products/milling-category.jpg",
    tags: ["High Feed", "Shoulder", "Facing", "Solid End Mills"],
  },
  {
    title: "Holemaking",
    description:
      "Head-changeable, indexable, solid carbide, deep-hole drilling, and reaming support for consistent hole quality.",
    image: "/products/holemaking-category.jpg",
    tags: ["Indexable Drills", "Solid Carbide", "Deep Hole", "Reamers"],
  },
  {
    title: "Thread Making",
    description:
      "Thread turning, thread milling, and tapping solutions for reliable thread quality across batch sizes.",
    image: "/products/thread-making-category.jpg",
    tags: ["Thread Turning", "Thread Milling", "Tapping"],
  },
  {
    title: "Tooling System",
    description:
      "Chuck and holder, face mill arbor, and high RPM spindle options to complete stable machining setups.",
    image: "/products/tooling-system-category.jpg",
    tags: ["Chuck & Holder", "Face Mill Arbor", "High RPM Spindle"],
  },
  {
    title: "WIN-SFEED",
    description:
      "High-productivity WIN-SFEED families for turning, cutting, drilling, and milling applications.",
    image: "/products/win-sfeed.jpg",
    tags: ["WIN-TURN", "WIN-CUT", "WIN-DRILL", "WIN-MILL"],
  },
  {
    title: "SFEED-TEC",
    description:
      "SFEED-TEC tooling families for high-feed turning, clamping, drilling, and milling workflows.",
    image: "/products/sfeed-tec.jpg",
    tags: ["SFEED-TURN", "SFEED-CLAMP", "SFEED-DRILL", "SFEED-MILL"],
  },
];

export const services = [
  {
    title: "Tool Selection",
    description:
      "Shortlist grades and geometries based on material, operation, machine rigidity, and finish target.",
  },
  {
    title: "Cutting Parameters",
    description:
      "Practical starting values for speed, feed, depth of cut, coolant strategy, and tool life tracking.",
  },
  {
    title: "Inventory Planning",
    description:
      "Standardize common inserts and holders with alternates that keep purchasing and production simple.",
  },
  {
    title: "Trials and Onboarding",
    description:
      "Run structured trials with clear success measures before changing production tooling.",
  },
];

export const industries = [
  {
    title: "Auto Components",
    desc: "High-volume turning and milling with predictable tool life.",
  },
  {
    title: "General Engineering",
    desc: "Mixed materials, mixed batches, and practical standardization.",
  },
  {
    title: "Oil and Gas",
    desc: "Tough materials, interrupted cuts, and stability-first choices.",
  },
  {
    title: "Aerospace Supply",
    desc: "Tight tolerances, surface finish, and process repeatability.",
  },
];

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat">
      <div className="statValue">{value}</div>
      <div className="statLabel">{label}</div>
    </div>
  );
}

function ProductCard({
  title,
  description,
  image,
  tags,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
}) {
  return (
    <article className="card productCard">
      <div className="productImage">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 860px) 50vw, 100vw"
        />
      </div>
      <div className="productBody">
        <div className="kicker">Product Range</div>
        <h3 className="productTitle">{title}</h3>
        <p className="muted productDesc">{description}</p>
        <div className="tagRow">
          {tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Header() {
  return (
    <header className="header">
      <div className="container headerInner">
        <a className="brand" href="/" aria-label="Honey Trading Corporation">
          <span className="brandMark" aria-hidden="true">
            HTC
          </span>
          <span className="brandText">Honey Trading Corporation</span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="/products">Products</a>
          <a href="/services">Services</a>
          <a href="/industries">Industries</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="btn btnPrimary" href="/contact">
          Request Quote <ArrowRightIcon />
        </a>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container heroGrid">
        <div className="heroCopy">
          <div className="chip">
            <span className="pulse" aria-hidden="true" />
            Authorized tooling supply and application support
          </div>
          <h1 className="heroTitle">Honey Trading Corporation</h1>
          <p className="heroSubtitle">
            Precision cutting tools, fast fulfillment, and practical selection
            support for CNC turning, milling, drilling, and toolholding.
          </p>
          <div className="heroCtas">
            <a className="btn btnPrimary" href="/contact">
              Get a Quote <ArrowRightIcon />
            </a>
            <a className="btn" href="/products">
              Browse Products
            </a>
          </div>
          <div className="heroChecks">
            <span className="check">
              <CheckIcon /> Fast quote response
            </span>
            <span className="check">
              <CheckIcon /> Grade recommendations
            </span>
            <span className="check">
              <CheckIcon /> Production-ready alternates
            </span>
          </div>
        </div>

        <div className="heroVisual" aria-hidden="true">
          <div className="heroImageFrame">
            <Image
              src="/products/turning-category.jpg"
              alt=""
              fill
              priority
              sizes="(min-width: 980px) 46vw, 100vw"
            />
          </div>
          <div className="heroStats">
            <Stat label="Response" value="< 24h" />
            <Stat label="Product Groups" value="8 Categories" />
            <Stat label="Support" value="Selection + Trials" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Products({ compact = false }: { compact?: boolean }) {
  const visibleProducts = compact ? products.slice(0, 4) : products;

  return (
    <section className="section" id="products">
      <div className="container">
        <div className="sectionHead">
          <div>
            <div className="kicker">Products</div>
            <h2 className="h2">Tooling for real shop constraints</h2>
            <p className="muted sectionSub">
              TaeguTec cutting tool categories presented in a simpler dealer
              experience for quick selection and quote requests.
            </p>
          </div>
          {compact ? (
            <a className="btn" href="/products">
              View All Products <ArrowRightIcon />
            </a>
          ) : (
            <a className="btn" href="/contact">
              Ask for Recommendation <ArrowRightIcon />
            </a>
          )}
        </div>

        <div className="cardGrid">
          {visibleProducts.map((product) => (
            <div key={product.title} className="cardGridSpan6">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="sectionHead">
          <div>
            <div className="kicker">Services</div>
            <h2 className="h2">Support that improves cycle time</h2>
            <p className="muted sectionSub">
              From tool selection to cutting data, we help stabilize performance
              and reduce surprises on the shop floor.
            </p>
          </div>
          {compact ? (
            <a className="btn" href="/services">
              See Services <ArrowRightIcon />
            </a>
          ) : null}
        </div>

        <div className="cardGrid">
          {services.map((service) => (
            <article key={service.title} className="card serviceCard">
              <h3 className="serviceTitle">{service.title}</h3>
              <p className="muted serviceDesc">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Industries({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="sectionHead">
          <div>
            <div className="kicker">Industries</div>
            <h2 className="h2">Aligned to how shops actually run</h2>
            <p className="muted sectionSub">
              Fast quoting, stable alternates, and recommendations that respect
              production constraints.
            </p>
          </div>
          {compact ? (
            <a className="btn" href="/industries">
              Explore Industries <ArrowRightIcon />
            </a>
          ) : null}
        </div>

        <div className="cardGrid">
          {industries.map((it) => (
            <article key={it.title} className="card industryCard">
              <div className="industryTitle">{it.title}</div>
              <p className="muted industryDesc">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contactGrid">
        <div className="contactCopy">
          <div className="kicker">Contact</div>
          <h2 className="h2">Request a quote or recommendation</h2>
          <p className="muted sectionSub">
            Share material, operation, machine details, and quantity. We will
            reply with suggested tooling and a quote.
          </p>
          <div className="contactCard">
            <div className="contactRow">
              <div className="contactLabel">Email</div>
              <div className="contactValue">sales@example.com</div>
            </div>
            <div className="contactRow">
              <div className="contactLabel">Phone</div>
              <div className="contactValue">+91 00000 00000</div>
            </div>
            <div className="contactRow">
              <div className="contactLabel">Hours</div>
              <div className="contactValue">Mon-Sat, 9:30-18:30</div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="pageIntro">
      <div className="container">
        <div className="kicker">{eyebrow}</div>
        <h1 className="pageTitle">{title}</h1>
        <p className="muted pageDescription">{description}</p>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="muted">
          (c) {year} Honey Trading Corporation. TaeguTec is a trademark of its
          respective owner.
        </div>
        <div className="footerLinks">
          <a href="/products">Products</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
