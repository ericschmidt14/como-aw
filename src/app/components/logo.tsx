import Image from "next/legacy/image";

export default function Logo() {
  return (
    <div className="py-4">
      <Image
        src="/logo_transparent.svg"
        width={48}
        height={48}
        alt="1. FCN Logo"
      />
    </div>
  );
}
