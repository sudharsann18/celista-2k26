import EventLayout from "../../layout/EventLayout";

export default function HeistHorizon() {
  return (
    <EventLayout
      title="Heist Horizon - Crack the Code. Claim the Crown"
      description="A thrilling three-round challenge testing brains, teamwork and speed.

Round 1 – Professor's Filter (quiz + logic puzzles)
Round 2 – Crisis Role Play (heist escape strategies)
Round 3 – One Code, One Vault (solve clues and unlock vault)

First team to open vault within time wins."
      teamSize="1–4 Members"
      venue="Will Be Announced"
      date="Will Be Announced"
      prize="Winner Crown + Certificates"
      rules={[
        "Quick quiz and logic round",
        "Team-based strategy explanation round",
        "Solve 3 clues to generate vault code",
        "Time-bound final vault unlock challenge"
      ]}
      formLink="YOUR_GOOGLE_FORM_LINK"
      color="red"
    />
  );
}
