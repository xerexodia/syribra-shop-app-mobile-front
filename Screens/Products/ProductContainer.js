import { StyleSheet,ActivityIndicator, Text, View,Image,ScrollView,Dimensions,Keyboard } from 'react-native'
import { TextInput } from 'react-native-paper';
import React,{ useState,useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import ProductList from './ProductList'
import CategoryFilter from "./CategoryFilter";
import axios from 'axios';
import baseUrl from '../../assets/Common/baseUrl';

//import SearchedProducts from './SearchedProducts'
// const data = require('../../assets/data/products.json')
// const productCategories = require("../../assets/data/catagories.json");
var {height,width} = Dimensions


const ProductContainer = (props) => {

    const [products,setProducts] = useState([]);
    const [filtredProducts,setFiltredProducts] = useState([])
    const [search,setSearch]=useState('');
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);
    const[loading,setLoading]=useState(true)


useFocusEffect((
    useCallback(
      () => {
        setSearch('')
    setActive(-1);

    axios
      .get(`${baseUrl}products`)
      .then((res)=>{
        setProducts(res.data);
        setFiltredProducts(res.data);
        setInitialState(res.data);
        setLoading(false)
      })
      .catch(error=>{
        console.log(error)
      })
      axios
      .get(`${baseUrl}categories`)
      .then((res)=>{
        setCategories(res.data);
      })
      .catch(error=>{
        console.log(error)
      })
    return ()=>{
        setProducts([]);
        setSearch('');
        setCategories([]);
        setActive;
        setInitialState();
    }
      },
      [],
    )))
    
    
    const searchProduct = (text) => {
        setFiltredProducts(
                products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase())))
        setSearch(text)
    }
    
  const changeCtg = (ctg) => {
        setFiltredProducts(
            products.filter((i) => i.category._id == ctg),
            setActive(true)
          );
  };

  return (
  <>   
  {loading == false ?(
    <View style={{flex:1}} >
    <View >
        <TextInput 
         label="Search" 
         mode='outlined'
        style={{marginTop:60}}
         left={<TextInput.Icon name="magnify"  />} 
         onChangeText={(text)=>searchProduct(text)} 
         value={search}
        />
    </View>
      

    <ScrollView >
        <CategoryFilter
            categories={categories}
            categoryFilter={changeCtg}
            filtredProducts={filtredProducts}
            active={active}
            setActive={setActive}
          />
        {
            filtredProducts.length>0?(
              <View style={styles.list}>
                {
                  filtredProducts.map(item=>(
                    <ProductList
                      key={item._id}
                      item={item}
                      navigation={props.navigation}
                    />
                  ))
                }
              </View>
            ): (
              <View>
                <Text>no products</Text>
              </View>
            ) 
          }
    </ScrollView>
           
      
    </View>
  ):(
    <View style={{backgroundColor:"grainsboro",alignItems:'center',justifyContent:'center'}}>
      <ActivityIndicator size="large" color='red'/>
    </View>
  )} 
  
    </>     
  )
}

export default ProductContainer

const styles = StyleSheet.create({});