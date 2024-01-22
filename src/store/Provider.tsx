'use client';
import { Provider } from 'react-redux'
import { persistor, store } from '.'
import { PersistGate } from 'redux-persist/integration/react'
import { ReactNode } from 'react';


interface ProvidersProps {
  children: ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }: ProvidersProps) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </>
  )
}
