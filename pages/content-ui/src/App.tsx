import { Button } from '@extension/ui';
import { useStorage } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';
import { useCallback } from 'react';

export default function App() {
  const theme = useStorage(exampleThemeStorage);

  const removePromotions = useCallback(() => {}, []);

  return (
    <div className="flex items-center justify-between gap-2 bg-blue-100 rounded py-1 px-2">
      <Button theme={theme} onClick={removePromotions}>
        Remove promotions
      </Button>
    </div>
  );
}
