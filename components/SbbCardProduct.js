export default function SbbCardProduct() {
  return (
    <sbb-card-product
      appearance="primary"
      accessibility-label="The text which gets exposed to screen reader users. The text should reflect all the information which gets passed into the components slots and which is visible in the card, either through text or iconography"
      layout="standard"
      href-value="https://github.com/lyne-design-system/lyne-components"
      suppressHydrationWarning={true}
    >
      <div slot="icon">
        <svg
          width="36"
          height="36"
          viewBox="0,0,36,36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m3.25,6.24951h29.5v6.99999h-.5c-2.2739,0-4,1.7262-4,4,0,2.2739,1.7261,4,4,4h.5v7H3.25V6.24951zm1,1V27.2495h27.5v-5.023c-2.5785-.2395-4.5-2.32-4.5-4.977s1.9215-4.7375,4.5-4.977V7.24951H4.25zm10.9501,8.67479c.3869.2079.8295.3259,1.2999.3259,1.5181,0,2.75-1.2318,2.75-2.75,0-1.5198-1.2321-2.75-2.75-2.75-1.5196,0-2.75,1.2304-2.75,2.75,0,.6876.2524,1.3164.6697,1.7988l-2.6206,3.2764c-.387-.2079-.8293-.3259-1.2991-.3259-1.51986,0-2.75,1.2321-2.75,2.75s1.23014,2.75,2.75,2.75c1.5181,0,2.75-1.2318,2.75-2.75,0-.6877-.2528-1.3167-.6704-1.799l2.6205-3.2762zM14.75,13.5002c0-.9673.7826-1.75,1.75-1.75.9661,0,1.75.7829,1.75,1.75,0,.9659-.7841,1.75-1.75,1.75-.9671,0-1.75-.7839-1.75-1.75zm-4.25,5.7493c-.96714,0-1.75.7839-1.75,1.75s.78286,1.75,1.75,1.75c.9659,0,1.75-.7841,1.75-1.75,0-.9658-.7841-1.75-1.75-1.75zM24.25,7.49951v.4875h1v-.4875h-1zm0,1.4625v.975h1v-.975h-1zm0,1.94999v.975h1v-.975h-1zm0,1.95v.975h1v-.975h-1zm0,1.95v.975h1v-.975h-1zm0,1.95v.975h1v-.975h-1zm0,1.95v.975h1v-.975h-1zm0,1.95v.975h1v-.975h-1zm0,1.95v.975h1v-.975h-1zm0,1.95v.975h1v-.975h-1zM24.25,26.512v.4875h1v-.4875h-1z"
          ></path>
        </svg>
      </div>
      <div slot="category"><span>Sparbillett</span></div>
      <div slot="title">
        <sbb-title level="2" text="GA" visual-level="1"></sbb-title>
        <sbb-journey-header
          destination="Loèche-les-Bains"
          is-round-trip=""
          markup="h2"
          origin="La Chaux de Fonds"
          size="5"
        ></sbb-journey-header>
      </div>
      <div slot="lead">
        <sbb-title
          level="3"
          text="Generalabonnement"
          visual-level="6"
        ></sbb-title>
      </div>
      <div slot="text"><span>2. Klasse, gültig bis 30.11.2021</span></div>
      <div slot="details">
        <sbb-pearl-chain
          legs='{"legs":[{"cancellation":false,"duration":25},{"cancellation":false,"duration":10},{"cancellation":false,"duration":8},{"cancellation":false,"duration":15},{"cancellation":false,"duration":42}]}'
        ></sbb-pearl-chain>
      </div>
      <div slot="card-badge">
        <sbb-card-badge
          is-discount=""
          price="92.50"
          slotgeneric='<span>on <time datetime="2021-11-25">Black Friday</time></span>'
          text="from CHF"
        >
          <span slot="generic">
            <span>
              on
              <time dateTime="2021-11-25">Black Friday</time>
            </span>
          </span>
        </sbb-card-badge>
      </div>
      <div slot="action">
        <sbb-button
          icon="qrcode-small"
          label="Billett"
          variant="secondary"
          visual-button-only=""
        >
          <svg
            width="24"
            height="24"
            viewBox="0,0,24,24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m10,14.0001h4v-4h-4v4zm-.99998,1H15V9.00012H9.00002v5.99998zm1.99998-2h2v-2h-2v2zM6.99902,3.99612H10v-1.001H6.99902v1.001zm0,2.0037v-1h-2v1l1,.003v2h1v-1h2v-1.002H10.999v-1H8.99902v.002h-1v1h-1v-.003zm0,3h-1.999v-2h-1v-1h-1v2h1v1h.999v1h2v-1zm5.00048-3.9966h1v-2h-1v.998h-1v1h1v.002zM20,7.00312h1v-1.001h-1v1.001zm-2,5.00058h1v-1h-1v.998h-2v1h2v-.998zM3.99902,4.00322l2-.008v-1h-3v2.008h1v-1zM18,13.0037v2h1v-1h1v1h1v-2h-3zm-5.0005-8.00048v2h1v-1l3-.002v-1h1v-1h-1v-.998h-1v1.998h-1v-.998h-1v1h-1zM16,7.00372v2h1v-.002h1v-1h-1v-.998h-1zm1,14.00138h1v-2h-1v2zm3-1.0033h-1v1h1v.003h1v-2h-1v.997zm0-14.99858h1v-2h-1v-.002h-2v1h2v1.002zm0,10.00048h-1v2.998h-1v1h2v-1h1v-1h-1v-1.998zm0-2.9996h1v-2.001h-1v2.001zm-3-5.00298h2v-1h-2v1zm2,1.0002v2.00198h1v-.99998l1-.002v-1h-2zM11,21.0021h2v-1.001h-2v1.001zM9.99952,8.00132h.99998v.002h1v-2h-1v.998h-.99998v1zm0,11.00048h-1v1h1v.003h.99998v-2h-.99998v.997zM15,19.0047h-1v2h1v-.003h1v-1h-1v-.997zm-7.00098-4.0029-2,.002v1h1v.998h2v-1h-1v-1zM10,17.0021h2v-1h-2v1zm6-6.001h2v-1h-2v1zM2.99902,18.0011h1v-1h-1v1zm2-5h1.001v-1h-1.001v1zm2-3.99998h1v-1h-1v1zM14,8.00212h1v-1.001h-1v1.001zM3.99902,12.0011h1v-1h-1v1zm-1-1h1V9.00112h-1v1.99998zm0,3.001h1v-2.001h-1v2.001zM4.99902,18.0031h2.001v-1h-2.001v1zm0-4.0013h-1v1l-1,.002v1h2v-2.002zm2,5v.003h-1v1h1v.997h1v-1.998h1v-1h-2v.998zm-3,0h-1v2h1v.003h2v-1h-2v-1.003zm2-4.9977h2v-1h-2v1zm0-2h2v-1h-2v1zM17,17.0021h1v-1h-1v1zm-3-.0003h1v2h2v-1h-1v-1.998h1v-2h-1v1.998l-3,.002v1h-1v2h1v-1h1v-1.002z"
            ></path>
          </svg>
        </sbb-button>
      </div>
    </sbb-card-product>
  );
};
