import EventLayout from "../../layout/EventLayout";

export default function DriftX() {
  return (
    <EventLayout
      title="DRIFT_X"
      description="Push your technical knowledge to the limit in this high-speed tech showdown. Compete through multiple rounds designed to test diverse engineering skills."
      teamSize="Individual"
      date="22 February 2026"
      venue="Main Auditorium"
      prize="₹7,000 + Certificates"
      rules={[
        "Individual participation only.",
        "Multiple elimination rounds.",
        "Topics cover core technical domains.",
        "Final decision rests with judges."
      ]}
      registerLink="https://forms.google.com/your-driftx-link"
    />
  );
}
