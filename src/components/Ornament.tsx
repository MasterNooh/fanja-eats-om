const Ornament = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
    <span className="h-px w-12 bg-brass/60" />
    <svg width="22" height="22" viewBox="0 0 22 22" className="text-brass">
      <path
        d="M11 1 L13 9 L21 11 L13 13 L11 21 L9 13 L1 11 L9 9 Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
    <span className="h-px w-12 bg-brass/60" />
  </div>
);

export default Ornament;
