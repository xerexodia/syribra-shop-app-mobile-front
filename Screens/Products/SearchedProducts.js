import { StyleSheet, Text, View ,Image,Dimensions} from 'react-native'
import React from 'react'


var {width} = Dimensions.get('window')

const SearchedProducts = (props) => {
    const {productsFiltred} = props
  return (
    <View style={styles.container}>
      {productsFiltred.length>0 ? (
        productsFiltred.map((item)=>(
          <View key={item.name} style={styles.pcontainer} >
            <Image source={{uri:item.image}} resizeMode='contain' style={styles.image}/>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        ))
      ):(
        <Text>Products does'nt exist</Text>
      )}
    </View>
  )
}

export default SearchedProducts

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems:'center',
    borderWidth:2
  },
  pcontainer:{
    width: width/3,
    height:width/2,
    borderWidth:2,
    flexDirection: 'column',
    position: 'relative'
  },
  image:{
        width:width / 2 -20 -10 ,
        height: width / 2 -20 -30,
        backgroundColor:'transparent',
        position:'absolute',
        top:-45,
  }
})