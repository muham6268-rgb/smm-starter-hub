"use client";

import { useEffect, useState } from "react";

function Counter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += Math.ceil(target / 50);

      if (start >= target) {
        start = target;
        clearInterval(interval);
      }

      setCount(start);
    }, 30);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Results() {
  const stats = [
    {
      value: 387,
      suffix: "%",
      title: "Engagement",
      desc: "Ko'proq auditoriya",
    },
    {
      value: 214,
      suffix: "%",
      title: "Reach",
      desc: "Kengroq qamrov",
    },
    {
      value: 152,
      suffix: "+",
      title: "Yangi mijozlar",
      desc: "O'rtacha natija",
    },
    {
      value: 92,
      suffix: "%",
      title: "Vaqt tejaladi",
      desc: "Avtomatlashtirish",
    },
  ];

  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[1000px] h-[500px] bg-violet-600/10 blur-[180px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="text-violet-400 tracking-[0.4em] uppercase mb-5">
            REAL RESULTS
          </p>

          <h2 className="text-6xl font-bold text-white mb-6">
            Natijalar o'zlari gapiradi
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            AI yordamida kontent yaratish nafaqat tez,
            balki biznes natijalarini ham oshiradi.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.title}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              hover:border-violet-500/40
              transition-all
              duration-500
              "
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-violet-500/10 to-transparent" />

              <div className="relative">

                <div className="text-5xl font-black text-white mb-4">
                  <Counter
                    target={item.value}
                    suffix={item.suffix}
                  />
                </div>

                <h3 className="text-xl text-white font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-zinc-400">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}