export default function SbbLinkList() {
  return (
    <sbb-link-list
      list-direction="vertical"
      textsize="s"
      title-level="2"
      title-text="Help &amp; Contact"
      variant="positive"
      suppressHydrationWarning={true}
    >
      <li className="link-list__item" slot="link-list__item">
        <sbb-link
          href-value="https://www.sbb.ch/de/hilfe-und-kontakt/erstattung-entschaedigung/rueckerstattung-von-billetten.html"
          text="Rückerstattungen"
          text-size="s"
          variant="positive"
        ></sbb-link>
      </li>
      <li className="link-list__item" slot="link-list__item">
        <sbb-link
          href-value="https://www.sbb.ch/de/hilfe-und-kontakt/erstattung-entschaedigung/rueckerstattung-von-billetten.html"
          text="Fundbüro"
          text-size="s"
          variant="positive"
        ></sbb-link>
      </li>
      <li className="link-list__item" slot="link-list__item">
        <sbb-link
          href-value="https://www.sbb.ch/de/hilfe-und-kontakt/erstattung-entschaedigung/rueckerstattung-von-billetten.html"
          text="Beschwerden"
          text-size="s"
          variant="positive"
        ></sbb-link>
      </li>
      <li className="link-list__item" slot="link-list__item">
        <sbb-link
          href-value="https://www.sbb.ch/de/hilfe-und-kontakt/erstattung-entschaedigung/rueckerstattung-von-billetten.html"
          text="Lob aussprechen"
          text-size="s"
          variant="positive"
        ></sbb-link>
      </li>
      <li className="link-list__item" slot="link-list__item">
        <sbb-link
          href-value="https://www.sbb.ch/de/hilfe-und-kontakt/erstattung-entschaedigung/rueckerstattung-von-billetten.html"
          text="Sachbeschädigung melden"
          text-size="s"
          variant="positive"
        ></sbb-link>
      </li>
    </sbb-link-list>
  );
};
