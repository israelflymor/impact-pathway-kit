import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Copy,
  Download,
  Info,
  MapPin,
  Percent,
  CircleDollarSign,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import { evaluateEligibility } from "@/lib/eligibilityRules";

const stepDetails = [
  {
    title: "Operating country",
    prompt: "Where will the project operate?",
    description: "Enter the primary country where the project will be based.",
    Icon: MapPin,
  },
  {
    title: "Sector",
    prompt: "Which sector best describes the project?",
    description: "Choose the closest fit; your selection will be included in the inquiry brief.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "Private ownership",
    prompt: "What share of the project is privately owned?",
    description: "Enter the percentage held by private owners or sponsors.",
    Icon: Percent,
  },
  {
    title: "Ticket size",
    prompt: "What investment amount are you seeking?",
    description: "Enter the proposed investment amount in US dollars.",
    Icon: CircleDollarSign,
  },
];

const sectors = [
  "Agriculture, forestry & natural resources",
  "Financial services",
  "Infrastructure & energy",
  "Manufacturing & industry",
  "Technology & digital",
  "Health & education",
  "Tourism & consumer services",
  "Other",
];

const formatUSD = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

const Eligibility = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    operatingCountry: "",
    sector: "",
    otherSector: "",
    privateOwnership: "",
    ticketSize: "",
  });
  const [stepError, setStepError] = useState("");
  const [resultVisible, setResultVisible] = useState(false);
  const [briefGenerated, setBriefGenerated] = useState(false);

  const activeStep = stepDetails[currentStep];
  const StepIcon = activeStep.Icon;
  const sectorDescription = answers.sector === "Other" ? answers.otherSector.trim() : answers.sector;
  const ownershipPercentage = Number(answers.privateOwnership);
  const ticketSizeUsd = Number(answers.ticketSize);
  const evaluation = evaluateEligibility(ownershipPercentage, ticketSizeUsd);
  const briefText = [
    "PROJECT INQUIRY BRIEF",
    "Preliminary eligibility screen — not an approval or offer",
    "",
    `Operating country: ${answers.operatingCountry.trim()}`,
    `Sector: ${sectorDescription}`,
    `Private ownership: ${ownershipPercentage}%`,
    `Proposed investment ticket: ${formatUSD(ticketSizeUsd)}`,
    `Preliminary screen: ${evaluation.passed ? "Meets the provisional ownership and ticket checks" : "Does not yet meet the provisional ownership and ticket checks"}`,
    "",
    "Country and sector eligibility, financial viability, development impact, environmental and social requirements, and full due diligence require separate review. Meeting these initial checks does not guarantee financing or advisory support.",
  ].join("\n");

  const updateAnswer = (key: keyof typeof answers, value: string) => {
    setAnswers((previous) => ({ ...previous, [key]: value }));
    setStepError("");
    setResultVisible(false);
    setBriefGenerated(false);
  };

  const validateCurrentStep = () => {
    if (currentStep === 0 && !answers.operatingCountry.trim()) {
      return "Enter the country where the project will operate.";
    }
    if (currentStep === 1 && !answers.sector) {
      return "Choose the sector that best describes the project.";
    }
    if (currentStep === 1 && answers.sector === "Other" && !answers.otherSector.trim()) {
      return "Enter the project’s sector.";
    }
    if (currentStep === 2) {
      const value = Number(answers.privateOwnership);
      if (answers.privateOwnership === "" || !Number.isFinite(value) || value < 0 || value > 100) {
        return "Enter a private ownership percentage from 0 to 100.";
      }
    }
    if (currentStep === 3) {
      const value = Number(answers.ticketSize);
      if (answers.ticketSize === "" || !Number.isFinite(value) || value <= 0) {
        return "Enter a ticket size greater than $0.";
      }
    }
    return "";
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const error = validateCurrentStep();
    if (error) {
      setStepError(error);
      return;
    }

    setStepError("");
    setBriefGenerated(false);
    if (currentStep < stepDetails.length - 1) {
      setCurrentStep((step) => step + 1);
      setResultVisible(false);
      return;
    }
    setResultVisible(true);
  };

  const handleBack = () => {
    setStepError("");
    setResultVisible(false);
    setBriefGenerated(false);
    setCurrentStep((step) => Math.max(0, step - 1));
  };

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(briefText);
      toast.success("Inquiry brief copied.");
    } catch {
      toast.error("The brief could not be copied. You can still download it.");
    }
  };

  const reviewAnswers = () => {
    setResultVisible(false);
    setBriefGenerated(false);
    setCurrentStep(0);
  };

  return (
    <Layout>
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-4xl">
            <p className="flex items-center gap-2 text-accent font-medium text-sm uppercase tracking-wider mb-4">
              <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
              Initial project screen
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-5">
              Project eligibility checker
            </h1>
            <p className="text-primary-foreground/75 text-lg max-w-3xl">
              Share four details for an initial indication of fit and a structured project inquiry brief.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-background border border-border rounded-md shadow-card p-5 sm:p-8 md:p-10">
              <div className="mb-8">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <p className="text-sm font-semibold text-foreground">Step {currentStep + 1} of {stepDetails.length}</p>
                  <p className="text-sm text-muted-foreground">{activeStep.title}</p>
                </div>
                <Progress
                  value={((currentStep + 1) / stepDetails.length) * 100}
                  aria-label={`Step ${currentStep + 1} of ${stepDetails.length}`}
                  className="h-2"
                />
                <ol className="grid grid-cols-4 gap-2 mt-4" aria-label="Eligibility checker steps">
                  {stepDetails.map((step, index) => (
                    <li
                      key={step.title}
                      aria-current={index === currentStep ? "step" : undefined}
                      className={`text-xs leading-5 ${index === currentStep ? "font-semibold text-primary" : "text-muted-foreground"}`}
                    >
                      <span className="hidden sm:inline">{step.title}</span>
                      <span className="sm:hidden">{index + 1}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex items-start gap-4 mb-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <StepIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">{activeStep.prompt}</h2>
                  <p className="mt-2 text-muted-foreground">{activeStep.description}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {currentStep === 0 && (
                  <div className="space-y-3">
                    <label htmlFor="operating-country" className="block text-sm font-medium text-foreground">
                      Operating country
                    </label>
                    <Input
                      id="operating-country"
                      autoComplete="country-name"
                      value={answers.operatingCountry}
                      onChange={(event) => updateAnswer("operatingCountry", event.target.value)}
                      placeholder="Enter a country"
                      aria-describedby="country-note"
                      aria-invalid={Boolean(stepError)}
                    />
                    <p id="country-note" className="text-sm text-muted-foreground">
                      Country eligibility is reviewed separately; this checker records your answer only.
                    </p>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-3">
                    <label htmlFor="project-sector" className="block text-sm font-medium text-foreground">
                      Project sector
                    </label>
                    <Select value={answers.sector} onValueChange={(value) => updateAnswer("sector", value)}>
                      <SelectTrigger id="project-sector" aria-label="Project sector" aria-invalid={Boolean(stepError)}>
                        <SelectValue placeholder="Choose a sector" />
                      </SelectTrigger>
                      <SelectContent>
                        {sectors.map((sector) => (
                          <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {answers.sector === "Other" && (
                      <Input
                        aria-label="Other project sector"
                        value={answers.otherSector}
                        onChange={(event) => updateAnswer("otherSector", event.target.value)}
                        placeholder="Describe the sector"
                        aria-invalid={Boolean(stepError)}
                      />
                    )}
                    <p className="text-sm text-muted-foreground">
                      Sector eligibility is reviewed separately; your selection will be included in the brief.
                    </p>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-3">
                    <label htmlFor="private-ownership" className="block text-sm font-medium text-foreground">
                      Private ownership share
                    </label>
                    <div className="relative">
                      <Input
                        id="private-ownership"
                        type="number"
                        min="0"
                        max="100"
                        step="1"
                        inputMode="numeric"
                        value={answers.privateOwnership}
                        onChange={(event) => updateAnswer("privateOwnership", event.target.value)}
                        placeholder="For example, 60"
                        className="pr-12"
                        aria-describedby="ownership-note"
                        aria-invalid={Boolean(stepError)}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground" aria-hidden="true">%</span>
                    </div>
                    <p id="ownership-note" className="text-sm text-muted-foreground">
                      For this preliminary screen, majority private ownership (more than 50%) is treated as a pass.
                    </p>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-3">
                    <label htmlFor="ticket-size" className="block text-sm font-medium text-foreground">
                      Proposed investment ticket
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground" aria-hidden="true">$</span>
                      <Input
                        id="ticket-size"
                        type="number"
                        min="1"
                        step="1"
                        inputMode="numeric"
                        value={answers.ticketSize}
                        onChange={(event) => updateAnswer("ticketSize", event.target.value)}
                        placeholder="5,000,000"
                        className="pl-8"
                        aria-describedby="ticket-note"
                        aria-invalid={Boolean(stepError)}
                      />
                    </div>
                    <p id="ticket-note" className="text-sm text-muted-foreground">
                      The initial screen uses a minimum ticket of $5 million.
                    </p>
                  </div>
                )}

                {stepError && (
                  <p className="mt-3 text-sm text-destructive" role="alert">{stepError}</p>
                )}

                <div className="mt-8 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
                  <Button type="button" variant="outline" onClick={handleBack} disabled={currentStep === 0}>
                    <ArrowLeft aria-hidden="true" />
                    Back
                  </Button>
                  <Button type="submit" variant="hero">
                    {currentStep === stepDetails.length - 1 ? "See preliminary result" : "Continue"}
                    <ArrowRight aria-hidden="true" />
                  </Button>
                </div>
              </form>
            </div>

            {resultVisible && (
              <section className="mt-6 bg-background border border-border rounded-md shadow-card p-5 sm:p-8" aria-live="polite" aria-labelledby="preliminary-result-title">
                <div className="flex items-start gap-4">
                  {evaluation.passed ? (
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                  ) : (
                    <AlertCircle className="mt-1 h-6 w-6 shrink-0 text-destructive" aria-hidden="true" />
                  )}
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Preliminary result</p>
                    <h2 id="preliminary-result-title" className="mt-1 text-2xl font-semibold text-foreground">
                      {evaluation.passed ? "Ready for an initial inquiry" : "The minimum screen is not met yet"}
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                      {evaluation.passed
                        ? "Your answers meet this check’s provisional ownership and ticket thresholds. Country and sector eligibility still require review."
                        : "One or more answers fall outside this check’s provisional thresholds. You may still share your project for discussion and review."}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-muted-foreground">Private ownership</span>
                    <span className="text-right font-medium text-foreground">
                      {ownershipPercentage}% · {evaluation.ownershipPass ? "Pass (>50%)" : "Below majority threshold"}
                    </span>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-muted-foreground">Proposed ticket</span>
                    <span className="text-right font-medium text-foreground">
                      {formatUSD(ticketSizeUsd)} · {evaluation.ticketPass ? "Pass ($5M+)" : "Below $5M minimum"}
                    </span>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-muted-foreground">Country and sector</span>
                    <span className="text-right font-medium text-foreground">Recorded for review</span>
                  </li>
                </ul>

                <div className="mt-6 border-t border-border pt-6">
                  <h3 className="text-lg font-semibold text-foreground">Inquiry brief</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Generate a structured summary of your answers and preliminary result.
                  </p>
                  {!briefGenerated ? (
                    <Button className="mt-4" variant="outline" onClick={() => setBriefGenerated(true)}>
                      <ClipboardCheck aria-hidden="true" />
                      Generate inquiry brief
                    </Button>
                  ) : (
                    <div className="mt-4 space-y-3">
                      <Textarea
                        aria-label="Generated project inquiry brief"
                        value={briefText}
                        readOnly
                        rows={10}
                        className="font-mono text-sm leading-relaxed"
                      />
                      <div className="flex flex-wrap gap-3">
                        <Button type="button" variant="outline" onClick={copyBrief}>
                          <Copy aria-hidden="true" />
                          Copy brief
                        </Button>
                        <Button asChild variant="outline">
                          <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(briefText)}`} download="project-inquiry-brief.txt">
                            <Download aria-hidden="true" />
                            Download brief
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-border pt-6">
                  <Button type="button" variant="ghost" onClick={reviewAnswers}>
                    <ArrowLeft aria-hidden="true" />
                    Review answers
                  </Button>
                  <Button asChild variant="hero">
                    <Link to="/contact">
                      Continue to contact
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </section>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="flex items-start gap-4 border-t border-border pt-7">
          <Info className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
          <div>
            <h2 className="font-semibold text-foreground">Important notice</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Meeting these preliminary checks does not guarantee approval of financing or advisory support. All projects are subject to detailed review of eligibility, financial and operational viability, development impact, environmental and social considerations, and applicable internal approval processes. Specific outcomes cannot be promised or guaranteed.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Eligibility;