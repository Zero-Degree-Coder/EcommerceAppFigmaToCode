import AsyncStorage from "@react-native-async-storage/async-storage";

export const addToCart = async (item) => {
  let cartItems = await AsyncStorage.getItem("cart");
  cartItems = cartItems ? JSON.parse(cartItems) : [];

  //   checking items exist in the cart or not
  const existingItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.id === item.id
  );
  if (existingItemIndex === -1) {
    cartItems.push(item);
    await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
  }
};

const deleteItem = async (id) => {
  let cartItems = await AsyncStorage.getItem("cart");
  cartItems = cartItems ? JSON.parse(cartItems) : null;
  if (cartItems) {
    cartItems = cartItems.filter((item) => item.id !== id);
    AsyncStorage.setItem("cart", JSON.stringify(cartItems));
  }
};
