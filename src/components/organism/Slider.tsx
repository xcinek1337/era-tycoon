import{ useEffect, useRef, useState } from "react";

const images = [
  {
    src: "/slide0.jpg",
    alt: "factory",
  },
  {
    src: "slide1.jpg",
    alt: "factory",
  },
  {
    src: "slide2.jpg",
    alt:  "factory",
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="overflow-hidden w-[130px] h-[100px] rounded-xl shadow-lg mx-auto">
      <div
        ref={trackRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 130}px)`,
          width: `${images.length * 130}px`,
        }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="w-[130px] h-[100px] object-cover shrink-0"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}
