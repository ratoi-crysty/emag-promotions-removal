import '@src/SidePanel.css';
import { withErrorBoundary, withSuspense } from '@extension/shared';
import { enabledStorage } from '@extension/storage';
import type { ComponentPropsWithoutRef } from 'react';

const SidePanel = () => {
  return (
    <div className={`App bg-gray-800`}>
      <header className={`App-header text-gray-100`}>
        <img src={chrome.runtime.getURL('side-panel/icon-512.png')} className="App-logo" alt="logo" />
        <p>
          Edit <code>pages/side-panel/src/SidePanel.tsx</code>
        </p>
        <ToggleButton>Toggle theme</ToggleButton>
      </header>
    </div>
  );
};

const ToggleButton = (props: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      className={props.className + ' ' + 'font-bold mt-4 py-1 px-4 rounded shadow hover:scale-105 bg-black text-white'}
      onClick={enabledStorage.toggle}>
      {props.children}
    </button>
  );
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
