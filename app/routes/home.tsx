import { useState } from "react";

/* ─────────────────────────────────────────
   Shared inline styles
───────────────────────────────────────── */

const S = {
  /* Navbar */
  nav: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    height: 68,
    background: "rgba(5,6,10,0.85)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    zIndex: 1000,
  },
  navLogo: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    textDecoration: "none",
  },
  navSquare: {
    width: 28,
    height: 28,
    borderRadius: 8,
    background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800,
    fontSize: 14,
    flexShrink: 0,
  },
  navWordmark: {
    display: "flex",
    flexDirection: "column" as const,
    lineHeight: 1,
  },
  navBrand: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 700,
    fontSize: 18,
    color: "#F0F4FF",
    letterSpacing: "-0.01em",
  },
  navSub: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 9,
    color: "#6B7A99",
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
    marginTop: 2,
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 28,
  },
  navLink: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    color: "#6B7A99",
    textDecoration: "none",
    transition: "color 0.2s",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
  },
  navCta: {
    background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: 14,
    padding: "9px 20px",
    borderRadius: 999,
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    transition: "opacity 0.2s",
  },

  /* Hero */
  hero: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    padding: "120px 24px 80px",
    background:
      "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.2) 0%, transparent 60%), #05060A",
    position: "relative" as const,
    overflow: "hidden",
    textAlign: "center" as const,
  },
  heroGrid: {
    position: "absolute" as const,
    inset: 0,
    backgroundImage:
      "radial-gradient(rgba(37,99,235,0.12) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    pointerEvents: "none" as const,
  },
  eyebrow: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 11,
    letterSpacing: "0.2em",
    color: "#06B6D4",
    marginBottom: 24,
    textTransform: "uppercase" as const,
    position: "relative" as const,
    zIndex: 1,
  },
  h1: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800,
    fontSize: "clamp(52px, 7vw, 92px)",
    lineHeight: 0.95,
    letterSpacing: "-0.04em",
    color: "#F0F4FF",
    marginBottom: 32,
    position: "relative" as const,
    zIndex: 1,
  },
  h1Grad: {
    background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  heroSub: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18,
    color: "#6B7A99",
    maxWidth: 560,
    lineHeight: 1.6,
    marginBottom: 40,
    position: "relative" as const,
    zIndex: 1,
  },
  heroCtaRow: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap" as const,
    justifyContent: "center",
    marginBottom: 56,
    position: "relative" as const,
    zIndex: 1,
  },
  ctaBlue: {
    background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: 16,
    height: 50,
    padding: "0 28px",
    borderRadius: 999,
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    transition: "opacity 0.2s",
  },
  ctaGhost: {
    background: "transparent",
    color: "#F0F4FF",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: 16,
    height: 50,
    padding: "0 28px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.2)",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    transition: "border-color 0.2s",
  },
  trustRow: {
    display: "flex",
    gap: 32,
    flexWrap: "wrap" as const,
    justifyContent: "center",
    position: "relative" as const,
    zIndex: 1,
  },
  trustItem: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 12,
    color: "#6B7A99",
  },

  /* Section commons */
  section: {
    padding: "100px 40px",
  },
  sectionDark: {
    padding: "100px 40px",
    background: "#0A0C14",
  },
  sectionTitle: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 700,
    fontSize: 56,
    color: "#F0F4FF",
    textAlign: "center" as const,
    marginBottom: 16,
    letterSpacing: "-0.02em",
  },
  sectionSub: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 18,
    color: "#6B7A99",
    textAlign: "center" as const,
    marginBottom: 64,
    maxWidth: 600,
    margin: "0 auto 64px",
  },

  /* Services grid */
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    maxWidth: 1200,
    margin: "0 auto",
  },
  card: {
    background: "#0F1220",
    borderRadius: 16,
    padding: 32,
    border: "1px solid rgba(255,255,255,0.07)",
    transition: "border-color 0.3s, transform 0.3s",
    cursor: "default",
  },
  cardIcon: {
    fontSize: 32,
    marginBottom: 16,
    display: "block",
  },
  cardTitle: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 700,
    fontSize: 20,
    color: "#F0F4FF",
    marginBottom: 12,
  },
  cardBody: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    color: "#6B7A99",
    lineHeight: 1.65,
    marginBottom: 20,
  },
  tagRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap" as const,
  },
  tag: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 11,
    padding: "3px 10px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.05)",
    color: "#6B7A99",
    border: "1px solid rgba(255,255,255,0.08)",
  },
};

