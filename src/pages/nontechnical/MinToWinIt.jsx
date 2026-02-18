import EventLayout from "../../layout/EventLayout";

export default function MinToWinIt() {
  return (
    <EventLayout
      title="Min To Win It 3.0 - Steal The Win Before Time Runs Out"
      description="Fast-paced timed challenges where participants must survive pressure and complete tasks before the clock runs out."

      teamSize="1–2 Members"
      venue="Will Be Announced"
      date="Will Be Announced"
      prize="Win 11 Tasks – Win The Game"

      rules={[
        "Each task within strict time limit",
        "Instructions revealed at round start",
        "One attempt per task",
        "All materials provided",
        "12 total tasks",
        "Misconduct leads to disqualification"
      ]}
      formLink="YOUR_GOOGLE_FORM_LINK"
      color="red"
    />
  );
}
