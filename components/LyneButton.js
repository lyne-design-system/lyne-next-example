import { useEffect } from 'react';

export default function LyneButton() {
  let button;

  useEffect(() => {
    button.addEventListener("lyne-button_click", (data) => {

      console.log(`button click received with id: ${data.detail}`);

    });
  })

  return (
    <lyne-button
      ref={elem => button = elem}
      suppressHydrationWarning={true}
      event-id="sample-button"
      variant="primary"
      size="large"
      label="Button"
      name="sample-name"
      value="sample-value"
    />
  );
};
