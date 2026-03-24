import Image from "next/image";

type Props = {
  className?: string;
  /** White logo on dark backgrounds (matches previous PNG invert treatment). */
  invertForDark?: boolean;
  priority?: boolean;
};

export function VisualFabricaLogo({
  className = "h-11 w-auto min-w-[132px] shrink-0 md:min-w-[152px]",
  invertForDark = false,
  priority = false,
}: Props) {
  return (
    <Image
      src="/visualfabrica-logo.svg"
      alt="VisualFabrica"
      width={1422}
      height={377}
      sizes="(max-width: 768px) 152px, 180px"
      className={`${className} ${invertForDark ? "brightness-0 invert" : ""}`}
      priority={priority}
      unoptimized
    />
  );
}
