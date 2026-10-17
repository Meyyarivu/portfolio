import Link from "next/link";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="glass-panel rounded-3xl p-8 text-center sm:p-12">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
      <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Interested in AI, machine learning, or building practical applications together? I&apos;d be glad to connect.</p>
      {DATA.contact.email ? <Link href={`mailto:${DATA.contact.email}`} className="mt-6 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">Email Meyyarivu</Link> : <p className="mt-6 text-sm text-muted-foreground">Add your email in <code>src/data/resume.tsx</code> to enable direct contact.</p>}
    </div>
  );
}

