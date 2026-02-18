import EventLayout from "../../layout/EventLayout";

export default function ThinkLink() {
  return (
    <EventLayout
      title="Think & Link"
      description="Test your analytical and reasoning skills by connecting concepts, solving logical puzzles, and building innovative problem-solving strategies."
      teamSize="2 Members"
      date="22 February 2026"
      venue="Seminar Hall"
      prize="₹6,000 + Certificates"
      rules={[
        "Teams of 2 members only.",
        "Multiple problem-solving rounds.",
        "No electronic devices allowed.",
        "Judging based on accuracy and logical reasoning."
      ]}
      registerLink="https://forms.google.com/your-thinklink-link"
    />
  );
}

