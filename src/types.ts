export interface Monument {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  coordinates: { x: number; y: number }; // Percentage coords for interactive map (relative to custom map art)
  timeline: string;
  category: "monument" | "natural" | "science" | "concept";
  imageUrl: string;
  description: string;
  detailedDescription: string;
  quote: string;
  quoteAuthor: string;
  interestingFacts: string[];
  statistics: { label: string; value: string; suffix?: string }[];
}

export interface TimelineEvent {
  id: string;
  era: string;
  period: string;
  dateRange: string;
  summary: string;
  details: {
    year: string;
    title: string;
    description: string;
  }[];
}

export interface Deity {
  id: string;
  name: string;
  title: string;
  role: string;
  symbol: string;
  imageUrl: string;
  description: string;
  interestingFacts: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface GuidedTour {
  id: string;
  title: string;
  narrator: string;
  duration: string;
  description: string;
  chapters: {
    title: string;
    text: string;
  }[];
}
