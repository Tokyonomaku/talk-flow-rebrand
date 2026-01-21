import { gaEvent } from '../utils/analytics';
import { logEvent } from '../utils/eventLog';

function goToSelect() {
  try {
    window.history.pushState({}, '', '/select?language=korean');
    window.dispatchEvent(new PopStateEvent('popstate'));
  } catch (_) {
    window.location.href = '/select?language=korean';
  }
}

function trackCtaClick(buttonLocation) {
  gaEvent('homepage_cta_clicked', {
    button_location: buttonLocation,
    button_text: 'Start Lesson 1 Free - 3 Minutes →',
    destination: '/select?language=korean',
  });
  logEvent('homepage_cta_clicked', {
    button_location: buttonLocation,
    destination: '/select?language=korean',
  });
}

const KOREAN_LESSON_1_PREVIEW = [
  { korean: '화장실이 어디에요?', english: 'Where is the bathroom?' },
  { korean: '얼마예요?', english: 'How much does this cost?' },
  { korean: '영어 할 수 있어요?', english: 'Do you speak English?' },
];

export default function HomePage() {
  const onCta = (location) => {
    trackCtaClick(location);
    goToSelect();
  };

  return (
    <div className="bg-white text-slate-900">
      <main className="mx-auto w-full px-5">
        {/* HERO (above the fold) */}
        <section className="min-h-[100svh] w-full flex items-center justify-center py-10">
          <div className="w-full max-w-[720px] text-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-[30px] leading-[1.12] font-extrabold tracking-[-0.02em] sm:text-[40px] md:text-[48px]">
                  <span className="block">Language Learning Gets Hard</span>
                  <span className="block">Let Me Make It Easier</span>
                </h1>
                <p className="text-[15px] leading-[1.45] font-semibold text-slate-600 sm:text-[16px]">
                  <span className="block">I&apos;ve studied 8 languages. I know the frustration.</span>
                  <span className="block">
                    That&apos;s why TalkFlow teaches phrases you&apos;ll actually use - from Day 1.
                  </span>
                </p>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => onCta('hero_primary')}
                  className="mx-auto w-full max-w-[420px] rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF4500] px-6 text-[16px] font-extrabold tracking-[-0.01em] text-white shadow-[0_18px_40px_rgba(255,69,0,0.22)] transition-transform active:translate-y-[1px] focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
                  style={{ height: 52 }}
                >
                  Start Lesson 1 Free - 3 Minutes →
                </button>
                <div className="text-center text-[12px] font-semibold text-slate-500">
                  No signup • No credit card • Free forever
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM / SOLUTION */}
        <section className="mx-auto w-full max-w-[900px] py-14">
          <div className="mx-auto max-w-[720px] text-center space-y-4">
            <h2 className="text-[24px] leading-tight font-extrabold tracking-[-0.02em] sm:text-[28px]">
              The Problem with Most Apps
            </h2>
            <div className="text-[15px] leading-[1.7] font-medium text-slate-700">
              <p>Most apps teach you to say &apos;the apple is red&apos;</p>
              <p className="mt-4">But when you land in Seoul, you need:</p>
              <div className="mt-3 text-left mx-auto max-w-[420px] font-semibold text-slate-900">
                <div>→ Where&apos;s the bathroom?</div>
                <div>→ How much does this cost?</div>
                <div>→ Do you speak English?</div>
              </div>
              <p className="mt-4 font-semibold">
                TalkFlow starts with the phrases that actually matter.
              </p>
            </div>
          </div>
        </section>

        {/* LESSON PREVIEW */}
        <section className="mx-auto w-full max-w-[900px] py-6">
          <div className="mx-auto max-w-[720px] text-center space-y-6">
            <h2 className="text-[24px] leading-tight font-extrabold tracking-[-0.02em] sm:text-[28px]">
              🇰🇷 Try Lesson 1 - Korean
            </h2>

            <div className="mx-auto w-full rounded-2xl border border-slate-100 bg-slate-50 p-6 text-left shadow-sm">
              <div className="space-y-4">
                {KOREAN_LESSON_1_PREVIEW.map((p) => (
                  <div key={p.korean} className="rounded-xl bg-white p-4 border border-slate-100">
                    <div className="text-[18px] leading-snug font-extrabold text-slate-900">
                      {p.korean}
                    </div>
                    <div className="mt-1 text-[14px] leading-snug font-semibold text-slate-600">
                      {p.english}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 text-center text-[13px] font-semibold text-slate-600">
                Plus 7 more essential phrases
              </div>

              <div className="mt-4 flex justify-center">
                <button
                  type="button"
                  onClick={() => onCta('lesson_preview_cta')}
                  className="w-full max-w-[420px] rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF4500] px-6 text-[16px] font-extrabold tracking-[-0.01em] text-white shadow-[0_18px_40px_rgba(255,69,0,0.18)] transition-transform active:translate-y-[1px] focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
                  style={{ height: 52 }}
                >
                  Learn in 3 Minutes - Free Forever →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE PROPS */}
        <section className="mx-auto w-full max-w-[900px] py-14">
          <div className="mx-auto max-w-[720px] text-center space-y-6">
            <h2 className="text-[24px] leading-tight font-extrabold tracking-[-0.02em] sm:text-[28px]">
              Why TalkFlow?
            </h2>

            <div className="mx-auto max-w-[520px] text-left">
              <div className="space-y-3 text-[15px] leading-[1.6] font-semibold text-slate-800">
                <div>✓ Real conversations from Lesson 1</div>
                <div>✓ 8 languages to choose from</div>
                <div>✓ Learn at your own pace</div>
                <div>✓ Free forever (or $99/year for everything)</div>
              </div>
            </div>

            <div className="text-[15px] leading-[1.6] font-semibold text-slate-700">
              No tricks. No limits. Just honest language learning.
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => onCta('final_cta')}
                className="w-full max-w-[420px] rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF4500] px-6 text-[16px] font-extrabold tracking-[-0.01em] text-white shadow-[0_18px_40px_rgba(255,69,0,0.18)] transition-transform active:translate-y-[1px] focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
                style={{ height: 52 }}
              >
                Try Lesson 1 Now →
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

