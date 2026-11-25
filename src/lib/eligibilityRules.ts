export type ApplicantType =
  | "University / Academic"
  | "Non-Profit / NGO"
  | "Small Business"
  | "Independent Developer";

export type GrantObjective =
  | "Applied Tech / Cyber Safety"
  | "Business Recovery / Digital Marketing"
  | "Infrastructure";

export type FundingTier =
  | "under-10k"
  | "50k-100k"
  | "100k-plus";

export type RecommendedTrack = "secure-the-internet" | "smb-boost" | "large-initiative";

export interface GrantEligibilityInput {
  country: string;
  region: string;
  applicantType: ApplicantType;
  objective: GrantObjective;
  fundingTier: FundingTier;
}

export interface EligibilityEvaluation {
  ownershipPass: boolean;
  ticketPass: boolean;
  passed: boolean;
  recommendedTrack: RecommendedTrack;
  eligibleForTrack: boolean;
  summary: string;
}

export const MINIMUM_PRIVATE_OWNERSHIP_PERCENTAGE = 50;
export const MINIMUM_TICKET_USD = 5_000_000;

export function evaluateGrantEligibility(input: GrantEligibilityInput): EligibilityEvaluation {
  const smbApplicant =
    input.applicantType === "Small Business" &&
    input.objective === "Business Recovery / Digital Marketing" &&
    input.fundingTier === "under-10k";

  const securityApplicant =
    (input.applicantType === "University / Academic" ||
      input.applicantType === "Non-Profit / NGO" ||
      input.applicantType === "Independent Developer") &&
    input.objective === "Applied Tech / Cyber Safety" &&
    (input.fundingTier === "50k-100k" || input.fundingTier === "100k-plus");

  const recommendedTrack: RecommendedTrack = smbApplicant
    ? "smb-boost"
    : securityApplicant
      ? "secure-the-internet"
      : input.fundingTier === "under-10k"
        ? "smb-boost"
        : input.fundingTier === "50k-100k"
          ? "secure-the-internet"
          : "large-initiative";

  const eligibleForTrack = recommendedTrack !== "large-initiative";
  const trackName =
    recommendedTrack === "smb-boost"
      ? "SMB Digital Boost"
      : recommendedTrack === "secure-the-internet"
        ? "Applied Tech & Security"
        : "Large Initiative";

  return {
    ownershipPass: Boolean(input.country.trim()),
    ticketPass: Boolean(input.region.trim()),
    passed: Boolean(input.country.trim()) && Boolean(input.region.trim()) && eligibleForTrack,
    recommendedTrack,
    eligibleForTrack,
    summary: eligibleForTrack
      ? `Your profile aligns with the ${trackName} grant track.`
      : "Your stated need exceeds the standard grant tiers. A custom, institution-led initiative may be more appropriate.",
  };
}

// Backward-compatible evaluator retained for existing finance inquiries and tests.
export function evaluateEligibility(
  privateOwnershipPercentage: number,
  requestedTicketUsd: number,
): EligibilityEvaluation {
  const ownershipPass =
    Number.isFinite(privateOwnershipPercentage) &&
    privateOwnershipPercentage > MINIMUM_PRIVATE_OWNERSHIP_PERCENTAGE;
  const ticketPass = Number.isFinite(requestedTicketUsd) && requestedTicketUsd >= MINIMUM_TICKET_USD;

  return {
    ownershipPass,
    ticketPass,
    passed: ownershipPass && ticketPass,
    recommendedTrack: requestedTicketUsd < 50_000 ? "smb-boost" : "secure-the-internet",
    eligibleForTrack: ownershipPass && ticketPass,
    summary: ownershipPass && ticketPass
      ? "Your profile meets the preliminary grant screen."
      : "The provisional thresholds are not met.",
  };
}

export interface GrantApplicationInput {
  fullName: string;
  address: string;
  gender: string;
  state: string;
  city: string;
  maritalStatus: string;
  cellNumber: string;
  age: string;
  occupation: string;
  paymentPreference: string;
  monthlyIncome: string;
}

export function validateApplication(application: GrantApplicationInput): string {
  const requiredFields: Array<[keyof GrantApplicationInput, string]> = [
    ["fullName", "Full name"],
    ["address", "Address"],
    ["gender", "Gender"],
    ["state", "State"],
    ["city", "City"],
    ["maritalStatus", "Marital status"],
    ["cellNumber", "Cell number"],
    ["age", "Age"],
    ["occupation", "Occupation"],
    ["paymentPreference", "Cash or check preference"],
    ["monthlyIncome", "Monthly income"],
  ];

  for (const [field, label] of requiredFields) {
    if (!application[field].trim()) return `${label} is required.`;
  }

  const age = Number(application.age);
  if (!Number.isFinite(age) || age < 18) return "Age must be 18 or older.";

  const monthlyIncome = Number(application.monthlyIncome);
  if (!Number.isFinite(monthlyIncome) || monthlyIncome < 0) {
    return "Monthly income must be zero or greater.";
  }

  return "";
}

export function buildApplicationBrief(application: GrantApplicationInput): string {
  return [
    "APEX GRANTS — GRANT APPLICATION",
    "",
    `FULL NAME: ${application.fullName.trim()}`,
    `ADDRESS: ${application.address.trim()}`,
    `MALE/FEMALE: ${application.gender}`,
    `STATE: ${application.state.trim()}`,
    `CITY: ${application.city.trim()}`,
    `MARRIED/SINGLE: ${application.maritalStatus}`,
    `CELL NO: ${application.cellNumber.trim()}`,
    `AGE: ${application.age}`,
    `OCCUPATION: ${application.occupation.trim()}`,
    `CASH OR CHECK: ${application.paymentPreference}`,
    `MONTHLY INCOME: ${application.monthlyIncome}`,
  ].join("\n");
}