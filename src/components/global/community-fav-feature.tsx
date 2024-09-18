"use client";
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

type Features = {
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

const FeatureCard = ({
  title,
  subtitle,
  inViewMargin,
  up,
}: FeatureItemProps) => {
  return (
    <Motion className="mb-8 w-full" inView inViewMargin={inViewMargin}>
      <div className="mx-auto w-full p-6">
        <h3 className="mb-2 w-full text-center text-5xl font-bold text-purple-600">
          {title}
        </h3>
        <p className="text-center text-3xl text-gray-700">{subtitle}</p>
      </div>
    </Motion>
  );
};

const App = () => {
  const features: Features[] = [
    {
      title: "Millions of podcasts",
      subtitle: "on topics for everyone.",
      up: 40,
      inViewMargin: {
        top: 0,
        right: 0,
        bottom: -220,
        left: 0,
      },
    },
    {
      title: "Personalized discovery",
      subtitle: "with easy ways to search.",
      up: 30,
      inViewMargin: {
        top: 0,
        right: 0,
        bottom: -280,
        left: 0,
      },
    },
    {
      title: "Powerful playback controls",
      subtitle: "to customize your listening.",
      up: 20,
      inViewMargin: {
        top: 0,
        right: 0,
        bottom: -300,
        left: 0,
      },
    },
  ];

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          🔥 Community Favorite Features
        </h2>
        <div className="mx-auto max-w-2xl">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
