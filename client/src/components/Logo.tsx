import logoImage from "@assets/logo.png";

export default function Logo({ className = "h-12 md:h-14" }: { className?: string }) {
  return (
    <div className="flex items-center gap-3">
      <img 
        src={logoImage} 
        alt="MSHINDI ENTERPRISES LIMITED - Clearance made easier" 
        className={className}
      />
    </div>
  );
}
