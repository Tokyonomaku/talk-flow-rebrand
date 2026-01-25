export default function LandingPage({ onTryFree }) {
  return (
    <>
      <h1>Learn French in 3 Minutes</h1>
      <p>"Où sont les toilettes?" - Where is the bathroom?</p>
      <p>"Combien ça coûte?" - How much?</p>
      <p>"Parlez-vous anglais?" - Do you speak English?</p>
      <button type="button" onClick={onTryFree}>
        Try Lesson 1 →
      </button>
      <p>Free • No signup</p>
    </>
  );
}
