"use client";

import Image from "next/image";
import { homepageData } from "@/frontend/home/domain/homepagedata";

export function DashboardPreview() {
  const { title, subtitle, image } = homepageData.dashboard;

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl  font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div className="relative">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-full h-auto rounded-lg shadow-2xl"
            style={{ backgroundColor: "transparent" }}
          />
        </div>
      </div>
    </section>
  );
}
