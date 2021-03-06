export default function LyneAccordion() {
  return (
    <lyne-accordion
      suppressHydrationWarning={true}
      only-one-open=""
      non-white-background
    >
      <lyne-accordion-item
        suppressHydrationWarning={true}
        event-id="id1"
        heading="Accordion Item 1"
        heading-level="2"
        icon=""
      >
        <p slot="content">
          1 Donec sed odio operae, eu vulputate felis rhoncus. Curabitur est gravida
          et libero vitae dictum. Me non paenitet nullum festiviorem excogitasse ad
          hoc.
        </p>
        <p slot="content">
          2 Donec sed odio operae, eu vulputate felis rhoncus. Curabitur est gravida
          et libero vitae dictum. Me non paenitet nullum festiviorem excogitasse ad
          hoc.
        </p>
        <p slot="content">
          3 Quis aute iure reprehenderit in voluptate velit esse. Ab illo tempore, ab
          est sed immemorabili. Non equidem invideo, lit aliquet. Nihilne te nocturnum
          praesidium Palati, nihil urbis vigiliae.
        </p>
        <svg slot="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m17.8436,12.1382-3.99-3.99196-.7072.70693,3.1366,3.13823H5v1h11.287l-3.1413,3.1555.7086.7056,3.99-4.008.3519-.3535-.3526-.3528z"
          ></path>
        </svg>
      </lyne-accordion-item>
      <lyne-accordion-item
        suppressHydrationWarning={true}
        event-id="id2"
        heading="Accordion Item 2"
        heading-level="2"
        icon=""
      >
        <p slot="content">
          1 Donec sed odio operae, eu vulputate felis rhoncus. Curabitur est gravida
          et libero vitae dictum. Me non paenitet nullum festiviorem excogitasse ad
          hoc.
        </p>
        <p slot="content">
          2 Donec sed odio operae, eu vulputate felis rhoncus. Curabitur est gravida
          et libero vitae dictum. Me non paenitet nullum festiviorem excogitasse ad
          hoc.
        </p>
        <p slot="content">
          3 Quis aute iure reprehenderit in voluptate velit esse. Ab illo tempore, ab
          est sed immemorabili. Non equidem invideo, lit aliquet. Nihilne te nocturnum
          praesidium Palati, nihil urbis vigiliae.
        </p>
        <svg slot="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m17.8436,12.1382-3.99-3.99196-.7072.70693,3.1366,3.13823H5v1h11.287l-3.1413,3.1555.7086.7056,3.99-4.008.3519-.3535-.3526-.3528z"
          ></path>
        </svg>
      </lyne-accordion-item>
    </lyne-accordion>
  );
};
