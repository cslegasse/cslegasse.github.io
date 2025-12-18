"use client";
import dynamic from "next/dynamic";
const Inline = dynamic(() => import("@components/Inline"), { ssr: false });

export default function BackgroundLayer() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Inline/>
    </div>
  );
}
