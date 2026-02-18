import EventLayout from "../../layout/EventLayout";

export default function RhythmRiot() {
  return (
    <EventLayout
      title="RHYTHM RIOT"
      description="A music-based multi-round event combining cinema, lyrics, guessing games and performance."

      teamSize="Solo / Duo / Trio / Group"
      venue="Will Be Announced"
      date="Will Be Announced"
      prize="Certificates + Bonus Round Points"

      rules={[
        "Round 1: Fill It & Feel It",
        "Round 2: Damsharath – Music Edition",
        "Round 3: Guess the Song by Picture",
        "Bonus Round: 10 sec Choreo/Sing",
        "Round 4: Missing Lyrics (Easy/Mid/Hard)"
      ]}
      formLink="YOUR_GOOGLE_FORM_LINK"
      color="red"
    />
  );
}
