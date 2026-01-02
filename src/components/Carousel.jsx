import { useEffect, useState, useRef } from "react";

const images = [
  "/B.png",
  "/Ak.jpg",
  "/B.png",
  "/Ak.jpg",
  "/B.png",
  "/Ak.jpg",
];

export default function Carousel() {
  const visible = 3;
  const total = images.length;

  const sliderImages = [
    ...images.slice(-visible),
    ...images,
    ...images.slice(0, visible),
  ];

  const [index, setIndex] = useState(visible);
  const [transition, setTransition] = useState(true);
  const sliderRef = useRef(null);

  // 🔁 Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // 🔁 Infinite loop fix (NO JUMP)
  useEffect(() => {
    if (index === total + visible) {
      setTimeout(() => {
        setTransition(false);
        setIndex(visible);
      }, 500);
    }

    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(total);
      }, 500);
    }
  }, [index, total, visible]);

  // re-enable transition
  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => {
        setTransition(true);
      });
    }
  }, [transition]);

  return (
    <div className="relative w-full overflow-hidden mt-4">
      <div
        ref={sliderRef}
        className={`flex ${
          transition ? "transition-transform duration-500 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${index * (150 / visible)}%)`,
        }}
      >
        {sliderImages.map((img, i) => (
          <div
            key={i}
            className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
          >
            <div className="h-[220px] md:h-[260px] lg:h-[300px] rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* ⬅ Back */}
      <button
        onClick={() => setIndex((prev) => prev - 1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow w-10 h-10 rounded-full"
      >
        ‹
      </button>

      {/* ➡ Forward */}
      <button
        onClick={() => setIndex((prev) => prev + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow w-10 h-10 rounded-full"
      >
        ›
      </button>
    </div>
  );
}