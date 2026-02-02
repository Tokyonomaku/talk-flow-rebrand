function goToChooseLanguages() {
  try {
    window.history.pushState({}, '', '/choose-languages');
    window.dispatchEvent(new PopStateEvent('popstate'));
  } catch (_) {
    window.location.href = '/choose-languages';
  }
}

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900">
      <main className="mx-auto w-full px-5">
        <section className="min-h-[100svh] w-full flex items-center justify-center py-10">
          <div className="w-full max-w-[720px] text-center space-y-6">
            <h1 className="text-[36px] leading-[1.1] font-extrabold sm:text-[44px] md:text-[56px]">
              Learn a Language
            </h1>
            <button
              type="button"
              onClick={goToChooseLanguages}
              className="mx-auto w-full max-w-[420px] rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF4500] px-6 text-[16px] font-extrabold tracking-[-0.01em] text-white shadow-[0_18px_40px_rgba(255,69,0,0.22)] transition-transform active:translate-y-[1px] focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
              style={{ height: 52 }}
            >
              Start Free →
            </button>
            <p className="text-center text-[12px] font-semibold text-slate-500">
              No signup • No credit card • Free forever
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

