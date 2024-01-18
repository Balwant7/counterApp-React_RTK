import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state, action) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload);
    },
    subs: (state, action) => {
      state.counterVal -= Number(action.payload);
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const counterAction = counterSlice.actions;

// const INITIAL_VALUE = {
//     counter: 0,
//   };
// const counterReducer = (store = INITIAL_VALUE, action) => {
//   const newStore = store;
//   if (action.type === "INCREMNET") {
//     return { counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { counter: store.counter - 1 };
//   } else if (action.type === "CUSTOMADD") {
//     return { counter: store.counter + Number(action.payload.number) };
//   } else if (action.type === "CUSTOMSUBS") {
//     return { counter: store.counter - Number(action.payload.number) };
//   }
//   return newStore;
// };

// subscription are now going to perform by the componets

// const counterSubscribe = () => {
//   const counterState = counterStore.getState();
//   console.log(counterState);
// };

// counterStore.subscribe(counterSubscribe);

export default counterStore;
