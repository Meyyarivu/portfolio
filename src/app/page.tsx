import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProfilePortrait } from "@/components/profile-portrait";
import { PROFILE, SKILL_GROUPS } from "@/data/resume";
import { PROJECTS } from "@/data/projects";

const fade = 0.05;

export default function HomePage() {
  return (
    <main className="flex flex-col gap-20 sm:gap-28">
      <section id="home" className="scroll-mt-20 pt-6 sm:pt-12">
        <BlurFade>
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-7 sm:p-10 md:p-12">
            <div className="absolute -right-16 -top-20 size-64 rounded-full bg-blue-500/10 blur-3xl" aria-hidden />
            <ProfilePortrait />
            <div className="relative max-w-3xl md:pr-20">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
                <span className="size-1.5 rounded-full bg-blue-500" /> Open to learning and building
              </div>
              <p className="mb-4 text-sm font-medium text-muted-foreground">Hi, I&apos;m {PROFILE.name}</p>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.045em] sm:text-6xl sm:leading-[1.04]">{PROFILE.headline}</h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{PROFILE.description}</p>
              <p className="mt-5 text-sm font-medium text-blue-600 dark:text-blue-400">{PROFILE.title}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#projects" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">View My Projects <ArrowDown size={16} /></Link>
                {PROFILE.links.resume ? <a href={PROFILE.links.resume} download className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background/60 px-5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Download size={16} /> Download Resume</a> : <span aria-disabled="true" title="Add your resume file path in src/data/resume.tsx" className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-full border border-border bg-background/40 px-5 text-sm font-medium text-muted-foreground/70"><Download size={16} /> Download Resume <span className="text-xs">(add file path)</span></span>}
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
                <a className="inline-flex items-center gap-2 rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" href={PROFILE.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
                <a className="inline-flex items-center gap-2 rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" href={PROFILE.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin size={16} aria-hidden="true" /> LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
                <a className="inline-flex items-center gap-2 rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" href={`mailto:${PROFILE.links.email}`} aria-label={`Email Meyyarivu at ${PROFILE.links.email}`}><Mail size={16} aria-hidden="true" /> Email Me</a>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      <section id="about" className="scroll-mt-24">
        <SectionHeading eyebrow="A little about me" title="Curious by nature. Practical by design." />
        <BlurFade delay={fade}>
          <div className="glass-panel mt-7 rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4"><div className="mt-1 rounded-2xl border border-blue-500/15 bg-blue-500/5 p-3 text-blue-600 dark:text-blue-400"><BrainCircuit size={22} /></div><p className="max-w-3xl text-base leading-8 text-muted-foreground">{PROFILE.summary}</p></div>
              <a href={PROFILE.links.resume} download className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-border bg-background/60 px-5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:self-center"><Download size={16} aria-hidden="true" /> Download Resume</a>
            </div>
          </div>
        </BlurFade>
      </section>

      <section id="skills" className="scroll-mt-24">
        <SectionHeading eyebrow="Tools I work with" title="Skills & technologies" />
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, index) => <BlurFade key={group.title} delay={fade * index} className={index === SKILL_GROUPS.length - 1 ? "sm:col-span-2" : ""}>
            <div className="glass-panel h-full rounded-3xl p-5 sm:p-6"><h3 className="text-sm font-semibold">{group.title}</h3><div className="mt-4 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-xs text-muted-foreground">{skill}</span>)}</div></div>
          </BlurFade>)}
        </div>
      </section>

      <section id="projects" className="scroll-mt-24">
        <SectionHeading eyebrow="Selected work" title="Projects built to learn by doing." description="A selection of AI and software projects focused on practical problems and useful applications." />
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((project, index) => <BlurFade key={project.slug} delay={fade * index}>
            <article className="glass-panel group flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-950/5 sm:p-7">
              <div className="mb-6 flex items-center justify-between"><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span><span className="rounded-full border border-border/70 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">{project.status ?? (project.placeholder ? "Details pending" : "AI / ML")}</span></div>
              <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">{project.technologies.length ? project.technologies.map((tech) => <span key={tech} className="rounded-full bg-muted/70 px-2.5 py-1 text-[11px] text-muted-foreground">{tech}</span>) : <span className="text-xs text-muted-foreground">Technology tags pending source review.</span>}</div>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <Link href={`/projects/${project.slug}`} className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-border px-3.5 text-xs font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Details <ArrowRight size={13} /></Link>
                {project.sourceUrl ? <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`} className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-foreground px-3.5 text-xs font-medium text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"><Github size={14} aria-hidden="true" /> GitHub <ExternalLink size={12} aria-hidden="true" /></a> : <span aria-disabled="true" title={project.sourceUrlPlaceholder} className="inline-flex min-h-9 cursor-not-allowed items-center gap-1.5 rounded-full border border-border px-3.5 text-xs text-muted-foreground"><Github size={14} aria-hidden="true" /> GitHub · URL pending</span>}
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-border px-3.5 text-xs font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><ExternalLink size={13} aria-hidden="true" /> Live Demo</a>}
              </div>
            </article>
          </BlurFade>)}
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 pb-10">
        <SectionHeading eyebrow="Let’s connect" title="Have an interesting problem in mind?" description="I’m always interested in learning, collaborating, and building useful things with AI." />
        <BlurFade delay={fade}>
          <div className="glass-panel mt-7 flex flex-col items-start justify-between gap-5 rounded-3xl p-6 sm:flex-row sm:items-center sm:p-8">
            <div><h3 className="font-semibold">Start a conversation</h3><a href={`mailto:${PROFILE.links.email}`} className="mt-1 inline-block rounded-sm text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{PROFILE.links.email}</a></div>
            <div className="flex flex-wrap gap-2">
              <a href={PROFILE.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Github size={15} aria-hidden="true" /> GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href={PROFILE.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Linkedin size={15} aria-hidden="true" /> LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href={`mailto:${PROFILE.links.email}`} aria-label={`Email Meyyarivu at ${PROFILE.links.email}`} className="inline-flex min-h-10 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"><Mail size={15} aria-hidden="true" /> Email Me</a>
            </div>
          </div>
        </BlurFade>
        <footer className="mt-12 flex flex-col gap-4 border-t border-border/70 pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {PROFILE.name}. Built with care.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href={`mailto:${PROFILE.links.email}`} className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label={`Email Meyyarivu at ${PROFILE.links.email}`}>{PROFILE.links.email}</a>
            <a href={PROFILE.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="inline-flex items-center gap-1.5 rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Github size={14} aria-hidden="true" /> GitHub <ArrowUpRight size={12} aria-hidden="true" /></a>
            <a href={PROFILE.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="inline-flex items-center gap-1.5 rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Linkedin size={14} aria-hidden="true" /> LinkedIn <ArrowUpRight size={12} aria-hidden="true" /></a>
          </div>
        </footer>
      </section>
    </main>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <BlurFade><p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">{eyebrow}</p><h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>{description && <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p>}</BlurFade>;
}
