export type Experience = {
  country: string;
  city: string;
  latitude: number;
  longitude: number;
  image: string;
  title: string;
  slug: string;
  date: string;
  duration: string;
  description: string;
  essay: string;
  learnings: string[];
  highlights: string[];
  photos: {
    url: string;
    caption?: string;
  }[];
};
