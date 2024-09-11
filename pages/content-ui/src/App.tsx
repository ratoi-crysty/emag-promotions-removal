import { Button } from '@extension/ui';
import { hidePromoted, useStorage } from '@extension/shared';
import { enabledStorage } from '@extension/storage';
import { useCallback, useEffect } from 'react';

declare const window: Window & {
  test: string;
};

export default function App() {
  const theme = useStorage(enabledStorage);

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
      <Button theme={theme} onClick={removePromotions}>
        Remove promotions
      </Button>
    </div>
  );
}
