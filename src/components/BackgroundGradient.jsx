import React from "react";

const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base Layer – Deep black-blue base */}
      <div
        className="absolute w-[200%] h-[200%] blur-[120px] opacity-100"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #000000 0%, #000814 60%, #001233 100%)",
          animation: "move1 20s ease-in-out infinite alternate",
        }}
      ></div>

      {/* Layer 2 – Royal deep blue */}
      <div
        className="absolute w-[180%] h-[180%] blur-[100px] opacity-70"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, #001845 0%, transparent 70%)",
          animation: "move2 25s ease-in-out infinite alternate",
        }}
      ></div>

      {/* Layer 3 – Midnight blue pulse */}
      <div
        className="absolute w-[200%] h-[200%] blur-[130px] opacity-60"
        style={{
          background:
            "radial-gradient(circle at 60% 70%, #002855 0%, transparent 80%)",
          animation: "move3 30s ease-in-out infinite alternate",
        }}
      ></div>

      {/* Layer 4 – Subtle electric highlight */}
      <div
        className="absolute w-[220%] h-[220%] blur-[150px] opacity-40"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, #003566 0%, transparent 80%)",
          animation: "move4 35s ease-in-out infinite alternate",
        }}
      ></div>

      <style>{`
        @keyframes move1 {
          0% { transform: translate(-10%, -10%) scale(1.1); }
          100% { transform: translate(10%, 10%) scale(1.2); }
        }
        @keyframes move2 {
          0% { transform: translate(15%, -10%) scale(1); }
          100% { transform: translate(-15%, 10%) scale(1.25); }
        }
        @keyframes move3 {
          0% { transform: translate(-10%, 15%) scale(1.1); }
          100% { transform: translate(10%, -15%) scale(1.2); }
        }
        @keyframes move4 {
          0% { transform: translate(10%, 10%) scale(1.3); }
          100% { transform: translate(-10%, -10%) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default BackgroundGradient;
