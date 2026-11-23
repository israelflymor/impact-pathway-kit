export const MINIMUM_PRIVATE_OWNERSHIP_PERCENTAGE = 50;
export const MINIMUM_TICKET_USD = 5_000_000;

export interface EligibilityEvaluation {
  ownershipPass: boolean;
  ticketPass: boolean;
  passed: boolean;
}

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
  };
}