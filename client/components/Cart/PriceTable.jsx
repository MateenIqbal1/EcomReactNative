import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const PriceTable = ({ price, title }) => {
  // Conditionally apply styles to both title and price when title is "Grand Total"
  const titleStyle = title === "Grand Total" ? styles.grandTotalTitle : styles.title;
  const priceTextStyle = title === "Grand Total" ? styles.grandTotalPrice : styles.price;

  return (
    <View style={styles.container}>
      <Text style={titleStyle}>{title}</Text>
      <Text style={priceTextStyle}>{price} $</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: 'black', // Default color for title
  },
  price: {
    fontSize: 16,
    color: 'black', // Default color for price
  },
  grandTotalTitle: {
    fontSize: 16,
    color: '#008080', // Teal color for Grand Total title
    fontWeight: '700', // Bold weight for Grand Total title
  },
  grandTotalPrice: {
    fontSize: 16,
    color: '#008080',  // Special color for Grand Total price
    fontWeight: '700',  // Bold weight for Grand Total price
  },
});

export default PriceTable;
