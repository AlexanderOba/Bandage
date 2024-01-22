import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../services/config";
import { ProductState } from "@/types/Product";



const initialState: ProductState = {
  product: [],
  productDetails: {},
  loading: false,
  error: null,
};


export const getProducts = createAsyncThunk(
  "bandage/Products",
  async () => {
    try {
      const response = await axiosInstance.get("products");
      return response?.data?.products;
    } catch (error: any) {
      console.log(error?.response)
  }
}
);


export const getProductsDetailsById = createAsyncThunk(
  "bandage/productDetails",
  async (id: string, thunkAPI) => {
      try {
          const response = await axiosInstance.get(`products/${id}`);
          console.log(response.data)
          return response.data;
      } catch (error: any) {
          const errorMessage = error.message;
          return thunkAPI.rejectWithValue(errorMessage);
      }
  }
);


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
        console.log(action.payload)
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getProductsDetailsById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsDetailsById.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetails = action.payload;
        console.log(action.payload)
      })
      .addCase(getProductsDetailsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  },
});

export default productSlice.reducer;