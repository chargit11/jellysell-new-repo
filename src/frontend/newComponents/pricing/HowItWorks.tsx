"use client";

export function HowItWorks() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600">Simple, transparent, and fair</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Connect & List",
              desc: "Connect your marketplace accounts and start listing products across all platforms.",
            },
            {
              step: "2",
              title: "Make Sales",
              desc: "When you make a sale, we automatically charge 2% of the transaction amount.",
            },
            {
              step: "3",
              title: "Hit the Cap",
              desc: "Once you've paid $40 in fees for the month, all additional sales are free!",
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">
                  {item.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
