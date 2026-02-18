import EventLayout from "../../layout/EventLayout";

export default function Hacsprint() {
  return (
    <EventLayout
      title="HACSPRINT"
      description="An adrenaline-packed coding sprint where innovation meets speed. Build functional solutions within limited time and showcase your development skills."
      teamSize="2–4 Members"
      date="22 February 2026"
      venue="Innovation Lab"
      prize="₹15,000 + Certificates"
      rules={[
        "Teams must have 2–4 members.",
        "Problem statement revealed on the spot.",
        "Time-bound development challenge.",
        "Evaluation based on functionality and creativity."
      ]}
      registerLink="https://forms.google.com/your-hacsprint-link"
    />
  );
}
