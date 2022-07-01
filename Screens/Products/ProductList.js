import { StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'





var {width} = Dimensions.get('window');



const ProductList = (props) => {
  const {item}=props;
  return (
    <View >
        <TouchableOpacity 
          onPress={()=>
            props.navigation.navigate("Product Detail", {item:item})
          }
        >
            <View style={{width:width/2,backgroundColor:'grainsboro',}}>
                <ProductCard {...item}/>
            </View>
        </TouchableOpacity>
    </View> 
  )
}

export default ProductList

const styles = StyleSheet.create({})