import '@src/components/popup/popup.css';
import { useStorage, withErrorBoundary, withSuspense } from '@extension/shared';
import type { EnabledStorage } from '@extension/storage';
import { enabledStorage } from '@extension/storage';
import { useCallback } from 'react';
import { Button } from '@src/components/button';

const Popup = () => {
  const logo = 'popup/icon-512.png';
  const enabled: boolean = useStorage<EnabledStorage>(enabledStorage);

  const toggle = useCallback(() => {
    enabledStorage.toggle().catch(console.error);
  }, []);

  return (
    <div className={`App bg-gray-800`}>
      <header className="App-header text-gray-100">
        <img src={chrome.runtime.getURL(logo)} className="App-logo" alt="logo" />
        <h1 className="text-2xl">eMag promotions removal</h1>
        <p>Remove annoying promoted products</p>

        <Button onClick={toggle}>{enabled ? 'Disable' : 'Enable'}</Button>
      </header>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
