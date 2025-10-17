import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, GraduationCap, Mic, ChevronLeft, ChevronRight } from "lucide-react";

const achievements = [
  {
    category: "Communication",
    title: "Best Presenter – TechFest 2024",
    description: "Recognized for exceptional presentation skills and ability to explain complex technical concepts",
    icon: Mic
  },
  {
    category: "Academic",
    title: "Bronze Medal – National Science Olympiad",
    description: "Awarded for outstanding performance in competitive scientific assessment",
    icon: GraduationCap
  },
  {
    category: "Co-curricular",
    title: "Featured on National Television",
    description: "Classical dance performance broadcast on national television network",
    icon: Trophy
  }
];

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Academic", "Co-curricular", "Communication"];
  
  const filteredAchievements = filter === "All" 
    ? achievements 
    : achievements.filter(a => a.category === filter);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredAchievements.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredAchievements.length) % filteredAchievements.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-subtle" id="achievements">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Achievements & Recognition
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Excellence across academics, communication, and creativity
        </p>

        {/* Category Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => {
                setFilter(cat);
                setCurrentIndex(0);
              }}
              className={filter === cat ? "bg-gradient-primary shadow-elegant" : ""}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <Card className="p-10 shadow-elegant bg-gradient-card border-0 min-h-[300px] flex items-center">
            {filteredAchievements.length > 0 ? (
              <div className="text-center space-y-6 w-full">
                <div className="bg-gradient-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-glow">
                  {(() => {
                    const IconComponent = filteredAchievements[currentIndex].icon;
                    return <IconComponent className="h-10 w-10 text-primary-foreground" />;
                  })()}
                </div>
                
                <div className="inline-block bg-secondary/50 px-4 py-1 rounded-full">
                  <span className="text-sm font-medium text-secondary-foreground">
                    {filteredAchievements[currentIndex].category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-card-foreground">
                  {filteredAchievements[currentIndex].title}
                </h3>

                <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                  {filteredAchievements[currentIndex].description}
                </p>

                <div className="flex justify-center gap-2 pt-4">
                  {filteredAchievements.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex 
                          ? 'bg-primary w-8' 
                          : 'bg-border hover:bg-primary/50'
                      }`}
                      aria-label={`Go to achievement ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-center text-muted-foreground">No achievements in this category</p>
            )}
          </Card>

          {filteredAchievements.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 rounded-full border-primary hover:bg-primary/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 rounded-full border-primary hover:bg-primary/10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
