'use client';
import React from "react";
import Register from "@/components/Register/Register";

export default function Page() {
  return (
    <div className="pt-[12vh] min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-start justify-center p-4">
      <div className="w-full max-w-6xl overflow-hidden rounded-2xl shadow-xl grid grid-cols-1 lg:grid-cols-2 lg:gap-0">
        {/* Left: Register form */}
        <div className="flex items-center justify-center p-6 lg:p-12 bg-white">
          <Register />
        </div>

        {/* Right: Illustration (same size and flush with form) */}
        <div className="hidden lg:block">
          <img
            src="/images/hero-image.png"
            alt="Illustration"
            className="w-full h-full object-cover block"
            style={{ minHeight: 520 }} // ajusta si necesitas otra altura
          />
        </div>
      </div>
    </div>
  );
}