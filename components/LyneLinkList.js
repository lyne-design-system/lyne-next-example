export default function LyneButton() {
  return (
    <lyne-link-list
      list-direction="vertical"
      textsize="s"
      title-level="2"
      title-text="Help &amp; Contact"
      variant="negative"
      suppressHydrationWarning={true}
    >
      <li className="link-list__item" slot="link-list__item">
        <lyne-link
          href-value="https://www.sbb.ch/de/hilfe-und-kontakt/erstattung-entschaedigung/rueckerstattung-von-billetten.html"
          text="Rückerstattungen"
          text-size="s"
          variant="negative"
        ></lyne-link>
      </li>
      <li className="link-list__item" slot="link-list__item">
        <lyne-link
          href-value="https://www.sbb.ch/de/hilfe-und-kontakt/erstattung-entschaedigung/rueckerstattung-von-billetten.html"
          text="Fundbüro"
          text-size="s"
          variant="negative"
        ></lyne-link>
      </li>
      <li className="link-list__item" slot="link-list__item">
        <lyne-link
          href-value="https://www.sbb.ch/de/hilfe-und-kontakt/erstattung-entschaedigung/rueckerstattung-von-billetten.html"
          text="Beschwerden"
          text-size="s"
          variant="negative"
        ></lyne-link>
      </li>
      <li className="link-list__item" slot="link-list__item">
        <lyne-link
          href-value="https://www.sbb.ch/de/hilfe-und-kontakt/erstattung-entschaedigung/rueckerstattung-von-billetten.html"
          text="Lob aussprechen"
          text-size="s"
          variant="negative"
        ></lyne-link>
      </li>
      <li className="link-list__item" slot="link-list__item">
        <lyne-link
          href-value="https://www.sbb.ch/de/hilfe-und-kontakt/erstattung-entschaedigung/rueckerstattung-von-billetten.html"
          text="Sachbeschädigung melden"
          text-size="s"
          variant="negative"
        ></lyne-link>
      </li>
    </lyne-link-list>
  );
};
