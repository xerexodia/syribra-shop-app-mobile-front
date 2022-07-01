import { StyleSheet, Text, View,Image,Button,Dimensions } from 'react-native'
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions'
var {width} = Dimensions.get('window');

const ProductCard = (props) => {
    const {name,price,image,countInStock}=props;
  return (
    <View style={styles.container}>
        <Image style={styles.image}
        resizeMode="contain"
        source={{uri:"http://10.0.2.2:5000/public/upload/1.jpg-1648956829764.jpeg"}}/>
        <View style={styles.card}/>
        <Text style={styles.title}>
            {
                name.length > 15 ? name.substring(0,15-3)+'...': name
            }
        </Text>
        <Text style={styles.price}>
            $ {price}
        </Text>
        {
            countInStock >0 ?(
                <View style={{marginBottom:60}}>
                    <Button 
                        title={'Add'} 
                        color={'green'}
                        onPress={()=>{
                            props.addItemToCart(props)
                        }}
                    />
                </View>
            ) : <Text style={{marginTop:20}}>Currently unaivailable</Text>
        }
    </View>
  )
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addItemToCart:(product)=>
            dispatch(actions.addToCart({quantity:1,product}))
    }
}

export default connect(null,mapDispatchToProps)(ProductCard);

const styles = StyleSheet.create({
    container:{
        marginTop:80,
        width: width-50,
        height: width /1.7,
        elevation:8,
        borderRadius:20,
        alignItems:'center',
        backgroundColor:'white',
        marginLeft:25
        
    },
    image:{
        width: 120,
        height:130,
        backgroundColor:'transparent',
        position:'absolute',
        top:-45,
    },
    card:{
        marginBottom:10,
        height:width/2-20-90,
        backgroundColor:'transparent',
        width: width/2-20-10
    },
    title:{
        fontWeight:'bold',
        fontSize:14,
        textAlign:'center'
    },
    price:{
        fontSize:20,
        color: 'orange',
        marginTop:10

    }
})