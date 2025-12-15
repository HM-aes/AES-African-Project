import React from "react";

export default function AESPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
          Alliance of Sahel States (AES)
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          The Alliance of Sahel States (AES) is a confederation formed by Mali,
          Burkina Faso, and Niger. Established to foster mutual defense and
          economic cooperation, the AES represents a bold step towards regional
          sovereignty and self-determination.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Mali</h3>
            <p className="text-gray-400">
              A key pillar of the alliance, leading efforts in security and
              political independence.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-red-500">
              Burkina Faso
            </h3>
            <p className="text-gray-400">
              Driving the agricultural revolution and food sovereignty
              initiatives.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Niger</h3>
            <p className="text-gray-400">
              Strategic partner in defense and resource management for the
              Sahel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
