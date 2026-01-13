import { useMemo } from 'react';
import { getAllLanguages } from '../data/languages';
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
  {
    flag: '🇫🇷',
    language: 'French',
    foreign: 'Où sont les toilettes?',
    english: 'Where is the bathroom?',
  },
  {
    flag: '🇩🇪',
    language: 'German',
    foreign: 'Wo ist die Toilette?',
    english: 'Where is the bathroom?',
  },
];

const LANGUAGE_IDS = [
  'spanish',
  'french',
  'german',
  'korean',
  'portuguese',
  'japanese',
  'chinese',
  'russian',
  'arabic',
  'esl-english',
  'english-native',
];

export default function HomePage() {
  const languages = useMemo(() => {
    const all = getAllLanguages();
    return LANGUAGE_IDS.map((id) => all.find((l) => l.id === id)).filter(Boolean);
  }, []);

  const onCta = (location) => {
    trackCtaClick(location);
    goToSelect();
  };

  return (
    <div className="bg-white text-slate-900">
      <main className="mx-auto w-full px-5">
        {/* ABOVE THE FOLD: MOBILE-FIRST ULTRA-MINIMAL */}
        <section className="min-h-[100svh] w-full flex items-center justify-center py-8 md:py-14">
          <div className="w-full max-w-[600px] text-center">
            <h1 className="text-[28px] leading-[1.2] font-extrabold tracking-[-0.02em] md:text-[42px]">
              <span className="block">Learn Real Conversations</span>
              <span className="block">in 11 Languages</span>
            </h1>

            <p className="mt-5 text-[16px] leading-[1.3] font-semibold text-[#666]">
              Speak from Lesson 1. No energy bars.
            </p>

            <div className="mt-5 mx-auto w-full rounded-[12px] bg-[#f0f4ff] p-[30px] text-left md:max-w-[400px]">
              <div className="text-3xl leading-none" aria-hidden="true">
                🇪🇸
              </div>
              <div className="mt-3 text-[20px] leading-[1.25] font-extrabold text-slate-900">
                “¿Dónde está el baño?”
              </div>
              <div className="mt-2 text-[16px] leading-[1.25] font-semibold text-[#666]">
                Where is the bathroom?
              </div>
              <div className="mt-4 text-[14px] font-semibold text-slate-700">
                This is Lesson 1.
              </div>
            </div>

            <div className="mt-[30px]">
              <button
                type="button"
                onClick={() => onCta('hero_primary')}
                className="w-full rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF4500] text-[18px] font-extrabold tracking-[-0.01em] text-white shadow-[0_18px_40px_rgba(255,69,0,0.22)] transition-transform active:translate-y-[1px] focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 md:mx-auto md:max-w-[400px]"
                style={{ height: 50 }}
              >
                CHOOSE YOUR 2 FREE LANGUAGES →
              </button>
              <div className="mt-3 text-center text-[12px] font-semibold text-[#666]">
                10 free lessons • No signup needed
              </div>
            </div>
          </div>
        </section>

        {/* BELOW THE FOLD: OPTIONAL DETAILS */}
        <section className="mx-auto w-full max-w-3xl pb-12">
          {/* Mobile: collapsed by default */}
          <div className="md:hidden">
            <details className="rounded-xl border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer select-none text-[14px] font-extrabold text-slate-900">
                See 2 more Lesson 1 examples
              </summary>
              <div className="mt-4 grid grid-cols-1 gap-3">
                {EXAMPLE_PHRASES.slice(1).map((p) => (
                  <div key={p.language} className="rounded-[12px] bg-[#f0f4ff] p-5">
                    <div className="text-2xl leading-none" aria-hidden="true">
                      {p.flag}
                    </div>
                    <div className="mt-2 text-[18px] font-extrabold text-slate-900">
                      “{p.foreign}”
                    </div>
                    <div className="mt-1 text-[14px] font-semibold text-[#666]">{p.english}</div>
                  </div>
                ))}
              </div>
            </details>
          </div>

          {/* Desktop: show the extra examples openly */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              {EXAMPLE_PHRASES.slice(1).map((p) => (
                <div key={p.language} className="rounded-[12px] bg-[#f0f4ff] p-6">
                  <div className="text-2xl leading-none" aria-hidden="true">
                    {p.flag} <span className="ml-1 font-extrabold text-slate-900">{p.language}</span>
                  </div>
                  <div className="mt-3 text-[18px] font-extrabold text-slate-900">
                    “{p.foreign}”
                  </div>
                  <div className="mt-2 text-[14px] font-semibold text-[#666]">{p.english}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 text-center">
            <div className="text-[14px] font-extrabold text-slate-900">Available languages</div>
            <div className="mt-3 text-[14px] font-semibold text-slate-700">
              Spanish • French • German • Korean
              <br />
              Portuguese • Japanese • Chinese • Russian
              <br />
              Arabic • English (ESL) • English (Essentials)
            </div>
          </div>

          <p className="mt-8 text-center text-[14px] font-semibold text-slate-700">
            Unlike Duolingo: No energy bars. No forced ads. No tricks.
          </p>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => onCta('below_fold_secondary')}
              className="w-full rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF4500] text-[18px] font-extrabold tracking-[-0.01em] text-white shadow-[0_18px_40px_rgba(255,69,0,0.22)] transition-transform active:translate-y-[1px] focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 md:mx-auto md:max-w-[400px]"
              style={{ height: 50 }}
            >
              START LEARNING NOW →
            </button>
            <div className="mt-3 text-center text-[12px] font-semibold text-[#666]">
              10 free lessons • No signup needed
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

