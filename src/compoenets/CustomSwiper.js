import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import SwiperFlatList from "react-native-swiper-flatlist";
import { CustomPagination } from "./CustomPagination";
import styled from "styled-components/native";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import SearchInput from "./SearchInput";

const { width, height } = Dimensions.get("window");
const data = [
  {
    url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3R5bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Women Black Jacket",
    price: "69.99$",
  },
  {
    url: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0eWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Women Autumn Coat",
    price: "139.49$",
  },
  {
    url: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN0eWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Women Black t-shirt",
    price: "39.49$",
  },
];

const Container = styled.View`
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  overflow: hidden;
`;
const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: 0.1px;
  color: white;
`;
const Price = styled.Text`
  font-size: 22px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: 0.1px;
  color: #46a3fc;
`;
const Recommendations = styled.Text`
  font-size: 18px;
  font-weight: 300;
  color: white;
  opacity: 0.6;
`;
const Details = styled.View`
  padding-left: 20px;
  align-items: flex-start;
  position: absolute;
  bottom: 20px;
`;
const InputContainer = styled.View`
  position: absolute;
  bottom: 200px;
  left: 23px;
  z-index: 2;
`;

const CustomSwiper = () => {
  return (
    <Container>
      <InputContainer>
        <SearchInput />
      </InputContainer>

      <SwiperFlatList
        autoplay
        autoplayDelay={5}
        index={2}
        autoplayLoop
        autoplayInvertDirection
        showPagination
        PaginationComponent={CustomPagination}
      >
        {data.map((item, idx) => (
          <View key={idx}>
            <ImageBackground
              source={{ uri: item.url }}
              resizeMode="cover"
              style={{
                height: height / 2,
                width: width,
              }}
            >
              <Details>
                <Recommendations>Recommendations</Recommendations>
                <Title>{item.title}</Title>
                <Price>{item.price}</Price>
              </Details>
            </ImageBackground>
          </View>
        ))}
      </SwiperFlatList>
    </Container>
  );
};

export default CustomSwiper;
