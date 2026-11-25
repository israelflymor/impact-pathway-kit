import { useState, type FormEvent } from "react";
import { ClipboardCheck, Copy, Download, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { buildApplicationBrief, validateApplication } from "@/lib/eligibilityRules";

const initialApplication = {
  fullName: "",
  address: "",
  gender: "",
  state: "",
  city: "",
  maritalStatus: "",
  cellNumber: "",
  age: "",
  occupation: "",
  paymentPreference: "",
  monthlyIncome: "",
};

const Eligibility = () => {
  const [application, setApplication] = useState(initialApplication);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const brief = buildApplicationBrief(application);

  const update = (field: keyof typeof application, value: string) => {
    setApplication((current) => ({ ...current, [field]: value }));
    setError("");
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextError = validateApplication(application);
    if (nextError) {
      setError(nextError);
      return;
    }

    setError("");
    setSubmitted(true);
  };

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(brief);
      toast.success("Application copied.");
    } catch {
      toast.error("Could not copy. Download the application instead.");
    }
  };

  const submitByEmail = () => {
    window.location.href =
      `mailto:h25368886@gmail.com?subject=${encodeURIComponent("Grant Application")}&body=${encodeURIComponent(brief)}`;
  };

  return (
    <>
      <section className="bg-primary py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">Grant application</p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">Apply for a grant</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Complete the application details below. This same form is used for all available grants.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-10 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-xl border border-border bg-background p-5 shadow-card sm:p-9">
            <form onSubmit={submit} noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="full-name">FULL NAME *</Label>
                  <Input id="full-name" value={application.fullName} onChange={(event) => update("fullName", event.target.value)} required />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">ADDRESS *</Label>
                  <Input id="address" value={application.address} onChange={(event) => update("address", event.target.value)} required />
                </div>

                <div className="space-y-2">
                  <Label>MALE/FEMALE *</Label>
                  <Select value={application.gender} onValueChange={(value) => update("gender", value)}>
                    <SelectTrigger aria-label="Gender"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">STATE *</Label>
                  <Input id="state" value={application.state} onChange={(event) => update("state", event.target.value)} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">CITY *</Label>
                  <Input id="city" value={application.city} onChange={(event) => update("city", event.target.value)} required />
                </div>

                <div className="space-y-2">
                  <Label>MARRIED/SINGLE *</Label>
                  <Select value={application.maritalStatus} onValueChange={(value) => update("maritalStatus", value)}>
                    <SelectTrigger aria-label="Marital status"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Married">Married</SelectItem>
                      <SelectItem value="Single">Single</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cell-number">CELL NO: *</Label>
                  <Input id="cell-number" type="tel" value={application.cellNumber} onChange={(event) => update("cellNumber", event.target.value)} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">AGE *</Label>
                  <Input id="age" type="number" min="18" value={application.age} onChange={(event) => update("age", event.target.value)} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="occupation">OCCUPATION *</Label>
                  <Input id="occupation" value={application.occupation} onChange={(event) => update("occupation", event.target.value)} required />
                </div>

                <div className="space-y-2">
                  <Label>CASH OR CHECK *</Label>
                  <Select value={application.paymentPreference} onValueChange={(value) => update("paymentPreference", value)}>
                    <SelectTrigger aria-label="Payment preference"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Cash">Cash</SelectItem>
                      <SelectItem value="Check">Check</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monthly-income">MONTHLY INCOME *</Label>
                  <Input
                    id="monthly-income"
                    type="number"
                    min="0"
                    step="0.01"
                    inputMode="decimal"
                    value={application.monthlyIncome}
                    onChange={(event) => update("monthlyIncome", event.target.value)}
                    required
                  />
                </div>
              </div>

              {error && <p className="mt-5 text-sm text-destructive" role="alert">{error}</p>}

              <Button type="submit" variant="hero" className="mt-8 w-full sm:w-auto">
                <ClipboardCheck className="mr-2 h-4 w-4" />
                Submit application
              </Button>
            </form>
          </div>

          {submitted && (
            <section className="mt-6 rounded-xl border border-border bg-background p-5 shadow-card sm:p-8" aria-live="polite">
              <h2 className="text-2xl font-semibold">Application ready</h2>
              <p className="mt-2 text-muted-foreground">Review, copy, download, or send your completed application by email.</p>
              <Textarea value={brief} readOnly rows={13} className="mt-5 font-mono text-sm" aria-label="Completed grant application" />
              <div className="mt-4 flex flex-wrap gap-3">
                <Button variant="outline" onClick={copyBrief}><Copy /> Copy application</Button>
                <Button variant="outline" asChild>
                  <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(brief)}`} download="grant-application.txt">
                    <Download /> Download application
                  </a>
                </Button>
                <Button variant="hero" onClick={submitByEmail}><Send /> Send by email</Button>
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
};

export default Eligibility;
