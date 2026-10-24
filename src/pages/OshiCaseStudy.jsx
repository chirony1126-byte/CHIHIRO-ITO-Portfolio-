import "./OshiCaseStudy.css";
import { Link } from "react-router-dom";

function OshiCaseStudy() {
  return (
    <main className="oshi-case">
      {/* BACK */}
      <div className="oshi-back-wrap">
        <Link to="/" className="oshi-back">
          ← BACK TO PROJECTS
        </Link>
      </div>

      {/* HERO */}
      <section className="oshi-hero">
        <div className="oshi-number">02</div>

        <div className="oshi-hero-content">
          <div className="oshi-label">WEB APPLICATION</div>

          <h1 className="oshi-title">
             <span className="oshi-title-desktop">
                絶対少女
                <br />
                推し診断 Webアプリ
            </span>

             <span className="oshi-title-mobile">
                絶対少女
                <br />
                 推し診断
                <br />
                Webアプリ
            </span>
        </h1>

          <p className="oshi-lead">
            質問への回答から、8人のメンバーの中で
            「自分に合う推し」を診断するWebアプリ。
            <br />
            公開後は実ユーザーの回答データを収集し、
            診断ロジックの分析・改善まで行いました。
          </p>
        </div>

        {/* META */}
        <div className="oshi-meta">
          <div>
            <span>ROLE</span>
            <strong>企画 / 設計 / 実装 / データ分析 / 改善</strong>
          </div>

          <div>
            <span>TECH</span>
            <strong>React / FastAPI / PostgreSQL</strong>
          </div>

          <div>
            <span>STATUS</span>
            <strong>公開・運用中</strong>
          </div>
        </div>
      </section>

      {/* LIVE APP */}
      {/* LIVE APP */}
<section className="oshi-live">
  <div className="oshi-live-preview">
    <img
      src="/images/oshi-diagnosis.png"
      alt="絶対少女 推し診断 Webアプリ"
    />
  </div>

  <p className="oshi-live-note">
    実際に公開しているWebアプリをお試しいただけます。
  </p>

  <a
    href="https://zettai-oshi-diagnosis.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="oshi-live-button"
  >
    VIEW LIVE APP ↗
  </a>
</section>
{/* OVERVIEW */}
<section className="oshi-section oshi-overview">
  <div className="oshi-section-label">
    <span>01 / OVERVIEW</span>
  </div>

  <div className="oshi-section-content">
   <h2>
        「好き」から、
        <br />
         推しと出会える
        <br />
        体験をつくる
    </h2>

    <p>
      アイドルグループ「絶対少女」をまだ詳しく知らない人でも、
      質問に答えるだけで自分に合いそうなメンバーを見つけられる
      診断Webアプリを制作しました。
    </p>

    <p>
      単に診断結果を表示するだけでなく、
      実際のユーザーの回答データを蓄積し、
      公開後も診断ロジックを分析・改善できる仕組みにしています。
    </p>
  </div>
</section>


{/* SYSTEM */}
<section className="oshi-section oshi-system">
  <div className="oshi-section-label">
    <span>02 / SYSTEM</span>
  </div>

  <div className="oshi-section-content">
   <h2 className="oshi-system-title">
        <span className="oshi-system-desktop">
            診断からデータ収集までを
            <br />
             一つの仕組みに
        </span>

        <span className="oshi-system-mobile">
            診断から
            <br />
            データ収集までを
            <br />
            一つの仕組みに
        </span>
    </h2>

    <div className="oshi-flow">
      <div className="oshi-flow-item">
        <span>01</span>
        <strong>10問に回答</strong>
        <p>ユーザーの「好き」や価値観を選択</p>
      </div>

      <div className="oshi-flow-arrow">→</div>

      <div className="oshi-flow-item">
        <span>02</span>
        <strong>スコアリング</strong>
        <p>回答ごとの重みから8人をランキング</p>
      </div>

      <div className="oshi-flow-arrow">→</div>

      <div className="oshi-flow-item">
        <span>03</span>
        <strong>診断結果</strong>
        <p>相性の高いメンバーTOP3を表示</p>
      </div>

      <div className="oshi-flow-arrow">→</div>

      <div className="oshi-flow-item">
        <span>04</span>
        <strong>データ保存</strong>
        <p>診断結果と回答をデータベースへ保存</p>
      </div>
    </div>
  </div>
</section>


{/* DATA & IMPROVEMENT */}
<section className="oshi-data-section">
  <div className="oshi-section-label">
    <span>03 / DATA &amp; IMPROVEMENT</span>
  </div>

  <div className="oshi-data-heading">
   <h2 className="oshi-data-title">
  <span className="oshi-data-title-desktop">
    公開して終わりではなく、
    <br />
    データから改善する
  </span>

    <span className="oshi-data-title-mobile">
        公開して
        <br />
        終わりではなく、
        <br />
        データから改善する
    </span>
</h2>

    <p>
      公開後に蓄積した実ユーザーの回答データと、
      全回答パターンのシミュレーションを組み合わせて、
      診断結果の偏りを検証しました。
    </p>
  </div>

  <div className="oshi-data-stats">
    <div className="oshi-data-stat">
      <strong>429</strong>
      <span>累計診断回数</span>
    </div>

    <div className="oshi-data-stat">
      <strong>900</strong>
      <span>蓄積した回答データ</span>
    </div>

    <div className="oshi-data-stat">
      <strong>655,360</strong>
      <span>検証した全回答パターン</span>
    </div>
  </div>

  <div className="oshi-improvement">
    <p className="oshi-improvement-label">IMPROVEMENT PROCESS</p>

    <h3>
      全パターンを検証し、
      <br />
      診断ロジックの偏りを発見
    </h3>

    <p>
      655,360通りの回答パターンをシミュレーションした結果、
      特定のメンバーが1位になりにくい傾向を発見しました。
    </p>

    <p>
      現行ロジックと複数の修正案を比較し、
      期待得点・1位率・最大点に加えて、
      実ユーザーの診断結果が何人変わるかも検証。
      メンバーごとの特徴を崩さず、
      既存の診断結果への影響を抑えながら
      バランスを改善する方法を検討しました。
    </p>
  </div>
</section>
{/* ROLE & AI */}
<section className="oshi-role-section">
  <div className="oshi-role-label">
    <span>04 / ROLE &amp; AI</span>
  </div>

  <div className="oshi-role-heading">
    <h2 className="oshi-role-title">
        <span className="oshi-role-title-desktop">
            AIを活用しながら、
            <br />
            設計・検証・改善まで
        </span>

        <span className="oshi-role-title-mobile">
            AIを活用しながら、
            <br />
            設計・検証・
            <br />
            改善まで
        </span>
    </h2>
  </div>

  <div className="oshi-role-grid">
    <div className="oshi-role-item">
      <p className="oshi-role-item-label">MY ROLE</p>

      <h3>自分で担当したこと</h3>

      <p>
        診断の企画、質問設計、メンバーごとの特徴整理、
        画面構成やUXの検討、動作確認を担当しました。
      </p>

      <p>
        公開後は実ユーザーの回答データを確認し、
        診断結果の偏りを分析。
        修正案を比較しながら、
        どのようにロジックを改善するか判断しました。
      </p>
    </div>

    <div className="oshi-role-item">
      <p className="oshi-role-item-label">AI SUPPORT</p>

      <h3>AIを活用したこと</h3>

      <p>
        React・FastAPI・データベース周辺の実装や、
        エラー原因の切り分け、コード改善などで
        AIを開発支援として活用しました。
      </p>

      <p>
        また、655,360通りの全回答パターンを検証する
        シミュレーションコードの作成や、
        集計・比較にもAIを活用しました。
      </p>
    </div>
  </div>
</section>
{/* RESULT */}
<section className="oshi-result-section">
  <div className="oshi-result-label">
    <span>05 / RESULT</span>
  </div>

  <div className="oshi-result-content">
    <h2 className="oshi-result-title">
  <span className="oshi-result-title-desktop">
    作って終わりではなく、
    <br />
    使われながら育てる
  </span>

  <span className="oshi-result-title-mobile">
    作って
    <br />
    終わりではなく、
    <br />
    使われながら
    <br />
    育てる
  </span>
</h2>

    <div className="oshi-result-text">
      <p>
        診断Webアプリとして実際に公開し、
        ユーザーに利用してもらいながら回答データを蓄積しました。
      </p>

      <p>
        公開後はデータを分析し、
        診断ロジックの偏りを発見。
        全回答パターンのシミュレーションと実ユーザーの結果をもとに、
        改善案の比較・検証まで行いました。
      </p>

      <p>
        制作して公開するだけでなく、
        実際の利用データから課題を見つけ、
        改善につなげるところまで取り組んだプロジェクトです。
      </p>
    </div>
  </div>

  <div className="oshi-result-footer">
    <a href="/#projects" className="oshi-back-link">
      ← BACK TO PROJECTS
    </a>
  </div>
</section>

</main>
);
}

export default OshiCaseStudy;