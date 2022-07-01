import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState} from 'react'

const CartItem = (props) => {
    const data = props.item;
    const [quantity,setQuantity]=useState(props.item.quantity)
  return (
    <View style={styles.list} key={Math.random()}>
                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    marginLeft: 15,
                  }}
                >
                  <View>
                    <Image
                      source={{ uri: data.product.image }}
                      style={{ width: 60, height: 60 }}
                    />
                  </View>

                  <View>
                    <Text style={{ marginLeft: 5, fontWeight: "bold" }}>
                      {data.product.name}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={{ marginRight: 3, color: "red" }}>
                    $ {data.product.price}
                  </Text>
                </View>
              </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    list: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
})