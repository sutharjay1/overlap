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

export const FEATURES: Features[] = [
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
