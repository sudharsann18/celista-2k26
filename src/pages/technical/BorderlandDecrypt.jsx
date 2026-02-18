import EventLayout from "../../layout/EventLayout";

export default function BorderlandDecrypt() {
  return (
    <EventLayout
      title="Borderland Decrypt"
      description="Put your cybersecurity and logical thinking skills to the test. Solve encrypted challenges and decode hidden messages to conquer the digital frontier."
      teamSize="2 Members"
      date="22 February 2026"
      venue="Computer Lab 1"
      prize="₹10,000 + Certificates"
      rules={[
        "Teams must consist of exactly 2 members.",
        "Multiple rounds of increasing difficulty.",
        "Use of unfair means leads to disqualification.",
        "Judging based on accuracy and completion time."
      ]}
      registerLink="https://forms.google.com/your-borderland-link"
    />
  );
}
