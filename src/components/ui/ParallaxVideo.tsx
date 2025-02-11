import { useEffect, useState, useRef } from "react";

interface ParallaxVideoProps {
  videoSrc: string;
}

const ParallaxVideo: React.FC<ParallaxVideoProps> = ({ videoSrc }) => {
  const [offset, setOffset] = useState<number>(0);
  const videoRef = useRef<HTMLDivElement>(null);
  const [videoStart, setVideoStart] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;

      const videoTop = videoRef.current.offsetTop; // Верхняя граница видео
      const scrollY = window.scrollY; // Текущая прокрутка страницы

      if (scrollY < videoTop) {
        // Если видео еще не достигнуто, фиксируем его
        setOffset(0);
        setVideoStart(null);
      } else {
        // Как только видео достигнуто, начинаем движение вниз
        if (videoStart === null) {
          setVideoStart(scrollY);
        }
        setOffset(scrollY - (videoStart ?? 0));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [videoStart]);

  return (
    <div ref={videoRef} className="relative h-[700px] w-full overflow-hidden">
      {/* Видео с движением через transform: translateY() */}
      {videoSrc && (
        <video
          className="absolute w-full h-full object-cover"
          style={{
            transform: `translateY(${offset}px)`,
            willChange: "transform",
          }}
          autoPlay
          muted
          loop
        >
          <source src={videoSrc} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      )}
    </div>
  );
};

export default ParallaxVideo;
