import "./SesCaseStudy.css";
import { Link } from 'react-router-dom'


function SesCaseStudy() {
  return (
    <main className="case-study">
      {/* HERO */}
      <section className="case-hero">
        <div className="case-container">
          <p className="case-number">01</p>

          <h1>
            SES営業
            <br />
            要員管理アプリ
          </h1>

          <p className="project-status">IN PRODUCTION</p>

          <p className="case-lead">
            SES営業の実業務で発生していた情報管理の課題を整理し、
            要員登録から案件の並行状況までを一元管理できる
            Webアプリとして制作しました。
          </p>

          <div className="case-meta">
            <div>
              <span>ROLE</span>
              <strong>企画 / 要件整理 / 設計 / 実装 / 検証</strong>
            </div>

            <div>
              <span>TECH</span>
              <strong>GAS / JavaScript / Google Sheets</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>実業務で運用中</strong>
            </div>
          </div>
        </div>
      </section>

        {/* MAIN IMAGE */}
        <a
             href="https://script.google.com/macros/s/AKfycby8FJVQzkcCwUqUWbfHLnHV9JV5p4pS3-iUXq9VLUv7jTfaq-PcYLHUl0eylh8E3Ppa/exec"
            target="_blank"
            rel="noopener noreferrer"
            className="case-demo-image"
         >
            <img
                 src="/images/ses-dashboard.png"
                 alt="SES営業 要員管理アプリのダッシュボード"
            />
  
            <span className="case-demo-label">
                 VIEW LIVE DEMO ↗
            </span>
        </a>

      <section className="case-visual">
        <div className="case-container">
         
          <p className="case-caption">
            ※ ポートフォリオ掲載用のデモデータを使用しています。
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="case-section">
        <div className="case-container case-two-column">
          <div>
            <p className="case-section-number">01 / OVERVIEW</p>
            <h2>制作背景</h2>
          </div>

          <div className="case-body">
            <p>
              SES営業では、要員情報・ヒアリング内容・案件進捗・
              並行状況など、複数の情報を継続的に管理する必要があります。
            </p>

            <p>
              情報が複数箇所に分散すると、確認や更新に時間がかかり、
              「誰がどの案件に進んでいるのか」を把握しづらくなることが
              課題でした。
            </p>

            <p>
              そこで、営業活動に必要な情報を要員IDを軸にまとめ、
              一連の営業フローを一つの画面から管理できる仕組みを
              制作しました。
            </p>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="case-section case-section-gray">
        <div className="case-container">
          <p className="case-section-number">02 / WORKFLOW</p>
          <h2 className="workflow-title">営業フローを<br className="workflow-mobile-br" />一つにつなげる</h2>

          <div className="workflow">
            <div>
              <span>01</span>
              <strong>新規要員登録</strong>
            </div>

            <div>
              <span>02</span>
              <strong>ヒアリング</strong>
            </div>

            <div>
              <span>03</span>
              <strong>営業用情報生成</strong>
            </div>

            <div>
              <span>04</span>
              <strong>営業開始</strong>
            </div>

            <div>
              <span>05</span>
              <strong>並行状況管理</strong>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL HIGHLIGHTS */}
      <section className="case-section">
        <div className="case-container">
          <p className="case-section-number">03 / TECHNICAL HIGHLIGHTS</p>
          <h2>実装のポイント</h2>

          <div className="highlight-grid">
            <article>
              <span>01</span>
              <h3>要員IDを軸とした <br className="mobile-br" />データ管理</h3>
              <p>
                要員ごとに一意のIDを発行し、ヒアリング履歴や案件進捗など、
                複数の情報を同じ要員に紐づけて管理できる構成にしました。
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>ヒアリング情報と <br className="mobile-br" />要員マスタの連携</h3>
              <p>
                ヒアリングで更新した情報を要員マスタにも反映し、
                営業時に参照する情報のズレを減らせるようにしました。
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>営業用情報の自動生成</h3>
              <p>
                登録済みの情報から営業時に必要な内容をまとめて生成し、
                手作業での転記や情報整理を減らしました。
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>案件の並行状況を自動集計</h3>
              <p>
                案件進捗から現在の並行状況を集計し、
                案件がない要員も含めて営業状況を確認できるようにしました。
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* AI / ROLE */}
      <section className="case-section case-section-dark">
        <div className="case-container case-two-column">
          <div>
            <p className="case-section-number">04 / ROLE & AI</p>
            <h2>
              AIを活用しながら、
              <br />
              自分で設計・判断する
            </h2>
          </div>

          <div className="case-body">
            <h3>自分で担当したこと</h3>
            <p>
              実業務での課題発見、必要機能の整理、営業フローの設計、
              画面構成、データ項目の検討、動作確認、
              実運用を踏まえた改善を行いました。
            </p>

            <h3>AIを活用したこと</h3>
            <p>
              Google Apps ScriptやJavaScriptの実装、
              エラー原因の切り分け、コード改善などで
              AIを開発支援として活用しました。
            </p>
          </div>
        </div>
      </section>

      {/* RESULT */}
      <section className="case-section">
        <div className="case-container case-two-column">
          <div>
            <p className="case-section-number">05 / RESULT</p>
            <h2>実業務で使える形へ</h2>
          </div>

          <div className="case-body">
            <p>
              制作したアプリは、デモだけで終わらせず、
              SES営業の実業務で利用しています。
            </p>

            <p>
              「機能を作ること」ではなく、
              実際の業務フローの中で使えることを重視し、
              必要な情報へアクセスしやすい構成を目指しました。
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="case-footer">
        <div className="case-container">
          <Link to="/" className="button">
            ← BACK TO PROJECTS
          </Link>
        </div>
      </section>
    </main>
  )
}

export default SesCaseStudy