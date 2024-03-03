"use client";

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

  
  
  return (
    <div className="relative w-screen py-24 bg-blue-400">
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
      {/* cloud images */}
    </div>
  );
}
