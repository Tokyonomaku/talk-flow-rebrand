export default function LandingPage({ onTryFree, onNavigate }) {
  const navigate = (path) => {
    if (typeof onNavigate === 'function') onNavigate(path);
    else window.location.href = path;
  };

  const goToLanguageSelector = () => {
    // Keeps the app routing logic centralized in App.jsx
    if (typeof onTryFree === 'function') onTryFree();
    else navigate('/select');
  };

  const goToUpgrade = () => {
    // Deep-link into the app and open the upgrade modal immediately.
    navigate('/select?upgrade=1');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top nav */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <button
            onClick={() => navigate('/')}
            className="font-extrabold text-lg tracking-tight text-gray-900"
            aria-label="TalkFlow Home"
          >
            TalkFlow
          </button>

          <div className="hidden sm:flex items-center gap-6 text-sm font-semibold text-gray-700">
            <a className="hover:text-gray-900" href="#languages">Languages</a>
            <a className="hover:text-gray-900" href="#pricing">Pricing</a>
            <button className="hover:text-gray-900" onClick={goToLanguageSelector}>
              Try Free
            </button>
          </div>

          <button
            onClick={goToLanguageSelector}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-extrabold shadow-sm text-sm sm:text-base"
          >
            Start Learning Free - No Credit Card Required
          </button>
        </div>
      </div>

      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="hero">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                Order Coffee. Ask Directions. Make Friends.
              </h1>
              <p className="subheadline mt-4 text-lg md:text-xl text-gray-700">
                Learn languages for real life, not just textbook exercises.
              </p>

              <div className="hero-features mt-6 flex flex-wrap gap-3 text-sm font-semibold text-gray-800">
                <span className="px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm">✓ 11 Languages</span>
                <span className="px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm">✓ 260 Lessons</span>
                <span className="px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm">✓ Learn at Your Pace</span>
              </div>

              <button
                className="cta-primary mt-8 w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-xl font-extrabold text-base md:text-lg shadow-md"
                onClick={goToLanguageSelector}
              >
                Choose Your 2 Free Languages →
              </button>

              <p className="mt-2 text-sm font-semibold text-gray-600">
                No credit card required
              </p>

              <p className="trust-signal mt-4 text-sm text-gray-600">
                Join learners from 25+ countries learning real conversations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE HIGHLIGHT (right after hero) */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="free-value-highlight mx-auto max-w-[600px] bg-[#EFF6FF] border-2 border-[#3B82F6] rounded-2xl p-8 shadow-sm relative">
            <span className="badge absolute -top-3 left-4 bg-[#10B981] text-white px-3 py-1 rounded-full text-xs font-extrabold shadow">
              Free Forever Tier
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">
              What You Get Free Today
            </h3>
            <div className="value-list mt-4 space-y-3">
              <div className="value-item flex items-start gap-3">
                <span className="check text-[#10B981] font-extrabold">✓</span>
                <span className="text-gray-800 font-semibold">
                  2 languages of your choice (Spanish, French, German, Korean, Portuguese, Japanese, Chinese, Russian, or Arabic)
                </span>
              </div>
              <div className="value-item flex items-start gap-3">
                <span className="check text-[#10B981] font-extrabold">✓</span>
                <span className="text-gray-800 font-semibold">
                  20 practical lessons (10 per language)
                </span>
              </div>
              <div className="value-item flex items-start gap-3">
                <span className="check text-[#10B981] font-extrabold">✓</span>
                <span className="text-gray-800 font-semibold">
                  Both English tracks - 100% free forever
                </span>
              </div>
              <div className="value-item flex items-start gap-3">
                <span className="check text-[#10B981] font-extrabold">✓</span>
                <span className="text-gray-800 font-semibold">
                  Real conversations from day 1
                </span>
              </div>
            </div>
            <p className="value-note mt-5 text-gray-800">
              <strong>Value: $40+</strong> | Your price: <strong>Free forever</strong>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT YOU GET (FREE TIER FOCUS) */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="free-tier-value">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Start Learning Today - Completely Free
            </h2>
            <p className="mt-3 text-gray-700 text-lg">
              Pick what you want to learn. No strings attached.
            </p>

            <div className="value-cards mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="card bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-4xl">🌍</div>
                <h3 className="mt-3 text-xl font-extrabold text-gray-900">Choose 2 Languages</h3>
                <p className="mt-2 text-gray-700">
                  Pick from Spanish, French, German, Korean, Portuguese, Japanese, Chinese, Russian, or Arabic
                </p>
                <p className="detail mt-3 text-sm font-semibold text-gray-600">
                  10 lessons per language = 20 free lessons
                </p>
              </div>

              <div className="card featured bg-white rounded-2xl border-2 border-emerald-300 p-6 shadow-sm relative">
                <span className="badge absolute -top-3 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-extrabold shadow">
                  Always Free
                </span>
                <div className="text-4xl">🇺🇸</div>
                <h3 className="mt-3 text-xl font-extrabold text-gray-900">Plus: Free English Education</h3>
                <p className="mt-2 text-gray-700">ESL English for non-native speakers</p>
                <p className="mt-1 text-gray-700">English Essentials for native speakers improving grammar &amp; professional writing</p>
                <p className="detail mt-3 text-sm font-semibold text-emerald-800">
                  Both 100% free forever - our gift to learners everywhere
                </p>
              </div>

              <div className="card bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-4xl">🎯</div>
                <h3 className="mt-3 text-xl font-extrabold text-gray-900">Real Conversations</h3>
                <p className="mt-2 text-gray-700">
                  Learn phrases you&apos;ll actually use - from ordering coffee to making friends
                </p>
                <p className="detail mt-3 text-sm font-semibold text-gray-600">
                  Street slang + formal language
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="how-it-works">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Simple. Honest. Effective.
            </h2>

            <div className="steps mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="step bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="step-number w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-extrabold">
                  1
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-gray-900">Choose Your Languages</h3>
                <p className="mt-2 text-gray-700">
                  Pick 2 languages you want to learn. Or start with our free English tracks.
                </p>
              </div>

              <div className="step bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="step-number w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-extrabold">
                  2
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-gray-900">Learn Real Conversations</h3>
                <p className="mt-2 text-gray-700">
                  Each lesson teaches phrases you&apos;ll actually use - no fluff, no filler.
                </p>
              </div>

              <div className="step bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="step-number w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-extrabold">
                  3
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-gray-900">Learn at Your Own Pace</h3>
                <p className="mt-2 text-gray-700">
                  No artificial limits. Study as much as you want, whenever you want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT MAKES US DIFFERENT */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="differentiation">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Built for Adult Learners Who Want Results
            </h2>

            <div className="features-grid mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="feature bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-3xl">🚫⏰</div>
                <h3 className="mt-3 text-xl font-extrabold text-gray-900">No Artificial Limits</h3>
                <p className="mt-2 text-gray-700">
                  Learn as much as you want. We don&apos;t restrict your progress to push ads or upgrades.
                </p>
              </div>
              <div className="feature bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-3xl">💬</div>
                <h3 className="mt-3 text-xl font-extrabold text-gray-900">Real Conversations</h3>
                <p className="mt-2 text-gray-700">
                  From day 1, learn phrases that work in real life. Travel, work, making friends.
                </p>
              </div>
              <div className="feature bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-3xl">🎓</div>
                <h3 className="mt-3 text-xl font-extrabold text-gray-900">Built by a Polyglot</h3>
                <p className="mt-2 text-gray-700">
                  Created by someone who speaks 8 languages and knows what actually works.
                </p>
              </div>
              <div className="feature bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-3xl">🌐</div>
                <h3 className="mt-3 text-xl font-extrabold text-gray-900">Street Slang Included</h3>
                <p className="mt-2 text-gray-700">
                  Learn how people actually talk - formal phrases AND casual slang.
                </p>
              </div>
              <div className="feature bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-3xl">💰</div>
                <h3 className="mt-3 text-xl font-extrabold text-gray-900">Transparent Pricing</h3>
                <p className="mt-2 text-gray-700">
                  One honest price. No hidden costs. No tricks. Cancel anytime.
                </p>
              </div>
              <div className="feature bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-3xl">🎯</div>
                <h3 className="mt-3 text-xl font-extrabold text-gray-900">Made for Adults</h3>
                <p className="mt-2 text-gray-700">
                  No childish games. No forced gamification. Just effective learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LANGUAGES AVAILABLE */}
      <section id="languages" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="languages-showcase">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              11 Languages to Choose From
            </h2>

            <div className="languages-grid mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { flag: '🇪🇸', name: 'Spanish', lessons: '26 lessons' },
                { flag: '🇫🇷', name: 'French', lessons: '26 lessons' },
                { flag: '🇩🇪', name: 'German', lessons: '26 lessons' },
                { flag: '🇰🇷', name: 'Korean', lessons: '26 lessons' },
                { flag: '🇧🇷', name: 'Portuguese', lessons: '26 lessons' },
                { flag: '🇯🇵', name: 'Japanese', lessons: '26 lessons' },
                { flag: '🇨🇳', name: 'Chinese', lessons: '26 lessons' },
                { flag: '🇷🇺', name: 'Russian', lessons: '26 lessons' },
                { flag: '🇸🇦', name: 'Arabic', lessons: '26 lessons' },
              ].map((l) => (
                <div key={l.name} className="language-card bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                  <div className="text-3xl">{l.flag}</div>
                  <h3 className="mt-2 font-extrabold text-gray-900">{l.name}</h3>
                  <p className="text-sm font-semibold text-gray-600">{l.lessons}</p>
                </div>
              ))}

              <div className="language-card featured bg-white rounded-2xl border-2 border-emerald-300 p-5 shadow-sm">
                <div className="text-3xl">🇺🇸</div>
                <h3 className="mt-2 font-extrabold text-gray-900">English (ESL)</h3>
                <p className="text-sm font-semibold text-emerald-700">100% Free</p>
              </div>

              <div className="language-card featured bg-white rounded-2xl border-2 border-emerald-300 p-5 shadow-sm">
                <div className="text-3xl">🇺🇸</div>
                <h3 className="mt-2 font-extrabold text-gray-900">English (Native)</h3>
                <p className="text-sm font-semibold text-emerald-700">100% Free</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PRICING (TRANSPARENT) */}
      <section id="pricing" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="pricing-section">
            <h2 className="text-3xl md:text-4xl font-extrabold">Simple, Honest Pricing</h2>
            <p className="mt-3 text-gray-700 text-lg">Choose what works for you. No hidden fees.</p>

            <div className="pricing-tiers mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="tier free bg-white rounded-2xl border border-gray-200 p-7 shadow-sm">
                <h3 className="text-xl font-extrabold text-gray-900">Free Forever</h3>
                <div className="price mt-3 text-5xl font-extrabold text-gray-900">$0</div>
                <ul className="mt-5 space-y-2 text-gray-800 font-semibold">
                  <li>✓ Choose 2 languages</li>
                  <li>✓ 10 lessons per language</li>
                  <li>✓ Both English tracks (free)</li>
                  <li>✓ Real conversation focus</li>
                  <li>✓ No time limits</li>
                </ul>
                <button
                  className="btn-secondary mt-6 w-full bg-white border border-gray-300 text-gray-900 py-3 rounded-xl font-extrabold hover:bg-gray-50"
                  onClick={goToLanguageSelector}
                >
                  Start Free
                </button>
              </div>

              <div className="tier premium featured relative bg-blue-50 rounded-2xl border-2 border-blue-200 p-7 shadow-sm">
                <span className="badge absolute -top-3 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-extrabold shadow">
                  Most Popular
                </span>
                <h3 className="text-xl font-extrabold text-gray-900">Premium</h3>
                <div className="price-options mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="price-option bg-white rounded-xl border border-gray-200 p-4">
                    <div className="flex items-baseline gap-1">
                      <span className="amount text-3xl font-extrabold text-gray-900">$20</span>
                      <span className="period text-gray-600 font-semibold">/month</span>
                    </div>
                    <div className="note mt-1 text-sm font-semibold text-gray-600">Cancel anytime</div>
                  </div>
                  <div className="price-option featured relative bg-white rounded-xl border-2 border-blue-300 p-4 shadow-sm">
                    <span className="badge-small absolute -top-3 left-3 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-extrabold shadow">
                      Save $90
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="amount text-3xl font-extrabold text-gray-900">$150</span>
                      <span className="period text-gray-600 font-semibold">/year</span>
                    </div>
                    <div className="note mt-1 text-sm font-semibold text-blue-700">Just $12.50/month</div>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-gray-800 font-semibold">
                  <li>✓ All 11 languages</li>
                  <li>✓ 260 total lessons</li>
                  <li>✓ Advanced content</li>
                  <li>✓ All future updates</li>
                  <li>✓ Priority support</li>
                </ul>
                <button
                  className="btn-primary mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-extrabold hover:bg-blue-700 shadow-md"
                  onClick={goToUpgrade}
                >
                  Upgrade to Premium
                </button>
              </div>
            </div>

            <p className="pricing-note mt-6 text-gray-700 font-semibold">
              💡 That&apos;s 11 languages for less than most apps charge for one.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHO THIS IS FOR */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="audience-section">
            <h2 className="text-3xl md:text-4xl font-extrabold">Perfect For</h2>

            <div className="audience-grid mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="audience bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-3xl">✈️</div>
                <h3 className="mt-3 text-xl font-extrabold text-gray-900">Travelers</h3>
                <p className="mt-2 text-gray-700">
                  Learn the basics before your trip. Order food, ask directions, make friends.
                </p>
              </div>
              <div className="audience bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-3xl">💼</div>
                <h3 className="mt-3 text-xl font-extrabold text-gray-900">Digital Nomads</h3>
                <p className="mt-2 text-gray-700">
                  Pick up essentials for your next destination. Multiple countries, one app.
                </p>
              </div>
              <div className="audience bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-3xl">📚</div>
                <h3 className="mt-3 text-xl font-extrabold text-gray-900">ESL Students</h3>
                <p className="mt-2 text-gray-700">
                  Improve your English with our free tracks designed for adult learners.
                </p>
              </div>
              <div className="audience bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-3xl">🌍</div>
                <h3 className="mt-3 text-xl font-extrabold text-gray-900">Language Enthusiasts</h3>
                <p className="mt-2 text-gray-700">
                  Love learning languages? Access 11 of them for one fair price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SOCIAL PROOF */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="testimonial-section">
            <h2 className="text-3xl md:text-4xl font-extrabold">What Learners Are Saying</h2>

            <div className="testimonial mt-8 max-w-3xl bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
              <p className="quote text-xl font-semibold text-gray-900">
                &quot;This actually teaches you how people talk, not just textbook phrases.&quot;
              </p>
              <p className="author mt-3 text-gray-600 font-semibold">- [Your friend&apos;s name]</p>
            </div>

            <p className="social-proof mt-6 text-gray-700 font-semibold">
              Join learners from 25+ countries building real conversation skills
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ (SHORT) */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="faq-section">
            <h2 className="text-3xl md:text-4xl font-extrabold">Quick Questions</h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="faq-item bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-extrabold text-gray-900">Is it really free?</h3>
                <p className="mt-2 text-gray-700">
                  Yes! Choose 2 languages + get both English tracks. No credit card required. No time limits.
                </p>
              </div>
              <div className="faq-item bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-extrabold text-gray-900">What if I want more than 2 languages?</h3>
                <p className="mt-2 text-gray-700">
                  Upgrade to Premium for $150/year and unlock all 11 languages + advanced lessons.
                </p>
              </div>
              <div className="faq-item bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-extrabold text-gray-900">Can I cancel anytime?</h3>
                <p className="mt-2 text-gray-700">
                  Yes! Monthly subscriptions cancel anytime. Annual is a one-time payment (no auto-renewal).
                </p>
              </div>
              <div className="faq-item bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-extrabold text-gray-900">How is this different from other apps?</h3>
                <p className="mt-2 text-gray-700">
                  We focus on real conversations you&apos;ll actually use. No games, no tricks, just effective learning.
                  And we don&apos;t limit how much you can study.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="final-cta max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Ready to Start Learning?</h2>
            <p className="mt-3 text-blue-100 text-lg">
              Pick your languages and start speaking today. No credit card required.
            </p>

            <button
              className="cta-primary mt-6 w-full sm:w-auto bg-white text-blue-700 hover:bg-blue-50 px-6 py-4 rounded-xl font-extrabold"
              onClick={goToLanguageSelector}
            >
              Choose Your Free Languages
            </button>

            <p className="trust-signal mt-4 text-blue-100 font-semibold">
              ✓ No credit card ✓ Cancel anytime ✓ Join 100+ learners
            </p>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-t border-gray-200 p-3">
        <button
          onClick={goToLanguageSelector}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-extrabold shadow-md"
        >
          Start Learning Free - No Credit Card Required
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="font-extrabold">TalkFlow</div>
          <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-700">
            <a className="hover:text-gray-900" href="#languages">About</a>
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
