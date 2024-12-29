import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const OrderItem = ({ order }) => {
    return (
        <View style={styles.container}>
            <View style={styles.orderInfo}>
                <Text>
                    Order Id: <Text style={styles.dynamicText}>{order._id}</Text>
                </Text>
                <Text>
                    Date: <Text style={styles.dynamicText}>{order.date}</Text>
                </Text>
            </View>
            <Text>
                Product:                                                       <Text style={styles.dynamicText}>{order.productInfo.name}</Text>
            </Text>
            <Text>
                Price:                                                                        <Text style={styles.dynamicText}>{order.productInfo.price}</Text>
            </Text>
            <Text>
                Quantity:                                                                       <Text style={styles.dynamicText}>{order.productInfo.qty}</Text>
            </Text>
            <Text>
                Total Amount:                                                    <Text style={styles.dynamicText}>{order.totalAmount}</Text> $
            </Text>
            <View style={styles.status}>
                <Text>
                    Order Status:                                              <Text style={styles.dynamicText}>{order.status}</Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#B0E0E6',
        margin: 20,
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
    },
    orderInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'black',
        paddingBottom: 5,
    },
    status: {
        borderTopWidth: 1,
        borderColor: 'black',
        padding: 3,
    },
    dynamicText: {
        color: '#8000000', // OrangeRed color for dynamic data
        fontWeight: 'bold',
        // Bold font weight
    },
});

export default OrderItem;
