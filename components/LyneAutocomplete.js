export default function LyneButton() {
  return (
    <lyne-autocomplete
      suppressHydrationWarning={true}
      autocomplete-id="sample-id"
      event-id="sample-id"
      input-borderless=""
      input-debouncetimeout="200"
      input-label="Von"
      input-label-visible=""
      input-name="sample-name"
      input-placeholder="sample placeholder"
      items='[{"text": "Bern"},{"text": "Bern, Hauptbahnhof"},{"text": "Bern (Marzilibahn)"},{"text": "Bern Marzili"},{"text": "Bern Matte"},{"text": "Bern Münsterplattform"},{"text": "Bern Europaplatz, Bahnhof"},{"text": "Bern, Bahnhof"},{"text": "Bern, Brunnadernstrasse"},{"text": "Bern, Bärenplatz"}]'
      min-chars="0"
    ></lyne-autocomplete>
  );
};
