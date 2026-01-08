import { useEffect, useMemo, useRef, useState } from 'react';
import './spanish-landing.css';

/**
 * Spanish conversion landing page (conversation-first).
 * - Shows real Spanish content immediately
 * - CTA sends users into the app at /app with intent params
 * - No external deps beyond React
 */
export default function SpanishLanding() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const startUrl = useMemo(() => '/app?language=spanish&lesson=1', []);

  const handleStart = () => {
    window.location.href = startUrl;
  };

  const handlePlayAudio = async () => {
    if (isPlaying) return;
    setIsPlaying(true);

    try {
      if (!audioRef.current) {
        audioRef.current = new Audio('/audio/donde-bano.mp3');
      }
      const audio = audioRef.current;
      audio.currentTime = 0;

      const cleanup = () => {
        audio.removeEventListener('ended', cleanup);
        audio.removeEventListener('pause', cleanup);
        audio.removeEventListener('error', onError);
        setIsPlaying(false);
      };
      const onError = () => {
        cleanup();
      };

      audio.addEventListener('ended', cleanup);
      audio.addEventListener('pause', cleanup);
      audio.addEventListener('error', onError);

      // play() can reject if the file is missing or autoplay is blocked.
      await audio.play();
    } catch (err) {
      console.warn('[SpanishLanding] Audio failed to play:', err);
      setIsPlaying(false);
    }
  };

  // Fade-in-up on scroll via IntersectionObserver (no dependencies).
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.tf-animate'));
    if (nodes.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <div className="tf-spanish">
      <div className="tf-container">
        {/* HERO (above the fold) */}
        <section className="tf-hero tf-animate">
          <div className="tf-flag" aria-hidden="true">🇪🇸</div>
          <h1 className="tf-title">Learn Spanish - Conversation First</h1>
          <p className="tf-subtitle">No &quot;the apple is red.&quot; Just real phrases you&apos;ll actually use.</p>
        </section>

        {/* PHRASE PREVIEW CARD (kept above the fold with CTA) */}
        <section className="tf-phrase tf-animate" aria-label="Spanish phrase preview">
          <div className="tf-phrase-card">
            <div className="tf-phrase-es">¿Dónde está el baño?</div>

            <button
              type="button"
              className="tf-audio"
              onClick={handlePlayAudio}
              disabled={isPlaying}
              aria-disabled={isPlaying}
            >
              {isPlaying ? 'Playing…' : '🔊 Listen to Pronunciation'}
            </button>

            <div className="tf-translation-label">↓ Translation ↓</div>
            <div className="tf-phrase-en">Where is the bathroom?</div>

            {/* MAIN CTA (above fold) */}
            <div className="tf-cta-wrap">
              <button type="button" className="tf-cta" onClick={handleStart}>
                START YOUR FIRST LESSON FREE →
              </button>
              <div className="tf-trust" aria-label="Trust badges">
                <span>✓ No credit card required</span>
                <span>✓ 10 free lessons</span>
                <span>✓ Takes 5 minutes</span>
              </div>
            </div>

            <div className="tf-context">
              You&apos;ll learn this in Lesson 1 — along with 9 other essential phrases for traveling in Spanish-speaking
              countries. No boring vocabulary lists. Just real conversation.
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="tf-section tf-animate" aria-label="Features">
          <div className="tf-features">
            <div className="tf-feature">
              <div className="tf-feature-title">💬 Real Conversations</div>
              <div className="tf-feature-text">Learn phrases you&apos;ll actually use, not random vocabulary</div>
            </div>
            <div className="tf-feature">
              <div className="tf-feature-title">🚀 Start Speaking Day 1</div>
              <div className="tf-feature-text">No months of grammar before you can say anything useful</div>
            </div>
            <div className="tf-feature">
              <div className="tf-feature-title">🎯 No Energy Systems</div>
              <div className="tf-feature-text">Unlike Duolingo, we don&apos;t lock you out for learning too much</div>
            </div>
          </div>
        </section>

        {/* SAMPLE PHRASES */}
        <section className="tf-section tf-animate" aria-label="Sample phrases">
          <h2 className="tf-h2">Other Phrases You&apos;ll Master in Your First 10 Lessons:</h2>
          <div className="tf-phrase-list">
            <div className="tf-phrase-item">🤝 <strong>Hola, me llamo [Name]. Mucho gusto.</strong> — Nice to meet you</div>
            <div className="tf-phrase-item">💰 <strong>¿Cuánto cuesta esto?</strong> — How much does this cost?</div>
            <div className="tf-phrase-item">🗺️ <strong>¿Dónde está...?</strong> — Where is...?</div>
            <div className="tf-phrase-item">🍽️ <strong>La cuenta, por favor.</strong> — The check, please</div>
            <div className="tf-phrase-item">🆘 <strong>¿Habla inglés?</strong> — Do you speak English?</div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="tf-final tf-animate" aria-label="Final call to action">
          <h2 className="tf-h2 tf-final-title">Ready to Start Speaking Spanish?</h2>
          <p className="tf-final-sub">Join thousands learning real conversation skills</p>
          <button type="button" className="tf-cta tf-cta-lg" onClick={handleStart}>
            START YOUR FIRST FREE LESSON →
          </button>
          <div className="tf-final-small">No signup required to try • Takes 5 minutes</div>
        </section>

        {/* FOOTER */}
        <footer className="tf-footer tf-animate">
          <a className="tf-footer-link" href="/app">
            Want to learn a different language? Browse all 11 languages here
          </a>
          <div className="tf-footer-brand">TalkFlow - The Honest Language App</div>
          <div className="tf-footer-tagline">No energy systems. No forced ads. No BS.</div>
        </footer>
      </div>
    </div>
  );
}

