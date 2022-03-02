export default function LyneButton() {
  return (
    <lyne-timetable suppressHydrationWarning={true}>
      <lyne-timetable-row-column-headers
        config='["Short Infos","Summary","","Platfom","Occupancy Forecast","Travel hints","Park and Rail","Duration","Real time information"]'
        role="row"
      ></lyne-timetable-row-column-headers>
      <lyne-timetable-row-day-change
        config='{"colSpan":9,"date":"02.12.2021","day":"Thursday","dayChange":false,"hidden":true}'
        role="row"
      ></lyne-timetable-row-day-change>
      <lyne-timetable-row
        config='{"cusHim":{"cusHimItems":[{"icon":"alternative","text":"Alternative connection due to the current service situation. Please check again for any changes shortly before starting your journey."},{"icon":"delay","text":"Connection delayed."}]},"details":{"arrivalTime":{"time":"15:34","type":"arrival"},"arrivalWalk":{"distance":0,"duration":0,"type":"arrival"},"departureTime":{"time":"15:14","type":"departure"},"departureWalk":{"distance":178,"duration":2,"type":"departure"},"pearlChain":{"legs":{"legs":[{"cancellation":false,"duration":25},{"cancellation":false,"duration":10},{"cancellation":false,"duration":50},{"cancellation":false,"duration":15}]},"status":"future"},"transportationNumber":{"direction":"Direction Romanshorn","marketingName":"","meansOfTransport":{"picto":"transportation-zug-right","text":"Train"},"product":{"icon":"ic-8","text":"IC 8"}}},"duration":{"hours":0,"minutes":37},"occupancy":{"occupancyItems":[{"class":"1","icon":"utilization-low","occupancy":"low"},{"class":"2","icon":"utilization-medium","occupancy":"medium"}]},"parkAndRail":{"distance":178},"platform":{"platform":"13A/C"},"rowHeader":{"departure":{"direction":"Direction Romanshorn","productMarketingName":"","productText":"IC 8","time":"15:14"}},"travelHints":{"travelHintsItems":[{"icon":"sa-sb","text":"Description what sa-sb means..."},{"icon":"sa-rr","text":"Description what sa-rr means..."},{"icon":"sa-zm","text":"Description what sa-zm means..."}]}}'
        role="row"
      ></lyne-timetable-row>
      <lyne-timetable-row
        config='{"cusHim":{"cusHimItems":[{"icon":"alternative","text":"Alternative connection due to the current service situation. Please check again for any changes shortly before starting your journey."},{"icon":"delay","text":"Connection delayed."},{"icon":"disruption","text":"Disruption!"}]},"details":{"arrivalTime":{"time":"16:34","type":"arrival"},"arrivalWalk":{"distance":288,"duration":9,"type":"arrival"},"departureTime":{"time":"16:14","type":"departure"},"departureWalk":{"distance":0,"duration":0,"type":"departure"},"pearlChain":{"legs":{"legs":[{"cancellation":false,"duration":25},{"cancellation":false,"duration":75}]},"status":"future"},"transportationNumber":{"direction":"Direction Riederalp West","marketingName":"Aletsch Express","meansOfTransport":{"picto":"transportation-luftseilbahn-right","text":"Cable Car"},"product":{"icon":"","text":"GB 155"}}},"duration":{"hours":1,"minutes":1},"occupancy":{"occupancyItems":[{"class":"1","icon":"utilization-low","occupancy":"low"},{"class":"2","icon":"utilization-high","occupancy":"high"}]},"parkAndRail":{"distance":178},"platform":{"platform":"5"},"rowHeader":{"departure":{"direction":"Direction Riederalp West","productMarketingName":"Aletsch Express","productText":"GB 155","time":"16:14"}},"travelHints":{"travelHintsItems":[{"icon":"sa-sb","text":"Description what sa-sb means..."},{"icon":"sa-rr","text":"Description what sa-rr means..."},{"icon":"sa-zm","text":"Description what sa-zm means..."}]}}'
        role="row"
      ></lyne-timetable-row>
      <lyne-timetable-row
        config='{"cusHim":{"cusHimItems":[]},"details":{"arrivalTime":{"time":"16:34","type":"arrival"},"arrivalWalk":{"distance":288,"duration":9,"type":"arrival"},"departureTime":{"time":"16:14","type":"departure"},"departureWalk":{"distance":0,"duration":0,"type":"departure"},"pearlChain":{"legs":{"legs":[{"cancellation":false,"duration":25},{"cancellation":false,"duration":75}]},"status":"future"},"transportationNumber":{"direction":"Direction Riederalp West","marketingName":"Aletsch Express","meansOfTransport":{"picto":"transportation-luftseilbahn-right","text":"Cable Car"},"product":{"icon":"","text":"GB 155"}}},"duration":{"hours":1,"minutes":1},"occupancy":{"occupancyItems":[{"class":"1","icon":"utilization-low","occupancy":"low"},{"class":"2","icon":"utilization-high","occupancy":"high"}]},"parkAndRail":{"distance":178},"platform":{"platform":"5"},"rowHeader":{"departure":{"direction":"Direction Riederalp West","productMarketingName":"Aletsch Express","productText":"GB 155","time":"16:14"}},"travelHints":{"travelHintsItems":[]}}'
        role="row"
      ></lyne-timetable-row>
      <lyne-timetable-row
        config='{"cusHim":{"cusHimItems":[{"icon":"alternative","text":"Alternative connection due to the current service situation. Please check again for any changes shortly before starting your journey."}]},"details":{"arrivalTime":{"time":"16:34","type":"arrival"},"arrivalWalk":{"distance":288,"duration":9,"type":"arrival"},"departureTime":{"time":"16:14","type":"departure"},"departureWalk":{"distance":0,"duration":0,"type":"departure"},"pearlChain":{"legs":{"legs":[{"cancellation":false,"duration":25},{"cancellation":false,"duration":75}]},"status":"future"},"transportationNumber":{"direction":"Direction Riederalp West","marketingName":"Aletsch Express","meansOfTransport":{"picto":"transportation-luftseilbahn-right","text":"Cable Car"},"product":{"icon":"","text":"GB 155"}}},"duration":{"hours":1,"minutes":1},"occupancy":{"occupancyItems":[{"class":"1","icon":"utilization-low","occupancy":"low"},{"class":"2","icon":"utilization-high","occupancy":"high"}]},"parkAndRail":{"distance":178},"platform":{"platform":"5"},"rowHeader":{"departure":{"direction":"Direction Riederalp West","productMarketingName":"Aletsch Express","productText":"GB 155","time":"16:14"}},"travelHints":{"travelHintsItems":[]}}'
        role="row"
      ></lyne-timetable-row>
      <lyne-timetable-row-day-change
        config='{"colSpan":9,"date":"02.12.2021","day":"Thursday","dayChange":false,"hidden":false}'
        role="row"
      ></lyne-timetable-row-day-change>
      <lyne-timetable-row
        config='{"cusHim":{"cusHimItems":[{"icon":"alternative","text":"Alternative connection due to the current service situation. Please check again for any changes shortly before starting your journey."}]},"details":{"arrivalTime":{"time":"16:34","type":"arrival"},"arrivalWalk":{"distance":288,"duration":9,"type":"arrival"},"departureTime":{"time":"16:14","type":"departure"},"departureWalk":{"distance":0,"duration":0,"type":"departure"},"pearlChain":{"legs":{"legs":[{"cancellation":false,"duration":25},{"cancellation":false,"duration":75}]},"status":"future"},"transportationNumber":{"direction":"Direction Riederalp West","marketingName":"Aletsch Express","meansOfTransport":{"picto":"transportation-luftseilbahn-right","text":"Cable Car"},"product":{"icon":"","text":"GB 155"}}},"duration":{"hours":1,"minutes":1},"occupancy":{"occupancyItems":[{"class":"1","icon":"utilization-low","occupancy":"low"},{"class":"2","icon":"utilization-high","occupancy":"high"}]},"parkAndRail":{"distance":178},"platform":{"platform":"5"},"rowHeader":{"departure":{"direction":"Direction Riederalp West","productMarketingName":"Aletsch Express","productText":"GB 155","time":"16:14"}},"travelHints":{"travelHintsItems":[]}}'
        role="row"
      ></lyne-timetable-row>
    </lyne-timetable>


  );
};
