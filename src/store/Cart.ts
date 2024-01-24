import { axiosInstance } from '@/services/config';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isLoading: boolean;
  successMessage: string | null;
  errorMessage: string | null;
}

const initialState: CartState = {
  items: [],
  isLoading: false,
  successMessage: null,
  errorMessage: null,
};

export const addProductToCart = createAsyncThunk(
  'cart/addProductToCart',
  async ({ userId, products }: { userId: number; products: CartItem[] }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`carts/add`, {
        userId,
        products,
      });
      console.log(response.data)
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error.message;
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProductToCart.pending, (state) => {
        state.isLoading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(addProductToCart.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.successMessage = action.payload;
        console.log(action.payload)
      })
      .addCase(addProductToCart.rejected, (state, action: any) => {
        state.isLoading = false;
        state.errorMessage = action.error.message || 'Failed to add product';
      });
  },
});

export default cartSlice.reducer;