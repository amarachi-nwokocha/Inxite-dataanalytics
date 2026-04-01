import { BarChart3, PieChart, TrendingUp, Database, Zap, LineChart } from "lucide-react";

const FloatingElements = () => {
  const elements = [
    { icon: BarChart3, position: "top-[20%] left-[10%]", delay: "0s", size: "w-12 h-12" },
    { icon: PieChart, position: "top-[15%] right-[15%]", delay: "1s", size: "w-10 h-10" },
    { icon: TrendingUp, position: "bottom-[30%] left-[5%]", delay: "2s", size: "w-14 h-14" },
    { icon: Database, position: "bottom-[25%] right-[10%]", delay: "0.5s", size: "w-11 h-11" },
    { icon: Zap, position: "top-[40%] right-[5%]", delay: "1.5s", size: "w-9 h-9" },
    { icon: LineChart, position: "bottom-[40%] left-[15%]", delay: "2.5s", size: "w-10 h-10" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => {
        const Icon = element.icon;
        return (
          <div
            key={index}
            className={`absolute ${element.position} glass rounded-2xl p-4 animate-float opacity-60 hover:opacity-100 transition-opacity`}
            style={{ animationDelay: element.delay }}
          >
            <Icon className={`${element.size} text-primary`} />
          </div>
        );
      })}

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
    </div>
  );
};

export default FloatingElements;
