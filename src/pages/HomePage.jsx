import { gaEvent } from '../utils/analytics';
import { logEvent } from '../utils/eventLog';

function goToSelect() {
  try {
    window.history.pushState({}, '', '/select');
    window.dispatchEvent(new PopStateEvent('popstate'));
  } catch (_) {
    window.location.href = '/select';
  }
}

function trackCtaClick(buttonLocation) {
  gaEvent('homepage_cta_clicked', {
    button_location: buttonLocation,
    button_text: 'CHOOSE YOUR 2 FREE LANGUAGES →',
    destination: '/select',
  });
  logEvent('homepage_cta_clicked', {
    button_location: buttonLocation,
    destination: '/select',
  });
}

const EXAMPLE_PHRASES = [
  {
    flag: '🇪🇸',
    language: 'Spanish',
    foreign: '¿Dónde está el baño?',
    english: 'Where is the bathroom?',
  },
];

export default function HomePage() {
  const onCta = (location) => {
    trackCtaClick(location);
    goToSelect();
  };

  const spanishExample = EXAMPLE_PHRASES[0];

  return (
    <div className="bg-white text-slate-900">
      <main className="mx-auto w-full px-5">
        {/* ENTIRE HOMEPAGE: ULTRA-MINIMAL. ENDS AFTER CTA. */}
        <section className="min-h-[100svh] w-full flex items-center justify-center py-10">
          <div className="w-full max-w-[500px] text-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h1 className="text-[28px] leading-[1.2] font-extrabold tracking-[-0.02em] md:text-[42px]">
                  <span className="block">Speak Spanish</span>
                  <span className="block">in 2 Minutes</span>
                </h1>
                <p className="text-[16px] leading-[1.3] font-semibold text-[#666]">
                  Real travel phrases. Not &quot;the apple is red.&quot;
                </p>
              </div>

              <div className="mx-auto w-full rounded-[12px] bg-[#f0f4ff] p-[30px] text-left">
                <div className="flex items-center gap-2">
                  <span className="text-2xl leading-none" aria-hidden="true">
                    {spanishExample.flag}
                  </span>
                  <span className="text-[16px] font-extrabold text-slate-900">
                    {spanishExample.language}
                  </span>
                </div>
                <div className="mt-4 text-[20px] leading-[1.25] font-extrabold text-slate-900">
                  “{spanishExample.foreign}”
                </div>
                <div className="mt-2 text-[16px] leading-[1.25] font-semibold text-[#666]">
                  {spanishExample.english}
                </div>
                <div className="mt-4 text-[14px] font-semibold text-slate-700">
                  This is Lesson 1.
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => onCta('hero_primary')}
                  className="w-full rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF4500] text-[18px] font-extrabold tracking-[-0.01em] text-white shadow-[0_18px_40px_rgba(255,69,0,0.22)] transition-transform active:translate-y-[1px] focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
                  style={{ height: 50 }}
                >
                  START YOUR FIRST FREE LESSON →
                </button>
                <div className="text-center text-[12px] font-semibold text-[#666]">
                  10 free lessons • No signup needed • Pick any 2 languages
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

