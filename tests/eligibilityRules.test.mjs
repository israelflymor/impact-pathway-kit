import assert from "node:assert/strict";
import test from "node:test";
import { evaluateEligibility } from "../src/lib/eligibilityRules.ts";

test("requires majority private ownership for a preliminary pass", () => {
  assert.equal(evaluateEligibility(51, 5_000_000).ownershipPass, true);
  assert.equal(evaluateEligibility(50, 5_000_000).ownershipPass, false);
});

test("accepts ticket sizes of at least $5 million", () => {
  assert.equal(evaluateEligibility(51, 5_000_000).ticketPass, true);
  assert.equal(evaluateEligibility(51, 4_999_999).ticketPass, false);
});