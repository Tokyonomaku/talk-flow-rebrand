import LegalPageShell from './LegalPageShell';

export default function Terms({ onBackHome }) {
  return (
    <LegalPageShell title="Terms" onBackHome={onBackHome}>
      <p>
        This is a simple placeholder terms page. Use TalkFlow at your own pace. Content and availability may change
        over time.
      </p>
      <p>
        Subscriptions and payments are processed by Gumroad and are subject to Gumroads terms.
      </p>
    </LegalPageShell>
  );
}
