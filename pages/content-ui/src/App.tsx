import { ToggleButton } from '@extension/ui';
import { hidePromoted } from '@extension/shared';
import { useCallback, useEffect } from 'react';

declare const window: Window & {
  test: string;
};

export default function App() {
  const removePromotions = useCallback(() => {
    hidePromoted();
  }, []);

  useEffect(() => {
    console.log('App.effect', window);

    window.test = 'App.effect';

    console.log('App.effect window.test', window.test);
  }, []);

  return (
    <div className="flex items-center justify-between gap-2 bg-blue-100 rounded py-1 px-2">
      <ToggleButton onClick={removePromotions}>Remove promotions</ToggleButton>
    </div>
  );
}
