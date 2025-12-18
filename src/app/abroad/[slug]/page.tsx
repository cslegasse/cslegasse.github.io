import experiences from "@/data/experiences.json";
import ExperienceDetailClient from "@components/ExperienceClient";
import { Experience } from "@/styles/experiences";

export async function generateStaticParams() {
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const experience = (experiences as Experience[]).find(
    (exp) => exp.slug === params.slug
  );

  if (!experience) {
    return null;
  }

  return <ExperienceDetailClient experience={experience} />;
}