/* ─────────────────────────────────────────
   Sub-components
───────────────────────────────────────── */

function NavBar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const links = ["Services", "Solutions", "Products", "About", "Contact"];

  return (
    <nav style={S.nav}>
      <a href="#" style={S.navLogo}>
        <div style={S.navSquare}>A</div>
        <div style={S.navWordmark}>
          <span style={S.navBrand}>ACCRNOVA</span>
          <span style={S.navSub}>Private Limited</span>
        </div>
      </a>
      <a href="https://accrnova.uk" style={{fontSize:"10px",color:"#C9952A",border:"1px solid rgba(201,149,42,0.3)",padding:"2px 8px",borderRadius:"100px",textDecoration:"none",marginLeft:"8px"}}>ACCRNOVA Group</a>
      <div style={S.navLinks}>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              ...S.navLink,
              color: hovered === l ? "#F0F4FF" : "#6B7A99",
            }}
            onMouseEnter={() => setHovered(l)}
            onMouseLeave={() => setHovered(null)}
          >
            {l}
          </a>
        ))}
        <a href="#contact" style={S.navCta}>
          Start a Project →
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={S.hero}>
      <div style={S.heroGrid} />
      <p style={S.eyebrow}>ACCRNOVA PRIVATE LIMITED · BANGALORE</p>
      <h1 style={S.h1}>
        Managing AI for
        <br />
        <span style={S.h1Grad}>Every Business.</span>
      </h1>
      <p style={S.heroSub}>
        ACCRNOVA Private Limited is a full-service AI company — building enterprise AI
        governance platforms, consumer AI safety products, bespoke software, and machine
        learning systems for clients across sectors.
      </p>
      <div style={S.heroCtaRow}>
        <a href="#services" style={S.ctaBlue}>
          Explore Our Services →
        </a>
        <a href="#products" style={S.ctaGhost}>
          View Products
        </a>
      </div>
      <div style={S.trustRow}>
        {[
          "🏢 Enterprise AI",
          "🛡️ AI Governance",
          "⚙️ Software Dev",
          "🧠 Machine Learning",
          "📱 Consumer Apps",
        ].map((item) => (
          <span key={item} style={S.trustItem}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

const serviceCards = [
  {
    accent: "#2563EB",
    icon: "⚡",
    title: "Enterprise AI Governance",
    body: "Deploy AI with complete compliance control. We implement Axiom-powered governance layers across your existing AI tools — Circuit Breaker, Audit Ledger, human approval workflows.",
    tags: ["Axiom", "Compliance", "Enterprise"],
  },
  {
    accent: "#7C3AED",
    icon: "🧠",
    title: "Machine Learning Engineering",
    body: "Custom ML model development, training pipelines, MLOps infrastructure, and model deployment. From proof-of-concept to production-grade systems.",
    tags: ["ML", "MLOps", "Python", "PyTorch"],
  },
  {
    accent: "#06B6D4",
    icon: "⚙️",
    title: "Software Development",
    body: "Full-stack web and mobile application development. React, React Native, Node.js, Cloudflare Workers, and cloud-native architectures built for scale.",
    tags: ["React", "Node.js", "Cloudflare", "Mobile"],
  },
  {
    accent: "#0D9488",
    icon: "🎯",
    title: "AI Consultancy",
    body: "Strategic AI advisory for businesses evaluating AI adoption. We assess readiness, map risks, identify opportunities, and build the governance framework before the first model is deployed.",
    tags: ["Strategy", "Advisory", "Roadmap"],
  },
  {
    accent: "#C9952A",
    icon: "🛡️",
    title: "Consumer AI Products",
    body: "ACCRNOVA Safe Plus — personal and family AI protection products. Browser extension, compliance checking, custom rules. For individuals, professionals, and families.",
    tags: ["ACCRNOVA Safe Plus", "Consumer", "Privacy"],
  },
  {
    accent: "#2563EB",
    icon: "📊",
    title: "Data & Analytics",
    body: "Data pipeline engineering, analytics infrastructure, and business intelligence systems. We build the data foundations that make ML and AI possible.",
    tags: ["Data Engineering", "BI", "Analytics"],
  },
];

function ServiceCard({
  accent,
  icon,
  title,
  body,
  tags,
}: (typeof serviceCards)[0]) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...S.card,
        borderTop: `3px solid ${accent}`,
        borderColor: hovered ? accent : "rgba(255,255,255,0.07)",
        borderTopColor: accent,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={S.cardIcon}>{icon}</span>
      <div style={S.cardTitle}>{title}</div>
      <p style={S.cardBody}>{body}</p>
      <div style={S.tagRow}>
        {tags.map((t) => (
          <span key={t} style={{ ...S.tag, color: accent, borderColor: `${accent}33` }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" style={{ ...S.section, background: "#05060A" }}>
      <h2 style={S.sectionTitle}>What We Build.</h2>
      <p style={S.sectionSub}>
        End-to-end AI and software solutions for enterprise and consumer clients.
      </p>
      <div
        style={{
          ...S.servicesGrid,
          // Responsive handled via media override below — fallback to 1 col on small
        }}
      >
        {serviceCards.map((c) => (
          <ServiceCard key={c.title} {...c} />
        ))}
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Solutions() {
  return (
    <section
      id="solutions"
      style={{
        padding: "100px 40px",
        background: "#0A0C14",
      }}
    >
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: 48,
          color: "#F0F4FF",
          textAlign: "center",
          marginBottom: 16,
          letterSpacing: "-0.02em",
        }}
      >
        Built for Two Audiences.
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          maxWidth: 1200,
          margin: "60px auto 0",
        }}
      >
        {/* Enterprise Panel */}
        <div
          style={{
            background: "#0F1220",
            borderRadius: 20,
            padding: 48,
            border: "1px solid rgba(37,99,235,0.3)",
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(6,182,212,0.03) 100%), #0F1220",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#60A5FA",
              background: "rgba(37,99,235,0.15)",
              padding: "4px 12px",
              borderRadius: 999,
              marginBottom: 24,
              display: "inline-block",
              textTransform: "uppercase",
            }}
          >
            ENTERPRISE
          </span>
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 36,
              color: "#F0F4FF",
              marginBottom: 20,
              marginTop: 16,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            For firms that need AI governance now.
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: "#6B7A99",
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Regulated industries — law firms, financial services, healthcare organisations
            — face mounting pressure to demonstrate AI oversight. ACCRNOVA delivers the
            technical infrastructure to govern every AI session, create tamper-evident
            audit trails, and protect against compliance violations before they happen.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
            {[
              "Axiom Core implementation",
              "Custom compliance rule configuration",
              "Ed25519 cryptographic audit trails",
              "Telegram/Discord approval workflows",
              "Geopolitical risk assessment integration",
              "Regulatory reporting automation",
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: "#F0F4FF",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ color: "#2563EB" }}>→</span> {item}
              </li>
            ))}
          </ul>
          <a
            href="https://axiom-app-d1wced.camelai.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
              color: "#fff",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 14,
              padding: "12px 28px",
              borderRadius: 999,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Enterprise Solutions →
          </a>
        </div>

        {/* Consumer Panel */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(13,148,136,0.03) 100%), #0F1220",
            borderRadius: 20,
            padding: 48,
            border: "1px solid rgba(6,182,212,0.3)",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#06B6D4",
              background: "rgba(6,182,212,0.15)",
              padding: "4px 12px",
              borderRadius: 999,
              marginBottom: 24,
              display: "inline-block",
              textTransform: "uppercase",
            }}
          >
            CONSUMER
          </span>
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 36,
              color: "#F0F4FF",
              marginBottom: 20,
              marginTop: 16,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            For people who use AI every day.
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: "#6B7A99",
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Millions of professionals, students, and families use ChatGPT, Claude, and
            Gemini daily — often sharing sensitive information without realising. ACCRNOVA
            Safe Plus provides personal-scale AI governance: protecting PII, work secrets,
            health data, and financial information before they leave your device.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
            {[
              "ACCRNOVA Safe Plus (personal)",
              "Family AI protection (5 users)",
              "ACCRNOVA Safe Pro (unlimited)",
              "Chrome & Firefox extension",
              "Custom personal rules",
              "Weekly AI usage reports",
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: "#F0F4FF",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ color: "#06B6D4" }}>→</span> {item}
              </li>
            ))}
          </ul>
          <a
            href="https://axiom-safe-d1wced.camelai.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(135deg, #06B6D4 0%, #0D9488 100%)",
              color: "#fff",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 14,
              padding: "12px 28px",
              borderRadius: 999,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Consumer Products →
          </a>
        </div>
      </div>
    </section>
  );
}

