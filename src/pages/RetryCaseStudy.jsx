import { Link } from "react-router-dom";
import "./RetryCaseStudy.css";

function RetryCaseStudy() {
  return (
    <main className="retry-case-study">

      {/* HERO */}
      <section className="retry-hero">
        <Link to="/#projects" className="retry-back">
          ← BACK TO PROJECTS
        </Link>

        <p className="retry-eyebrow">CHROME EXTENSION</p>

        <h1>
          Site Retry
          <br />
          Helper
        </h1>

        <p className="retry-lead">
          混雑したWebページを一定間隔で確認し、
          <br />
          利用可能になったことを自動で検知するツール。
        </p>

        <div className="retry-meta">
          <div>
            <span>ROLE</span>
            <strong>企画 / 要件整理 / 設計 / 実装 / 検証</strong>
          </div>

          <div>
            <span>TECH</span>
            <strong>JavaScript / Python / Flask</strong>
          </div>

          <div>
            <span>TYPE</span>
            <strong>Chrome Extension</strong>
          </div>
        </div>
      </section>


      {/* PREVIEW */}
      <section className="retry-preview-section">
        <div className="retry-preview">
          <img
            src="/images/site-retry-helper.png"
            alt="Site Retry Helper Chrome拡張の設定画面"
          />
        </div>

        <p className="retry-preview-note">
          URL・成功ワード・確認間隔・最大試行回数を設定できます。
        </p>
      </section>


      {/* 01 OVERVIEW */}
      <section className="retry-section">
        <div className="retry-section-label">
          01 / OVERVIEW
        </div>

        <div className="retry-section-content">
          <h2 className="retry-overview-title">

            {/* PC */}
            <span className="retry-overview-title-desktop">
              待ち続ける作業を、
              <br />
              自動化する
            </span>

            {/* MOBILE */}
            <span className="retry-overview-title-mobile">
              待ち続ける作業を、
              <br />
              自動化する
            </span>

          </h2>

          <p>
            アクセスが集中しているWebサイトでは、
            ページが利用可能になったかを確認するために、
            何度も手動で更新する必要があります。
          </p>

          <p>
            そこで、指定した間隔でページを確認し、
            設定した成功ワードを検知したら処理を停止して
            通知するツールを制作しました。
          </p>
        </div>
      </section>


      {/* 02 DEVELOPMENT */}
      <section className="retry-section retry-development">
        <div className="retry-section-label">
          02 / DEVELOPMENT
        </div>

        <div className="retry-section-content">
          <h2 className="retry-development-title">

            {/* PC */}
            <span className="retry-development-title-desktop">
              Pythonの試作から、
              <br />
              Chrome拡張へ
            </span>

            {/* MOBILE */}
            <span className="retry-development-title-mobile">
              Pythonの試作から、
              <br />
              Chrome拡張へ
            </span>

          </h2>

          <div className="retry-flow">

            <div className="retry-flow-item">
              <span>01</span>
              <strong>Python Prototype</strong>
              <p>
                requestsを使ってページを取得し、
                ステータスや成功ワードを確認。
              </p>
            </div>

            <div className="retry-flow-item">
              <span>02</span>
              <strong>Requirements</strong>
              <p>
                URL・確認間隔・成功ワード・
                最大試行回数を設定できる形へ。
              </p>
            </div>

            <div className="retry-flow-item">
              <span>03</span>
              <strong>Chrome Extension</strong>
              <p>
                ブラウザから操作できるよう、
                Chrome拡張として実装。
              </p>
            </div>

            <div className="retry-flow-item">
              <span>04</span>
              <strong>Notification</strong>
              <p>
                条件を満たしたら監視を停止し、
                Chrome通知で知らせる仕組みを追加。
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 03 TECHNICAL */}
      <section className="retry-technical">
        <p className="retry-section-label">
          03 / TECHNICAL HIGHLIGHTS
        </p>

        <h2>
          小さな試作から、
          <br />
          使えるツールへ
        </h2>

        <div className="retry-tech-grid">

          <div className="retry-tech-card">
            <span>01</span>
            <h3>設定値の保存</h3>
            <p>
              chrome.storage.localを利用し、
              URLや成功ワードなどの設定を保存。
            </p>
          </div>

          <div className="retry-tech-card">
            <span>02</span>
            <h3>ページ状態の検知</h3>
            <p>
              ページ内のテキストを確認し、
              指定した成功ワードが存在するかを判定。
            </p>
          </div>

          <div className="retry-tech-card">
            <span>03</span>
            <h3>試行回数を制御</h3>
            <p>
              確認間隔と最大試行回数を設定し、
              無制限に処理を繰り返さない設計にしました。
            </p>
          </div>

          <div className="retry-tech-card">
            <span>04</span>
            <h3>ブラウザとPythonの連携</h3>
            <p>
              Chrome拡張からFlask APIへJSONを送信し、
              ブラウザ側とPython側を連携。
            </p>
          </div>

        </div>
      </section>


      {/* 04 ROLE & AI */}
      <section className="retry-role-section">
        <div className="retry-role-label">
          <span>04 / ROLE &amp; AI</span>
        </div>

        <div className="retry-role-heading">
          <h2 className="retry-role-title">

            <span className="retry-role-title-desktop">
              課題を整理し、
              <br />
              AIと一緒に実装へ
            </span>

            <span className="retry-role-title-mobile">
              課題を整理し、
              <br />
              AIと一緒に
              <br />
              実装へ
            </span>

          </h2>
        </div>

        <div className="retry-role-grid">

          <div className="retry-role-item">
            <p className="retry-role-item-label">MY ROLE</p>

            <h3>自分で担当したこと</h3>

            <p>
              Webサイトを何度も手動で確認する手間に着目し、
              自動化するために必要な機能を整理しました。
            </p>

            <p>
              確認間隔、成功ワード、最大試行回数などの要件を決め、
              Pythonでの試作からChrome拡張として使える形にするまで、
              動作確認と改善を行いました。
            </p>
          </div>

          <div className="retry-role-item">
            <p className="retry-role-item-label">AI SUPPORT</p>

            <h3>AIを活用したこと</h3>

            <p>
              Python・JavaScript・Chrome Extension・Flaskの実装や、
              エラー原因の切り分け、コード改善などで
              AIを開発支援として活用しました。
            </p>

            <p>
              特に、Chrome拡張とローカルのFlask APIを連携する部分や、
              ブラウザ上での動作確認・デバッグを進める際に活用しました。
            </p>
          </div>

        </div>
      </section>


      {/* 05 RESULT */}
      <section className="retry-result-section">
        <div className="retry-result-label">
          <span>05 / RESULT</span>
        </div>

        <div className="retry-result-content">
          <h2 className="retry-result-title">

            <span className="retry-result-title-desktop">
              小さな不便を、
              <br />
              動く仕組みに変える
            </span>

            <span className="retry-result-title-mobile">
              小さな不便を、
              <br />
              動く仕組みに
              <br />
              変える
            </span>

          </h2>

          <div className="retry-result-text">
            <p>
              最初はPythonによるシンプルな試作からスタートし、
              実際の利用シーンを考えながらChrome拡張へ発展させました。
            </p>

            <p>
              「ページを確認する」という繰り返し作業を、
              条件設定・自動確認・成功検知・通知まで
              一つの流れとして仕組み化しました。
            </p>

            <p>
              身近な不便を見つけ、
              必要な機能を整理し、
              小さく試してから使いやすい形へ発展させたプロジェクトです。
            </p>
          </div>
        </div>

        <div className="retry-result-footer">
          <a href="/#projects" className="retry-back-link">
            ← BACK TO PROJECTS
          </a>
        </div>
      </section>

    </main>
  );
}

export default RetryCaseStudy;