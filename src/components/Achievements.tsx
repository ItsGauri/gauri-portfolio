import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Achievements carousel (image-only, no filters)
 * Images must be placed in /public as:
 *   - /trophies.jpg
 *   - /medals.jpg
 * (Add more images to the array below if needed)
 */

const slides = [
  { src: "/trophies.jpg", alt: "Trophies and awards collection", caption: "Recognition across academics, leadership and culture" },
  { src: "/medals.jpg", alt: "Medals closeup", caption: "Medals for excellence in science, performance & public speaking" },
  // Add more: { src: "/achievements/another.jpg", alt: "Alt text", caption: "Short caption" }
];

const Achievements = () => {
  const [index, setIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Achievements & Recognition
        </h2>

        <p className="text-center text-muted-foreground mb-10 text-lg max-w-2xl mx-auto">
          Recognition for excellence across academics, communication, and performance — awarded for technical achievement,
          public speaking, and cultural leadership.
        </p>

        <div className="relative max-w-3xl mx-auto">
          <Card className="p-6 md:p-10 shadow-elegant bg-gradient-card border-0 min-h-[360px] flex items-center justify-center">
            <div className="w-full flex flex-col items-center">
              <div className="w-full flex items-center justify-center">
                <img
                  src={slides[index].src}
                  alt={slides[index].alt}
                  className="max-h-[420px] w-auto object-contain rounded-lg shadow-xl"
                />
              </div>

              <div className="mt-6 text-lg text-card-foreground font-semibold text-center">
                {slides[index].caption}
              </div>

              {/* dots */}
              <div className="flex items-center justify-center gap-3 mt-4">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === index ? "bg-primary w-8" : "bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </Card>

          {/* Prev / Next */}
          {slides.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                onClick={goPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 rounded-full border-primary hover:bg-primary/10"
                aria-label="Previous achievement"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={goNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 rounded-full border-primary hover:bg-primary/10"
                aria-label="Next achievement"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
