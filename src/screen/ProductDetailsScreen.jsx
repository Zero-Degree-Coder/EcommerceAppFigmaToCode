import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import { fonts } from "../utils/fonts";
import { useNavigation, useRoute } from "@react-navigation/native";
import { addToCart } from "../utils/helper";
import { CartContext } from "../context/CartContext";

const colorsArray = [
  "#91A1B0",
  "#B11D1D",
  "#1F44A3",
  "#9F632A",
  "#1D752B",
  "#000000",
];

const ProductDetailsScreen = () => {
  const { addToCartItem } = useContext(CartContext);
  const route = useRoute();
  const navigation = useNavigation();
  const product = route.params.item;
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("#B11D1D");
  const imageUrl =
    "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/vulb5bckiruhpzt2v8ec.png";

  const handleAddToCart = () => {
    product.color = selectedColor;
    product.size = selectedSize;
    addToCartItem(product);
    navigation.navigate("CART")
  };
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.coverImage} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.fontText}>{product.title}</Text>
          <Text style={styles.fontText}>${product.price}</Text>
        </View>
        <Text style={[styles.fontText, styles.sizeText]}>Size</Text>
        {/* size container */}
        <View style={styles.sizeContainer}>
          <TouchableOpacity
            style={styles.sizeValueContainer}
            onPress={() => setSelectedSize("S")}
          >
            <Text
              style={[
                styles.sizeValueText,
                selectedSize === "S" && styles.selectedText,
              ]}
            >
              S
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sizeValueContainer}
            onPress={() => setSelectedSize("M")}
          >
            <Text
              style={[
                styles.sizeValueText,
                selectedSize === "M" && styles.selectedText,
              ]}
            >
              M
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sizeValueContainer}
            onPress={() => setSelectedSize("L")}
          >
            <Text
              style={[
                styles.sizeValueText,
                selectedSize === "L" && styles.selectedText,
              ]}
            >
              L
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sizeValueContainer}
            onPress={() => setSelectedSize("XL")}
          >
            <Text
              style={[
                styles.sizeValueText,
                selectedSize === "XL" && styles.selectedText,
              ]}
            >
              XL
            </Text>
          </TouchableOpacity>
        </View>
        {/* color container */}
        <View style={styles.colorContainer}>
          {colorsArray.map((color, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedColor(color)}
              >
                <View
                  style={[
                    styles.borderColorCircle,
                    selectedColor === color && {
                      borderColor: color,
                      borderWidth: 2,
                      borderRadius: 24,
                    },
                  ]}
                >
                  <View
                    style={[styles.colorCircle, { backgroundColor: color }]}
                  ></View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        {/* cart button */}
        <View>
          <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
  },
  imageContainer: {
    height: 420,
    width: "100%",
  },
  coverImage: {
    resizeMode: "cover",
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fontText: {
    fontSize: 20,
    fontFamily: fonts.regular,
    fontWeight: "700",
    color: "#444444",
    color: "#444444",
  },
  sizeText: {
    marginTop: 20,
  },
  sizeContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
  },
  sizeValueContainer: {
    backgroundColor: "#FFFFFF",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  sizeValueText: {
    fontSize: 18,
    fontFamily: fonts.regular,
    fontWeight: "700",
  },
  selectedText: {
    color: "#E55B5B",
  },
  colorContainer: {
    flexDirection: "row",
  },
  borderColorCircle: {
    height: 48,
    width: 48,
    padding: 5,
    marginHorizontal: 5,
  },
  colorCircle: {
    flex: 1,
    borderRadius: 18,
  },
  button: {
    backgroundColor: "#E96E6E",
    height: 62,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "700",
    fontFamily: fonts.regular,
  },
});
