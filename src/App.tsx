import React, { useState } from "react";

import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  Clock3,
  Database,
  Globe2,
  Layers3,
  Menu,
  MessageSquare,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Automation",
    text: "Automate repetitive workflows with intelligent AI agents built for modern teams.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    text: "Turn business data into clear insights with real-time dashboards and reports.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    text: "Build, launch and scale your workflows without unnecessary complexity.",
  },
  {
    icon: Database,
    title: "Unified Data",
    text: "Connect your tools and keep important business information in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    text: "Protect your business with secure infrastructure and role-based access.",
  },
  {
    icon: Layers3,
    title: "Scalable Platform",
    text: "Designed to grow from an early-stage startup to a global organization.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Connect your data",
    text: "Bring your existing tools, APIs and business data into one workspace.",
  },
  {
    number: "02",
    title: "Create intelligent workflows",
    text: "Design automated processes using powerful AI building blocks.",
  },
  {
    number: "03",
    title: "Track performance",
    text: "Monitor results with real-time analytics and actionable insights.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "For individuals and small teams.",
    features: [
      "5,000 AI actions",
      "3 team members",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$49",
    description: "For growing businesses.",
    features: [
      "50,000 AI actions",
      "15 team members",
      "Advanced analytics",
      "Priority support",
      "Custom workflows",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced needs.",
    features: [
      "Unlimited workflows",
      "Unlimited team members",
      "Enterprise analytics",
      "Dedicated support",
      "Custom integrations",
    ],
  },
];

const faqs = [
  {
    question: "What is NEXORA?",
    answer:
      "NEXORA is a modern AI-powered SaaS platform concept designed to help teams automate workflows, analyze data and improve productivity.",
  },
  {
    question: "Can I connect my existing tools?",
    answer:
      "Yes. NEXORA is designed around integrations and APIs, making it suitable for connecting existing business tools and data sources.",
  },
  {
    question: "Is NEXORA suitable for startups?",
    answer:
      "Absolutely. The platform is designed to scale from individual users and startups to larger organizations.",
  },
  {
    question: "Can I customize the dashboard?",
    answer:
      "Yes. Dashboard cards, analytics modules and workflow components can be customized according to your product requirements.",
  },
  {
    question: "Does NEXORA support teams?",
    answer:
      "Yes. Team-based plans can include multiple members, permissions and shared workflows.",
  },
];

function App() {
  const [open, setOpen] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);

  const closeMenu = () => setOpen(false);

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span className="logo-mark">
              <Sparkles size={17} />
            </span>
            NEXORA
          </a>

          <button
            className="mobile-menu"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`nav-links ${open ? "show" : ""}`}>
            <a href="#features" onClick={closeMenu}>
              Features
            </a>

            <a href="#workflow" onClick={closeMenu}>
              Workflow
            </a>

            <a href="#pricing" onClick={closeMenu}>
              Pricing
            </a>

            <a href="#faq" onClick={closeMenu}>
              FAQ
            </a>

            <a
              href="#pricing"
              className="nav-button"
              onClick={closeMenu}
            >
              Get Started
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <main>
        <section className="hero" id="home">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <Sparkles size={15} />
                AI-powered business platform
              </div>

              <h1>
                Build smarter.
                <br />
                <span>Move faster.</span>
              </h1>

              <p className="hero-text">
                NEXORA brings AI automation, analytics and intelligent
                workflows into one powerful platform built for modern teams.
              </p>

              <div className="hero-actions">
                <a href="#pricing" className="button button-primary">
                  Start building
                  <ArrowRight size={18} />
                </a>

                <a href="#features" className="button button-secondary">
                  <Play size={16} />
                  Explore platform
                </a>
              </div>

              <div className="hero-proof">
                <div className="avatar-stack">
                  <span>JD</span>
                  <span>MK</span>
                  <span>AS</span>
                  <span>+</span>
                </div>

                <div>
                  <div className="stars">
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                  </div>

                  <small>Trusted by modern teams</small>
                </div>
              </div>
            </div>

            {/* DASHBOARD MOCKUP */}
            <div className="hero-dashboard">
              <div className="dashboard-window">
                <div className="window-top">
                  <div className="window-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="window-title">
                    NEXORA Workspace
                  </div>

                  <div className="window-status">
                    <span className="status-dot" />
                    Live
                  </div>
                </div>

                <div className="dashboard-body">
                  <aside className="dashboard-sidebar">
                    <div className="side-logo">
                      <span>
                        <Sparkles size={13} />
                      </span>
                    </div>

                    <div className="side-items">
                      <div className="side-item active">
                        <BarChart3 size={15} />
                      </div>

                      <div className="side-item">
                        <Bot size={15} />
                      </div>

                      <div className="side-item">
                        <Database size={15} />
                      </div>

                      <div className="side-item">
                        <Layers3 size={15} />
                      </div>
                    </div>
                  </aside>

                  <div className="dashboard-content">
                    <div className="dashboard-heading">
                      <div>
                        <p>Overview</p>
                        <h3>Good morning, Alex</h3>
                      </div>

                      <div className="date-box">
                        <Clock3 size={13} />
                        Last 30 days
                      </div>
                    </div>

                    <div className="metric-grid">
                      <div className="metric-card">
                        <div className="metric-icon">
                          <BarChart3 size={16} />
                        </div>

                        <span>Total revenue</span>
                        <strong>$284.8K</strong>
                        <small>+18.4%</small>
                      </div>

                      <div className="metric-card">
                        <div className="metric-icon">
                          <Bot size={16} />
                        </div>

                        <span>AI actions</span>
                        <strong>48.2K</strong>
                        <small>+24.7%</small>
                      </div>

                      <div className="metric-card">
                        <div className="metric-icon">
                          <Globe2 size={16} />
                        </div>

                        <span>Active users</span>
                        <strong>12.8K</strong>
                        <small>+12.2%</small>
                      </div>
                    </div>

                    <div className="dashboard-lower">
                      <div className="chart-card">
                        <div className="chart-header">
                          <div>
                            <span>Performance</span>
                            <strong>+32.6%</strong>
                          </div>

                          <BarChart3 size={17} />
                        </div>

                        <div className="chart">
                          <div className="chart-lines">
                            <span />
                            <span />
                            <span />
                            <span />
                          </div>

                          <svg
                            viewBox="0 0 500 180"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M0 145 C40 140,55 110,90 120 S135 145,165 105 S215 90,245 108 S285 70,320 88 S360 95,395 55 S440 70,500 20"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="activity-card">
                        <div className="activity-title">
                          <span>AI activity</span>
                          <Bot size={16} />
                        </div>

                        <div className="activity">
                          <span className="activity-icon">
                            <Zap size={13} />
                          </span>

                          <div>
                            <strong>Workflow completed</strong>
                            <small>2 minutes ago</small>
                          </div>
                        </div>

                        <div className="activity">
                          <span className="activity-icon">
                            <Database size={13} />
                          </span>

                          <div>
                            <strong>Data synced</strong>
                            <small>8 minutes ago</small>
                          </div>
                        </div>

                        <div className="activity">
                          <span className="activity-icon">
                            <MessageSquare size={13} />
                          </span>

                          <div>
                            <strong>Report generated</strong>
                            <small>14 minutes ago</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOGOS */}
        <section className="logo-strip">
          <div className="container">
            <p>POWERING THE NEXT GENERATION OF TEAMS</p>

            <div className="logos">
              <span>Vertex</span>
              <span>orbit</span>
              <span>nord</span>
              <span>vertexa</span>
              <span>Acme</span>
              <span>Layer</span>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section" id="features">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">
                <Zap size={14} />
                Everything you need
              </div>

              <h2>
                One platform.
                <br />
                <span>Infinite possibilities.</span>
              </h2>

              <p>
                Everything your team needs to automate operations, understand
                data and build better products.
              </p>
            </div>

            <div className="features-grid">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    className="feature-card"
                    key={feature.title}
                  >
                    <div className="feature-icon">
                      <Icon size={21} />
                    </div>

                    <h3>{feature.title}</h3>

                    <p>{feature.text}</p>

                    <a href="#workflow">
                      Learn more
                      <ArrowRight size={14} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section
          className="section workflow-section"
          id="workflow"
        >
          <div className="container workflow-grid">
            <div className="workflow-copy">
              <div className="eyebrow">
                <Layers3 size={14} />
                Simple workflow
              </div>

              <h2>
                From data
                <br />
                <span>to decisions.</span>
              </h2>

              <p>
                Replace disconnected tools with one intelligent system that
                keeps your team focused on the work that matters.
              </p>

              <a href="#pricing" className="text-link">
                Explore NEXORA
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="workflow-list">
              {workflow.map((item) => (
                <div
                  className="workflow-item"
                  key={item.number}
                >
                  <div className="workflow-number">
                    {item.number}
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="testimonial-section">
          <div className="container">
            <div className="testimonial">
              <div className="quote-mark">“</div>

              <blockquote>
                NEXORA helped us turn a fragmented workflow into one
                intelligent system. Our team now spends less time managing
                tools and more time building the business.
              </blockquote>

              <div className="testimonial-author">
                <div className="author-avatar">AR</div>

                <div>
                  <strong>Alex Rivera</strong>
                  <span>
                    Head of Operations · Vertex Labs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section
          className="section pricing-section"
          id="pricing"
        >
          <div className="container">
            <div className="section-heading center">
              <div className="eyebrow">
                <Sparkles size={14} />
                Simple pricing
              </div>

              <h2>
                Start small.
                <br />
                <span>Scale without limits.</span>
              </h2>

              <p>
                Choose the plan that fits your team today and upgrade
                whenever you are ready.
              </p>
            </div>

            <div className="pricing-grid">
              {plans.map((plan) => (
                <article
                  className={`price-card ${
                    plan.popular ? "popular" : ""
                  }`}
                  key={plan.name}
                >
                  {plan.popular && (
                    <div className="popular-badge">
                      Most popular
                    </div>
                  )}

                  <h3>{plan.name}</h3>

                  <p>{plan.description}</p>

                  <div className="price">
                    <strong>{plan.price}</strong>

                    {plan.price !== "Custom" && (
                      <span>/month</span>
                    )}
                  </div>

                  <a
                    href="#contact"
                    className={`button ${
                      plan.popular
                        ? "button-primary"
                        : "button-secondary"
                    }`}
                  >
                    Get started
                    <ArrowRight size={16} />
                  </a>

                  <div className="plan-divider" />

                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <Check size={15} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="section faq-section"
          id="faq"
        >
          <div className="container faq-grid">
            <div>
              <div className="eyebrow">
                <MessageSquare size={14} />
                FAQ
              </div>

              <h2>
                Questions?
                <br />
                <span>We have answers.</span>
              </h2>

              <p>
                Everything you need to know before getting started with
                NEXORA.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((item, index) => {
                const isOpen = faq === index;

                return (
                  <div
                    className={`faq-item ${
                      isOpen ? "open" : ""
                    }`}
                    key={item.question}
                  >
                    <button
                      onClick={() =>
                        setFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>

                      <ChevronDown
                        size={18}
                        className={
                          isOpen ? "rotate" : ""
                        }
                      />
                    </button>

                    {isOpen && (
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" id="contact">
          <div className="container">
            <div className="cta">
              <div className="cta-glow" />

              <div className="eyebrow">
                <Sparkles size={14} />
                Ready to build?
              </div>

              <h2>
                Your next big idea
                <br />
                starts here.
              </h2>

              <p>
                Build faster, automate smarter and give your team the tools
                they need to move forward.
              </p>

              <a
                href="#pricing"
                className="button button-light"
              >
                Start building with NEXORA
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <span className="logo-mark">
                <Sparkles size={17} />
              </span>
              NEXORA
            </a>

            <p>
              AI-powered tools for teams that want to build smarter and move
              faster.
            </p>
          </div>

          <div className="footer-column">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#workflow">Workflow</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="#home">About</a>
            <a href="#contact">Contact</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <a href="#home">Documentation</a>
            <a href="#home">API</a>
            <a href="#home">Support</a>
          </div>
        </div>

        {/* COPYRIGHT + BIAVANTA CREDIT */}
        <div className="container footer-bottom">
          <span>
            © 2026 NEXORA. All rights reserved.

            <span className="footer-credit">
              Designed &amp; developed by{" "}
              <a
                href="https://biavanta.com"
                target="_blank"
                rel="noreferrer"
              >
                BIAvanta
              </a>
            </span>
          </span>

          <div>
            <a href="#home">Privacy</a>
            <a href="#home">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;