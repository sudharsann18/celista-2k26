import EventLayout from "../../layout/EventLayout";

export default function ComicNexus() {
  return (
    <EventLayout
      title="Comic Nexus"
      description="Dive into the world of digital creativity where storytelling meets design. Showcase your imagination through innovative comic-based tech solutions."
      teamSize="2–3 Members"
      date="22 February 2026"
      venue="Computer Lab 2"
      prize="₹8,000 + Certificates"
      rules={[
        "Each team must have 2–3 members.",
        "Original content only.",
        "Time limit: 2 hours.",
        "Judging based on creativity and technical execution."
      ]}
      registerLink="https://forms.google.com/your-comic-nexus-link"
    />
  );
}