function Products() {
  const products = [
    {
      name: "ACCRNOVA Safe Plus",
      badge: "Consumer · From £7/mo",
      badgeColor: "#06B6D4",
      description:
        "Personal and family AI protection. Browser extension for ChatGPT, Claude, Gemini. PII guard, work secret protection, weekly reports.",
      status: "● Live",
      statusColor: "#0D9488",
      cta: "View Product →",
      href: "https://axiom-safe-d1wced.camelai.app",
    },
    {
      name: "Axiom Enterprise Suite",
      badge: "Enterprise · From £3,000/mo",
      badgeColor: "#2563EB",
      description:
        "Full AI governance platform. Circuit Breaker, Audit Ledger, Approval Gateway, Geopolitical Risk Engine. For law firms and financial services.",
      status: "● Live",
      statusColor: "#0D9488",
      cta: "View Platform →",
      href: "https://axiom-app-d1wced.camelai.app",
    },
    {
      name: "ACCRNOVA ML Studio",
      badge: "Coming Q4 2026",
      badgeColor: "#6B7A99",
      description:
        "Managed ML model development and deployment platform. Bring your data, we build and govern the model pipeline.",
      status: "○ Coming Soon",
      statusColor: "#6B7A99",
      cta: "Join Waitlist →",
      href: "#contact",
    },
  ];

  return (
    <section id="products" style={{ ...S.section, background: "#05060A" }}>
      <h2
        style={{
          ...S.sectionTitle,
          marginBottom: 16,
        }}
      >
        Our Products.
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
          maxWidth: 1200,
          margin: "60px auto 0",
        }}
      >
        {products.map((p) => (
          <div
            key={p.name}
            style={{
              background: "#0F1220",
              borderRadius: 16,
              padding: 36,
              border: "1px solid rgba(255,255,255,0.07)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: p.badgeColor,
                  background: `${p.badgeColor}20`,
                  padding: "3px 10px",
                  borderRadius: 999,
                  textTransform: "uppercase",
                }}
              >
                {p.badge}
              </span>
            </div>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 22,
                color: "#F0F4FF",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              {p.name}
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: "#6B7A99",
                lineHeight: 1.65,
                margin: 0,
                flex: 1,
              }}
            >
              {p.description}
            </p>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: p.statusColor,
                fontWeight: 500,
              }}
            >
              {p.status}
            </div>
            <a
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                padding: "10px 20px",
                borderRadius: 999,
                textDecoration: "none",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              {p.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function TechStack() {
  const techs = [
    "Cloudflare Workers",
    "Durable Objects",
    "React Router 7",
    "TypeScript",
    "Python",
    "PyTorch",
    "TensorFlow",
    "React Native",
    "Flutter",
    "PostgreSQL",
    "Bun",
    "Vite",
    "Tailwind CSS",
    "Workers AI",
    "Ed25519 Web Crypto",
  ];

  return (
    <section style={{ ...S.sectionDark, textAlign: "center" }}>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: 40,
          color: "#F0F4FF",
          marginBottom: 12,
          letterSpacing: "-0.02em",
        }}
      >
        Our Stack.
      </h2>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 16,
          color: "#6B7A99",
          marginBottom: 48,
        }}
      >
        Production-grade, globally distributed, zero cold-start.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          justifyContent: "center",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {techs.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: "#F0F4FF",
              background: "#0F1220",
              border: "1px solid rgba(255,255,255,0.09)",
              padding: "8px 18px",
              borderRadius: 999,
              letterSpacing: "0.01em",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ ...S.section, background: "#05060A" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          maxWidth: 1200,
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 40,
              color: "#F0F4FF",
              marginBottom: 20,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Part of the ACCRNOVA Ecosystem.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: "#6B7A99",
              lineHeight: 1.7,
              marginBottom: 36,
            }}
          >
            ACCRNOVA Private Limited is the technology and AI arm of ACCRNOVA Group —
            working alongside AryaSolon Strategies (legal advisory) and Zenithustra
            (physical & technical infrastructure) to deliver complete business solutions.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
            {[
              "ACCRNOVA Group",
              "AryaSolon Strategies",
              "Zenithustra",
              "Q Commerce",
              "Lamp of Life Accelerator",
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: "#60A5FA",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                }}
              >
                <span style={{ color: "#2563EB" }}>→</span> {item}
              </li>
            ))}
          </ul>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "#6B7A99",
            }}
          >
            📍 Bangalore, Karnataka, India · Berlin, Germany
          </p>
        </div>

        {/* Right — 2×2 stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
          }}
        >
          {[
            { num: "12+", label: "Products & Platforms" },
            { num: "4", label: "ACCRNOVA Group Entities" },
            { num: "Enterprise + Consumer", label: "Market Focus" },
            { num: "Axiom-Governed", label: "All AI Operations" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: "#0F1220",
                borderRadius: 16,
                padding: 28,
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 28,
                  color: "#F0F4FF",
                  marginBottom: 8,
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: "#6B7A99",
                  lineHeight: 1.4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const services = [
    "Enterprise AI Governance",
    "Machine Learning Engineering",
    "Software Development",
    "AI Consultancy",
    "Consumer AI Products",
    "Data & Analytics",
  ];

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    color: "#F0F4FF",
    background: "#0F1220",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 10,
    padding: "12px 16px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ ...S.section, background: "#0A0C14" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          maxWidth: 1200,
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 48,
              color: "#F0F4FF",
              marginBottom: 20,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Start Building.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: "#6B7A99",
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            Whether you need enterprise AI governance, a custom software project, ML
            engineering, or consumer AI safety products — we respond within 24 hours.
          </p>
          {[
            { icon: "📍", text: "Kodhihali, Bangalore, Karnataka, India" },
            { icon: "📧", text: "himanshu.s.sorout@gmail.com" },
            { icon: "📞", text: "+91 8826164299" },
            { icon: "🌐", text: "Part of ACCRNOVA Group" },
          ].map((item) => (
            <div
              key={item.text}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  color: "#6B7A99",
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Right — Form */}
        <div>
          {sent ? (
            <div
              style={{
                background: "#0F1220",
                borderRadius: 20,
                padding: 48,
                border: "1px solid rgba(6,182,212,0.3)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 20 }}>✅</div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 24,
                  color: "#F0F4FF",
                  marginBottom: 12,
                }}
              >
                Message Sent!
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", color: "#6B7A99" }}>
                We'll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background: "#0F1220",
                borderRadius: 20,
                padding: 40,
                border: "1px solid rgba(255,255,255,0.07)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <input
                name="name"
                placeholder="Your Name"
                required
                style={inputStyle}
                value={form.name}
                onChange={handleChange}
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                style={inputStyle}
                value={form.email}
                onChange={handleChange}
              />
              <input
                name="company"
                placeholder="Company (optional)"
                style={inputStyle}
                value={form.company}
                onChange={handleChange}
              />
              <select
                name="service"
                required
                style={{ ...inputStyle, color: form.service ? "#F0F4FF" : "#6B7A99" }}
                value={form.service}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Service Needed
                </option>
                {services.map((s) => (
                  <option key={s} value={s} style={{ background: "#0F1220" }}>
                    {s}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={5}
                required
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: 120,
                }}
                value={form.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                style={{
                  background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  padding: "14px 28px",
                  borderRadius: 999,
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
              >
                Send →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: "#05060A",
        borderTop: "2px solid transparent",
        borderImage: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%) 1",
        padding: "48px 40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 32,
          maxWidth: 1200,
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div>
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 20,
              color: "#F0F4FF",
              marginBottom: 4,
            }}
          >
            ACCRNOVA
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              color: "#6B7A99",
              marginBottom: 12,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Private Limited
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              color: "#6B7A99",
            }}
          >
            © 2026 ACCRNOVA Private Limited. All rights reserved.
          </div>
        </div>

        {/* Center */}
        <div
          style={{
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { label: "Services", href: "#services" },
            { label: "Solutions", href: "#solutions" },
            { label: "Products", href: "#products" },
            { label: "ACCRNOVA Group", href: "#about" },
            { label: "AryaSolon", href: "#about" },
            { label: "Zenithustra", href: "#about" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: "#6B7A99",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: "#0D9488",
              background: "rgba(13,148,136,0.1)",
              border: "1px solid rgba(13,148,136,0.3)",
              padding: "6px 16px",
              borderRadius: 999,
              letterSpacing: "0.03em",
            }}
          >
            Powered by Axiom AI Governance
          </span>
        </div>
      </div>
      <div style={{borderTop:"1px solid rgba(255,255,255,0.06)",marginTop:"24px",paddingTop:"20px",textAlign:"center"}}>
        <a href="https://accrnova.uk" style={{color:"#C9952A",fontSize:"13px",fontWeight:600,textDecoration:"none"}}>⬡ ACCRNOVA Group</a>
        <span style={{color:"#4a5568",fontSize:"12px",margin:"0 12px"}}>·</span>
        <a href="https://zenithustra.accrnova.uk" style={{color:"#6B7280",fontSize:"12px",textDecoration:"none"}}>Zenithustra</a>
        <span style={{color:"#4a5568",fontSize:"12px",margin:"0 8px"}}>·</span>
        <a href="https://aryasolon.accrnova.uk" style={{color:"#6B7280",fontSize:"12px",textDecoration:"none"}}>AryaSolon</a>
        <span style={{color:"#4a5568",fontSize:"12px",margin:"0 8px"}}>·</span>
        <a href="https://safe.accrnova.uk" style={{color:"#6B7280",fontSize:"12px",textDecoration:"none"}}>ACCRNOVA Safe Plus</a>
        <span style={{color:"#4a5568",fontSize:"12px",margin:"0 8px"}}>·</span>
        <a href="https://lamp.accrnova.uk" style={{color:"#6B7280",fontSize:"12px",textDecoration:"none"}}>Lamp of Life</a>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────
   Page entry
───────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* Responsive grid overrides */}
      <style>{`
        @media (max-width: 1024px) {
          .pvt-services { grid-template-columns: repeat(2, 1fr) !important; }
          .pvt-solutions { grid-template-columns: 1fr !important; }
          .pvt-products { grid-template-columns: 1fr !important; }
          .pvt-about { grid-template-columns: 1fr !important; }
          .pvt-contact { grid-template-columns: 1fr !important; }
          .pvt-footer { grid-template-columns: 1fr !important; text-align: center; }
          .pvt-nav-links { display: none; }
        }
        @media (max-width: 640px) {
          .pvt-services { grid-template-columns: 1fr !important; }
          .pvt-stats { grid-template-columns: 1fr 1fr !important; }
        }
        a:hover { opacity: 0.85; }
        input::placeholder,
        textarea::placeholder { color: #6B7A99; }
        select option { background: #0F1220; }
      `}</style>
      <NavBar />
      <Hero />
      <Services />
      <Solutions />
      <Products />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
