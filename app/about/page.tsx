import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">About the Hub</h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          The Pan-African Hub is a digital platform dedicated to showcasing the
          achievements, culture, and future of the Alliance of Sahel States. We
          aim to provide an authentic narrative of the region's transformation
          and its journey towards unity and prosperity.
        </p>
        <div className="mt-12 p-8 bg-neutral-900 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-400">
            To educate, inspire, and connect people across the Sahel and the
            world, highlighting the resilience and potential of our nations.
          </p>
        </div>
      </div>
    </div>
  );
}
