"use client";
import { FEATURES } from "@/lib/constant";
import { Motion } from "./motion";

type FeatureItemProps = {
  title: string;
  subtitle: string;
  up?: number;
  inViewMargin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
};

const FeatureCard = ({ title, subtitle, inViewMargin }: FeatureItemProps) => {
  return (
    <Motion className="mb-8 w-full" inView inViewMargin={inViewMargin}>
      <div className="mx-auto w-full p-6">
        <h3 className="mb-2 w-full text-balance text-center text-4xl font-bold text-[#ff5500]/85 md:text-5xl">
          {title}
        </h3>
        <p className="text-center text-3xl text-gray-700">{subtitle}</p>
      </div>
    </Motion>
  );
};

const App = () => {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          🔥 Community Favorite Features
        </h2>
        <div className="mx-auto max-w-2xl">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
