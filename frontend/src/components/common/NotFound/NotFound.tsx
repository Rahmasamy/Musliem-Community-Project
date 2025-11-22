import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface NotFoundProps {
  /** Short title (default: "Not Found") */
  title?: string;
  /** Longer dynamic message to show to the user */
  message?: string;
  /** Label for primary CTA (default: "Go home") */
  ctaLabel?: string;
  /** Optional callback instead of link (e.g. history.back) */
  onCta?: () => void;
  /** Optional small secondary action */
  secondaryLabel?: string;
  secondaryOnClick?: () => void;
}

// A reusable, responsive "Not Found / Empty State" component with nice styling.
// Uses Tailwind for layout and framer-motion for a subtle entrance animation.
// Usage examples:
// <NotFound message="This course doesn't exist" />
// <NotFound title="No Results" message="We couldn't find matches for 'angular'" ctaLabel="Try again" onCta={() => retrySearch()} />

export default function NotFound({
  title = "Not Found",
  message = "Sorry — we couldn't find what you're looking for.",
  ctaLabel = "Go home",
  onCta,
  secondaryLabel,
  secondaryOnClick,
}: NotFoundProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-[60vh] flex items-center justify-center p-6 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-xl w-full text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-red-50 border border-red-100 rounded-full p-4">
            <svg
              className="w-16 h-16 text-red-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M11.25 7.5h1.5v6h-1.5v-6zM11.25 15.75h1.5v1.5h-1.5v-1.5z"
                fill="currentColor"
              />
              <path
                d="M12 2C6.476 2 2 6.477 2 12s4.476 10 10 10 10-4.477 10-10S17.524 2 12 2zm0 18.5A8.5 8.5 0 1 1 12 3.5a8.5 8.5 0 0 1 0 17z"
                fill="currentColor"
                opacity="0.16"
              />
            </svg>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">{title}</h1>

          <p className="text-gray-600 text-sm md:text-base">{message}</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full justify-center">
            {onCta ? (
              <button
                onClick={onCta}
                className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold shadow-md hover:brightness-95 transition"
              >
                {ctaLabel}
              </button>
            ) : (
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold shadow-md hover:brightness-95 transition"
              >
                {ctaLabel}
              </Link>
            )}

            {secondaryLabel && (
              <button
                onClick={secondaryOnClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
              >
                {secondaryLabel}
              </button>
            )}
          </div>

          <div className="mt-4 text-xs text-gray-400">If you think this is a bug, contact support.</div>
        </div>
      </div>
    </motion.div>
  );
}
