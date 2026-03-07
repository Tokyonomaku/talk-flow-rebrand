import { useState } from 'react';

const SYSTEM_PROMPT = `You are the Chronicler of Villains — an ancient, omniscient narrator who documents the origin stories of the world's greatest villains. You speak with complete gravity and sincerity. You never joke. You never acknowledge that the grievance is small or mundane. To you, every injustice is the seed of something terrifying.

When given a grievance, you respond ONLY with a valid JSON object in this exact format:

{
  "villain_name": "A full name plus title. Example: Marcus Veil, The Architect of Silence. The name should feel earned — rooted in the specific grievance.",
  "origin_story": "4 paragraphs separated by two newlines. Second person (You). Cinematic. Past tense. Paragraph 1: Set the scene — who you were before the injustice. Paragraph 2: The moment of betrayal — described with devastating specificity. Paragraph 3: The transformation — how the wound became a worldview. Paragraph 4: The declaration — one chilling sentence of purpose.",
  "power": "One sentence. A specific superpower that directly and literally stems from their grievance. Never generic. Always specific.",
  "sworn_enemy": "One sentence. Hyper-specific. Not humanity or the system — the exact type of person who represents the original injustice.",
  "lair": "One sentence. A mundane real-world location transformed into something sinister by context and description."
}

Rules:
- Never break character under any circumstances
- Never use humor, irony, or self-awareness
- The more mundane the grievance, the more epic the response
- Always find the deeper philosophical wound beneath the surface complaint
- Return ONLY the JSON object — no preamble, no explanation, no markdown formatting`;

const EXAMPLE_CHIPS = [
  'My coworker microwaves fish in the break room every day',
  'My roommate ate my clearly labeled leftovers',
  "Someone replied 'k' to my long heartfelt text",
  'My boss muted me mid-sentence in a meeting',
  'The barista spelled my name wrong after I spelled it out loud',
];

export default function App() {
  const [view, setView] = useState('input');
  const [grievance, setGrievance] = useState('');
  const [villain, setVillain] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit() {
    const text = grievance.trim();
    if (!text) return;

    setErrorMessage(null);
    setView('loading');

    const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.error('Missing VITE_ANTHROPIC_API_KEY');
      setErrorMessage('The Chronicler was unable to complete your record. Try again.');
      setView('error');
      return;
    }

    try {
      const response = await fetch('/api/anthropic/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          stream: false,
          system: SYSTEM_PROMPT,
          messages: [{ role: 'user', content: text }],
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText || response.statusText);
      }

      const data = await response.json();
      const rawText = data.content?.[0]?.text;
      if (!rawText) throw new Error('Empty response from API');

      const parsed = JSON.parse(rawText);
      setVillain(parsed);
      setView('output');
    } catch (err) {
      console.error(err);
      setErrorMessage('The Chronicler was unable to complete your record. Try again.');
      setView('error');
    }
  }

  function handleDiscoverAnother() {
    setVillain(null);
    setGrievance('');
    setErrorMessage(null);
    setView('input');
  }

  if (view === 'loading') {
    return (
      <div className="app">
        <div className="vignette">
          <div className="loading-state">
            <p className="loading-text">The Chronicler is writing your story...</p>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'error') {
    return (
      <div className="app">
        <div className="vignette">
          <div className="input-container">
            <p className="error-message">The Chronicler was unable to complete your record. Try again.</p>
            <h1 className="title">WHAT'S MY VILLAIN ORIGIN STORY?</h1>
            <p className="subtitle">Every villain has a reason. What's yours?</p>
            <textarea
              className="grievance-input"
              placeholder="Describe the injustice that made you who you are..."
              value={grievance}
              onChange={(e) => setGrievance(e.target.value)}
              rows={5}
            />
            <button className="cta-button" onClick={handleSubmit}>DISCOVER YOUR ORIGIN</button>
            <div className="chips">
              {EXAMPLE_CHIPS.map((label) => (
                <button key={label} type="button" className="chip" onClick={() => setGrievance(label)}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'output' && villain) {
    const paragraphs = villain.origin_story ? villain.origin_story.split(/\n\n+/).filter(Boolean) : [];

    return (
      <div className="app">
        <div className="vignette">
          <div className="output-container">
            <h2 className="villain-name">{villain.villain_name}</h2>
            <div className="origin-story-wrapper">
              {paragraphs.map((para, i) => (
                <p key={i} className="origin-paragraph">{para}</p>
              ))}
            </div>
            <div className="stat-cards">
              <div className="stat-card">
                <span className="stat-label">POWER</span>
                <p className="stat-value">{villain.power}</p>
              </div>
              <div className="stat-card">
                <span className="stat-label">SWORN ENEMY</span>
                <p className="stat-value">{villain.sworn_enemy}</p>
              </div>
              <div className="stat-card">
                <span className="stat-label">LAIR</span>
                <p className="stat-value">{villain.lair}</p>
              </div>
            </div>
            <button className="discover-another" onClick={handleDiscoverAnother}>Discover Another</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="vignette">
        <div className="input-container">
          <h1 className="title">WHAT'S MY VILLAIN ORIGIN STORY?</h1>
          <p className="subtitle">Every villain has a reason. What's yours?</p>
          <textarea
            className="grievance-input"
            placeholder="Describe the injustice that made you who you are..."
            value={grievance}
            onChange={(e) => setGrievance(e.target.value)}
            rows={5}
          />
          <button className="cta-button" onClick={handleSubmit}>DISCOVER YOUR ORIGIN</button>
          <div className="chips">
            {EXAMPLE_CHIPS.map((label) => (
              <button key={label} type="button" className="chip" onClick={() => setGrievance(label)}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
