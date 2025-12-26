import React from "react";

export default function RussiaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-red-500">
          Strategic Partnership with Russia
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          The AES nations have cultivated a strong strategic partnership with
          Russia, focusing on military cooperation, economic development, and
          energy independence. This alliance provides a counterbalance to
          traditional Western influence and supports the Sahel's quest for true
          sovereignty.
        </p>
        <div className="space-y-8 mt-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">
              Military Cooperation
            </h2>
            <p className="text-gray-400">
              Russia provides critical support in training, equipment, and
              intelligence sharing to help AES nations combat terrorism and
              secure their borders.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Economic Ties
            </h2>
            <p className="text-gray-400">
              Growing trade relations in sectors such as agriculture, mining,
              and energy infrastructure are strengthening the economic resilience
              of the Sahel.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-500">
              Energy Independence
            </h2>
            <p className="text-gray-400">
              Collaboration on nuclear energy and other power projects aims to
              solve the region's energy crisis and power industrial growth.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
