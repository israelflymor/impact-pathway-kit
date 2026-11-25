import assert from "node:assert/strict";
import test from "node:test";
import { evaluateEligibility, evaluateGrantEligibility } from "../src/lib/eligibilityRules.ts";

test("requires majority private ownership for a preliminary pass", () => {
  assert.equal(evaluateEligibility(51, 5_000_000).ownershipPass, true);
  assert.equal(evaluateEligibility(50, 5_000_000).ownershipPass, false);
});

test("accepts ticket sizes of at least $5 million", () => {
  assert.equal(evaluateEligibility(51, 5_000_000).ticketPass, true);
  assert.equal(evaluateEligibility(51, 4_999_999).ticketPass, false);
});

test("matches academic cyber safety applicants to applied security grants", () => {
  const result = evaluateGrantEligibility({
    country: "Kenya",
    region: "Africa",
    applicantType: "University / Academic",
    objective: "Applied Tech / Cyber Safety",
    fundingTier: "50k-100k",
  });
  assert.equal(result.recommendedTrack, "secure-the-internet");
  assert.equal(result.eligibleForTrack, true);
});

test("matches local small businesses seeking digital growth to SMB Boost", () => {
  const result = evaluateGrantEligibility({
    country: "Brazil",
    region: "Latin America",
    applicantType: "Small Business",
    objective: "Business Recovery / Digital Marketing",
    fundingTier: "under-10k",
  });
  assert.equal(result.recommendedTrack, "smb-boost");
  assert.equal(result.eligibleForTrack, true);
});