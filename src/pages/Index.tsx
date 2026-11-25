import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Store, Globe2, LockKeyhole, BadgeCheck, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ApplyGrantDialog } from "@/components/grants/ApplyGrantDialog";
import heroImage from "@/assets/hero-ifc-banner.png";

const stats = [
  ["$120M+", "Total Capital Deployed"],
  ["420+", "Projects Funded"],
  ["38", "Countries Active"],
  ["100%", "Non-Dilutive"],
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true },
};

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroImageY, scale: heroScale }}>
          <img src={heroImage} alt="Global technology and community network" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
        </motion.div>
        <motion.div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8" style={{ opacity: heroOpacity }}>
          <motion.p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-accent" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Accelerating Applied Impact & Economic Resilience
          </motion.p>
          <motion.h1 className="max-w-4xl font-serif text-5xl font-bold leading-[1.05] text-white md:text-7xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            Funding Bold Technology and Resilient Enterprises Worldwide.
          </motion.h1>
          <motion.p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Deploying non-dilutive research grants, digital growth credits, and applied technology funding across 38+ countries.
          </motion.p>
          <motion.div className="mt-9 flex flex-col gap-4 sm:flex-row" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <Button variant="hero" size="xl" asChild><Link to="/programs">Explore Grant Programs <ArrowRight /></Link></Button>
            <Button variant="heroOutline" size="xl" asChild><Link to="/eligibility">Check Your Eligibility</Link></Button>
          </motion.div>
        </motion.div>
      </section>

      <section className="border-b border-border bg-background">
        <motion.div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border lg:grid-cols-4" variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          {stats.map(([value, label], index) => (
            <motion.div key={label} className="px-4 py-8 text-center md:py-10" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}>
              <p className="font-serif text-3xl font-bold text-primary md:text-4xl">{value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="container-section">
        <motion.div className="mb-12 max-w-3xl" {...fadeInUp}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Two tracks. One mandate.</p>
          <h2 className="section-header border-0 pb-0">Capital that strengthens people and systems.</h2>
        </motion.div>
        <motion.div className="grid gap-6 lg:grid-cols-2" variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          <motion.div {...fadeInUp}>
            <Card className="group h-full overflow-hidden border-primary/10 bg-primary text-white">
              <CardContent className="p-8 md:p-10">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground"><ShieldCheck className="h-7 w-7" /></div>
                <Badge className="mb-5 bg-white/10 text-white">Track 01 · Applied Research</Badge>
                <h3 className="font-serif text-3xl font-semibold">Applied Tech & Security</h3>
                <p className="mt-4 max-w-xl leading-relaxed text-white/75">$50k–$100k unrestricted gifts for researchers and open-source teams protecting people from abuse, fraud, and surveillance.</p>
                <div className="mt-8 flex flex-wrap gap-2 text-xs text-white/70"><span>Abuse detection</span><span>•</span><span>Anti-phishing</span><span>•</span><span>Post-password auth</span></div>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button variant="hero" asChild><Link to="/programs/secure-the-internet">Explore the RFP <ArrowRight /></Link></Button>
                  <ApplyGrantDialog grantName="Applied Tech & Security" variant="heroOutline" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div {...fadeInUp}>
            <Card className="group h-full overflow-hidden border-accent/30 bg-accent/10">
              <CardContent className="p-8 md:p-10">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white"><Store className="h-7 w-7" /></div>
                <Badge variant="outline" className="mb-5 border-primary/20">Track 02 · Economic Growth</Badge>
                <h3 className="font-serif text-3xl font-semibold text-primary">SMB Digital Boost</h3>
                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">$2k–$10k in direct cash relief paired with digital ad credits and guided account onboarding for local businesses.</p>
                <div className="mt-8 flex flex-wrap gap-2 text-xs text-primary"><span>Cash relief</span><span>•</span><span>Ad credits</span><span>•</span><span>Customer growth</span></div>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button variant="navy" asChild><Link to="/programs/smb-boost">View SMB Program <ArrowRight /></Link></Button>
                  <ApplyGrantDialog grantName="SMB Digital Boost" variant="outline" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-12 text-center" {...fadeInUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">The grant lifecycle</p>
            <h2 className="section-header inline-block border-0 pb-0">Rigorous review. Direct impact.</h2>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["01", "RFP Announcement", "Scope, eligibility, and priorities are published publicly."],
              ["02", "2-Page Pitch", "Teams submit a concise, evidence-led proposal."],
              ["03", "Peer Review", "Independent experts assess utility and rigor."],
              ["04", "Award & Summit", "Funding launches and recipients convene globally."],
            ].map(([number, title, copy], index) => (
              <motion.div key={title} {...fadeInUp} className="relative rounded-xl border border-border bg-background p-6">
                <span className="font-serif text-4xl font-bold text-accent/50">{number}</span>
                <h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                {index < 3 && <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-accent md:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-section">
        <motion.div className="mb-10 flex items-end justify-between" {...fadeInUp}>
          <div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Featured awardees</p><h2 className="section-header border-0 pb-0">Evidence in the field.</h2></div>
          <Button variant="outline" asChild><Link to="/impact">View all impact <ArrowRight /></Link></Button>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: LockKeyhole, tag: "Open source", title: "Anonymous Abuse Observatory", metric: "18M accounts protected", copy: "A cross-border abuse detection library for election workers and civil society." },
            { icon: Network, tag: "Cybersecurity", title: "Passkey Access Collective", metric: "42,000 logins secured", copy: "Post-password authentication research translated into practical local tools." },
            { icon: Globe2, tag: "Small business", title: "Coastline Market Network", metric: "310 jobs retained", copy: "A coordinated digital growth program for independent retailers in 12 markets." },
          ].map((item) => (
            <motion.div key={item.title} {...fadeInUp}>
              <Card className="h-full">
                <CardContent className="p-7">
                  <item.icon className="mb-6 h-8 w-8 text-accent" />
                  <Badge variant="secondary">{item.tag}</Badge>
                  <h3 className="mt-5 text-xl font-semibold text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm font-semibold text-accent">{item.metric}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section className="bg-primary py-16 text-white" {...fadeInUp}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground"><BadgeCheck /></div><h2 className="font-serif text-3xl font-bold">Governed for public trust.</h2><p className="mt-3 max-w-3xl text-white/70">Transparent selection, open-source expectations, and community privacy commitments guide every award.</p></div>
            <Button variant="hero" size="lg" asChild><Link to="/about">Our governance <ArrowRight /></Link></Button>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Index;
