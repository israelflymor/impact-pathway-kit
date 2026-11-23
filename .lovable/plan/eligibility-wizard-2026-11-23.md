# Eligibility Wizard

Replace the static `/eligibility` page with a four-step interactive viability checker.

## Experience
- Collect operating country, sector, private-ownership percentage, and requested ticket size.
- Show progress and allow users to move back and update earlier answers.
- Assess the answers against the stated screening requirements, including private ownership and a $5M+ ticket size.
- Present qualified or not-yet-qualified preliminary feedback without promising financing or approval.
- Let users who complete the checker generate a structured inquiry brief containing their answers and result, ready to copy or download.
- Keep the existing site navigation, visual style, and eligibility disclaimer.

## Technical approach
- Implement the wizard in the existing React page using client-side state; no account or data storage is needed.
- Use the existing design tokens and shared UI controls, with accessible labels, keyboard operation, and small-screen layouts.
- Add focused tests for the qualification rules and verify the complete flow in the preview.