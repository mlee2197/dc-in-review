"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const ITINERARY_DATA = [
  [
    { text: "Cafe Fili", url: "https://maps.app.goo.gl/seyqGo8U8zKRRMvX8" },
    "Museum of Illusions",
    "International Spy Museum",
    {
      text: "Stellina Pizzeria",
      url: "https://maps.app.goo.gl/kXygiqZZoyWqRrGQ8",
    },
  ],
  [
    {
      text: "Buffalo & Bergen",
      url: "https://maps.app.goo.gl/pYjC1RzX71rAPLqK6",
    },
    { text: "Sharetea", url: "https://maps.app.goo.gl/U6nAbCA12wsokZEQA" },
    "Escape Room Live - Alexandria",
    "The Capital Wheel",
    { text: "Urbano 116", url: "https://maps.app.goo.gl/3vQQid4L9VczXpib7" },
    {
      text: "Jeni's Splendid Ice Creams",
      url: "https://maps.app.goo.gl/kBGzwLobEjmCeoex5",
    },
  ],
  [
    "Union Market",
    { text: "Puddin'", url: "https://maps.app.goo.gl/Ceb2fYgLNdtUBM5e8" },
    { text: "Dan Dan Boy", url: "https://maps.app.goo.gl/g1QwpNMNsaXvRBtd6" },
    { text: "Spot of Tea", url: "https://maps.app.goo.gl/A8y2TFMyvpefAKya6" },
    {
      text: "Roaming Rooster",
      url: "https://maps.app.goo.gl/NrUN7vNDGHZeNVkH8",
    },
    "Echostage: Crankdat w/ Jessica Audiffred & ALLEYCVT",
  ],
  [
    "Roosevelt Island (cancelled)",
    "Washington Monument walk (cancelled)",
    {
      text: "The District Fishwife",
      url: "https://maps.app.goo.gl/iYjvbmPwYi987KmMA",
    },
    {
      text: "Buffalo & Bergen",
      url: "https://maps.app.goo.gl/7v69nGkB2vEDxH8F9",
    },
    {
      text: "South Block",
      url: "https://maps.app.goo.gl/JG19JXtZxqpswNxr9",
    },
    {
      text: "Pho 72",
      url: "https://maps.app.goo.gl/1vY6uQpMgvhedkf69",
    },
  ],
];

export default function Itinerary() {
  const page = useRef(null);
  const router = useRouter();

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
                {typeof activity === "string" ? (
                  activity
                ) : (
                  <a
                    href={activity.url}
                    target="_blank"
                    rel="noopenner noreferrer"
                  >
                    {activity.text}
                  </a>
                )}
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
        onClick={() => {
          router.push("/snapshots");
        }}
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
