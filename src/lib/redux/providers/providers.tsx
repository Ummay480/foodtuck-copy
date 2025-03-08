'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '@/lib/redux/store'; // Default import
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/lib/persistStore';

function Providers({ children }: { children: ReactNode }) {
  // Create the persistor
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default Providers;