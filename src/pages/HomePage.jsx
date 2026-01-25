import { gaEvent } from '../utils/analytics';
import { logEvent } from '../utils/eventLog';

function goToSelect() {
  try {
    window.history.pushState({}, '', '/select?language=french');
    window.dispatchEvent(new PopStateEvent('popstate'));
  } catch (_) {
    window.location.href = '/select?language=french';
  }
}

function trackCtaClick(buttonLocation) {
  gaEvent('homepage_cta_clicked', {
    button_location: buttonLocation,
    button_text: 'Start Lesson 1 Free - 3 Minutes →',
    destination: '/select?language=french',
  });
  logEvent('homepage_cta_clicked', {
    button_location: buttonLocation,
    destination: '/select?language=french',
  });
}

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

      </main>
    </div>
  );
}

