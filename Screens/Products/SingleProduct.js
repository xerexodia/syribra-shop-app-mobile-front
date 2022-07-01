import { StyleSheet, Text, View,Image,ScrollView,Button } from 'react-native'
import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions'



const SingleProduct = (props) => {
    const [item,setItem] = useState(props.route.params.item);
    const [availability,setAvailability]=useState('');
  return (
    <View style={styles.container}>
        <ScrollView style={{marginBottom:80,padding:5}}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri:item.image}} resizeMode='contain'/>
            </View>
            <View style={styles.content}>
                <Text style={styles.name}>
                    {item.name}
                </Text>
                <Text style={styles.brand}>
                    {item.brand} 
                </Text>
            </View>
        </ScrollView> 
         <View style={styles.bottomContainer}>
            <Text style={styles.price}>$ {item.price}</Text>
        </View> 
        <View style={styles.add}>
            <Button title='Add' 
                onPress={()=>{
                    props.addItemToCart(item)
            }}/>
        </View>
    </View>
  )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addItemToCart:(product)=>
            dispatch(actions.addToCart({quantity:1,product}))
    }
}

export default connect(null,mapDispatchToProps)(SingleProduct);


const styles = StyleSheet.create({
    container:{
        position: 'relative',
        height:'100%',
        backgroundColor:'white'

    },
    imageContainer:{
        backgroundColor:'white',
        padding: 0,
        margin:0
    },
    image:{
        width: '100%',
        height: 250
    },
    content:{
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    name:{
        fontWeight:'bold',
        marginBottom:20,
        fontSize:27
    },
    brand:{
        fontWeight:'bold',
        marginBottom:20,
        fontSize:17
    },
    bottomContainer:{
        flexDirection:'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor:'white'
    },
    price:{
        fontWeight:'300',
        fontSize:20,
        color: 'red'
    },
    add:{
        width: '20%',
        alignSelf:'flex-end'
    }
    
})
