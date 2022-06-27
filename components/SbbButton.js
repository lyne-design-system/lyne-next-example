import { useEffect } from 'react';

export default function SbbButton() {
  let button;

  useEffect(() => {
    button.addEventListener("sbb-button_click", (data) => {

      alert(`button click received with id: ${data.detail}`);

    });
  })

  return (
    <sbb-button
      ref={elem => button = elem}
      suppressHydrationWarning={true}
      event-id="sample-button"
      variant="primary"
      size="l"
      label="Button"
      name="sample-name"
      value="sample-value"
    />
  );
};
