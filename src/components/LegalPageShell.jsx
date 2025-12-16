export default function LegalPageShell({ title, children, onBackHome }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onBackHome}
            className="font-extrabold text-gray-900"
            aria-label="Back to TalkFlow"
          >
            TalkFlow
          </button>
          <button
            onClick={onBackHome}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Back
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-gray-900">{title}</h1>
        <div className="mt-6 prose prose-slate max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}
