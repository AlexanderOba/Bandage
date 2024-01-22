export interface RootState {
    product: {
      product: []; 
      // ... other fields
    };
    // ... other slices of state
  }
  

  export interface ProductState {
    product: Array<any>; 
    productDetails: any; 
    loading: boolean;
    error: string | null;
  }
  