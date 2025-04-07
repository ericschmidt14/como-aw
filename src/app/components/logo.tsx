import Image from "next/legacy/image";

export default function Logo() {
  return (
    <Image
      src="/logo_transparent.svg"
      width={64}
      height={64}
      alt="1. FCN Logo"
    />
  );
}
