import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-signal-50 text-signal-600 mb-5">
        <Compass size={26} />
      </span>
      <h1 className="font-display text-2xl font-bold text-ink-900">
        Page not found
      </h1>
      <p className="mt-2 max-w-sm text-[14px] leading-6 text-ink-600">
        That page doesn't exist in this guide. Try the search (⌘K) or head
        back to the introduction.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-ink-900 px-5 py-2.5 text-[13.5px] font-semibold text-white hover:bg-ink-800 transition-colors"
      >
        Back to Introduction
      </Link>
    </div>
  );
}
