import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { Badge } from 'native-base'
import React from 'react'

const CategoryFilter = (props) => {
  return (
    <ScrollView
        bounce={true}
        horizontal={true}
        style={{backgroundColor:"#f2f2f2"}}
    >
          {
            props.categories.map(item=>(
              <TouchableOpacity
              key={item._id}
                onPress={()=>{
                props.categoryFilter(item._id),props.setActive(props.categories.indexOf(item))
              }}
              >
              <Badge
                style={[styles.center,
                  {margin:5},
                  props.active == props.categories.indexOf(item) ? styles.active : styles.inactive
                ]}
              >
                  <Text style={{color:'white'}}>{item.name}</Text>
              </Badge>
          </TouchableOpacity>
            ))
          }
    </ScrollView>
  )
}

export default CategoryFilter

const styles = StyleSheet.create({
  center:{
    marginTop:7,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20
  },
  active:{
    backgroundColor:'#03bafc'
  },
  inactive:{
    backgroundColor:'#a0e1eb'
  }
})