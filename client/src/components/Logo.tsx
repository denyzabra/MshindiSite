export default function Logo({ className = "text-2xl" }: { className?: string }) {
  return (
    <div className={`font-heading text-white ${className}`}>
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <span className="font-bold leading-tight tracking-tight">MSHINDI ENTERPRISES</span>
          <span className="text-xs font-normal opacity-90 italic">"Clearance made easier"</span>
        </div>
      </div>
    </div>
  );
}
