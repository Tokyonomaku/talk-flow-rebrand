import { useEffect, useMemo, useRef, useState } from 'react';
import './SpanishLanding.css';

/**
 * Spanish landing page (conversation-first).
 * Standalone route: /spanish-landing
 */
export default function SpanishLanding() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Send into the existing selector flow (user can pick 2 free languages).
  const startUrl = useMemo(() => '/select?language=spanish&lesson=1', []);

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
      const onError = () => cleanup();

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
        <section className="tf-hero tf-animate">
          <div className="tf-flag" aria-hidden="true">🇪🇸</div>
          <h1 className="tf-title">Learn Spanish - Conversation First</h1>
          <p className="tf-subtitle">No &quot;the apple is red.&quot; Just real phrases you&apos;ll actually use.</p>
        </section>

        <section className="tf-phrase tf-animate" aria-label="Spanish phrase preview">
          <div className="tf-phrase-card">
            <div className="tf-phrase-es">¿Dónde está el baño?</div>

            {/* MAIN CTA (must be visible above the fold on mobile) */}
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

            <div className="tf-context">
              You&apos;ll learn this in Lesson 1 — along with 9 other essential phrases for traveling in Spanish-speaking
              countries. No boring vocabulary lists. Just real conversation.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

