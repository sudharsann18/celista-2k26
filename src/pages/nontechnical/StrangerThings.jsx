import EventLayout from "../../layout/EventLayout";

export default function StrangerThings() {
  return (
    <EventLayout
      title="Stranger Things: The Upside Down Rescue"
      description="A high-intensity, story-driven technical escape game inspired by Stranger Things universe.

Round 1 – Hawkins Network Meltdown:
Decode signals, repair numbers, generate 6-digit key.
Top teams qualify.

Round 2 – Upside Down Rescue:
Two connected rooms.
One teammate trapped.
Communication + logic + physical puzzles required to rescue."

      teamSize="3–4 Members"
      venue="Two Connected Rooms Setup"
      date="Duration: 2–3 Hours"
      prize="Top Team Award + Certificates"

      rules={[
        "Parallel decoding round",
        "Top 10–12 teams qualify",
        "Walkie-talkie limited communication",
        "Physical + digital puzzles",
        "Time-bound rescue mission"
      ]}
      formLink="YOUR_GOOGLE_FORM_LINK"
      color="red"
    />
  );
}
