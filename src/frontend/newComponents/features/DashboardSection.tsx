"use client";

import Image from "next/image";

export function DashboardSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See it in action
          </h2>
          <p className="text-xl text-gray-600">
            Get a glimpse of our intuitive dashboard that makes crosslisting
            effortless
          </p>
        </div>

        <div className="relative">
          <Image
            src="/images/jellysell-comprehensive-dashboard.png"
            alt="JellySell® comprehensive dashboard showing listings management, unified messaging inbox, analytics dashboard, and platform integrations in one seamless interface"
            width={1400}
            height={900}
            className="w-full h-auto rounded-lg shadow-2xl"
            style={{ backgroundColor: "transparent" }}
          />
        </div>
      </div>
    </section>
  );
}
