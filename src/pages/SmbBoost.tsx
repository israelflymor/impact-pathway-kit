import { Link } from "react-router-dom";
import { ArrowRight, BadgeDollarSign, Megaphone, UserCheck, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyGrantDialog } from "@/components/grants/ApplyGrantDialog";

const onboarding = [
  { icon: UserCheck, title: "Set up your ad account", copy: "Create a verified business account and confirm operating location, category, and ownership." },
  { icon: BadgeDollarSign, title: "Redeem grant vouchers", copy: "Link eligible payment details and apply the awarded digital advertising credit." },
  { icon: Rocket, title: "Launch targeted campaigns", copy: "Define a local audience, budget, measurable conversion goal, and community-safe campaign." },
];

const SmbBoost = () => (
  <>
    <section className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Badge className="mb-5 bg-accent text-accent-foreground">Rolling admission</Badge>
        <h1 className="max-w-4xl font-serif text-4xl font-bold text-white md:text-6xl">SMB Digital Boost</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/75">Direct cash relief paired with digital advertising credits and practical onboarding for resilient local customer pipelines.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button variant="hero" asChild><Link to="/eligibility">Check qualification <ArrowRight /></Link></Button><ApplyGrantDialog grantName="SMB Digital Boost" variant="heroOutline" /></div>
      </div>
    </section>
    <section className="container-section">
      <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Program overview</p>
          <h2 className="section-header">Cash, credits, and capability.</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">Eligible local businesses receive $2,000–$10,000 in direct support alongside digital advertising credits and guided account setup. The program prioritizes customer reach, operational continuity, and measurable local results.</p>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {onboarding.map((step, index) => (
              <Card key={step.title}><CardContent className="p-6"><step.icon className="h-7 w-7 text-accent" /><p className="mt-5 text-xs font-semibold text-accent">Step {index + 1}</p><h3 className="mt-2 font-semibold text-primary">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.copy}</p></CardContent></Card>
            ))}
          </div>
        </div>
        <aside className="h-fit rounded-xl border border-border p-6">
          <h2 className="text-xl font-semibold text-primary">Qualification checklist</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {["Locally operated small business", "Established digital presence or readiness", "Clear 90-day customer growth goal", "Ability to receive grant and ad credits"].map((item) => <li key={item} className="flex gap-3"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />{item}</li>)}
          </ul>
          <div className="mt-6 border-t border-border pt-5">
            <Megaphone className="mb-3 h-6 w-6 text-accent" />
            <h3 className="font-semibold">Need broader relief?</h3>
            <Button className="mt-4 w-full" variant="outline" asChild><a href="https://www.sba.gov/funding-programs" target="_blank" rel="noreferrer">Explore SBA relief <ArrowRight /></a></Button>
          </div>
        </aside>
      </div>
    </section>
  </>
);

export default SmbBoost;
