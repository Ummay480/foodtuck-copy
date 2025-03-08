// src/types/react-use-cart.d.ts
declare module 'react-use-cart' {
  export interface CartProviderState {
    clearCart: () => void; // Ensure clearCart is available
    items: any[];          // Ensure items is correctly typed
  }
}
