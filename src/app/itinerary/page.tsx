"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

const ITINERARY_DATA = [
  ["Museum of Illusions", "International Spy Museum"],
  ["Escape Room Live - Alexandria", "The Capital Wheel"],
  ["Union Market", "Echostage: Crankdat w/ Jessica Audiffred & ALLEYCVT"],
  ["Roosevelt Island", "Washington Monument walk"],
];

export default function Itinerary() {
  // create scroll scrub animation for days
  // add cloud images
  // create scroll scrub animation for cloud images/
  // add mobile styles for clouds

  const page = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline();

      // clouds
      const clouds = gsap.utils.toArray(".cloud");
      const leftClouds = clouds.filter((_, i) => i % 2 === 0);
      const rightClouds = clouds.filter((_, i) => i % 2 !== 0);

      leftClouds.forEach((cloud) => {
        gsap.set(cloud as HTMLElement, { xPercent: gsap.utils.random(-50, 0) });
      });
      rightClouds.forEach((cloud) => {
        gsap.set(cloud as HTMLElement, { xPercent: gsap.utils.random(0, 50) });
      });

      clouds.forEach((cloud, i) => {
        tl.to(cloud as HTMLElement, {
          opacity: 0.75,
        });
        tl.from(cloud as HTMLElement, {
          y: gsap.utils.random(25, 200),
          scrollTrigger: {
            trigger: page.current,
            start: "top top",
            end: "bottom center",
            scrub: true,
          },
        });
      });

      // days
      const days = gsap.utils.toArray(".day");
      days.forEach((day, i) => {
        tl.from(day as HTMLElement, {
          yPercent: 100 * i,
          scrollTrigger: {
            trigger: page.current,
            start: "top top",
            end: "bottom center",
            scrub: true,
          },
        });
      });
    },
    { scope: page }
  );

  return (
    <div
      ref={page}
      className="relative max-w-screen py-24 bg-blue-400 overflow-hidden"
    >
      <h1 className="mb-12 text-center text-4xl font-bold underline">
        Itinerary
      </h1>
      {ITINERARY_DATA.map((day, i) => (
        <div key={`day-${i}`} className="day">
          <h2 className="w-[3ch] text-4xl  md:text-5xl">Day {i + 1}</h2>
          <div className="divider" />
          <ul className="basis-2/3">
            {day.map((activity, j) => (
              <li key={j} className="text-lg md:text-xl">
                {activity}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="h-[33vh]" />

      <Image
        src="/images/clouds/cloud2.svg"
        alt="cloud"
        width={400}
        height={200}
        className="cloud absolute top-1/4 -left-[50%] opacity-25 md:opacity-0 md:left-0"
      />
      <Image
        src="/images/clouds/cloud5.svg"
        alt="cloud"
        width={200}
        height={200}
        className="cloud absolute top-20 -right-[50%] opacity-25 md:opacity-0 md:right-0"
      />
      <Image
        src="/images/clouds/cloud4.svg"
        alt="cloud"
        width={200}
        height={200}
        className="cloud absolute top-2/3 -left-[50%] opacity-25 md:opacity-0 md:left-0"
      />
      <Image
        src="/images/clouds/cloud1.svg"
        alt="cloud"
        width={400}
        height={200}
        className="cloud absolute top-1/2 -right-[50%] opacity-25 md:opacity-0 md:right-0"
      />

      {/* cloud images */}
    </div>
  );
}
