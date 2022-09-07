import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Categories = (props) => {
  return (
    <>
      <ScrollView
        bounces={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        <TouchableOpacity
          onPress={() => {
            props.categoryFilter("All"), props.setActive(-1);
          }}
          style={props.active == -1 ? styles.badgeActive : styles.badgeInactive}
        >
          <Text style={styles.text}>All</Text>
        </TouchableOpacity>
        {props.categories?.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={
              props.active == props.categories.indexOf(item)
                ? styles.badgeActive
                : styles.badgeInactive
            }
            onPress={() => {
              props.categoryFilter(item._id),
                props.setActive(props.categories.indexOf(item));
            }}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    elevation: 5,
    marginTop: 15,
    flex: 1,
  },
  badgeActive: {
    backgroundColor: "#03bafc",
    padding: 6,
    margin: 5,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 10,
  },
  badgeInactive: {
    backgroundColor: "#a0e1eb",
    padding: 6,
    margin: 5,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
