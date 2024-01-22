
export interface RootState {
  product: {
    product: [];
    // ... other fields
  };
}

export interface ProductState {
  product: Array<any>;
  productDetails: any;
  loading: boolean;
  error: string | null;
}

export interface StarRatingType {
  ratings: number
}
