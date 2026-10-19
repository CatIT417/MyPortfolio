export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`font-display select-none bg-gradient-to-r from-[#6366f1] to-[#c084fc] bg-clip-text font-extrabold text-transparent ${className}`}
    >
      CD
    </span>
  );
}
