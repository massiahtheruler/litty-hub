import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-frame">
      <section className="page-section">
        <div className="cta-band min-h-[60vh]">
          <div>
            <p className="section-kicker">404</p>
            <h1 className="section-title max-w-2xl">This lane is still dark.</h1>
            <p className="section-body max-w-xl">
              The page you tried to open is not in the Litty pass-one build.
            </p>
          </div>
          <div className="cta-band__actions">
            <Link href="/" className="hero-button hero-button--primary">
              Go home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
