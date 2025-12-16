export default function LandingPage({ onTryFree, onNavigate }) {
  const navigate = (path) => {
    if (typeof onNavigate === 'function') onNavigate(path);
    else window.location.href = path;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Nav */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="font-extrabold text-lg tracking-tight text-gray-900"
            aria-label="TalkFlow Home"
          >
            TalkFlow
          </button>

          <div className="flex items-center gap-4 sm:gap-6 text-sm font-semibold text-gray-700">
            <a className="hover:text-gray-900" href="#about">About</a>
            <a className="hover:text-gray-900" href="#pricing">Pricing</a>
          </div>

          <button
            onClick={onTryFree}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-sm"
          >
            Try Free
          </button>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Learn 11 Languages Without the Manipulation
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700">
              No energy systems. No forced ads. Just honest language learning.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onTryFree}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-xl font-extrabold text-base md:text-lg shadow-md"
              >
                Try 2 Languages Free - No Credit Card
              </button>
              <a
                href="#pricing"
                className="px-6 py-4 rounded-xl font-semibold text-gray-800 border border-gray-200 bg-white hover:bg-gray-50 text-center"
              >
                See pricing
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              No credit card required. Upgrade only if you want more languages.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Tired of Duolingo Locking You Out?
            </h2>
            <p className="mt-3 text-gray-700 text-lg">
              Language apps use energy systems and forced ads to manipulate you into paying. We don&apos;t.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <div className="text-sm font-bold text-gray-700">Typical language apps</div>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>✕ Energy systems that lock you out</li>
                <li>✕ Forced ads every few lessons</li>
                <li>✕ Dark patterns to push upgrades</li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
              <div className="text-sm font-bold text-emerald-800">TalkFlow</div>
              <ul className="mt-3 space-y-2 text-emerald-900">
                <li>✓ Learn as much as you want</li>
                <li>✓ No forced ads</li>
                <li>✓ Transparent pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="about" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            What Makes TalkFlow Different
          </h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="text-emerald-600 font-extrabold">✓ No Energy Systems</div>
              <p className="mt-2 text-gray-700">Learn as much as you want, whenever you want.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="text-emerald-600 font-extrabold">✓ 11 Languages</div>
              <p className="mt-2 text-gray-700">
                Spanish, French, German, Korean, Portuguese, Japanese, Chinese, Russian, Arabic + English.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="text-emerald-600 font-extrabold">✓ Real Conversations</div>
              <p className="mt-2 text-gray-700">Street slang + formal language. Learn how people actually talk.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="text-emerald-600 font-extrabold">✓ Free English Education</div>
              <p className="mt-2 text-gray-700">ESL and English Essentials are 100% free, forever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl md:text-4xl font-extrabold">How it works</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-gray-200 p-6 bg-white">
              <div className="text-blue-500 font-extrabold">Step 1</div>
              <div className="mt-2 font-bold text-gray-900">Choose 2 free languages</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 bg-white">
              <div className="text-blue-500 font-extrabold">Step 2</div>
              <div className="mt-2 font-bold text-gray-900">Complete 10 lessons per language (20 total)</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 bg-white">
              <div className="text-blue-500 font-extrabold">Step 3</div>
              <div className="mt-2 font-bold text-gray-900">Upgrade for all 11 languages (optional)</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="max-w-3xl bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <p className="text-xl font-semibold text-gray-900">
              “This actually teaches you how people talk, not just textbook phrases.”
            </p>
            <p className="mt-3 text-gray-600">— [Name]</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl md:text-4xl font-extrabold">Pricing (Transparent)</h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FREE */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7">
              <div className="inline-flex items-center gap-2 text-emerald-900 font-extrabold">
                <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs">FREE</span>
                Free Tier
              </div>
              <div className="mt-4 text-5xl font-extrabold text-gray-900">$0</div>
              <div className="text-gray-700 font-semibold">forever</div>
              <ul className="mt-5 space-y-2 text-gray-800">
                <li>✓ Pick 2 languages</li>
                <li>✓ 10 lessons per language</li>
                <li>✓ 20 total lessons</li>
              </ul>
              <button
                onClick={onTryFree}
                className="mt-6 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-extrabold"
              >
                Start free
              </button>
            </div>

            {/* PREMIUM */}
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-7 shadow-sm">
              <div className="inline-flex items-center gap-2 text-blue-900 font-extrabold">
                <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs">PREMIUM</span>
                Premium
              </div>
              <div className="mt-4 text-3xl font-extrabold text-gray-900">
                $20<span className="text-base font-semibold text-gray-700">/month</span>
                <span className="text-gray-400 mx-2">or</span>
                $150<span className="text-base font-semibold text-gray-700">/year</span>
              </div>
              <ul className="mt-5 space-y-2 text-gray-800">
                <li>✓ All 11 languages</li>
                <li>✓ 260 total lessons</li>
                <li>✓ Advanced content</li>
              </ul>
              <button
                onClick={onTryFree}
                className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-extrabold"
              >
                View details
              </button>
              <p className="mt-3 text-sm text-gray-600">Upgrade inside the app anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Ready to Start Learning?</h2>
            <p className="mt-3 text-blue-100 text-lg">No credit card required. Cancel anytime.</p>
            <button
              onClick={onTryFree}
              className="mt-6 bg-white text-blue-700 hover:bg-blue-50 px-6 py-4 rounded-xl font-extrabold"
            >
              Choose Your 2 Free Languages
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="font-extrabold">TalkFlow</div>
          <div className="flex items-center gap-6 text-sm font-semibold text-gray-700">
            <a
              href="/privacy"
              onClick={(e) => {
                e.preventDefault();
                navigate('/privacy');
              }}
              className="hover:text-gray-900"
            >
              Privacy
            </a>
            <a
              href="/terms"
              onClick={(e) => {
                e.preventDefault();
                navigate('/terms');
              }}
              className="hover:text-gray-900"
            >
              Terms
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}
              className="hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
