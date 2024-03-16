import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import Tags from "../components/Tags";
import ProductCard from "../components/ProductCard";
import data from "../data/data.json";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [products, setProducts] = useState(data.products);
  const navigation = useNavigation();
  const handleProductDetails = (item) => {
    navigation.navigate("PRODUCT_DETAILS", { item });
  };
  const toggleFavorite = (item) => {
    setProducts(
      products.map((prod) => {
        if (prod.id === item.id) {
          console.log("prod: ", prod);
          return {
            ...prod,
            isFavorite: !prod.isFavorite,
          };
        }
        return prod;
      })
    );
  };

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      {/* header */}

      {/* <Tags /> */}

      <FlatList
        ListHeaderComponent={
          <>
            <>
              <Header />
              <View>
                <Text style={styles.headingText}>Match Your Style</Text>
                <View style={styles.inputContainer}>
                  <Image
                    source={require("../assets/search.png")}
                    style={styles.searchIcon}
                  />
                  <TextInput placeholder="Search" style={styles.textInput} />
                </View>
              </View>
            </>
            <Tags />
          </>
        }
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            handleProductClick={handleProductDetails}
            toggleFavorite={toggleFavorite}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      <View>
        {/* <Text>HomeScreen</Text>
        <Text>HomeScreen</Text> */}
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
  },

  headingText: {
    fontSize: 28,
    color: "#000000",
    marginVertical: 20,
    fontFamily: "Poppins-Regular",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  searchIcon: {
    height: 26,
    width: 26,
    marginHorizontal: 12,
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
});
