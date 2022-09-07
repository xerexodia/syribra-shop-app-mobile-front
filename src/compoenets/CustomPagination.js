import React from "react";
import { StyleSheet } from "react-native";
import { Pagination } from "react-native-swiper-flatlist";

const styles = StyleSheet.create({
  paginationContainer: {
    bottom: 0,
  },
  pagination: {
    borderRadius: 40,
    height: 10,
    width: 10,
  },
});

export const CustomPagination = (props) => {
  return (
    <Pagination
      {...props}
      paginationStyle={styles.paginationContainer}
      paginationStyleItem={styles.pagination}
      paginationDefaultColor="white"
      paginationActiveColor="#46a3fc"
    />
  );
};
