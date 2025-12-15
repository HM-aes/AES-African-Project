"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export function AESAchievements() {
  const data = [
    {
      title: "Strategic Sovereignty",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base lg:text-lg font-normal mb-8">
            Taking destiny into their own hands, AES nations have forged new
            strategic partnerships and withdrawn from ECOWAS to pursue a path of
            true independence. This bold move asserts their right to
            self-determination and freedom from external influence.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/images/aes_sovereignty_partnership.png"
              alt="Strategic Sovereignty"
              width={800}
              height={500}
              className="rounded-lg object-cover h-40 md:h-72 lg:h-96 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "AES Joint Special Forces",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base lg:text-lg font-normal mb-8">
            The creation of a unified Joint Special Force represents a historic
            step in collective defense. Soldiers from Mali, Burkina Faso, and
            Niger now stand shoulder to shoulder, pooling resources and
            intelligence to secure the Sahel against regional threats.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/images/aes_joint_forces.png"
              alt="AES Joint Special Forces"
              width={800}
              height={500}
              className="rounded-lg object-cover h-40 md:h-72 lg:h-96 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Agricultural Revolution",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base lg:text-lg font-normal mb-8">
            A booming agricultural offensive is underway, particularly in
            Burkina Faso, driving towards food self-sufficiency. Through
            initiatives like APSA-Sahel and increased mechanization, the region
            is transforming its potential into prosperity.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/images/aes_agriculture_boom.png"
              alt="Agricultural Revolution"
              width={800}
              height={500}
              className="rounded-lg object-cover h-40 md:h-72 lg:h-96 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Infrastructure & Social Progress",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base lg:text-lg font-normal mb-8">
            Commitment to the people is visible through massive infrastructure
            projects, including the Niamey-Bamako highway, new university
            hospitals, and free university initiatives. These developments are
            laying the groundwork for a brighter, connected future.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/images/aes_infrastructure_social.png"
              alt="Infrastructure Development"
              width={800}
              height={500}
              className="rounded-lg object-cover h-40 md:h-72 lg:h-96 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
            <Image
              src="/aes/AES/aes-industrial.jpg"
              alt="Industrial Progress"
              width={800}
              height={500}
              className="rounded-lg object-cover h-40 md:h-72 lg:h-96 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}


