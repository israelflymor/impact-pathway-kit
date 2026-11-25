import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ApplyGrantDialogProps {
  grantName: string;
  className?: string;
  variant?: "hero" | "heroOutline" | "gold" | "navy" | "outline";
}

const APPLICATION_EMAIL = "h25368886@gmail.com";

export const ApplyGrantDialog = ({
  grantName,
  className,
  variant = "hero",
}: ApplyGrantDialogProps) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    country: "",
    proposal: "",
  });

  const update = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Grant Application: ${grantName}`;
    const body = [
      `Grant: ${grantName}`,
      `Applicant name: ${form.name}`,
      `Email: ${form.email}`,
      `Organization: ${form.organization || "Not provided"}`,
      `Country / region: ${form.country}`,
      "",
      "Application summary:",
      form.proposal,
    ].join("\n");

    window.location.href =
      `mailto:${APPLICATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>
          Apply for this grant
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Apply for {grantName}</DialogTitle>
          <DialogDescription>
            Complete this application form. Submitting opens your email app with the application addressed to {APPLICATION_EMAIL}.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`applicant-name-${grantName}`}>Full name *</Label>
              <Input
                id={`applicant-name-${grantName}`}
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`applicant-email-${grantName}`}>Email address *</Label>
              <Input
                id={`applicant-email-${grantName}`}
                type="email"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                required
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`organization-${grantName}`}>Organization</Label>
              <Input
                id={`organization-${grantName}`}
                value={form.organization}
                onChange={(event) => update("organization", event.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`country-${grantName}`}>Country / region *</Label>
              <Input
                id={`country-${grantName}`}
                value={form.country}
                onChange={(event) => update("country", event.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor={`proposal-${grantName}`}>Project summary / proposal *</Label>
            <Textarea
              id={`proposal-${grantName}`}
              value={form.proposal}
              onChange={(event) => update("proposal", event.target.value)}
              placeholder="Describe the problem, proposed work, intended users, and requested funding."
              rows={7}
              required
            />
          </div>
          <Button type="submit" variant="hero" className="w-full">
            Submit application by email
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
