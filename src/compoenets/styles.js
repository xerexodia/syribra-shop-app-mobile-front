import styled from "styled-components/native";

export const colors = {
  primary: "#ffffff",
  secondary: "#e5e7eb",
  tertiary: "#1f2937",
  darklight: "#9ca3af",
  brand: "#46a3fc",
  green: "#108981",
  red: "#ef4444",
};

export const Title = styled.Text`
  font-size: 26px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: 0.1px;
  padding: 10px;
`;
export const Circle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${(props) => props.colour};
  padding-left: 9px;
`;
export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  width: 160px;
  background-color: ${colors.brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 60px;

  ${(props) =>
    props.sign == true &&
    `
        background-color:${colors.green}
    `}
`;
export const ButtonText = styled.Text`
  color: ${colors.primary};
  font-size: 18px;
`;
export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: ${(props) => (props.type == "Succès" ? colors.green : colors.red)};
`;
export const Line = styled.View`
  height: 1px;
  width: 90%;
  background-color: ${colors.darklight};
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: center;
`;
export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;
export const ExtreText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${colors.tertiary};
  font-size: 15px;
`;
export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
export const TextLinkContent = styled.Text`
  color: ${colors.brand};
  font-size: 15px;
  padding-left: 8px;
`;
