import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyGrantDialog } from "@/components/grants/ApplyGrantDialog";

const priorities = [
  ["Abuse detection", "Tools that identify coordinated harm and unsafe platform activity."],
  ["Anti-phishing", "Practical defenses for deceptive authentication and fraud."],
  ["Post-password authentication", "Usable alternatives that improve account security."],
  ["Privacy-preserving technology", "Methods that reduce data exposure and enable safe insight."],
  ["Emerging market safety", "Resilient systems designed for local constraints and communities."],
];

const checklist = ["Investigator Bio", "Statement of Research", "Practical Impact on End Users", "Open Source Deliverables", "Budget"];

const SecureTheInternet = () => {
  const [checked, setChecked] = useState<string[]>([]);
  return (
    <>
      <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge className="mb-5 bg-accent text-accent-foreground">Accepting Proposals</Badge>
          <h1 className="max-w-4xl font-serif text-4xl font-bold text-white md:text-6xl">Applied Tech & Security Grants</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">Up to $100,000 in unrestricted gifts, plus Summit and Black Hat-style presentation travel support.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button variant="hero" asChild><Link to="/eligibility">Check eligibility <ArrowRight /></Link></Button><ApplyGrantDialog grantName="Applied Tech & Security" variant="heroOutline" /></div>
        </div>
      </section>
      <section className="container-section">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Grant scope</p>
            <h2 className="section-header">Work that improves digital safety in practice.</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">We fund university researchers, faculty, non-profits, independent developers, and open-source teams with a disciplined, two-page proposal process. Grants are unrestricted and expected to produce reusable, open technical outcomes.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {priorities.map(([title, copy]) => (
                <Card key={title}><CardContent className="p-6"><ShieldCheck className="mb-4 h-6 w-6 text-accent" /><h3 className="font-semibold text-primary">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p></CardContent></Card>
              ))}
            </div>
          </div>
          <aside className="h-fit rounded-xl bg-secondary p-6">
            <h2 className="text-xl font-semibold text-primary">2-Page Proposal Guide</h2>
            <p className="mt-2 text-sm text-muted-foreground">Mark each required section as complete.</p>
            <div className="mt-5 space-y-2">
              {checklist.map((item) => {
                const isChecked = checked.includes(item);
                return <button key={item} onClick={() => setChecked((value) => isChecked ? value.filter((entry) => entry !== item) : [...value, item])} className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left text-sm transition-colors ${isChecked ? "border-accent bg-accent/10" : "border-border bg-background"}`}><span className={`flex h-5 w-5 items-center justify-center rounded border ${isChecked ? "border-accent bg-accent text-accent-foreground" : "border-border"}`}>{isChecked && <Check className="h-3 w-3" />}</span>{item}</button>;
              })}
            </div>
            <div className="mt-5 text-sm text-muted-foreground">{checked.length} of {checklist.length} sections ready</div>
            <Button className="mt-5 w-full" variant="outline" asChild><a href={`data:text/plain;charset=utf-8,${encodeURIComponent("Applied Tech & Security RFP — 2-page proposal checklist\\n\\n" + checklist.map((item) => `${checked.includes(item) ? "[x]" : "[ ]"} ${item}`).join("\\n"))}`} download="apex-security-rfp-checklist.txt"><Download /> Download RFP guidelines</a></Button>
          </aside>
        </div>
      </section>
    </>
  );
};

export default SecureTheInternet;
