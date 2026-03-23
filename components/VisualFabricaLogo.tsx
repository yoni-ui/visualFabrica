import Image from "next/image";

type Props = {
  className?: string;
  /** White logo on dark backgrounds (matches previous PNG invert treatment). */
  invertForDark?: boolean;
  priority?: boolean;
};

export function VisualFabricaLogo({
  className = "h-10 w-auto",
  invertForDark = false,
  priority = false,
}: Props) {
  return (
    <Image
      src="/visualfabrica-logo.svg"
      alt="VisualFabrica"
      width={1422}
      height={377}
      className={`${className} ${invertForDark ? "brightness-0 invert" : ""}`}
      priority={priority}
      unoptimized
    />
  );
}
