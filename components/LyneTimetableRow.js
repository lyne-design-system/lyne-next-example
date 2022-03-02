export default function LyneButton() {
  return (
    <lyne-timetable-row
      config='{"cusHim":{"cusHimItems":[{"icon":"alternative","text":"Alternative connection due to the current service situation. Please check again for any changes shortly before starting your journey."},{"icon":"delay","text":"Connection delayed."}]},"details":{"arrivalTime":{"time":"15:34","type":"arrival"},"arrivalWalk":{"distance":0,"duration":0,"type":"arrival"},"departureTime":{"time":"15:14","type":"departure"},"departureWalk":{"distance":178,"duration":2,"type":"departure"},"pearlChain":{"legs":{"legs":[{"cancellation":false,"duration":25},{"cancellation":false,"duration":10},{"cancellation":false,"duration":50},{"cancellation":false,"duration":15}]},"status":"future"},"transportationNumber":{"direction":"Direction Romanshorn","marketingName":"","meansOfTransport":{"picto":"transportation-zug-right","text":"Train"},"product":{"icon":"ic-8","text":"IC 8"}}},"duration":{"hours":0,"minutes":37},"occupancy":{"occupancyItems":[{"class":"1","icon":"utilization-low","occupancy":"low"},{"class":"2","icon":"utilization-medium","occupancy":"medium"}]},"parkAndRail":{"distance":178},"platform":{"platform":"13A/C"},"rowHeader":{"departure":{"direction":"Direction Romanshorn","productMarketingName":"","productText":"IC 8","time":"15:14"}},"travelHints":{"travelHintsItems":[{"icon":"sa-sb","text":"Description what sa-sb means..."},{"icon":"sa-rr","text":"Description what sa-rr means..."},{"icon":"sa-zm","text":"Description what sa-zm means..."}]}}'
      suppressHydrationWarning={true}
    ></lyne-timetable-row>


  );
};
