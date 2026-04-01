import {
  BarChart3,
  LineChart,
  PieChart,
  Activity,
  TrendingUp,
  Database,
  BarChartBig,
  ScatterChart,
} from "lucide-react";

export default function HeroDenseIcons() {
  return (
    <section className="relative bg-[#05254c] text-white overflow-hidden py-36 px-6 text-center">

      {/* Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#0dce99]/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative max-w-4xl mx-auto z-10">
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          Transform Your Data Into <br />
          <span className="bg-gradient-to-r from-[#0dce99] to-[#008dbb] bg-clip-text text-transparent">
            Strategic Decisions
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          We help businesses uncover insights, optimize performance, and make
          confident decisions through advanced data analytics.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-7 py-3 bg-[#0dce99] text-[#05254c] rounded-xl font-semibold">
            Work With Us
          </button>
          <button className="px-7 py-3 border border-white/30 rounded-xl">
            See Our Process
          </button>
        </div>
      </div>

      {/* ICON FIELD */}
      <div className="pointer-events-none">

        {/* FOREGROUND ICONS */}
        <div className="absolute top-[30%] left-[18%] bg-white/10 p-3 rounded-xl backdrop-blur">
          <BarChart3 className="text-[#0dce99]" size={22} />
        </div>

        <div className="absolute top-[28%] right-[18%] bg-white/10 p-3 rounded-xl backdrop-blur">
          <LineChart className="text-[#008dbb]" size={22} />
        </div>

        <div className="absolute bottom-[28%] left-[25%] bg-white/10 p-3 rounded-xl backdrop-blur">
          <PieChart className="text-[#0dce99]" size={22} />
        </div>

        <div className="absolute bottom-[26%] right-[25%] bg-white/10 p-3 rounded-xl backdrop-blur">
          <Activity className="text-[#008dbb]" size={22} />
        </div>

        {/* MID LAYER */}
        <div className="absolute top-[15%] left-[30%] opacity-70">
          <TrendingUp className="text-[#0dce99]" size={26} />
        </div>

        <div className="absolute top-[18%] right-[30%] opacity-70">
          <Database className="text-[#008dbb]" size={26} />
        </div>

        <div className="absolute bottom-[15%] left-[35%] opacity-70">
          <BarChartBig className="text-[#0dce99]" size={26} />
        </div>

        <div className="absolute bottom-[12%] right-[35%] opacity-70">
          <ScatterChart className="text-[#008dbb]" size={26} />
        </div>

        {/* BACKGROUND FAINT ICONS */}
        <div className="absolute top-[10%] left-[10%] opacity-20">
          <PieChart size={40} />
        </div>

        <div className="absolute top-[12%] right-[10%] opacity-20">
          <BarChart3 size={40} />
        </div>

        <div className="absolute bottom-[10%] left-[12%] opacity-20">
          <LineChart size={40} />
        </div>

        <div className="absolute bottom-[8%] right-[12%] opacity-20">
          <Activity size={40} />
        </div>

      </div>
    </section>
  );
}