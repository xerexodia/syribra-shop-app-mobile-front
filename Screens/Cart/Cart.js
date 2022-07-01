import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React from "react";
//import { SwipeListView } from "react-native-swipe-list-view";
//import Icon from 'react-native-vector-icons/fontAwesome'
import CartItem from "./CartItem";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/cartActions";
import Icon from "react-native-vector-icons/FontAwesome"



const Cart = (props) => {
  var total = 0;
  props.cartItems.forEach(cart => {
      return (total += cart.product.price)
  });
  return (
    <>
      {props.cartItems.length ? (
          <View style={{flex:1}}>
          <Text style={{ alignSelf: "center", fontSize: 35, }}>Cart</Text>
        <ScrollView >
          {props.cartItems.map((data) => {
            return (
              <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'white',justifyContent:'space-between'}}>
                <CartItem item={data}/>
                <Icon
                        name='trash'
                        style={{backgroundColor:'red',borderRadius:70,color:'white',margin:3,padding:3}}
                        size={25}
                        onPress={
                          ()=>{
                            props.removeFromCart(data)
                          }
                        }
                />
              </View>
            );
          })}
        </ScrollView>
          <View style={styles.bottom}>
            <View>
              <Text style={{ fontSize: 15, margin: 20, color: "red" }}>
                $ {total}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ marginRight: 20 }}>
                <Button title="Clear" 
                    onPress={()=>props.clearCart()}
                />
              </View>
              <View style={{ marginRight: 8 }}>
                <Button
                  title="Checkout"
                  onPress={() => {
                    props.navigation.navigate('Checkout')
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.empty}>
          <Text>Looks Like your cart is empty</Text>
          <Text>Your cart is hangry feel free to add some products!</Text>
        </View>
      )}
      
    </>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};
const mapDispatchToProps=(dispatch)=>{
    return{
        clearCart:()=>dispatch(actions.clearCart()),
        removeFromCart:(item)=> dispatch(actions.removeFromCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
  empty: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  bottom: {
    width: "100%",
    flexDirection: "row",
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    elevation: 20,
    justifyContent: "space-between",
  },
});
