import LegalPageShell from './LegalPageShell';

export default function Contact({ onBackHome }) {
  return (
    <LegalPageShell title="Contact" onBackHome={onBackHome}>
      <p>
        For support or questions, email:
        {' '}
        <a href="mailto:support@talkflow.pro">support@talkflow.pro</a>
      </p>
    </LegalPageShell>
  );
}
