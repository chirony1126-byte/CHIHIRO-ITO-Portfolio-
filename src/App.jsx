import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import SesCaseStudy from "./pages/SesCaseStudy";
import OshiCaseStudy from "./pages/OshiCaseStudy";
import RetryCaseStudy from "./pages/RetryCaseStudy";
import { useState } from "react";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <a href="/" className="site-logo">
         <img
           src="/images/logo.png"
           alt="CHIHIRO ITO portfolio"
         />

          <div className="logo-text">
            <span className="logo-name">CHIHIRO ITO</span>
            <span className="logo-portfolio">PORTFOLIO</span>
          </div>
        </a>

        {/* PC NAV */}
        <nav className="desktop-nav">
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
         <a href="#skills">SKILLS</a>
          <a href="#contact">CONTACT</a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
          aria-expanded={menuOpen}
          >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
             ABOUT
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            PROJECTS
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            SKILLS
         </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </a>
        </div>
      </header> 
      <main id="top">
        {/* HERO */}
        <section className="hero-section">
          <div className="container">
            <p className="eyebrow">SALES × WEB DEVELOPMENT</p>

            <h1>
              身近な課題を見つけ、
              <br/>
              仕組みに変える。
            </h1>

            <p className="hero-description">
              業務や日常の中にある課題を整理し、
              <br />
              Webアプリや自動化ツールとして形にしています。
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about-section">
          <div className="container about-grid">
            <div>
              <p className="section-label">ABOUT</p>
            </div>

            <div className="about-content">
              <h2>
                課題を見つけ、
                <br />
                自分で形にできる人へ。
              </h2>

              <p>
                SES営業として業務に携わりながら、
                Web開発を学習しています。
              </p>

              <p>
                日々の業務や趣味の中で感じた
                「これ、不便だな」「仕組みにできないかな」
                という課題を起点に制作しています。
              </p>

              <p>
                AIも開発支援として活用しながら、
                要件整理・設計・実装・検証まで、
                実際に使える形にすることを重視しています。
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="projects-section">
          <div className="container">
            <div className="projects-heading">
              <p className="section-label">PROJECTS</p>
              <p className="sub-label">SELECTED WORKS / 2026</p>
            </div>

            {/* PROJECT 01 */}
            <article className="project">
              <div className="project-image">
                <img
                  src="/images/ses-dashboard.png"
                  alt="SES営業 要員管理アプリのダッシュボード画面"
                />
              </div>

              <div className="project-content">
                <p className="project-number">01</p>

                <h2>
                  SES営業
                  <br />
                  要員管理アプリ
                </h2>

                <p className="project-status">IN PRODUCTION</p>

                <p>
                  要員登録からヒアリング、営業用情報生成、
                  案件の並行状況までを一元管理する
                  実業務向けWebアプリ。
                </p>

                <p className="tech">
                  GAS / JavaScript / Google Sheets
                </p>

                <Link to="/ses-case-study" className="button">
                  VIEW CASE STUDY →
                </Link>
              </div>
            </article>

            {/* PROJECT 02 */}
            <article className="project project-reverse">
              <div className="project-image project-image-oshi">
                <img
                  src="/images/oshi-diagnosis.png"
                  alt="絶対少女 推し診断Webアプリのトップ画面"
                />
              </div>

              <div className="project-content">
                <p className="project-number">02</p>

                <h2>
                  絶対少女
                  <br />
                  推し診断 Webアプリ
                </h2>

                <p className="project-status">LIVE WEB APP</p>

                <div className="stats">
                  <div>
                    <strong>429</strong>
                    <span>DIAGNOSES</span>
                  </div>

                  <div>
                    <strong>900</strong>
                    <span>ANSWERS</span>
                  </div>

                  <div>
                    <strong>655,360</strong>
                    <span>PATTERNS</span>
                  </div>
                </div>

                <p className="tech">
                  React / FastAPI / PostgreSQL
                </p>

                <Link to="/oshi-case-study" className="button">
                  VIEW CASE STUDY →
                </Link>
              </div>
            </article>

            {/* PROJECT 03 */}
            <article className="project">
              <div className="project-image project-image-retry">
                <img
                  src="/images/site-retry-helper.png"
                  alt="Site Retry Helper Chrome拡張の設定画面"
                />
              </div>

              <div className="project-content">
                <p className="project-number">03</p>

                <h2>Site Retry Helper</h2>

                <p className="project-status">CHROME EXTENSION</p>

                <p>
                  混雑したWebページを一定間隔で確認し、
                  利用可能になったことを自動検知するChrome拡張。
                </p>

                <p className="tech">
                  JavaScript / Python / Flask
                </p>

                <Link to="/retry-case-study" className="button">
                  VIEW CASE STUDY →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="skills-section">
          <div className="container">
            <p className="section-label">SKILLS</p>

            <div className="skills-grid">
              <div>
                <h3>Frontend</h3>
                <p>HTML / CSS</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>Vite</p>
              </div>

              <div>
                <h3>Backend</h3>
                <p>Python</p>
                <p>FastAPI</p>
                <p>Flask</p>
                <p>Google Apps Script</p>
              </div>

              <div>
                <h3>Database</h3>
                <p>PostgreSQL</p>
                <p>SQLite</p>
                <p>Google Sheets</p>
              </div>

              <div>
                <h3>Tools / Platform</h3>
                <p>Git / GitHub</p>
                <p>Vercel</p>
                <p>Render</p>
                <p>Chrome Extension</p>
                <p>Figma</p>
                <p>AI-assisted Development</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div>
              <p className="section-label">CONTACT</p>

              <h2>
                LET'S
                <br />
                CONNECT.
              </h2>
            </div>

            <div className="contact-content">
              <p>
                ポートフォリオをご覧いただき、
                <br />
                ありがとうございます。
              </p>

              <a href="mailto:sen1000.millenyan@gmail.com" className="contact-email"
              >
               sen1000.millenyan@gmail.com
            </a>  
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ses-case-study" element={<SesCaseStudy />} />
      <Route path="/oshi-case-study" element={<OshiCaseStudy />} />
      <Route path="/retry-case-study" element={<RetryCaseStudy />} />
    </Routes>
  );
}

export default App;