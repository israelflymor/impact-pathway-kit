import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, ClipboardCheck, Copy, Download, Globe2,
  Building2, Target, CircleDollarSign, CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  evaluateGrantEligibility,
  type ApplicantType,
  type GrantObjective,
  type FundingTier,
} from "@/lib/eligibilityRules";

const steps = [
  { title: "Operating Country", prompt: "Where will the project operate?", Icon: Globe2 },
  { title: "Organization", prompt: "What describes your organization?", Icon: Building2 },
  { title: "Objective", prompt: "What is your primary objective?", Icon: Target },
  { title: "Funding Need", prompt: "What grant tier do you need?", Icon: CircleDollarSign },
];

const Eligibility = () => {
  const [step, setStep] = useState(0);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [applicantType, setApplicantType] = useState<ApplicantType | "">("");
  const [objective, setObjective] = useState<GrantObjective | "">("");
  const [fundingTier, setFundingTier] = useState<FundingTier | "">("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(false);
  const [briefGenerated, setBriefGenerated] = useState(false);

  const evaluation = evaluateGrantEligibility({
    country,
    region,
    applicantType: applicantType as ApplicantType,
    objective: objective as GrantObjective,
    fundingTier: fundingTier as FundingTier,
  });

  const brief = [
    "APEX GRANTS — ELIGIBILITY BRIEF",
    "",
    `Operating country: ${country}`,
    `Region: ${region}`,
    `Organization: ${applicantType}`,
    `Objective: ${objective}`,
    `Funding need: ${fundingTier}`,
    `Recommended track: ${evaluation.recommendedTrack}`,
    "",
    evaluation.summary,
  ].join("\n");

  const validate = () => {
    if (step === 0 && (!country.trim() || !region)) return "Enter a country and select a region.";
    if (step === 1 && !applicantType) return "Choose an organization type.";
    if (step === 2 && !objective) return "Choose a primary objective.";
    if (step === 3 && !fundingTier) return "Choose a funding tier.";
    return "";
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const nextError = validate();
    if (nextError) return setError(nextError);
    setError("");
    if (step < 3) setStep((value) => value + 1);
    else setResult(true);
  };

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(brief);
      toast.success("Eligibility brief copied.");
    } catch {
      toast.error("Could not copy. Download the brief instead.");
    }
  };

  const reset = () => {
    setStep(0);
    setResult(false);
    setBriefGenerated(false);
  };

  const ActiveIcon = steps[step].Icon;

  return (
    <>
      <section className="bg-primary py-14 md:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">Initial grant screen</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Find your grant track</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">Four focused questions connect your work to the right Apex funding program.</p>
        </div>
      </section>

      <section className="bg-secondary py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl border border-border bg-background p-5 shadow-card sm:p-9">
            <div className="mb-7">
              <div className="mb-3 flex justify-between text-sm">
                <strong>Step {step + 1} of 4</strong>
                <span className="text-muted-foreground">{steps[step].title}</span>
              </div>
              <Progress value={((step + 1) / 4) * 100} />
              <ol className="mt-4 grid grid-cols-4 gap-2 text-xs text-muted-foreground">
                {steps.map((item, index) => (
                  <li key={item.title} className={index === step ? "font-semibold text-primary" : ""}>{item.title}</li>
                ))}
              </ol>
            </div>

            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent"><ActiveIcon className="h-5 w-5" /></div>
              <div>
                <h2 className="text-2xl font-semibold">{steps[step].prompt}</h2>
              </div>
            </div>

            <form onSubmit={submit}>
              {step === 0 && (
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium" htmlFor="country">Operating country</label>
                    <Input id="country" value={country} onChange={(event) => { setCountry(event.target.value); setError(""); }} placeholder="Country" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Region</label>
                    <Select value={region} onValueChange={setRegion}>
                      <SelectTrigger><SelectValue placeholder="Select region" /></SelectTrigger>
                      <SelectContent>
                        {["Africa", "Asia-Pacific", "Europe", "Latin America", "Middle East", "North America"].map((item) => (
                          <SelectItem key={item} value={item}>{item}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {step === 1 && (
                <Select value={applicantType} onValueChange={(value) => setApplicantType(value as ApplicantType)}>
                  <SelectTrigger><SelectValue placeholder="Choose organization type" /></SelectTrigger>
                  <SelectContent>
                    {["University / Academic", "Non-Profit / NGO", "Small Business", "Independent Developer"].map((item) => (
                      <SelectItem key={item} value={item}>{item}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {step === 2 && (
                <Select value={objective} onValueChange={(value) => setObjective(value as GrantObjective)}>
                  <SelectTrigger><SelectValue placeholder="Choose objective" /></SelectTrigger>
                  <SelectContent>
                    {["Applied Tech / Cyber Safety", "Business Recovery / Digital Marketing", "Infrastructure"].map((item) => (
                      <SelectItem key={item} value={item}>{item}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {step === 3 && (
                <Select value={fundingTier} onValueChange={(value) => setFundingTier(value as FundingTier)}>
                  <SelectTrigger><SelectValue placeholder="Choose funding tier" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-10k">&lt;$10k — SMB Grant</SelectItem>
                    <SelectItem value="50k-100k">$50k–$100k — Applied Research</SelectItem>
                    <SelectItem value="100k-plus">$100k+ — Large Initiative</SelectItem>
                  </SelectContent>
                </Select>
              )}

              {error && <p className="mt-3 text-sm text-destructive" role="alert">{error}</p>}
              <div className="mt-8 flex justify-between">
                <Button type="button" variant="outline" onClick={() => { setError(""); setStep((value) => Math.max(0, value - 1)); }} disabled={step === 0}>
                  <ArrowLeft /> Back
                </Button>
                <Button type="submit" variant="hero">
                  {step === 3 ? "See my result" : "Continue"} <ArrowRight />
                </Button>
              </div>
            </form>
          </div>

          {result && (
            <section className="mt-6 rounded-xl border border-border bg-background p-6 shadow-card sm:p-8">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-7 w-7 shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Recommended track</p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    {evaluation.recommendedTrack === "secure-the-internet" ? "Applied Tech & Security" :
                      evaluation.recommendedTrack === "smb-boost" ? "SMB Digital Boost" : "Large Initiative"}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{evaluation.summary}</p>
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <h3 className="font-semibold">Your eligibility brief</h3>
                {!briefGenerated ? (
                  <Button className="mt-4" variant="outline" onClick={() => setBriefGenerated(true)}>
                    <ClipboardCheck /> Generate brief
                  </Button>
                ) : (
                  <div className="mt-4">
                    <Textarea value={brief} readOnly rows={10} className="font-mono text-sm" />
                    <div className="mt-3 flex flex-wrap gap-3">
                      <Button variant="outline" onClick={copyBrief}><Copy /> Copy brief</Button>
                      <Button variant="outline" asChild>
                        <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(brief)}`} download="apex-grants-eligibility-brief.txt"><Download /> Download brief</a>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-6 flex justify-between border-t border-border pt-6">
                <Button variant="ghost" onClick={reset}><ArrowLeft /> Review answers</Button>
                <Button variant="hero" asChild><Link to="/programs">Explore programs <ArrowRight /></Link></Button>
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
};

export default Eligibility;
