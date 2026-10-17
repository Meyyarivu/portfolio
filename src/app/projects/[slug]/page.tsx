import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { PROJECTS, getProject } from "@/data/projects";
import { PROFILE } from "@/data/resume";

export function generateStaticParams() {
  return PROJECTS.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = getProject(slug);
    return project ? { title: project.title, description: project.description } : { title: "Project not found" };
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return <main className="mx-auto max-w-3xl py-6 sm:py-12">
    <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><ArrowLeft size={15} /> Back to projects</Link>
    <header className="mt-10 border-b border-border/70 pb-9">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">Project overview</p>
      {project.status && <span className="mt-3 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">{project.status}</span>}
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Live Demo <ArrowUpRight size={15} aria-hidden="true" /></a>}
        {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Github size={15} aria-hidden="true" /> GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>}
        {project.sourceUrlPlaceholder && <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-4 text-sm text-muted-foreground"><Github size={15} aria-hidden="true" /> {project.sourceUrlPlaceholder}</span>}
      </div>
    </header>

    {project.image && <img src={project.image} alt={`${project.title} screenshot`} className="mt-8 w-full rounded-3xl border border-border object-cover" />}

    {!project.placeholder && <div className="grid gap-10 py-9">
      {project.overview && <DetailSection title="Overview"><p>{project.overview}</p></DetailSection>}
      {project.problem && <DetailSection title="Problem"><p>{project.problem}</p></DetailSection>}
      {project.solution && <DetailSection title="Solution"><p>{project.solution}</p></DetailSection>}
      {project.workflow && <DetailSection title="Architecture & workflow"><ol className="list-inside list-decimal space-y-2">{project.workflow.map((step) => <li key={step}>{step}</li>)}</ol></DetailSection>}
      {project.features && <DetailSection title="Key features"><ul className="list-inside list-disc space-y-2">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></DetailSection>}
      {project.technologies.length > 0 && <DetailSection title="Technologies"><div className="flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-xs">{technology}</span>)}</div></DetailSection>}
      {project.learnings && <DetailSection title="Challenges & learnings"><p>{project.learnings}</p></DetailSection>}
    </div>}
    <div className="border-t border-border/70 pt-6"><Link href="/#projects" className="text-sm text-muted-foreground hover:text-foreground">← More projects by {PROFILE.name}</Link></div>
  </main>;
}

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2 className="text-lg font-semibold tracking-tight">{title}</h2><div className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">{children}</div></section>;
}
