export default function LyneButton() {
  return (
    <lyne-link
      href-value="https://github.com/lyne-design-system/lyne-components"
      icon="chevron-small-right-small"
      icon-flip=""
      icon-placement="end"
      id-value=""
      text="Travelcards &amp; tickets"
      text-size="xs"
      variant="positive"
      suppressHydrationWarning={true}
    >
      <span slot="icon">
        <svg
          width="24"
          height="24"
          viewBox="0,0,24,24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m10.6776,7.74045,3.949,3.90395.3597.3557-.3597.3555-3.95,3.904-.70297-.7112L13.5639,12,9.97459,8.4516l.70301-.71115z"
          ></path>
        </svg>
      </span>
    </lyne-link>
  );
};