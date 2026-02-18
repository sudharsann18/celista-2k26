import EventLayout from "../../layout/EventLayout";

export default function CricketConquest() {
  return (
    <EventLayout
      title="Cricket Conquest – The Ultimate Team Strategy Challenge"
      description="Cricket Conquest is an exciting, multi-round event designed to test participants’ cricket knowledge, analytical thinking, and team-building skills.

Round 1 – Cricket-based quiz evaluating knowledge of players, teams, records, and match situations.

Qualified teams move to dynamic strategy rounds simulating professional cricket team management, where they analyze players, plan strategies, and build a competitive squad."
      teamSize="1–4 Members"
      venue="Will Be Announced"
      date="Will Be Announced"
      prize="Exciting Prizes + Certificates"
      rules={[
        "Round 1: Cricket Knowledge Quiz",
        "Advanced strategy simulation rounds for qualifiers",
        "Team building and decision-making challenges",
      ]}
      formLink="YOUR_GOOGLE_FORM_LINK"
      color="red"
    />
  );
}
