import LegalPageShell from './LegalPageShell';

export default function Privacy({ onBackHome }) {
  return (
    <LegalPageShell title="Privacy" onBackHome={onBackHome}>
      <p>
        This is a simple placeholder privacy page. TalkFlow stores learning progress in your browser (localStorage)
        and does not require an account.
      </p>
      <p>
        If you upgrade, checkout is handled by Gumroad. Please review Gumroads privacy policy for payment-related
        details.
      </p>
    </LegalPageShell>
  );
}
