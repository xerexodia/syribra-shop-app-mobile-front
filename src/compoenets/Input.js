import {
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  View,
  Dimensions,
} from "react-native";
import { Octicons, Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const Input = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <View style={styles.leftIcon}>
        <Octicons name={icon} size={30} color="#46a3fc" />
      </View>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...props} style={styles.textInput} />
      {isPassword && (
        <Pressable
          style={styles.rightIcon}
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons
            size={30}
            color="#46a3fc"
            name={hidePassword ? "md-eye-off" : "md-eye"}
          />
        </Pressable>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    width: width / 1.2,
    backgroundColor: "#ddd",
    padding: 15,
    paddingLeft: 55,
    paddingRight: 55,
    borderRadius: 5,
    fontSize: 16,
    height: 60,
    marginTop: 3,
    marginBottom: 10,
    color: "#1f2937",
  },
  label: {
    color: "#1f2937",
    fontSize: 13,
    textAlign: "left",
  },
  leftIcon: {
    position: "absolute",
    left: 15,
    top: 35,
    zIndex: 1,
  },
  rightIcon: {
    position: "absolute",
    right: 15,
    top: 35,
    zIndex: 1,
  },
});
