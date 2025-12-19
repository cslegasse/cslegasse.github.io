import experiences from "@/data/experiences.json";
import ExperienceClient from "@components/ExperienceClient";
import type { Experience } from "@/types/experiences";
import { notFound } from "next/navigation";

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
  const experience = experiences.find(
    (exp) => exp.slug === params.slug
  ) as Experience | undefined;

  if (!experience) {
    notFound();
  }

  return <ExperienceClient experience={experience} />;
}
