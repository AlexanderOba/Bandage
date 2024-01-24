import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number | string;
  price: number;
  quantity: number;
  totalPrice: number;
  title: string;
  thumbnail: string;
}

interface CartState {
  itemsList: CartItem[];
  totalQuantity: number;
  showCart: boolean;
  changed: boolean;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    changed: false,
  } as CartState,

  reducers: {
    replaceData(state, action: PayloadAction<{ itemsList: CartItem[] }>) {
      state.totalQuantity = action.payload.itemsList.length;
      state.itemsList = action.payload.itemsList;
    },

    addToCart(state, action: PayloadAction<CartItem>) {
      state.changed = true;
      const newItem = action.payload;

      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          thumbnail: newItem.thumbnail,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.changed = true;
      const id = action.payload;

      const existingItem = state.itemsList.find((item) => item.id === id);
      if (existingItem && existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
      } else if (existingItem) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }

      // Update totalQuantity after modifying the itemsList
      state.totalQuantity = state.itemsList.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },

    updateQuantityAndSubtotal(
      state,
      action: PayloadAction<{
        id: number | string;
        quantity: number;
        subtotal: number;
      }>
    ) {
      const { id, quantity, subtotal } = action.payload;
      const itemToUpdate = state.itemsList.find((item) => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        itemToUpdate.totalPrice = subtotal;
      }
    },
    
    setShowCart(state) {
      state.showCart = !state.showCart;
    },

    deleteFromCart(state, action: PayloadAction<number | string>) {
      state.changed = true;
      const id = action.payload;
    
      const deletedItem = state.itemsList.find((item) => item.id === id);
    
      state.itemsList = state.itemsList.filter((item) => item.id !== id);
    
      if (deletedItem) {
        // Check if deletedItem.quantity is less than or equal to totalQuantity before subtracting
        state.totalQuantity = Math.max(0, state.totalQuantity - deletedItem.quantity);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
